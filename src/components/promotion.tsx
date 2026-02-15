"use client"

import { motion } from "framer-motion"
import { Award, PartyPopper, UserPlus, Users } from "lucide-react"

export function Promotion() {
	return (
		<section className="relative py-24 overflow-hidden">
			{/* Background with Gold Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/20 to-black" />

			{/* Confetti/Party Decoration */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/50 bg-yellow-500/10 text-yellow-400 font-semibold mb-6"
					>
						<PartyPopper className="w-5 h-5" />
						<span>Comemorando 25 Anos de História</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6"
					>
						Promoção de Indicação <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-600">
							Você Ganha Presentes!
						</span>
					</motion.h2>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{/* Card 1: Former Students */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="relative group rounded-2xl p-8 border border-yellow-500/30 bg-gradient-to-br from-yellow-950/30 to-black hover:border-yellow-500/60 transition-all duration-300"
					>
						<div className="absolute -top-6 left-8 bg-yellow-500 text-black font-bold px-4 py-1 rounded-lg shadow-lg shadow-yellow-500/20">
							Ex-Alunos
						</div>

						<div className="h-14 w-14 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
							<Award className="w-8 h-8" />
						</div>

						<h3 className="text-2xl font-bold text-white mb-4">Indique e Ganhe Dinheiro</h3>
						<p className="text-gray-300 mb-6 leading-relaxed">
							Já fez nosso curso? Indique um novo aluno que se matricular e ganhe:
						</p>

						<div className="flex items-center gap-3">
							<span className="text-4xl font-bold text-yellow-400">R$ 60,00</span>
							<span className="text-sm text-yellow-500/80 font-medium">em dinheiro!</span>
						</div>
					</motion.div>

					{/* Card 2: New Students */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="relative group rounded-2xl p-8 border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-black hover:border-blue-500/60 transition-all duration-300"
					>
						<div className="absolute -top-6 left-8 bg-blue-600 text-white font-bold px-4 py-1 rounded-lg shadow-lg shadow-blue-600/20">
							Novos Alunos
						</div>

						<div className="h-14 w-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
							<UserPlus className="w-8 h-8" />
						</div>

						<h3 className="text-2xl font-bold text-white mb-4">Indique e Ganhe Aulas</h3>
						<p className="text-gray-300 mb-6 leading-relaxed">
							É aluno novo? Indique um amigo que se matricular e ganhe:
						</p>

						<div className="flex flex-col">
							<span className="text-4xl font-bold text-blue-400">1 Mês Grátis</span>
							<span className="text-sm text-blue-400/80 font-medium mt-1">equivalente a 10 aulas!</span>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
					className="mt-12 text-center"
				>
					<a
						href="https://wa.me/5537988031738?text=Olá, quero indicar um amigo para ganhar a promoção!"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-green-600/20 transition-all hover:scale-105"
					>
						<Users className="w-5 h-5" />
						Quero Indicar um Amigo
					</a>
					<p className="mt-4 text-sm text-muted-foreground">
						* Consulte o regulamento com a gente.
					</p>
				</motion.div>
			</div>
		</section>
	)
}
