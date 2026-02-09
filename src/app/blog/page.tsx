import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY, POSTS_BY_CATEGORY_QUERY, CATEGORIES_QUERY } from '@/sanity/lib/queries'
import BlogCard from '@/components/BlogCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Porady, realizacje i wskazowki dotyczace profesjonalnego mycia cisnieniowego. Kostka brukowa, elewacja, dach i wiecej.',
  alternates: { canonical: 'https://myciecisnieniem.pl/blog' },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string }>
}) {
  const { kategoria } = await searchParams
  const [posts, categories] = await Promise.all([
    kategoria
      ? client.fetch(POSTS_BY_CATEGORY_QUERY, { categorySlug: kategoria })
      : client.fetch(POSTS_QUERY),
    client.fetch(CATEGORIES_QUERY),
  ])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Strona glowna', href: '/' },
        { label: 'Blog' },
      ]} />

      {/* Section header - matching main site style */}
      <div className="text-center mb-10">
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Wiedza i porady</p>
        <h1 className="text-4xl font-bold">Nasz Blog</h1>
      </div>

      {/* Category filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Link
            href="/blog"
            className={`text-sm px-5 py-2.5 rounded-full border-2 transition-all font-medium ${
              !kategoria
                ? 'bg-primary text-white border-primary'
                : 'border-stroke/30 text-white/60 hover:text-white hover:border-stroke-blue/50'
            }`}
          >
            Wszystkie
          </Link>
          {categories.map((cat: any) => (
            <Link
              key={cat._id}
              href={`/blog?kategoria=${cat.slug.current}`}
              className={`text-sm px-5 py-2.5 rounded-full border-2 transition-all font-medium ${
                kategoria === cat.slug.current
                  ? 'bg-primary text-white border-primary'
                  : 'border-stroke/30 text-white/60 hover:text-white hover:border-stroke-blue/50'
              }`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      )}

      {/* Posts grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-white/50 text-center py-20">
          {kategoria ? 'Brak wpisow w tej kategorii.' : 'Brak wpisow na blogu. Dodaj pierwszy wpis w panelu Sanity!'}
        </p>
      )}

      {/* JSON-LD */}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Blog - myciecisnieniem.pl',
        description: 'Porady i realizacje dotyczace mycia cisnieniowego',
        url: 'https://myciecisnieniem.pl/blog',
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Strona glowna', item: 'https://myciecisnieniem.pl' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://myciecisnieniem.pl/blog' },
        ],
      }} />
    </div>
  )
}
