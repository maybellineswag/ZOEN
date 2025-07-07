'use client'
import { useCurrency } from "@/components/currency-provider"
import { useEffect, useState } from "react"
import SnipcartScript from "./snipcart-script"

export default function SnipcartWrapper() {
  const { currency } = useCurrency()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [currency])

  return (
    <>
      <div
        hidden
        id="snipcart"
        data-api-key="MTM3ZTg4Y2EtYzhmNS00ZGU2LWI3YzMtZWFkOGIyMTI1YTdjNjM4ODE2MjQ4MTk0MzU5MjI2"
        data-config-modal-style="side"
        data-templates-url="/snipcart-templates.html"
        data-currency={currency}
        data-config-add-product-behavior="none"
        data-version="3.4.1"
        data-config-mode="live"
        data-loading-screen-duration="0"
        data-config-payment-methods="credit-card,stripe"
      ></div>
      {ready && <SnipcartScript />}
    </>
  )
} 