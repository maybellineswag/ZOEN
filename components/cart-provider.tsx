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

  // Add Snipcart event listeners when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize cart from Snipcart when it's ready
      document.addEventListener('snipcart.ready', () => {
        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.added', (item: any) => {
          const product: Product = {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image,
            category: item.categories?.[0] || '',
            fabric: item.customFields?.fabric
          }
          addToCart(product, item.quantity)
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.removed', (item: any) => {
          removeFromCart(item.id)
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.updated', (item: any) => {
          updateQuantity(item.id, item.quantity)
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('cart.ready', async (cart: any) => {
          // Clear our cart first
          setCartItems([])
          
          // @ts-ignore - Snipcart types not available
          const items = await window.Snipcart.store.getState()?.cart?.items
          
          if (items) {
            items.forEach((item: any) => {
              const product: Product = {
                id: item.id,
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image,
                category: item.categories?.[0] || '',
                fabric: item.customFields?.fabric
              }
              addToCart(product, item.quantity)
            })
          }
        })
      })
    }
  }, []) // Empty dependency array since we only want to run this once

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [...prevItems, { product, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCartItems((prevItems) => prevItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
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
