'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function HeroSection() {
  const { language } = useLanguage()
  const t = {
    en: {
      title: "Elevate Your Space with ZOEN",
      desc: "Premium home accessories crafted with care for the discerning customer. Our pillows blend luxury, comfort, and timeless design.",
      shop: "Shop Collection",
      newsletter: "Newsletter"
    },
    cz: {
      title: "Pozvedněte svůj domov se ZOEN",
      desc: "Prémiové bytové doplňky vyrobené s péčí pro náročné zákazníky. Naše polštáře spojují luxus, pohodlí a nadčasový design.",
      shop: "Prohlédnout kolekci",
      newsletter: "Newsletter"
    },
    ru: {
      title: "Украсьте свой дом с ZOEN",
      desc: "Премиальные аксессуары для дома, созданные с заботой для взыскательных клиентов. Наши подушки сочетают роскошь, комфорт и вечный дизайн.",
      shop: "Смотреть коллекцию",
      newsletter: "Newsletter"
    }
  }[language]

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="z-10 flex items-center justify-center w-full h-full absolute top-0 left-0 pointer-events-none -mt-32">
        <img
          src="/placeholder.webp?height=1080&width=1920"
          alt="Hero background"
          className="max-w-xl max-h-96 w-full h-auto mx-auto my-12 rounded-lg object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto flex h-full items-center px-4 mt-64">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-[#8b5733] sm:text-5xl md:text-6xl">
            {t.title}
          </h1>
          <p className="mt-6 text-lg text-[#8b5733]">
            {t.desc}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[150px] bg-[#8b5733] text-white hover:bg-[#a06a43] border-[#8b5733]">
              <Link href="/shop">{t.shop}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[150px] border-[#8b5733] text-[#8b5733] bg-transparent hover:bg-[#8b573310]"
            >
              <Link href="/newsletter">{t.newsletter}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
