"use client"

import { MapPin, Phone } from "lucide-react"

export function Location() {
	return (
		<section id="location" className="py-24 bg-gray-950">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-white mb-4">
						Onde Estamos
					</h2>
					<p className="text-muted-foreground">
						Venha nos fazer uma visita ou entre em contato.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Contact Info */}
					<div className="space-y-6">
						<div className="flex flex-col items-center lg:items-start p-6 bg-card/50 rounded-2xl border border-border">
							<div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
								<MapPin className="h-5 w-5" />
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Endereço</h3>
							<p className="text-muted-foreground text-center lg:text-left">
								Rua Sebastião Leandro de Castro, 57<br />
								Centro, Medeiros - MG<br />
								Brasil
							</p>
						</div>

						<div className="flex flex-col items-center lg:items-start p-6 bg-card/50 rounded-2xl border border-border">
							<div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4">
								<Phone className="h-5 w-5" />
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Contato</h3>
							<p className="text-muted-foreground">
								(37) 98803-1738
							</p>
							<span className="text-xs text-muted-foreground mt-1">WhatsApp e Ligações</span>
						</div>
					</div>

					{/* Map */}
					<div className="lg:col-span-2 h-[400px] rounded-2xl overflow-hidden border border-border shadow-xl">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d234.33163661081747!2d-46.22297009266308!3d-19.99566008363133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU5JzQ0LjQiUyA0NsKwMTMnMjIuMiJX!5e0!3m2!1spt-BR!2sbr!4v1771104883054!5m2!1spt-BR!2sbr"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="grayscale hover:grayscale-0 transition-all duration-500"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
