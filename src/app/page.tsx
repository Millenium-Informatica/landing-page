import { Courses } from "@/components/courses"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Location } from "@/components/location"
import { Services } from "@/components/services"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Courses />
      <Services />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
