"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { AnimatedGrid } from "./animated-grid"
import { FloatingIcons } from "./floating-icons"

export function Hero() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-24 text-center">
			<AnimatedGrid />
			<FloatingIcons />
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative z-10 max-w-4xl"
			>
				<div className="mx-auto mb-8 w-64 md:w-80">
					<Image
						src="/logo-phrase.png"
						alt="Millenium Informática"
						width={500}
						height={200}
						priority
						className="h-auto w-full drop-shadow-2xl filter"
					/>
				</div>

				<h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
					<span className="block">Tradição e Qualidade</span>
					<span className="text-gradient block mt-2">em Medeiros</span>
				</h1>

				<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
					Sua parceira completa em tecnologia. Cursos profissionalizantes e serviços
					personalizados para você e sua empresa.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="#courses"
						className="group flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
					>
						Conhecer Cursos
						<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</a>
					<a
						href="#services"
						className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/50 px-8 py-3 text-lg font-semibold text-gray-300 transition-all hover:border-gray-600 hover:bg-gray-800"
					>
						Ver Serviços
					</a>
				</div>
			</motion.div>
		</section>
	)
}
