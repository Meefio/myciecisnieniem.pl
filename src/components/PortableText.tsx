import { PortableText as SanityPortableText, type PortableTextComponents } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).quality(80).url()}
            alt={value.alt || ''}
            width={800}
            height={500}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-sm text-white/50 mt-2 text-center">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ value, children }) => {
      const target = value?.blank ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary underline hover:text-stroke-blue transition-colors"
        >
          {children}
        </a>
      )
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 id={typeof children === 'string' ? children : undefined} className="text-2xl font-bold mt-10 mb-4 text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-8 mb-3 text-primary">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-white/70">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-white/85">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4 space-y-1 text-white/85">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4 space-y-1 text-white/85">{children}</ol>,
  },
}

export default function PostBody({ value }: { value: any[] }) {
  return (
    <div className="prose-invert max-w-none">
      <SanityPortableText value={value} components={components} />
    </div>
  )
}
