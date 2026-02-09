'use client'

import { useState, useRef, useCallback } from 'react'
import { urlFor } from '@/sanity/lib/image'

type BeforeAfterItem = {
  title?: string
  before?: any
  after?: any
}

function BeforeAfterSlider({ before, after, title, onImageClick }: {
  before: string
  after: string
  title?: string
  onImageClick?: (src: string, alt: string) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, x)))
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, x)))
  }, [])

  return (
    <div className="rounded-xl overflow-hidden border border-stroke/20 group/card">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden cursor-col-resize select-none"
        style={{ height: '300px' }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => { setIsHovering(false); setPosition(50) }}
      >
        {/* After image (background) */}
        <img
          src={after}
          alt="Po"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="Przed"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8L6 6M4 8L6 10M4 8H12M12 8L10 6M12 8L10 10" stroke="#0f0f10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className={`absolute top-3 left-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded z-10 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-70'}`}>
          PRZED
        </div>
        <div className={`absolute top-3 right-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded z-10 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-70'}`}>
          PO
        </div>

        {/* Enlarge button */}
        {onImageClick && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onImageClick(after, title || 'Realizacja')
            }}
            className="absolute bottom-3 right-3 z-20 bg-black/60 hover:bg-primary text-white p-2 rounded-lg transition-all opacity-0 group-hover/card:opacity-100"
            title="Powieksz"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        )}
      </div>
      {title && (
        <p className="text-sm text-white/60 p-3 bg-bg-gray">{title}</p>
      )}
    </div>
  )
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: {
  images: { src: string; alt: string; beforeSrc?: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const current = images[currentIndex]
  const [showBefore, setShowBefore] = useState(false)

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors text-3xl leading-none"
        >
          &times;
        </button>

        {/* Image */}
        <div className="relative rounded-xl overflow-hidden bg-bg-gray">
          <img
            src={showBefore && current.beforeSrc ? current.beforeSrc : current.src}
            alt={current.alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />

          {/* Before/After toggle */}
          {current.beforeSrc && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                onClick={() => setShowBefore(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${showBefore ? 'bg-primary text-white' : 'bg-black/60 text-white/70 hover:text-white'}`}
              >
                Przed
              </button>
              <button
                onClick={() => setShowBefore(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!showBefore ? 'bg-primary text-white' : 'bg-black/60 text-white/70 hover:text-white'}`}
              >
                Po
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className={`absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-primary transition-colors ${currentIndex === 0 ? 'opacity-30 pointer-events-none' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={onNext}
              className={`absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-primary transition-colors ${currentIndex === images.length - 1 ? 'opacity-30 pointer-events-none' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </>
        )}

        {/* Counter */}
        <div className="text-center text-white/50 text-sm mt-3">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfterGallery({ items }: { items: BeforeAfterItem[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!items || items.length === 0) return null

  const lightboxImages = items
    .filter(item => item.before && item.after)
    .map(item => ({
      src: urlFor(item.after).width(1200).height(800).url(),
      beforeSrc: urlFor(item.before).width(1200).height(800).url(),
      alt: item.title || 'Realizacja',
    }))

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  let validIndex = 0

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Efekty naszej pracy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => {
          if (!item.before || !item.after) return null
          const currentValidIndex = validIndex++
          return (
            <BeforeAfterSlider
              key={i}
              before={urlFor(item.before).width(600).height(400).url()}
              after={urlFor(item.after).width(600).height(400).url()}
              title={item.title}
              onImageClick={() => openLightbox(currentValidIndex)}
            />
          )
        })}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={() => setLightboxIndex(Math.max(0, lightboxIndex - 1))}
          onNext={() => setLightboxIndex(Math.min(lightboxImages.length - 1, lightboxIndex + 1))}
        />
      )}
    </section>
  )
}
