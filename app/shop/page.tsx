"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ProductGrid from "@/components/product-grid"
import { products } from "@/lib/products"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory)
  const [selectedFabric, setSelectedFabric] = useState<string[]>([])

  const fabrics = Array.from(new Set(products.filter((p) => p.fabric).map((p) => p.fabric as string))).sort()

  const categories = [
    { id: "pillows", name: "Pillows" },
    { id: "coming-soon", name: "Coming Soon" },
  ]

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false
    }

    if (selectedFabric.length > 0 && product.fabric && !selectedFabric.includes(product.fabric)) {
      return false
    }

    return true
  })

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory)
    }
  }, [initialCategory])

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
  }

  const handleFabricChange = (fabric: string) => {
    setSelectedFabric((prev) => (prev.includes(fabric) ? prev.filter((f) => f !== fabric) : [...prev, fabric]))
  }

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-8 md:py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-medium">Shop Collection</h1>
          <p className="mt-2 text-muted-foreground">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium">Category</h3>
                  <div className="mt-4 space-y-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        checked={selectedCategory === null}
                        onCheckedChange={() => handleCategoryChange(null)}
                      />
                      All
                    </Label>
                    {categories.map((category) => (
                      <Label key={category.id} className="flex items-center gap-2 font-normal">
                        <Checkbox
                          checked={selectedCategory === category.id}
                          onCheckedChange={() => handleCategoryChange(category.id)}
                        />
                        {category.name}
                      </Label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium">Fabric</h3>
                  <div className="mt-4 space-y-2">
                    {fabrics.map((fabric) => (
                      <Label key={fabric} className="flex items-center gap-2 font-normal">
                        <Checkbox
                          checked={selectedFabric.includes(fabric)}
                          onCheckedChange={() => handleFabricChange(fabric)}
                        />
                        {fabric.charAt(0).toUpperCase() + fabric.slice(1)}
                      </Label>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <div className="hidden md:block">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium">Category</h3>
              <div className="mt-4 space-y-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox checked={selectedCategory === null} onCheckedChange={() => handleCategoryChange(null)} />
                  All
                </Label>
                {categories.map((category) => (
                  <Label key={category.id} className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={selectedCategory === category.id}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    {category.name}
                  </Label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium">Fabric</h3>
              <div className="mt-4 space-y-2">
                {fabrics.map((fabric) => (
                  <Label key={fabric} className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={selectedFabric.includes(fabric)}
                      onCheckedChange={() => handleFabricChange(fabric)}
                    />
                    {fabric.charAt(0).toUpperCase() + fabric.slice(1)}
                  </Label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed">
              <p className="text-lg font-medium">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground">Try changing your filters or check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
