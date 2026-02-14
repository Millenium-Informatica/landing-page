"use client"

import { motion } from "framer-motion"
import { Check, Clock } from "lucide-react"

const plans = [
	{
		frequency: "2x na Semana",
		price: "110,00",
		description: "Ideal para quem tem a rotina mais corrida.",
		features: ["1 hora de duração cada aula", "Aulas 100% práticas", "Horários flexíveis", "Certificado incluso"],
		highlight: false,
		delay: 0.1,
	},
	{
		frequency: "3x na Semana",
		price: "150,00",
		description: "O equilíbrio perfeito para aprender rápido.",
		features: ["1 hora de duração cada aula", "Aulas 100% práticas", "Horários flexíveis", "Certificado incluso"],
		highlight: true,
		delay: 0.2,
	},
	{
		frequency: "4x na Semana",
		price: "190,00",
		description: "Imersão total para domínio completo das ferramentas.",
		features: ["1 hora de duração cada aula", "Aulas 100% práticas", "Horários flexíveis", "Certificado incluso"],
		highlight: false,
		delay: 0.3,
	},
]

export function Pricing() {
	return (
		<section id="pricing" className="py-24 bg-background relative overflow-hidden">
			{/* Background Blobs */}
			<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-block px-4 py-1.5 mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
					>
						Investimento no seu Futuro
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4"
					>
						Planos e Horários
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-muted-foreground max-w-2xl mx-auto"
					>
						Escolha a frequência que melhor se adapta à sua rotina.
						Todas as opções incluem nossa metodologia 100% prática.
					</motion.p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{plans.map((plan, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: plan.delay }}
							className={`relative rounded-2xl p-8 border ${plan.highlight
								? "bg-blue-950/20 border-blue-500/50 shadow-2xl shadow-blue-500/10"
								: "bg-card/50 border-border/50 hover:border-border transition-colors"
								} flex flex-col`}
						>
							{plan.highlight && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
									Mais Popular
								</div>
							)}

							<div className="mb-8">
								<h3 className="text-lg font-semibold text-white mb-2">{plan.frequency}</h3>
								<div className="flex items-baseline gap-1">
									<span className="text-sm text-muted-foreground">R$</span>
									<span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
									<span className="text-muted-foreground">/mês</span>
								</div>
								<p className="text-sm text-muted-foreground mt-4">{plan.description}</p>
							</div>

							<ul className="space-y-4 mb-8 flex-1">
								{plan.features.map((feature, i) => (
									<li key={i} className="flex items-start gap-3">
										<div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? "bg-blue-500/20 text-blue-400" : "bg-gray-800 text-gray-400"}`}>
											<Check className="w-3 h-3" />
										</div>
										<span className="text-sm text-gray-300">{feature}</span>
									</li>
								))}
							</ul>

							<a
								href={`https://wa.me/5537988031738?text=Olá, gostaria de saber mais sobre o plano de ${plan.frequency}`}
								target="_blank"
								rel="noopener noreferrer"
								className={`block w-full py-3 rounded-xl text-center font-semibold transition-all ${plan.highlight
									? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25"
									: "bg-white/10 hover:bg-white/20 text-white"
									}`}
							>
								Começar Agora
							</a>
						</motion.div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-2xl">
						<Clock className="w-5 h-5 text-green-500" />
						<span className="text-green-400 font-semibold">Aulas com 1 hora de duração</span>
						<span className="mx-2 text-gray-600">|</span>
						<span className="text-green-400 font-bold">100% Práticas</span>
					</div>
				</div>
			</div>
		</section>
	)
}
