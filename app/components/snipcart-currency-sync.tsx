'use client'
import { useCurrency } from "@/components/currency-provider"
import { useEffect } from "react"

export default function SnipcartCurrencySync() {
  const { currency } = useCurrency()
  useEffect(() => {
    const snipcartDiv = document.getElementById("snipcart")
    if (snipcartDiv) {
      snipcartDiv.setAttribute("data-currency", currency)
    }
  }, [currency])
  return null
} 