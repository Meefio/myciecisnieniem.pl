import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  mainImage?: any
  categories?: { _id: string; title: string; slug: { current: string } }[]
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group block bg-bg-gray rounded-xl overflow-hidden border-2 border-stroke/10 hover:border-stroke-blue/30 transition-all duration-300"
    >
      {post.mainImage && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(600).height(340).quality(80).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg-gray/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-5">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-3">
            {post.categories.map((cat) => (
              <span key={cat._id} className="text-xs bg-primary/15 text-primary px-3 py-1 rounded-full font-medium">
                {cat.title}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm text-white/60 mb-4 line-clamp-2">{post.excerpt}</p>
        )}

        <div className="flex items-center justify-between text-xs text-white/40 pt-3 border-t border-stroke/10">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('pl-PL', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span className="text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Czytaj
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
