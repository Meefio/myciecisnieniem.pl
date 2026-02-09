import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { POST_QUERY, RELATED_POSTS_QUERY, ALL_SLUGS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import PostBody from '@/components/PortableText'
import BeforeAfterGallery from '@/components/BeforeAfter'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTA from '@/components/CTA'
import BlogCard from '@/components/BlogCard'
import { JsonLd } from '@/components/JsonLd'
import { getReadingTime } from '@/components/utils'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await client.fetch(ALL_SLUGS_QUERY)
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })
  if (!post) return { title: 'Nie znaleziono' }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://myciecisnieniem.pl/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      url: `https://myciecisnieniem.pl/blog/${slug}`,
      siteName: 'myciecisnieniem.pl',
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.mainImage?.alt || post.title }] : [],
      locale: 'pl_PL',
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })
  if (!post) notFound()

  const readingTime = getReadingTime(post.body)

  // Fetch related posts
  const categoryIds = post.categories?.map((c: any) => c._id) || []
  const relatedPosts = categoryIds.length > 0
    ? await client.fetch(RELATED_POSTS_QUERY, { currentSlug: slug, categoryIds })
    : []

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined

  return (
    <article className="bg-bg">
      {/* Hero section */}
      {post.mainImage && (
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(1920).height(800).quality(85).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/60 to-transparent" />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 -mt-24 relative z-10 pb-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Strona glowna', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]} />

        {/* Header */}
        <header className="mb-10">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.categories.map((cat: any) => (
                <span key={cat._id} className="text-xs bg-primary/15 text-primary px-3 py-1 rounded-full font-medium">
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 pb-6 border-b-2 border-stroke-blue/20">
            {post.author?.name && (
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                {post.author.name}
              </span>
            )}
            <time dateTime={post.publishedAt} className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {new Date(post.publishedAt).toLocaleDateString('pl-PL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {readingTime} min czytania
            </span>
          </div>
        </header>

        {/* Post body */}
        {post.body && <PostBody value={post.body} />}

        {/* Before/After gallery */}
        {post.beforeAfter && post.beforeAfter.length > 0 && (
          <BeforeAfterGallery items={post.beforeAfter} />
        )}

        {/* CTA */}
        <CTA />

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && <FAQ items={post.faq} />}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pb-4">
            <div className="text-center mb-8">
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Czytaj dalej</p>
              <h2 className="text-2xl font-bold">Powiazane wpisy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp: any) => (
                <BlogCard key={rp._id} post={rp} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* JSON-LD: BlogPosting */}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: imageUrl,
        datePublished: post.publishedAt,
        author: post.author ? {
          '@type': 'Person',
          name: post.author.name,
        } : undefined,
        publisher: {
          '@type': 'LocalBusiness',
          '@id': 'https://myciecisnieniem.pl',
          name: 'myciecisnieniem.pl',
          telephone: '+48 507-296-296',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Piaseczno',
            postalCode: '05-500',
            addressCountry: 'PL',
          },
        },
        mainEntityOfPage: `https://myciecisnieniem.pl/blog/${slug}`,
      }} />

      {/* JSON-LD: BreadcrumbList */}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Strona glowna', item: 'https://myciecisnieniem.pl' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://myciecisnieniem.pl/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://myciecisnieniem.pl/blog/${slug}` },
        ],
      }} />

      {/* JSON-LD: FAQPage (if post has FAQ) */}
      {post.faq && post.faq.length > 0 && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item: any) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }} />
      )}
    </article>
  )
}
