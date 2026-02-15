import { Courses } from "@/components/courses"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Location } from "@/components/location"
import { Pricing } from "@/components/pricing"
import { Promotion } from "@/components/promotion"
import { Services } from "@/components/services"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Hero />
			<Courses />
			<Pricing />
			<Promotion />
			<Services />
			<Location />
			<Footer />
			<WhatsAppButton />
		</main>
	)
}
