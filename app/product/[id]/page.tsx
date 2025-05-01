"use client"

import { useState, useEffect, use } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Minus, Plus, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FabricSwitcher from "@/components/fabric-switcher"
import { useCart } from "@/components/cart-provider"
import { getProductById } from "@/lib/products"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = getProductById(id)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!product) {
    notFound()
  }

  const fabricOptions = [
    { id: "linen", name: "Linen", color: "#f5f0e8" },
    { id: "cotton", name: "Cotton", color: "#e8e8e0" },
    { id: "velvet", name: "Velvet", color: "#d8c9b6" },
    { id: "wool", name: "Wool", color: "#d2c5b8" },
  ]

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="md:sticky md:top-24">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-medium">{product.name}</h1>
            <p className="mt-2 text-xl">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          {product.fabric && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Fabric</h3>
                <div className="mt-2">
                  <FabricSwitcher options={fabricOptions} defaultOption={product.fabric} />
                </div>
              </div>
            </div>
          )}

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
              className="flex-1 snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-description={product.description}
              data-item-image={product.image || "/placeholder.svg"}
              data-item-name={product.name}
              data-item-url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/api/products/${product.id}`}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" aria-label="Add to wishlist">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 pt-4">
              <h4 className="font-medium">Product Details</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Premium quality materials</li>
                <li>Handcrafted with care</li>
                <li>Designed for comfort and style</li>
                <li>Dimensions: 18" x 18" (45cm x 45cm)</li>
                <li>Made in small batches</li>
              </ul>
            </TabsContent>
            <TabsContent value="care" className="space-y-4 pt-4">
              <h4 className="font-medium">Care Instructions</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Dry clean recommended</li>
                <li>Gentle machine wash cold if needed</li>
                <li>Do not bleach</li>
                <li>Tumble dry low</li>
                <li>Iron on low heat if necessary</li>
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="space-y-4 pt-4">
              <h4 className="font-medium">Shipping Information</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Free shipping on orders over $100</li>
                <li>Standard shipping: 3-5 business days</li>
                <li>Express shipping: 1-2 business days</li>
                <li>International shipping available</li>
                <li>30-day return policy</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
