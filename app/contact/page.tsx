"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

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
          <h1 className="text-4xl md:text-5xl font-medium mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, need assistance with an order,
            or want to discuss a collaboration, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-medium mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Email Us</h3>
                  <p className="text-muted-foreground">hello@zoen.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+420 123 456 789</p>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <div className="bg-cream p-12 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linen mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-medium mb-4">Message Sent!</h2>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
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
                    <Label htmlFor="email">Email</Label>
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
                    <Label htmlFor="message">Message</Label>
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
                    Send Message
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
