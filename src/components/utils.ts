import type { PortableTextBlock } from 'next-sanity'

export function getReadingTime(body: PortableTextBlock[] | undefined): number {
  if (!body) return 1
  const text = body
    .filter((block): block is PortableTextBlock => block._type === 'block')
    .map((block) => block.children?.map((child: any) => child.text).join(' ') || '')
    .join(' ')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}
