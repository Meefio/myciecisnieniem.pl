import Link from 'next/link'
import { StickyContactBar } from '@/components/CTA'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-stroke/20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Mycie Cisnieniem" className="h-10 w-auto" />
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
              Strona glowna
            </Link>
            <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
              Blog
            </Link>
            <a
              href="tel:507296296"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              507-296-296
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="min-h-screen bg-bg text-white">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-bg-gray border-t border-stroke/20 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Mycie Cisnieniem" className="h-8 w-auto" />
            </Link>
            <nav className="flex gap-6 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Strona glowna</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka prywatnosci</Link>
            </nav>
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} myciecisnieniem.pl
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky contact bar */}
      <StickyContactBar />
    </>
  )
}
