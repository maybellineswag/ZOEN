'use client'

import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"
import ComingSoonSection from "@/components/coming-soon-section"
import FeaturedPillow from "@/components/featured-pillow"
import { getProductsByCategory } from "@/lib/products"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { language } = useLanguage()
  const t = {
    en: {
      featuredCollection: "Featured Collection",
      featuredDesc: "Discover our premium selection of handcrafted pillows, designed to elevate your space with comfort and style.",
      viewAll: "View All Products"
    },
    cz: {
      featuredCollection: "Vybraná kolekce",
      featuredDesc: "Objevte naši prémiovou nabídku ručně vyráběných polštářů, které pozvednou váš domov pohodlím a stylem.",
      viewAll: "Zobrazit všechny produkty"
    },
    ru: {
      featuredCollection: "Избранная коллекция",
      featuredDesc: "Откройте для себя наш премиальный выбор подушек ручной работы, созданных для уюта и стиля.",
      viewAll: "Смотреть все товары"
    }
  }[language]
  const featuredProducts = getProductsByCategory("pillows").slice(0, 6)

  return (
    <div>
      <HeroSection />

      <FeaturedPillow />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{t.featuredCollection}</h2>
            <p className="mt-4 text-muted-foreground">
              {t.featuredDesc}
            </p>
          </div>

          <div className="mt-12">
            <ProductGrid products={featuredProducts} />
          </div>

          <div className="mt-12 text-center">
            <a href="/shop" className="inline-block border-b border-current pb-1 text-sm font-medium hover:opacity-80">
              {t.viewAll}
            </a>
          </div>
        </div>
      </section>

      <ComingSoonSection />
    </div>
  )
}
