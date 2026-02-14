import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-border">
      <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center">
								<Image src="/logo-phrase.png" alt="Logo" width={130} height={130} />
        <p className="text-muted-foreground mb-8 text-sm">
          Tradição e Qualidade servindo Medeiros e região.
        </p>
        <div className="h-px w-24 bg-border mx-auto mb-8" />
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Millenium Informática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
