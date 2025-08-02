'use client'

import Script from 'next/script'

export default function SnipcartScript() {
  return (
    <Script 
      src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('✅ Snipcart script loaded successfully');
      }}
      onError={(e) => {
        console.error('❌ Snipcart script loading error:', e);
      }}
      onReady={() => {
        console.log('🎯 Snipcart script is ready');
        // Check if Snipcart is properly initialized
        if (typeof window !== 'undefined') {
          console.log('🌐 Window object available');
          if ((window as any).Snipcart) {
            console.log('✅ Snipcart API available:', (window as any).Snipcart);
          } else {
            console.log('❌ Snipcart API not found on window object');
          }
        }
      }}
    />
  )
} 