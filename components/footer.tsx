'use client'

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { language } = useLanguage()
  const t = {
    en: {
      shop: "Shop",
      allProducts: "All Products",
      pillows: "Pillows",
      comingSoon: "Coming Soon",
      company: "Company",
      about: "About Us",
      contact: "Contact",
      newsletter: "Newsletter",
      newsletterDesc: "Subscribe to receive updates, access to exclusive deals, and more.",
      subscribe: "Subscribe",
      description: "Premium home and lifestyle products crafted with care for the discerning customer.",
      copyright: `© ${new Date().getFullYear()} ZOEN. All rights reserved.`
    },
    cz: {
      shop: "Obchod",
      allProducts: "Všechny produkty",
      pillows: "Polštáře",
      comingSoon: "Již brzy",
      company: "Společnost",
      about: "O nás",
      contact: "Kontakt",
      newsletter: "Newsletter",
      newsletterDesc: "Přihlaste se k odběru novinek, získejte exkluzivní nabídky a další.",
      subscribe: "Odebírat",
      description: "Prémiové produkty pro domov a životní styl, vytvořené s péčí pro náročné zákazníky.",
      copyright: `© ${new Date().getFullYear()} ZOEN. Všechna práva vyhrazena.`
    },
    ru: {
      shop: "Магазин",
      allProducts: "Все товары",
      pillows: "Подушки",
      comingSoon: "Скоро в продаже",
      company: "Компания",
      about: "О нас",
      contact: "Контакты",
      newsletter: "Newsletter",
      newsletterDesc: "Подпишитесь, чтобы получать обновления, эксклюзивные предложения и многое другое.",
      subscribe: "Подписаться",
      description: "Премиальные товары для дома и образа жизни, созданные с заботой для взыскательных клиентов.",
      copyright: `© ${new Date().getFullYear()} ZOEN. Все права защищены.`
    }
  }[language]

  // Add more padding to the Footer for a more luxurious feel

  return (
    <footer className="border-t border-border bg-linen">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4 text-center md:text-left">
            <div className="relative w-32 h-10 mx-auto md:mx-0">
              <Image
                src="/zoen-logo.svg"
                alt="ZOEN"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              {t.description}
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-medium uppercase tracking-wider">{t.shop}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:underline">
                  {t.allProducts}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=pillows" className="hover:underline">
                  {t.pillows}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=coming-soon" className="hover:underline">
                  {t.comingSoon}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-medium uppercase tracking-wider">{t.company}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-medium uppercase tracking-wider">{t.newsletter}</h4>
            <p className="text-sm text-muted-foreground">
              {t.newsletterDesc}
            </p>
            <form action="https://formspree.io/f/mqaqenyo" method="POST" className="flex flex-col sm:flex-row gap-2 max-w-xs mx-auto md:mx-0">
              <Input type="email" name="email" placeholder="Enter your email" className="bg-background" required />
              <Button type="submit" className="whitespace-nowrap">
                {t.subscribe}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
