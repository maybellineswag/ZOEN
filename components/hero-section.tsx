import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-110"
          poster="/placeholder.webp?height=1080&width=1920"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-20 mx-auto flex h-full items-center px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-white [text-shadow:_0_4px_8px_rgb(0_0_0_/_90%)] sm:text-5xl md:text-6xl">
            Elevate Your Space with ZOEN
          </h1>
          <p className="mt-6 text-lg text-white/90 [text-shadow:_0_4px_8px_rgb(0_0_0_/_90%)]">
            Premium home accessories crafted with care for the discerning customer. Our pillows blend luxury, comfort,
            and timeless design.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[150px] bg-white text-black hover:bg-white/90">
              <Link href="/shop">Shop Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[150px] border-white text-white bg-transparent hover:bg-white/10"
            >
              <Link href="/newsletter">Newsletter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
