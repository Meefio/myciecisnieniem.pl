export default function CTA() {
  return (
    <div className="my-12 bg-bg-gray border-2 border-stroke-blue/30 rounded-2xl p-8 text-center">
      <h3 className="text-xl font-bold text-white mb-2">Potrzebujesz profesjonalnego czyszczenia?</h3>
      <p className="text-white/60 mb-6">Zadzwon lub wypelnij formularz — wycena gratis!</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="tel:507296296"
          className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
          507-296-296
        </a>
        <a
          href="/#kontakt"
          className="inline-flex items-center gap-2 border-2 border-primary text-primary font-medium px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
        >
          Wyslij zapytanie
        </a>
      </div>
    </div>
  )
}

export function StickyContactBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-gray/95 backdrop-blur border-t border-stroke/20 p-3 flex gap-3">
      <a
        href="tel:507296296"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-medium py-3 rounded-lg text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
        Zadzwon
      </a>
      <a
        href="/#kontakt"
        className="flex-1 flex items-center justify-center gap-2 border border-primary text-primary font-medium py-3 rounded-lg text-sm"
      >
        Formularz
      </a>
    </div>
  )
}
