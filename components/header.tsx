"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useLanguage } from "@/components/language-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { cartItems } = useCart()

  const t = {
    en: { home: "Home", shop: "Shop", about: "About", contact: "Contact" },
    cz: { home: "Domů", shop: "Obchod", about: "O nás", contact: "Kontakt" },
    ru: { home: "Главная", shop: "Магазин", about: "О нас", contact: "Контакты" }
  }[language]

  // Calculate total quantity of items in cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // Only apply scroll effect on home page
        const heroHeight = window.innerHeight
        setIsScrolled(window.scrollY > heroHeight - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Reset scroll position when navigating to a new page
    window.scrollTo(0, 0)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname, isHomePage])

  const headerClasses = isHomePage
    ? isScrolled
      ? "bg-cream/90 backdrop-blur-md shadow-sm text-off-black fixed"
      : "bg-transparent text-off-black fixed"
    : "bg-cream shadow-sm text-off-black sticky" // Changed to sticky for non-home pages

  return (
    <>
      <header className={`top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${headerClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="relative w-40 h-12">
                <Image
                  src="/zoen-logo.svg"
                  alt="ZOEN"
                  fill
                  className="object-contain transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium hover:opacity-80 transition-colors ysl-hover-line">
                {t.home}
              </Link>
              <Link href="/shop" className="text-sm font-medium hover:opacity-80 transition-colors ysl-hover-line">
                {t.shop}
              </Link>
              <Link href="/about" className="text-sm font-medium hover:opacity-80 transition-colors ysl-hover-line">
                {t.about}
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:opacity-80 transition-colors ysl-hover-line">
                {t.contact}
              </Link>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 font-inter text-xs sm:text-sm uppercase tracking-wider">
                <button
                  className={`ysl-button text-off-black hover:text-[#8b5733] focus:outline-none${language === 'cz' ? ' font-bold underline' : ''}`}
                  aria-label="Switch to Czech"
                  onClick={() => setLanguage('cz')}
                >
                  CZ
                </button>
                <span className="opacity-50">|</span>
                <button
                  className={`ysl-button text-off-black hover:text-[#8b5733] focus:outline-none${language === 'en' ? ' font-bold underline' : ''}`}
                  aria-label="Switch to English"
                  onClick={() => setLanguage('en')}
                >
                  EN
                </button>
                <span className="opacity-50">|</span>
                <button
                  className={`ysl-button text-off-black hover:text-[#8b5733] focus:outline-none${language === 'ru' ? ' font-bold underline' : ''}`}
                  aria-label="Switch to Russian"
                  onClick={() => setLanguage('ru')}
                >
                  RU
                </button>
              </div>
              {/* Cart Icon */}
              <Button variant="ghost" size="icon" className="relative hover:opacity-80 transition-colors !bg-transparent !p-1 sm:!p-3 snipcart-checkout" aria-label="Shopping cart">
                <ShoppingBag className="h-5 w-5" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {totalQuantity}
                  </span>
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Add a spacer div for non-home pages to prevent content from being hidden under the header */}
      {!isHomePage && <div className="h-20" />}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="relative w-40 h-12">
                <Image
                  src="/zoen-logo.svg"
                  alt="ZOEN"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="mt-8 flex flex-col space-y-6">
              <Link href="/" className="text-lg font-medium hover:opacity-80 transition-colors ysl-hover-line" onClick={() => setIsMenuOpen(false)}>
                {t.home}
              </Link>
              <Link href="/shop" className="text-lg font-medium hover:opacity-80 transition-colors ysl-hover-line" onClick={() => setIsMenuOpen(false)}>
                {t.shop}
              </Link>
              <Link href="/about" className="text-lg font-medium hover:opacity-80 transition-colors ysl-hover-line" onClick={() => setIsMenuOpen(false)}>
                {t.about}
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:opacity-80 transition-colors ysl-hover-line" onClick={() => setIsMenuOpen(false)}>
                {t.contact}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
