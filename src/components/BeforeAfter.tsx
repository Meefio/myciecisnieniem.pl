'use client'

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { urlFor } from '@/sanity/lib/image'

type BeforeAfterItem = {
  title?: string
  before?: any
  after?: any
}

export default function BeforeAfterGallery({ items }: { items: BeforeAfterItem[] }) {
  if (!items || items.length === 0) return null

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Efekty naszej pracy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-stroke/20">
            {item.before && item.after && (
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={urlFor(item.before).width(600).height(400).url()}
                    alt="Przed"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={urlFor(item.after).width(600).height(400).url()}
                    alt="Po"
                  />
                }
                style={{ height: '300px' }}
              />
            )}
            {item.title && (
              <p className="text-sm text-white/60 p-3 bg-bg-gray">{item.title}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
