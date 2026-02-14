"use client"

import { motion } from "framer-motion"
import { Copy, FileText, Image, Printer, ScanLine, Scissors } from "lucide-react"

const services = [
	{ name: "Impressões P&B e Coloridas", icon: Printer },
	{ name: "Xerox e Cópias", icon: Copy },
	{ name: "Scanner de Documentos", icon: ScanLine },
	{ name: "Boletos e 2ª Via", icon: FileText },
	{ name: "Adesivos Personalizados", icon: Image },
	{ name: "Artes em Papel e Convites", icon: Scissors },
]

export function Services() {
	return (
		<section id="services" className="py-24 bg-background relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
			<div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[100px]" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
							Serviços Personalizados <br />
							<span className="text-primary">Para Você e Sua Empresa</span>
						</h2>
						<p className="text-muted-foreground text-lg mb-8 leading-relaxed">
							Além de ensino de qualidade, oferecemos uma gráfica rápida completa.
							Resolvemos suas necessidades do dia a dia com agilidade e precisão.
						</p>

						<div className="grid sm:grid-cols-2 gap-4">
							{services.map((service, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									// transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
									className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-border/30 hover:border-primary/50 transition-colors cursor-default"
								>
									<service.icon className="h-5 w-5 text-blue-400" />
									<span className="text-gray-200 font-medium">{service.name}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative h-[400px] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center group"
					>
						{/* Placeholder for service image/collage - using abstract for now */}
						<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-all transform group-hover:scale-105 duration-300" />
						<div className="relative z-10 text-center p-8 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10">
							<h3 className="text-2xl font-bold text-white mb-2">Qualidade Garantida</h3>
							<p className="text-gray-300">Em cada impressão, em cada detalhe.</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
