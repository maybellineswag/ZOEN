import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { CurrencyProvider } from "@/components/currency-provider"
import SnipcartScript from "./components/snipcart-script"

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
      </head>
      <body className={`${playfair.variable} ${inter.variable} bg-cream text-off-black`}>
        <CartProvider>
          <CurrencyProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CurrencyProvider>
        </CartProvider>
        
        <SnipcartScript />
        <div 
          hidden 
          id="snipcart" 
          data-api-key="MTM3ZTg4Y2EtYzhmNS00ZGU2LWI3YzMtZWFkOGIyMTI1YTdjNjM4ODE2MjQ4MTk0MzU5MjI2"
          data-config-modal-style="side"
          data-templates-url="/snipcart-templates.html"
          data-currency="USD"
          data-config-add-product-behavior="none"
          data-version="3.4.1"
          data-config-mode="test"
          data-loading-screen-duration="0"
          data-config-payment-methods="credit-card,stripe"
        ></div>
      </body>
    </html>
  )
}
