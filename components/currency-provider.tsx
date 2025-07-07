"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

type Currency = "USD" | "EUR" | "CZK" | "RUB"

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
}

const countryToCurrency: Record<string, Currency> = {
  US: "USD",
  CZ: "CZK",
  RU: "RUB",
  // Add more as needed
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("CZK")

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("zoen-currency") : null
    if (stored && ["USD", "CZK", "RUB"].includes(stored)) {
      setCurrencyState(stored as Currency)
      return
    }
    // Only auto-detect if not set by user
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        const country = data.country_code
        const detectedCurrency = countryToCurrency[country] || "USD"
        setCurrencyState(detectedCurrency)
        localStorage.setItem("zoen-currency", detectedCurrency)
      })
      .catch(() => {
        setCurrencyState("USD")
      })
  }, [])

  const setCurrency = (cur: Currency) => {
    setCurrencyState(cur)
    if (typeof window !== 'undefined') {
      localStorage.setItem("zoen-currency", cur)
    }
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
} 