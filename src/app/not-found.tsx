import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl mb-8 text-white/60">Strona nie zostala znaleziona</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Strona glowna
          </Link>
          <Link href="/blog" className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
