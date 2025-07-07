'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = {
    en: {
      tribute: "A Living Tribute",
      tribute1: "This project is a tribute to my brother, the artist Enver. Through fabric, shape, and color, his art continues to live on.",
      tribute2: "Each piece is more than just an object — it is a space where art becomes tangible stillness, warmth, and light.",
      tribute3: "In the play of textures, lines, and tones, a transformation takes place:",
      memory: "from memory — style,",
      emotion: "from emotion — form,",
      love: "from love — comfort.",
      tribute4: "I create textiles so that the home becomes a reflection of the soul.",
      values: "Our Values",
      craftsmanship: "Craftsmanship",
      craftsmanshipDesc: "Every ZOEN product is meticulously crafted with attention to detail, ensuring exceptional quality that stands the test of time.",
      sustainability: "Sustainability",
      sustainabilityDesc: "We're committed to responsible sourcing and production methods that minimize environmental impact while maximizing product longevity.",
      timeless: "Timeless Design",
      timelessDesc: "We believe in creating pieces that transcend trends, offering enduring style that complements any space for years to come.",
      journey: "Join Our Journey",
      journeyDesc: "Experience the ZOEN difference and transform your space with our premium collection of home accessories.",
      shop: "Shop Collection"
    },
    cz: {
      tribute: "Živoucí pocta",
      tribute1: "Tento projekt je poctou mému bratrovi, umělci Enverovi. Prostřednictvím látky, tvaru a barvy jeho umění žije dál.",
      tribute2: "Každý kus je víc než jen předmět — je to prostor, kde se umění stává hmatatelným klidem, teplem a světlem.",
      tribute3: "Ve hře textur, linií a tónů dochází k proměně:",
      memory: "ze vzpomínek — styl,",
      emotion: "z emocí — forma,",
      love: "z lásky — pohodlí.",
      tribute4: "Vytvářím textilie, aby se domov stal odrazem duše.",
      values: "Naše hodnoty",
      craftsmanship: "Řemeslná zručnost",
      craftsmanshipDesc: "Každý produkt ZOEN je pečlivě vyroben s důrazem na detail, což zajišťuje výjimečnou kvalitu, která obstojí v čase.",
      sustainability: "Udržitelnost",
      sustainabilityDesc: "Zavazujeme se k odpovědnému získávání a výrobním metodám, které minimalizují dopad na životní prostředí a maximalizují životnost produktu.",
      timeless: "Nadčasový design",
      timelessDesc: "Věříme ve vytváření kousků, které překonávají trendy a nabízejí trvalý styl, jenž doplní každý prostor na dlouhá léta.",
      journey: "Přidejte se k naší cestě",
      journeyDesc: "Zažijte rozdíl ZOEN a proměňte svůj prostor s naší prémiovou kolekcí bytových doplňků.",
      shop: "Prohlédnout kolekci"
    },
    ru: {
      tribute: "Живой трибьют",
      tribute1: "Этот проект — дань уважения моему брату, художнику Энверу. Через ткань, форму и цвет его искусство продолжает жить.",
      tribute2: "Каждое изделие — это больше, чем просто предмет — это пространство, где искусство становится осязаемым покоем, теплом и светом.",
      tribute3: "В игре текстур, линий и тонов происходит превращение:",
      memory: "из воспоминаний — стиль,",
      emotion: "из эмоций — форма,",
      love: "из любви — уют.",
      tribute4: "Я создаю текстиль, чтобы дом стал отражением души.",
      values: "Наши ценности",
      craftsmanship: "Мастерство",
      craftsmanshipDesc: "Каждое изделие ZOEN тщательно изготовлено с вниманием к деталям, что обеспечивает исключительное качество на долгие годы.",
      sustainability: "Устойчивое развитие",
      sustainabilityDesc: "Мы привержены ответственному выбору материалов и производственным методам, минимизирующим воздействие на окружающую среду и увеличивающим срок службы продукции.",
      timeless: "Вечный дизайн",
      timelessDesc: "Мы создаём вещи вне времени, предлагая стиль, который будет актуален долгие годы.",
      journey: "Присоединяйтесь к нашему пути",
      journeyDesc: "Ощутите разницу ZOEN и преобразите свой дом с нашей премиальной коллекцией аксессуаров.",
      shop: "Смотреть коллекцию"
    }
  }[language]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-linen py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-medium mb-6">{t.tribute}</h1>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>{t.tribute1}</p>
                <p>{t.tribute2}</p>
                <p>{t.tribute3}</p>
                <div className="pl-6 space-y-2 italic">
                  <p>{t.memory}</p>
                  <p>{t.emotion}</p>
                  <p>{t.love}</p>
                </div>
                <p>{t.tribute4}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-soft-gray/50 translate-x-4 translate-y-4 rounded-lg"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="ZOEN Studio"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center">{t.values}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-linen">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-medium mb-4">{t.craftsmanship}</h3>
              <p className="text-muted-foreground">{t.craftsmanshipDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-linen">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-medium mb-4">{t.sustainability}</h3>
              <p className="text-muted-foreground">{t.sustainabilityDesc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-linen">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-medium mb-4">{t.timeless}</h3>
              <p className="text-muted-foreground">{t.timelessDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">{t.journey}</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">{t.journeyDesc}</p>
          <Button asChild size="lg" className="px-8">
            <Link href="/shop">{t.shop}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
