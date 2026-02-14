"use client"

import { motion } from "framer-motion"

export function AnimatedGrid() {
	return (
		<div className="absolute inset-0 pointer-events-none z-0">
			<div
				className="absolute inset-0 z-0 bg-transparent [perspective:1000px] overflow-hidden"
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="absolute inset-0 top-[20%] w-full h-[200%] bg-grid-white/[0.05]"
					style={{
						transform: "rotateX(75deg) translateY(-20%)",
						backgroundSize: "60px 60px",
						backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
					}}
				>
					<div className="absolute inset-0 w-full h-full bg-gradient-to-t from-background via-transparent to-background" />
				</motion.div>
			</div>

			{/* Moving lines */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				{Array.from({ length: 20 }).map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-[2px] h-[40%] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
						style={{
							left: `${Math.random() * 100}%`,
							top: -100,
						}}
						animate={{
							top: ["0%", "100%"],
							opacity: [0, 1, 0]
						}}
						transition={{
							duration: Math.random() * 3 + 2,
							repeat: Infinity,
							ease: "linear",
							delay: Math.random() * 5
						}}
					/>
				))}
			</div>
		</div>
	)
}
