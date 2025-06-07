export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  fabric?: string
}

export const products: Product[] = [
  {
    id: "city-traffic-pillow",
    name: "City Traffic Pillow",
    description: "Handcrafted premium linen pillow with elegant embroidery. Perfect for adding a touch of sophistication to your living space.",
    price: 89.99,
    image: "/products/city-traffic.png",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "paint-splatter-pillow",
    name: "Paint Splatter Pillow",
    description: "Luxurious velvet cushion with a modern design. Adds texture and comfort to any room.",
    price: 69.99,
    image: "/products/paint-splatter.png",
    category: "cushions",
    fabric: "velvet"
  },
  {
    id: "eye-painting-pillow",
    name: "Eye Painting Pillow",
    description: "Soft and sustainable organic cotton throw. Perfect for snuggling up on the couch or adding a layer of warmth to your bed.",
    price: 129.99,
    image: "/products/eye-painting.png",
    category: "pillows",
    fabric: "cotton"
  },
  {
    id: "red-flower-pillow",
    name: "Red Flower Pillow",
    description: "A luxurious square pillow crafted from premium linen with a subtle texture that adds depth to any space.",
    price: 89.99,
    image: "/products/red-flower.png",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "pillow-2",
    name: "Cloud Cashmere Bolster Pillow",
    description: "Ultra-soft cashmere bolster pillow that provides both comfort and elegance to your bedroom or living space.",
    price: 129.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "cashmere"
  },
  {
    id: "pillow-3",
    name: "Dune Organic Cotton Pillow",
    description: "Environmentally conscious pillow made from 100% organic cotton with a sand-inspired hue.",
    price: 69.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "cotton"
  },
  {
    id: "pillow-4",
    name: "Velvet Horizon Round Pillow",
    description: "A statement round pillow in luxurious velvet that adds a touch of sophistication to any room.",
    price: 99.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "velvet"
  },
  {
    id: "pillow-5",
    name: "Silk Meditation Floor Cushion",
    description: "Elegant floor cushion crafted from premium silk, perfect for meditation or casual seating areas.",
    price: 149.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "silk"
  },
  {
    id: "pillow-6",
    name: "Herringbone Wool Lumbar Pillow",
    description: "Sophisticated lumbar pillow in a classic herringbone pattern, made from premium wool.",
    price: 79.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "wool"
  },
  {
    id: "pillow-7",
    name: "Minimalist Linen Blend Pillow",
    description: "Clean-lined pillow in a linen blend that embodies modern minimalism while providing exceptional comfort.",
    price: 74.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "pillow-8",
    name: "Textured Bouclé Square Pillow",
    description: "Richly textured bouclé pillow that adds visual interest and tactile comfort to your space.",
    price: 109.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "boucle"
  },
  {
    id: "pillow-9",
    name: "Handwoven Cotton Stripe Pillow",
    description: "Artisanal pillow with subtle stripes, handwoven from the finest cotton for a touch of craftsmanship.",
    price: 84.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "cotton"
  },
  {
    id: "pillow-10",
    name: "Alpaca Throw Pillow",
    description: "Incredibly soft throw pillow made from premium alpaca fiber, known for its luxurious feel and warmth.",
    price: 139.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "alpaca"
  },
  {
    id: "pillow-11",
    name: "Geometric Jacquard Pillow",
    description: "Sophisticated pillow featuring a subtle geometric jacquard pattern that adds dimension to your decor.",
    price: 94.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "jacquard"
  },
  {
    id: "pillow-12",
    name: "Mohair Accent Pillow",
    description: "Plush mohair pillow that adds a touch of luxury and warmth to any seating arrangement.",
    price: 119.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "mohair"
  },
  {
    id: "pillow-13",
    name: "Stonewashed Linen Euro Pillow",
    description: "Oversized Euro pillow in stonewashed linen for a relaxed yet refined look and incredible softness.",
    price: 99.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "pillow-14",
    name: "Tonal Embroidered Square Pillow",
    description: "Elegant pillow with tonal embroidery that creates a subtle pattern and adds refined texture.",
    price: 89.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "embroidered"
  },
  {
    id: "pillow-15",
    name: "Organic Hemp Cushion",
    description: "Sustainable cushion crafted from organic hemp, offering durability and eco-conscious luxury.",
    price: 79.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "hemp"
  },
  {
    id: "pillow-16",
    name: "Merino Wool Knit Pillow",
    description: "Cozy knit pillow made from premium merino wool for exceptional softness and warmth.",
    price: 109.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "wool"
  },
  {
    id: "pillow-17",
    name: "Brushed Cotton Flannel Pillow",
    description: "Ultra-soft flannel pillow with a brushed finish for a cozy, inviting texture.",
    price: 69.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "cotton"
  },
  {
    id: "pillow-18",
    name: "Linen Canvas Floor Pillow",
    description: "Substantial floor pillow in durable linen canvas, perfect for casual seating or lounging.",
    price: 129.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "pillow-19",
    name: "Tussah Silk Accent Pillow",
    description: "Luxurious accent pillow made from tussah silk with a naturally irregular texture for visual interest.",
    price: 119.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "silk"
  },
  {
    id: "pillow-20",
    name: "Handcrafted Wool Felt Pillow",
    description: "Artisanal pillow crafted from wool felt using traditional techniques for a piece that's both modern and timeless.",
    price: 99.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "pillows",
    fabric: "wool"
  },
  {
    id: "coming-soon-1",
    name: "Signature Linen Robe",
    description: "Coming Soon - Our signature robe crafted from premium stonewashed linen for ultimate comfort and elegance.",
    price: 189.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "coming-soon"
  },
  {
    id: "coming-soon-2",
    name: "Cashmere Lounge Set",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 299.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "coming-soon"
  },
  {
    id: "coming-soon-3",
    name: "Organic Cotton Pajamas",
    description: "Coming Soon - Breathable, soft pajamas crafted from organic cotton for a restful night's sleep.",
    price: 149.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "coming-soon"
  },
  {
    id: "coming-soon-4",
    name: "Silk Sleep Mask",
    description: "Coming Soon - Luxurious silk sleep mask that provides total darkness for the perfect night's rest.",
    price: 59.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "coming-soon",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getProductsByFabric(fabric: string): Product[] {
  return products.filter(product => product.fabric === fabric)
}
