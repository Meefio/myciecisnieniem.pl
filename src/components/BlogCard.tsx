import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { getReadingTime } from '@/components/utils'

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
      className="group block bg-bg-gray rounded-xl overflow-hidden border border-stroke/10 hover:border-primary/30 transition-all duration-300"
    >
      {post.mainImage && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(600).height(340).quality(80).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-3">
            {post.categories.map((cat) => (
              <span key={cat._id} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {cat.title}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm text-white/60 mb-3 line-clamp-2">{post.excerpt}</p>
        )}

        <div className="flex items-center gap-3 text-xs text-white/40">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('pl-PL', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      </div>
    </Link>
  )
}
