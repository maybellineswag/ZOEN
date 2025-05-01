'use client'

import Script from 'next/script'

export default function SnipcartScript() {
  return (
    <Script 
      src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js"
      strategy="afterInteractive"
      onError={(e) => {
        console.error('Snipcart loading error:', e);
      }}
    />
  )
} 