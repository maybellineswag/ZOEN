'use client'
import { useCurrency } from "@/components/currency-provider"
import { useEffect, useState } from "react"
import SnipcartScript from "./snipcart-script"

export default function SnipcartWrapper() {
  const { currency } = useCurrency()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_SNIPCART_API_KEY
    console.log('SnipcartWrapper: API Key:', apiKey)
    console.log('SnipcartWrapper: API Key length:', apiKey?.length)
    console.log('SnipcartWrapper: API Key starts with:', apiKey?.substring(0, 10))
    console.log('SnipcartWrapper: Currency:', currency)
    setReady(true)
  }, [currency])

  return (
    <>
      <div
        hidden
        id="snipcart"
        data-api-key="MjU5YWI3OTEtODZiNC00ZjBmLWFjYjMtM2ZjY2Q1MTRjOTc2NjM4ODE2MjQ4MTk0MzU5MjI2"
        data-currency={currency}
        data-config-add-product-behavior="none"
        data-version="3.4.1"
        data-config-mode="live"
        data-config-payment-methods="credit-card,stripe"
      ></div>
      {ready && <SnipcartScript />}
    </>
  )
} 