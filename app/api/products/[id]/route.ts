import { getProductById } from "@/lib/products"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = getProductById(params.id)

  if (!product) {
    return new NextResponse("Product not found", { status: 404 })
  }

  return NextResponse.json({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.image,
  })
} 