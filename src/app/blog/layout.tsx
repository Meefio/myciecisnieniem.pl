import Link from 'next/link'
import { StickyContactBar } from '@/components/CTA'
import BlogHeader from '@/components/BlogHeader'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogHeader />

      {/* Content */}
      <main className="min-h-screen bg-bg text-white">
        {children}
      </main>

      {/* Footer - matching main site design */}
      <footer className="bg-bg-gray border-t-2 border-b-2 border-stroke-blue">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-0">
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
              <a
                href="https://www.iubenda.com/privacy-policy/53338963/cookie-policy"
                className="text-white/70 hover:text-primary transition-colors mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polityka plikow cookie
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto px-4 mt-5 py-4 border-t border-stroke/20 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-white/40">
            {new Date().getFullYear()} &copy; <a href="https://myciecisnieniem.pl" className="hover:text-primary transition-colors">myciecisnieniem.pl</a> / All Right Reserved
          </p>
          <p className="text-[10px] text-white/40 flex items-center gap-1">
            Projekt i realizacja:{' '}
            <img src="/images/logo-nextgensites.png" alt="NextGenSites Logo" className="h-4 w-auto" />
            <a href="https://nextgensites.pl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              NextGenSites.pl
            </a>
          </p>
        </div>
      </footer>

      {/* Mobile sticky contact bar */}
      <StickyContactBar />
    </>
  )
}
