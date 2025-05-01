import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  // Add more padding to the Footer for a more luxurious feel

  return (
    <footer className="border-t border-border bg-linen">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4 text-center md:text-left">
            <div className="relative w-32 h-10 mx-auto md:mx-0">
              <Image
                src="/zoen-logo.svg"
                alt="ZOEN"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Premium home and lifestyle products crafted with care for the discerning customer.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-medium uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=pillows" className="hover:underline">
                  Pillows
                </Link>
              </li>
              <li>
                <Link href="/shop?category=coming-soon" className="hover:underline">
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-medium uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-medium uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form action="https://formspree.io/f/mqaqenyo" method="POST" className="flex flex-col sm:flex-row gap-2 max-w-xs mx-auto md:mx-0">
              <Input type="email" name="email" placeholder="Enter your email" className="bg-background" required />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ZOEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
