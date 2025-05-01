import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card relative overflow-hidden rounded-lg bg-background transition-all">
      <Link href={`/product/${product.id}`} className="group block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="product-image h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          <p className="mt-2 font-medium">${product.price.toFixed(2)}</p>
          <div className="mt-3 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          className="snipcart-add-item w-full bg-off-black text-cream py-2 px-4 rounded-md hover:bg-black transition-colors"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-description={product.description}
          data-item-image={product.image || "/placeholder.svg"}
          data-item-name={product.name}
          data-item-url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/api/products/${product.id}`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
