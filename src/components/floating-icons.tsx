"use client"

import { motion } from "framer-motion"
import { Cpu, HardDrive, Keyboard, Laptop, Monitor, Mouse, Printer, Wifi } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingIcons() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	const icons = [Monitor, Cpu, Keyboard, Mouse, Printer, Wifi, HardDrive, Laptop]

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
			{icons.map((Icon, i) => (
				<motion.div
					key={i}
					initial={{
						opacity: 0,
						x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
						y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
					}}
					animate={{
						opacity: [0.1, 0.3, 0.1],
						y: ["0%", "-20%", "0%"],
						rotate: [0, 360],
					}}
					transition={{
						duration: 10 + Math.random() * 20,
						repeat: Infinity,
						ease: "linear",
						delay: Math.random() * 5,
					}}
					className="absolute text-blue-500/10"
				>
					<Icon size={40 + Math.random() * 60} />
				</motion.div>
			))}
		</div>
	)
}
