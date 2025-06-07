"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  fabric?: string
}

interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      document.addEventListener('snipcart.ready', () => {
        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.added', (evt: any) => {
          // Don't update our cart state when items are added through Snipcart
          // This prevents double-counting
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.removed', (evt: any) => {
          const productId = evt.item.id
          setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId))
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.updated', (evt: any) => {
          const productId = evt.item.id
          const quantity = evt.item.quantity
          setCartItems(prevItems => 
            prevItems.map(item => 
              item.product.id === productId 
                ? { ...item, quantity } 
                : item
            )
          )
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('cart.ready', async () => {
          // @ts-ignore - Snipcart types not available
          const items = await window.Snipcart.store.getState()?.cart?.items || []
          
          const newCartItems = items.map((item: any) => ({
            product: {
              id: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
              image: item.image,
              category: item.categories?.[0] || '',
              fabric: item.customFields?.fabric
            },
            quantity: item.quantity
          }))
          
          setCartItems(newCartItems)
        })
      })
      setIsInitialized(true)
    }
  }, [isInitialized])

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id)
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      return [...prevItems, { product, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCartItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
