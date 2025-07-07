"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const { language } = useLanguage()
  const t = {
    en: {
      contactUs: "Contact Us",
      contactDesc: "We'd love to hear from you. Whether you have a question about our products, need assistance with an order, or want to discuss a collaboration, our team is here to help.",
      getInTouch: "Get in Touch",
      getInTouchDesc: "Fill out the form and our team will get back to you within 24 hours.",
      emailUs: "Email Us",
      callUs: "Call Us",
      messageSent: "Message Sent!",
      messageSentDesc: "Thank you for reaching out. We'll get back to you within 24 hours.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message"
    },
    cz: {
      contactUs: "Kontaktujte nás",
      contactDesc: "Budeme rádi, když se nám ozvete. Máte-li dotaz na naše produkty, potřebujete pomoc s objednávkou nebo chcete navázat spolupráci, náš tým je tu pro vás.",
      getInTouch: "Spojte se s námi",
      getInTouchDesc: "Vyplňte formulář a náš tým se vám ozve do 24 hodin.",
      emailUs: "Napište nám e-mail",
      callUs: "Zavolejte nám",
      messageSent: "Zpráva odeslána!",
      messageSentDesc: "Děkujeme za vaši zprávu. Ozveme se vám do 24 hodin.",
      firstName: "Jméno",
      lastName: "Příjmení",
      email: "E-mail",
      message: "Zpráva",
      sendMessage: "Odeslat zprávu"
    },
    ru: {
      contactUs: "Связаться с нами",
      contactDesc: "Мы будем рады получить от вас сообщение. Если у вас есть вопрос о наших товарах, нужна помощь с заказом или вы хотите обсудить сотрудничество, наша команда всегда готова помочь.",
      getInTouch: "Связаться",
      getInTouchDesc: "Заполните форму, и наша команда свяжется с вами в течение 24 часов.",
      emailUs: "Написать на e-mail",
      callUs: "Позвонить нам",
      messageSent: "Сообщение отправлено!",
      messageSentDesc: "Спасибо за обращение. Мы свяжемся с вами в течение 24 часов.",
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Электронная почта",
      message: "Сообщение",
      sendMessage: "Отправить сообщение"
    }
  }[language]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    // For this example, we'll just simulate a successful submission
    setIsSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-linen py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">{t.contactUs}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contactDesc}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-medium mb-6">{t.getInTouch}</h2>
              <p className="text-muted-foreground mb-8">
                {t.getInTouchDesc}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">{t.emailUs}</h3>
                  <p className="text-muted-foreground">hello@zoen.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">{t.callUs}</h3>
                  <p className="text-muted-foreground">+420 607 717 228</p>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="bg-cream p-12 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linen mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-medium mb-4">{t.messageSent}</h2>
                  <p className="text-muted-foreground">
                    {t.messageSentDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t.firstName}</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t.lastName}</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {t.sendMessage}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
