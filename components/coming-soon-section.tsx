'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProductsByCategory } from "@/lib/products"
import { useLanguage } from "@/components/language-provider"

export default function ComingSoonSection() {
  const { language } = useLanguage()
  const t = {
    en: {
      title: "Coming Soon",
      desc: "Explore our upcoming collection of premium robes and loungewear, designed for ultimate comfort and style.",
      notify: "Get Notified"
    },
    cz: {
      title: "Již brzy",
      desc: "Prozkoumejte naši připravovanou kolekci prémiových županů a domácího oblečení navržených pro maximální pohodlí a styl.",
      notify: "Chci upozornění"
    },
    ru: {
      title: "Скоро в продаже",
      desc: "Ознакомьтесь с нашей предстоящей коллекцией премиальных халатов и домашней одежды, созданных для максимального комфорта и стиля.",
      notify: "Уведомить меня"
    }
  }[language]
  const comingSoonProducts = getProductsByCategory("coming-soon")

  return (
    <section className="gradient-bg py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{t.title}</h2>
          <p className="mt-4 text-muted-foreground">
            {t.desc}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {comingSoonProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg bg-background">
              <div className="absolute inset-0 bg-off-black/50 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Button variant="secondary">Notify Me</Button>
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/newsletter">{t.notify}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
