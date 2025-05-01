import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/products"

export default function FeaturedPillow() {
  // Get the featured pillow (using the first one for this example)
  const featuredPillow = getProductById("pillow-1")

  if (!featuredPillow) return null

  return (
    <section className="py-20 md:py-32 bg-linen">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Discover Our Signature Piece</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">{featuredPillow.description}</p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-px bg-off-black"></div>
                <span className="ml-4 text-sm uppercase tracking-wider">Premium Materials</span>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-px bg-off-black"></div>
                <span className="ml-4 text-sm uppercase tracking-wider">Handcrafted Excellence</span>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-px bg-off-black"></div>
                <span className="ml-4 text-sm uppercase tracking-wider">Timeless Design</span>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="px-8">
                <Link href={`/product/${featuredPillow.id}`}>Explore</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-soft-gray/50 translate-x-4 translate-y-4 rounded-lg"></div>
              <Image
                src={featuredPillow.image || "/placeholder.svg"}
                alt={featuredPillow.name}
                width={600}
                height={600}
                className="w-full h-auto max-h-[50vh] md:max-h-none object-cover rounded-lg"
              />
              <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-cream p-4 rounded-lg shadow-md">
                <p className="text-sm font-medium uppercase tracking-wider">{featuredPillow.fabric}</p>
                <p className="text-2xl font-medium mt-1">${featuredPillow.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
