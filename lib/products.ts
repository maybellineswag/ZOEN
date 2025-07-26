export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  fabric?: string
  dimensions?: string
}

export const products: Product[] = [
  {
    id: "city-traffic-pillow",
    name: "City Traffic Pillow",
    description: "A plush, decorative pillow designed to bring comfort and style to any room.",
    price: 29.99,
    image: "/products/city-traffic.png",
    category: "pillows",
    fabric: "linen",
    dimensions: "50x50 cm"
  },
  {
    id: "city-bridge",
    name: "City Bridge",
    description: "A statement round pillow in luxurious velvet that adds a touch of sophistication to any room.",
    price: 29.99,
    image: "/products/city-bridge.png",
    category: "pillows",
    fabric: "velvet",
    dimensions: "50x50 cm"
  },
  {
    id: "forest",
    name: "Forest",
    description: "Oversized Euro pillow in stonewashed linen for a relaxed yet refined look and incredible softness.",
    price: 29.99,
    image: "/products/forest.png",
    category: "pillows",
    fabric: "linen",
    dimensions: "50x50 cm"
  },
  {
    id: "medusa",
    name: "Medusa",
    description: "Incredibly soft throw pillow made from premium alpaca fiber, known for its luxurious feel and warmth.",
    price: 29.99,
    image: "/products/medusa.png",
    category: "pillows",
    fabric: "alpaca",
    dimensions: "50x50 cm"
  },
  {
    id: "medusa-2",
    name: "Medusa Flower",
    description: "A luxurious square pillow crafted from premium linen with a subtle texture that adds depth to any space.",
    price: 29.99,
    image: "/products/medusa-2.png",
    category: "pillows",
    fabric: "linen",
    dimensions: "50x50 cm"
  },
  {
    id: "love-pillow",
    name: "Love",
    description: "Ultra-soft cashmere bolster pillow that provides both comfort and elegance to your bedroom or living space.",
    price: 29.99,
    image: "/products/love-pillow.png",
    category: "pillows",
    fabric: "cashmere",
    dimensions: "50x50 cm"
  },
  
 
  {
    id: "blue-flower",
    name: "Blue Flower",
    description: "Sophisticated lumbar pillow in a classic herringbone pattern, made from premium wool.",
    price: 29.99,
    image: "/products/blue-flower.png",
    category: "pillows",
    fabric: "wool",
    dimensions: "50x50 cm"
  },
  {
    id: "red-flower",
    name: "Red Flower",
    description: "Clean-lined pillow in a linen blend that embodies modern minimalism while providing exceptional comfort.",
    price: 29.99,
    image: "/products/red-flower.png",
    category: "pillows",
    fabric: "linen",
    dimensions: "50x50 cm"
  },
  {
    id: "paint-splatter",
    name: "Paint Splatter",
    description: "Artisanal pillow crafted from wool felt using traditional techniques for a piece that's both modern and timeless.",
    price: 29.99,
    image: "/products/paint-splatter.png",
    category: "pillows",
    fabric: "wool",
    dimensions: "50x50 cm"
  },
  {
    id: "fish&cats",
    name: "Fish & Cats",
    description: "Plush mohair pillow that adds a touch of luxury and warmth to any seating arrangement.",
    price: 29.99,
    image: "/products/fish&cats2.png",
    category: "pillows",
    fabric: "mohair",
    dimensions: "50x50 cm"
  },
  {
    id: "fish&cats-2",
    name: "Fish & Cats 2",
    description: "Incredibly soft throw pillow made from premium alpaca fiber, known for its luxurious feel and warmth.",
    price: 29.99,
    image: "/products/fish&cats3.png",
    category: "pillows",
    fabric: "alpaca",
    dimensions: "50x50 cm"
  },
  {
    id: "fish&cats-3",
    name: "Fish & Cats 3",
    description: "Sophisticated pillow featuring a subtle geometric jacquard pattern that adds dimension to your decor.",
    price: 29.99,
    image: "/products/fish&cats.png",
    category: "pillows",
    fabric: "jacquard",
    dimensions: "50x50 cm"
  },
  {
    id: "abstraction",
    name: "Abstraction",
    description: "Environmentally conscious pillow made from 100% organic cotton with a sand-inspired hue.",
    price: 29.99,
    image: "/products/abstraction.png",
    category: "pillows",
    fabric: "cotton",
    dimensions: "50x50 cm"
  },
  {
    id: "abstraction-2",
    name: "Abstraction 2",
    description: "Richly textured bouclé pillow that adds visual interest and tactile comfort to your space.",
    price: 29.99,
    image: "/products/abstraction-2.png",
    category: "pillows",
    fabric: "boucle",
    dimensions: "50x50 cm"
  },
  
  {
    id: "abstraction-3",
    name: "Abstraction 3",
    description: "Artisanal pillow crafted from wool felt using traditional techniques for a piece that's both modern and timeless.",
    price: 29.99,
    image: "/products/abstraction3.png",
    category: "pillows",
    fabric: "wool",
    dimensions: "50x50 cm"
  },
  {
    id: "eye-painting-pillow",
    name: "Eye Painting Pillow",
    description: "Soft and supportive, this pillow is perfect for relaxing on the couch or adding a cozy touch to your bed.",
    price: 29.99,
    image: "/products/eye-painting.png",
    category: "pillows",
    fabric: "cotton",
    dimensions: "50x50 cm"
  },

  {
    id: "meditation",
    name: "Meditation",
    description: "Elegant floor cushion crafted from premium silk, perfect for meditation or casual seating areas.",
    price: 29.99,
    image: "/products/meditation.png",
    category: "pillows",
    fabric: "silk",
    dimensions: "50x50 cm"
  },
  {
    id: "wine",
    name: "Wine",
    description: "Clean-lined pillow in a linen blend that embodies modern minimalism while providing exceptional comfort.",
    price: 29.99,
    image: "/products/wine.png",
    category: "pillows",
    fabric: "linen",
    dimensions: "50x50 cm"
  },
  {
    id: "music",
    name: "Music",
    description: "Artisanal pillow crafted from wool felt using traditional techniques for a piece that's both modern and timeless.",
    price: 29.99,
    image: "/products/music1.png",
    category: "pillows",
    fabric: "wool",
    dimensions: "50x50 cm"
  },
  {
    id: "music2",
    name: "Music 2",
    description: "Coming Soon - Our signature robe crafted from premium stonewashed linen for ultimate comfort and elegance.",
    price: 29.99,
    image: "/products/music2.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "music-3",
    name: "Music 3",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/music3.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "champagne",
    name: "Vodka",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/champagne.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "vodka",
    name: "Champagne",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/spiral.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "tea",
    name: "Tea",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/tea.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "candle",
    name: "Candle 1",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/candle.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "candle 2",
    name: "Candle 2",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/candle2.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "books",
    name: "Books",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/books.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "heat",
    name: "Heat 1",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/heat.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "heat2",
    name: "Heat 2",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/heat2.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "heat3",
    name: "Heat 3",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/heat3.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "breakfast",
    name: "Breakfast 1",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/grapes.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "breakfast2",
    name: "Breakfast 2",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/grapes2.png",
    category: "pillows",
    dimensions: "50x50 cm"
  },
  {
    id: "breakfast3",
    name: "Breakfast 3",
    description: "Coming Soon - Luxurious loungewear set in 100% cashmere for the ultimate in relaxed sophistication.",
    price: 29.99,
    image: "/products/grapes3.png",
    category: "pillows",
    dimensions: "50x50 cm"
  }
]

// Test product for payment testing - not included in main catalog
export const testProduct: Product = {
  id: "test-pillow-1",
  name: "Test Pillow - $1",
  description: "This is a test product for payment verification. Perfect for testing the checkout process without spending much money.",
  price: 1.00,
  image: "/products/city-traffic.png", // Using existing image
  category: "test",
  fabric: "test",
  dimensions: "Test size"
}

export function getProductById(id: string): Product | undefined {
  if (id === "test-pillow-1") {
    return testProduct
  }
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getProductsByFabric(fabric: string): Product[] {
  return products.filter(product => product.fabric === fabric)
}
