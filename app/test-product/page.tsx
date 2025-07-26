'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Minus, Plus, Heart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { testProduct } from "@/lib/products"

export default function TestProductPage() {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fabricOptions = [
    { id: "test", name: "Test Fabric", color: "#f5f0e8" },
  ]

  const handleAddToCart = () => {
    addToCart(testProduct, quantity)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-8 md:py-12">
      <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-lg font-semibold text-yellow-800 mb-2">🧪 Test Product</h2>
        <p className="text-yellow-700 text-sm">
          This is a test product for payment verification. Perfect for testing the checkout process without spending much money.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="md:sticky md:top-24">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={testProduct.image || "/placeholder.svg"}
              alt={testProduct.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div>
            <h1 className="text-3xl font-medium">{testProduct.name}</h1>
            <p className="mt-2 text-xl text-green-600 font-bold">${testProduct.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground">{testProduct.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Fabric</h3>
              <div className="mt-2">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: fabricOptions[0].color }}
                  ></div>
                  <span className="text-sm">{fabricOptions[0].name}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quantity</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={increaseQuantity} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 snipcart-add-item py-6 sm:py-4 text-base bg-green-600 hover:bg-green-700"
              data-item-id={testProduct.id}
              data-item-price={testProduct.price}
              data-item-description={testProduct.description}
              data-item-image={testProduct.image || "/placeholder.svg"}
              data-item-name={testProduct.name}
              data-item-url={`/test-product`}
              data-item-quantity={quantity}
            >
              🧪 Test Purchase - ${(testProduct.price * quantity).toFixed(2)}
            </Button>
            <Button variant="outline" size="icon" aria-label="Add to wishlist">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Debug button to test if page is working */}
          <div className="mt-4">
            <Button 
              variant="outline" 
              onClick={() => {
                alert('Page is working! Snipcart should handle the purchase.')
                console.log('Test button clicked')
              }}
              className="w-full"
            >
              🔧 Debug: Test if page works
            </Button>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 pt-4">
              <h4 className="font-medium">Test Product Details</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>This is a test product for payment verification</li>
                <li>Perfect for testing checkout process</li>
                <li>Low cost for safe testing</li>
                <li>Will not be shipped</li>
                <li>For development purposes only</li>
              </ul>
            </TabsContent>
            <TabsContent value="care" className="space-y-4 pt-4">
              <h4 className="font-medium">Care Instructions</h4>
              <p className="text-sm text-muted-foreground">
                This is a test product and does not require care instructions.
              </p>
            </TabsContent>
            <TabsContent value="shipping" className="space-y-4 pt-4">
              <h4 className="font-medium">Shipping Information</h4>
              <p className="text-sm text-muted-foreground">
                This is a test product and will not be shipped. It's designed for payment testing only.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 