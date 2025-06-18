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
    id: "city-bridge",
    name: "City Bridge",
    description: "A statement round pillow in luxurious velvet that adds a touch of sophistication to any room.",
    price: 99.99,
    image: "/products/city-bridge.png",
    category: "pillows",
    fabric: "velvet"
  },
  {
    id: "forest",
    name: "Forest",
    description: "Oversized Euro pillow in stonewashed linen for a relaxed yet refined look and incredible softness.",
    price: 99.99,
    image: "/products/forest.png",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "medusa",
    name: "Medusa",
    description: "Incredibly soft throw pillow made from premium alpaca fiber, known for its luxurious feel and warmth.",
    price: 139.99,
    image: "/products/medusa.png",
    category: "pillows",
    fabric: "alpaca"
  },
  {
    id: "medusa-2",
    name: "Medusa Flower",
    description: "A luxurious square pillow crafted from premium linen with a subtle texture that adds depth to any space.",
    price: 89.99,
    image: "/products/medusa-2.png",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "love-pillow",
    name: "Love",
    description: "Ultra-soft cashmere bolster pillow that provides both comfort and elegance to your bedroom or living space.",
    price: 129.99,
    image: "/products/love-pillow.png",
    category: "pillows",
    fabric: "cashmere"
  },
  
 
  {
    id: "blue-flower",
    name: "Blue Flower",
    description: "Sophisticated lumbar pillow in a classic herringbone pattern, made from premium wool.",
    price: 79.99,
    image: "/products/blue-flower.png",
    category: "pillows",
    fabric: "wool"
  },
  {
    id: "red-flower",
    name: "Red Flower",
    description: "Clean-lined pillow in a linen blend that embodies modern minimalism while providing exceptional comfort.",
    price: 74.99,
    image: "/products/red-flower.png",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "paint-splatter",
    name: "Paint Splatter",
    description: "Artisanal pillow crafted from wool felt using traditional techniques for a piece that's both modern and timeless.",
    price: 99.99,
    image: "/products/paint-splatter.png",
    category: "pillows",
    fabric: "wool"
  },
  {
    id: "fish&cats",
    name: "Fish & Cats",
    description: "Plush mohair pillow that adds a touch of luxury and warmth to any seating arrangement.",
    price: 119.99,
    image: "/products/fish&cats2.png",
    category: "pillows",
    fabric: "mohair"
  },
  {
    id: "fish&cats-2",
    name: "Fish & Cats 2",
    description: "Incredibly soft throw pillow made from premium alpaca fiber, known for its luxurious feel and warmth.",
    price: 139.99,
    image: "/products/fish&cats3.png",
    category: "pillows",
    fabric: "alpaca"
  },
  {
    id: "fish&cats-3",
    name: "Fish & Cats 3",
    description: "Sophisticated pillow featuring a subtle geometric jacquard pattern that adds dimension to your decor.",
    price: 94.99,
    image: "/products/fish&cats.png",
    category: "pillows",
    fabric: "jacquard"
  },
  {
    id: "abstraction",
    name: "Abstraction",
    description: "Environmentally conscious pillow made from 100% organic cotton with a sand-inspired hue.",
    price: 69.99,
    image: "/products/abstraction.png",
    category: "pillows",
    fabric: "cotton"
  },
  {
    id: "abstraction-2",
    name: "Abstraction 2",
    description: "Richly textured bouclé pillow that adds visual interest and tactile comfort to your space.",
    price: 109.99,
    image: "/products/abstraction-2.png",
    category: "pillows",
    fabric: "boucle"
  },
  
  {
    id: "abstraction-3",
    name: "Abstraction 3",
    description: "Artisanal pillow crafted from wool felt using traditional techniques for a piece that's both modern and timeless.",
    price: 99.99,
    image: "/products/abstraction3.png",
    category: "pillows",
    fabric: "wool"
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
    id: "meditation",
    name: "Meditation",
    description: "Elegant floor cushion crafted from premium silk, perfect for meditation or casual seating areas.",
    price: 149.99,
    image: "/products/meditation.png",
    category: "pillows",
    fabric: "silk"
  },
  {
    id: "wine",
    name: "Wine",
    description: "Clean-lined pillow in a linen blend that embodies modern minimalism while providing exceptional comfort.",
    price: 74.99,
    image: "/products/wine.png",
    category: "pillows",
    fabric: "linen"
  },
  {
    id: "music",
    name: "Music",
    description: "Artisanal pillow crafted from wool felt using traditional techniques for a piece that's both modern and timeless.",
    price: 99.99,
    image: "/products/music1.png",
    category: "pillows",
    fabric: "wool"
  },
  {
    id: "music2",
    name: "Music 2",
    description: "Coming Soon - Our signature robe crafted from premium stonewashed linen for ultimate comfort and elegance.",
    price: 189.99,
    image: "/products/music2.png",
    category: "coming-soon"
  },
  {
    id: "music-3",
    name: "Music 3",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 299.99,
    image: "/products/music3.png",
    category: "coming-soon"
  },
  {
    id: "champagne",
    name: "Vodka",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 299.99,
    image: "/products/champagne.png",
    category: "coming-soon"
  },
  {
    id: "vodka",
    name: "Champagne",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 299.99,
    image: "/products/spiral.png",
    category: "coming-soon"
  },
  {
    id: "tea",
    name: "Tea",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 299.99,
    image: "/products/tea.png",
    category: "coming-soon"
  },
  {
    id: "candle",
    name: "Candle 1",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 299.99,
    image: "/products/candle.png",
    category: "coming-soon"
  },
  {
    id: "candle 2",
    name: "Candle 2",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 299.99,
    image: "/products/candle2.png",
    category: "coming-soon"
  },
  {
    id: "books",
    name: "Books",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 299.99,
    image: "/products/books.png",
    category: "coming-soon"
  }
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
