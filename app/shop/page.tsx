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
import { useLanguage } from "@/components/language-provider"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory)
  const [selectedFabric, setSelectedFabric] = useState<string[]>([])

  const fabrics = Array.from(new Set(products.filter((p) => p.fabric).map((p) => p.fabric as string))).sort()

  const { language } = useLanguage()
  const t = {
    en: {
      shopCollection: "Shop Collection",
      product: "product",
      products: "products",
      filter: "Filter",
      filters: "Filters",
      category: "Category",
      all: "All",
      fabric: "Fabric",
      noProducts: "No products found",
      tryChanging: "Try changing your filters or check back later.",
      pillows: "Pillows",
      comingSoon: "Coming Soon"
    },
    cz: {
      shopCollection: "Obchodní kolekce",
      product: "produkt",
      products: "produkty",
      filter: "Filtrovat",
      filters: "Filtry",
      category: "Kategorie",
      all: "Vše",
      fabric: "Látka",
      noProducts: "Žádné produkty nenalezeny",
      tryChanging: "Zkuste změnit filtry nebo se vraťte později.",
      pillows: "Polštáře",
      comingSoon: "Již brzy"
    },
    ru: {
      shopCollection: "Коллекция товаров",
      product: "товар",
      products: "товары",
      filter: "Фильтр",
      filters: "Фильтры",
      category: "Категория",
      all: "Все",
      fabric: "Ткань",
      noProducts: "Товары не найдены",
      tryChanging: "Попробуйте изменить фильтры или зайдите позже.",
      pillows: "Подушки",
      comingSoon: "Скоро в продаже"
    }
  }[language]

  const categories = [
    { id: "pillows", name: t.pillows },
    { id: "coming-soon", name: t.comingSoon },
  ]

  const fabricTranslations = {
    en: {
      linen: "Linen",
      velvet: "Velvet",
      alpaca: "Alpaca",
      cashmere: "Cashmere",
      wool: "Wool",
      mohair: "Mohair",
      jacquard: "Jacquard",
      cotton: "Cotton",
      boucle: "Bouclé",
      silk: "Silk"
    },
    cz: {
      linen: "Len",
      velvet: "Samet",
      alpaca: "Alpaka",
      cashmere: "Kašmír",
      wool: "Vlna",
      mohair: "Mohér",
      jacquard: "Žakár",
      cotton: "Bavlna",
      boucle: "Buklé",
      silk: "Hedvábí"
    },
    ru: {
      linen: "Лён",
      velvet: "Бархат",
      alpaca: "Альпака",
      cashmere: "Кашемир",
      wool: "Шерсть",
      mohair: "Мохер",
      jacquard: "Жаккард",
      cotton: "Хлопок",
      boucle: "Букле",
      silk: "Шёлк"
    }
  };

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
          <h1 className="text-3xl font-medium">{t.shopCollection}</h1>
          <p className="mt-2 text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? t.product : t.products}
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Filter className="mr-2 h-4 w-4" />
                {t.filter}
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>{t.filters}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium">{t.category}</h3>
                  <div className="mt-4 space-y-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        checked={selectedCategory === null}
                        onCheckedChange={() => handleCategoryChange(null)}
                      />
                      {t.all}
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
                  <h3 className="text-sm font-medium">{t.fabric}</h3>
                  <div className="mt-4 space-y-2">
                    {fabrics.map((fabric) => (
                      <Label key={fabric} className="flex items-center gap-2 font-normal">
                        <Checkbox
                          checked={selectedFabric.includes(fabric)}
                          onCheckedChange={() => handleFabricChange(fabric)}
                        />
                        {(fabricTranslations[language] as Record<string, string>)[fabric] || (fabric.charAt(0).toUpperCase() + fabric.slice(1))}
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
              <h3 className="text-sm font-medium">{t.category}</h3>
              <div className="mt-4 space-y-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox checked={selectedCategory === null} onCheckedChange={() => handleCategoryChange(null)} />
                  {t.all}
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
              <h3 className="text-sm font-medium">{t.fabric}</h3>
              <div className="mt-4 space-y-2">
                {fabrics.map((fabric) => (
                  <Label key={fabric} className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={selectedFabric.includes(fabric)}
                      onCheckedChange={() => handleFabricChange(fabric)}
                    />
                    {(fabricTranslations[language] as Record<string, string>)[fabric] || (fabric.charAt(0).toUpperCase() + fabric.slice(1))}
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
              <p className="text-lg font-medium">{t.noProducts}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.tryChanging}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
