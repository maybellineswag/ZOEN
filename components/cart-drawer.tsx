"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open cart">
          <ShoppingBag className="h-5 w-5" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              Add some products to your cart to see them here.
            </p>
            <Button asChild className="mt-6" onClick={() => setIsOpen(false)}>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6">
              <ul className="divide-y divide-border">
                {cartItems.map((item) => (
                  <li key={item.product.id} className="flex py-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">
                          <Link href={`/product/${item.product.id}`} onClick={() => setIsOpen(false)}>
                            {item.product.name}
                          </Link>
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                        {item.product.fabric && `${item.product.fabric}`}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border py-4">
              <div className="flex justify-between">
                <p className="text-sm">Subtotal</p>
                <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
              <Button className="mt-4 w-full">Checkout</Button>
              <Button variant="outline" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
