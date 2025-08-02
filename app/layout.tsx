import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { CurrencyProvider } from "@/components/currency-provider"
import SnipcartScript from "./components/snipcart-script"
import { LanguageProvider } from "@/components/language-provider"
import SnipcartWrapper from "./components/snipcart-wrapper"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ZOEN | Premium Home & Lifestyle",
  description: "Luxury pillows and home accessories for the discerning customer",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.css" />
        <link rel="stylesheet" href="/styles/snipcart-overrides.css" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} bg-cream text-off-black`}>
        <LanguageProvider>
          <CartProvider>
            <CurrencyProvider>
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <SnipcartWrapper />
            </CurrencyProvider>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
