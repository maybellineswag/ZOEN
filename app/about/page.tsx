import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-linen py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-medium mb-6">A Living Tribute</h1>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  This project is a tribute to my brother, the artist Enver.
                  Through fabric, shape, and color, his art continues to live on.
                </p>
                <p>
                  Each piece is more than just an object — it is a space where art becomes tangible stillness, warmth, and light.
                </p>
                <p>
                  In the play of textures, lines, and tones, a transformation takes place:
                </p>
                <div className="pl-6 space-y-2 italic">
                  <p>from memory — style,</p>
                  <p>from emotion — form,</p>
                  <p>from love — comfort.</p>
                </div>
                <p>
                  I create textiles so that the home becomes a reflection of the soul.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-soft-gray/50 translate-x-4 translate-y-4 rounded-lg"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="ZOEN Studio"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-linen">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Craftsmanship</h3>
              <p className="text-muted-foreground">
                Every ZOEN product is meticulously crafted with attention to detail, ensuring exceptional quality that
                stands the test of time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-linen">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to responsible sourcing and production methods that minimize environmental impact while
                maximizing product longevity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-linen">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Timeless Design</h3>
              <p className="text-muted-foreground">
                We believe in creating pieces that transcend trends, offering enduring style that complements any space
                for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience the ZOEN difference and transform your space with our premium collection of home accessories.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/shop">Shop Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
