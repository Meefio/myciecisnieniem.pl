import Link from 'next/link'
import { StickyContactBar } from '@/components/CTA'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top banner - matching main site */}
      <div className="bg-bg-gray border-b border-stroke/20 hidden sm:block">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-end gap-6 text-sm text-white/60">
          <a href="mailto:kontakt@myciecisnieniem.pl" className="hover:text-white transition-colors flex items-center gap-2">
            <img src="/images/At-sign-min.png" alt="" className="w-4 h-4 opacity-70" />
            kontakt@myciecisnieniem.pl
          </a>
          <a href="tel:507296296" className="hover:text-white transition-colors flex items-center gap-2">
            <img src="/images/iPhone-14-min.png" alt="" className="w-4 h-4 opacity-70" />
            507-296-296
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md border-b border-stroke-blue/20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/Logo-Under-Pressure-min.png" alt="Under Pressure - Mycie Cisnieniowe" className="h-12 w-auto" />
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-white/70 hover:text-primary transition-colors font-medium">
              Strona glowna
            </Link>
            <Link href="/blog" className="text-sm text-primary font-medium">
              Blog
            </Link>
            <a
              href="tel:507296296"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              507-296-296
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="min-h-screen bg-bg text-white">
        {children}
      </main>

      {/* Footer - matching main site design */}
      <footer className="bg-bg-gray border-t-2 border-b-2 border-stroke-blue/40">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <Link href="/">
                <img src="/images/Logo-Under-Pressure-min.png" alt="Under Pressure" className="h-16 w-auto mb-4" />
              </Link>
            </div>

            {/* Informacje */}
            <div className="flex flex-col items-start">
              <p className="text-lg font-semibold text-white mb-3">Informacje</p>
              <Link href="/" className="text-white/70 hover:text-primary transition-colors mt-2">Home</Link>
              <Link href="/blog" className="text-white/70 hover:text-primary transition-colors mt-2">Blog</Link>
              <Link href="/#uslugi" className="text-white/70 hover:text-primary transition-colors mt-2">Uslugi</Link>
              <Link href="/#galeria" className="text-white/70 hover:text-primary transition-colors mt-2">Galeria</Link>
            </div>

            {/* Znajdz nas */}
            <div className="flex flex-col items-start">
              <p className="text-lg font-semibold text-white mb-3">Znajdz nas</p>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://www.facebook.com/underpressureczyszczenie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <img src="/images/Facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a
                  href="https://maps.app.goo.gl/1U8RDFMq1gmQi6j57"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Google Maps"
                >
                  <img src="/images/Google-Maps-Old.png" alt="Google Maps" className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Prawne */}
            <div className="flex flex-col items-start">
              <p className="text-lg font-semibold text-white mb-3">Prawne</p>
              <Link href="/polityka-prywatnosci" className="text-white/70 hover:text-primary transition-colors mt-2">
                Polityka prywatnosci
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stroke/20">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-sm text-white/40">
              {new Date().getFullYear()} &copy; <a href="https://myciecisnieniem.pl" className="hover:text-primary transition-colors">myciecisnieniem.pl</a> / All Right Reserved
            </p>
            <p className="text-sm text-white/40">
              Projekt i realizacja:{' '}
              <a href="https://nextgensites.pl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                NextGenSites.pl
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky contact bar */}
      <StickyContactBar />
    </>
  )
}
