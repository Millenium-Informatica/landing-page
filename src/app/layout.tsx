import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
	title: 'Millenium Informática - Cursos e Serviços em Medeiros',
	description: 'Cursos de informática e serviços de impressão, xerox, personalizados e muito mais em Medeiros, MG. A informática ao seu alcance.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
			<body className="font-sans">{children}</body>
		</html>
	)
}
