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
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Function to sync cart with Snipcart
  const syncCartWithSnipcart = async () => {
    try {
      // @ts-ignore - Snipcart types not available
      const snipcartState = window.Snipcart.store.getState()
      const items = snipcartState?.cart?.items || []
      
      if (!Array.isArray(items)) {
        console.warn('Snipcart items is not an array:', items)
        setCartItems([])
        return
      }

      const newCartItems = items.map((item: any) => ({
        product: {
          id: item.id || '',
          name: item.name || '',
          description: item.description || '',
          price: Number(item.price) || 0,
          image: item.image || '',
          category: item.categories?.[0] || '',
          fabric: item.customFields?.fabric || ''
        },
        quantity: Number(item.quantity) || 0
      }))
      
      setCartItems(newCartItems)
    } catch (error) {
      console.error('Error syncing cart with Snipcart:', error)
      setCartItems([])
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      const handleSnipcartReady = () => {
        // Initial sync
        syncCartWithSnipcart()

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.added', async () => {
          await syncCartWithSnipcart()
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.removed', async () => {
          await syncCartWithSnipcart()
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('item.updated', async () => {
          await syncCartWithSnipcart()
        })

        // @ts-ignore - Snipcart types not available
        window.Snipcart.events.on('cart.ready', async () => {
          await syncCartWithSnipcart()
        })
      }

      document.addEventListener('snipcart.ready', handleSnipcartReady)
      setIsInitialized(true)

      return () => {
        document.removeEventListener('snipcart.ready', handleSnipcartReady)
      }
    }
  }, [isInitialized])

  const addToCart = (product: Product, quantity = 1) => {
    // Let Snipcart handle the add to cart
    // Our local state will be updated through the item.added event
  }

  const removeFromCart = (productId: string) => {
    // Let Snipcart handle the removal
    // Our local state will be updated through the item.removed event
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    // Let Snipcart handle the quantity update
    // Our local state will be updated through the item.updated event
  }

  const clearCart = () => {
    try {
      // @ts-ignore - Snipcart types not available
      window.Snipcart.api.cart.clear()
      setCartItems([])
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = Number(item.product.price)
      const itemQuantity = Number(item.quantity)
      return total + (itemPrice * itemQuantity)
    }, 0)
  }

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      getTotalPrice 
    }}>
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
