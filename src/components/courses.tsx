"use client"

import { motion } from "framer-motion"
import { BookOpen, Layers, Monitor, PenTool } from "lucide-react"
import { Card3D } from "./card-3d"

const courses = [
	{
		title: "Informática Básica",
		description: "Domine o essencial do computador e internet para o dia a dia.",
		icon: Monitor,
		delay: 0.1,
	},
	{
		title: "Pacote Office",
		description: "Excel, Word, PowerPoint e Publisher. Fundamental para o mercado de trabalho.",
		icon: Layers,
		delay: 0.2,
	},
	{
		title: "Digitação",
		description: "Aumente sua produtividade e velocidade com técnicas profissionais.",
		icon: BookOpen,
		delay: 0.3,
	},
	{
		title: "Photoshop",
		description: "Edição de imagens e criação de artes digitais profissionais.",
		icon: PenTool,
		delay: 0.4,
	},
]

export function Courses() {
	return (
		<section id="courses" className="py-24 bg-secondary/30 relative">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
						Nossos Cursos
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Prepare-se para o futuro com nossos cursos práticos e certificados.
						Do básico ao avançado, temos o caminho certo para você.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{courses.map((course, index) => (
						<motion.div
							key={course.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: course.delay, duration: 0.5 }}
							className="perspective-1000"
						>
							<Card3D className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-colors shadow-lg shadow-black/20">
								<div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
									<course.icon className="h-6 w-6" />
								</div>
								<h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{course.description}
								</p>
							</Card3D>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
