"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [preferences, setPreferences] = useState({
    newProducts: true,
    exclusiveOffers: false,
    events: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("https://formspree.io/f/mqaqenyo", {
        method: "POST",
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          interests: Object.entries(preferences)
            .filter(([_, checked]) => checked)
            .map(([key]) => key)
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
        setFirstName("")
        setLastName("")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handlePreferenceChange = (preference: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [preference]: !prev[preference] }))
  }

  return (
    <div className="pt-20">
      <section className="bg-linen py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-center">Join Our Newsletter</h1>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Subscribe to receive updates on new collections, exclusive offers, and design inspiration.
            </p>

            {isSubmitted ? (
              <div className="bg-cream p-12 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linen mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-medium mb-4">Thank You for Subscribing!</h2>
                <p className="text-muted-foreground">
                  You've been added to our mailing list and will now be among the first to hear about new collections,
                  special offers, and events.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-sm font-medium">I'm interested in:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newProducts"
                        name="interests"
                        value="new_products"
                        checked={preferences.newProducts}
                        onCheckedChange={() => handlePreferenceChange("newProducts")}
                      />
                      <Label htmlFor="newProducts" className="font-normal">
                        New product launches
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="exclusiveOffers"
                        name="interests"
                        value="exclusive_offers"
                        checked={preferences.exclusiveOffers}
                        onCheckedChange={() => handlePreferenceChange("exclusiveOffers")}
                      />
                      <Label htmlFor="exclusiveOffers" className="font-normal">
                        Exclusive offers and promotions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="events"
                        name="interests"
                        value="events"
                        checked={preferences.events}
                        onCheckedChange={() => handlePreferenceChange("events")}
                      />
                      <Label htmlFor="events" className="font-normal">
                        Events and collaborations
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Subscribe
                </Button>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from ZOEN.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
