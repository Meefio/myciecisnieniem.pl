# Blog myciecisnieniem.pl — Wizja i Plan Wdrożenia

**Autor:** Michał · **Data:** luty 2026 · **Stack:** Next.js 16 + Sanity CMS + Vercel

---

## Co buduję i dlaczego tak

Blog pod adresem **myciecisnieniem.pl/blog** — jako subdirectory istniejącej strony (one-page HTML). Subdirectory zamiast subdomeny, bo cały ruch i autorytet z bloga wzmacnia główną domenę. Google traktuje subdomenę jak osobną stronę — to traci sens przy małym biznesie lokalnym.

Blog jest **narzędziem do publikacji** — dostarczam funkcjonalną platformę, a treści (kategorie, wpisy, zdjęcia) tworzy już użytkownik samodzielnie przez panel Sanity Studio.

### Jak to działa dla osoby dodającej treści

Sanity Studio to edytor w przeglądarce (jak pisanie posta na Facebooku):

1. Wchodzisz na `myciecisnieniem.pl/studio`
2. Klikasz „Nowy wpis"
3. Wklejasz tekst, dodajesz zdjęcia drag & drop
4. Klikasz „Opublikuj" — gotowe

Nie trzeba znać się na programowaniu. Nie trzeba nic instalować.

### Stack i koszty

| Warstwa | Narzędzie | Koszt |
|---|---|---|
| Framework | Next.js 16 (App Router, Turbopack) | 0 zł |
| CMS | Sanity Free (10k dokumentów, ~5 GB zdjęć, CDN) | 0 zł |
| Hosting | Vercel Free | 0 zł |
| Domena | myciecisnieniem.pl (istniejąca) | — |

**Miesięczny koszt: 0 zł**

---

## Funkcjonalności bloga

### Rdzenny zestaw (MVP)

**Wpisy blogowe** — edytor rich text ze wstawianiem zdjęć w treści. Automatyczny slug, meta opis, zdjęcie główne. Każdy wpis może mieć galerię przed/po i sekcję FAQ.

**Galeria Przed/Po** — interaktywny slider, przesuwasz i widzisz efekt czyszczenia. Oryginalne zdjęcia realizacji to najsilniejszy sygnał jakości zarówno dla klientów jak i dla Google.

**Sekcja FAQ** — rozwijane pytania i odpowiedzi pod wpisem. Google i systemy AI cytują strony z dobrze ustrukturyzowanymi FAQ.

**Kategorie** — użytkownik tworzy je sam w Sanity (np. „Realizacje", „Poradniki", „Oferta" — lub cokolwiek innego). Blog wyświetla wpisy z możliwością filtrowania.

**Strona autora** — profil z bio, zdjęciem i doświadczeniem. Buduje sygnały E-E-A-T (Google nagradza strony z widocznym autorem i ekspertyzą).

**Strony obszarów obsługi** — opcjonalne podstrony per miasto/dzielnica. Użytkownik tworzy je kiedy chce, z unikalnymi treściami, zdjęciami i opiniami klientów z danego rejonu.

### Elementy UI na każdej stronie

**Spis treści** — automatycznie generowany z nagłówków H2/H3. Google używa go do wyświetlania linków do sekcji w wynikach.

**Breadcrumbs** — ścieżka nawigacji (Strona główna > Blog > Kategoria > Tytuł). Zwiększa klikalność w Google.

**Powiązane wpisy** — 3 wpisy z tej samej kategorii pod artykułem. Trzyma czytelnika na stronie.

**Czas czytania** — szacowany czas przy każdym wpisie.

**Przyciski kontaktowe (CTA)** — „Zamów bezpłatną wycenę" + „Zadzwoń" (click-to-call) + „WhatsApp" (link `wa.me/48xxx` z pre-filled wiadomością — zero kodu, zwykły `<a>` tag). Na mobile — stały pasek na dole ekranu.

**Udostępnianie** — Facebook + kopiuj link (natywne linki, bez JS, bez SDK).

---

## Optymalizacje

### 🤖 AI Search (Google AI Overviews, ChatGPT, Perplexity)

To jest **przewaga konkurencyjna 2025/2026** — większość lokalnych firm w ogóle tego nie robi.

- **Kapsułki odpowiedzi** — zwięzłe akapity (130–170 słów) pod nagłówkami H2, które AI może bezpośrednio zacytować
- **Schema markup JSON-LD** — dane strukturalne mówią AI czym jest strona, jakie usługi oferujesz, gdzie działasz. Strony ze schema mają ~73% wyższy wskaźnik cytowań w AI Overviews
- **Treści multi-modalne** — tekst + zdjęcia + FAQ + listy → 156% wyższy wskaźnik wyboru przez AI
- **Plik `llms.txt`** — dedykowany plik Markdown w root domeny, który wskazuje AI systemom najważniejsze strony i zasoby. Nowy standard (analogia do robots.txt ale dla AI). Firmy jak Anthropic, Vercel, Cloudflare już go implementują

### 🔍 SEO (tradycyjne Google)

- **Metadata API** — automatyczne metatagi, Open Graph (podgląd na FB/WhatsApp), canonical URL
- **Sitemap.xml** — dynamicznie generowana mapa strony
- **Robots.txt** — instrukcje dla robotów
- **Schema JSON-LD** — `BlogPosting`, `BreadcrumbList`, `FAQPage`, `LocalBusiness`, `Service`
- **Nagłówki H1–H3** — hierarchiczna struktura treści
- **Linkowanie wewnętrzne** — wpisy ↔ usługi ↔ strony miast
- **`next/image`** — automatyczna konwersja do AVIF/WebP, lazy loading, responsywne rozmiary

### 📍 Local SEO / Geo

- **Strony miast** — unikalna podstrona per obsługiwany obszar z własnymi treściami i zdjęciami
- **Schema `LocalBusiness`** — typ `HomeAndConstructionBusiness` z adresem, telefonem, godzinami, `areaServed`
- **Schema `Service`** — opis usług z obszarem i cenami
- **Lokalne słowa kluczowe** — „mycie ciśnieniowe [miasto]" w treści, URL, nagłówkach

### ⚡ Wydajność (Core Web Vitals)

Tylko ~44% stron spełnia wymagania Google. Next.js 16 + Sanity CDN daje to „za darmo":

- **Turbopack** (domyślny bundler w Next.js 16) — szybsze buildy
- **Static Generation / ISR** — strony pre-renderowane, serwowane z CDN
- **`next/image`** + Sanity CDN — zdjęcia optymalizowane automatycznie
- **`next/font`** — czcionki bez layout shift
- **React Server Components** — minimalny JavaScript w przeglądarce

### 🛡️ E-E-A-T (Experience, Expertise, Authority, Trust)

- Strona autora z bio, zdjęciem, stażem
- Oryginalne zdjęcia przed/po (doświadczenie z pierwszej ręki)
- Dane firmy: NIP, adres, telefon, opinie klientów

---

---

# PLAN IMPLEMENTACJI

> Poniżej: instrukcje dla Claude Code. Cel: działający blog w ~2 dni.

---

## Krok 0 — Środowisko i MCP

### Wymagania

```bash
node --version   # >= 20.9.0 (wymaganie Next.js 16)
pnpm --version   # lub npm
```

### MCP Servers dla Claude Code

```json
// ~/.claude/mcp_servers.json
{
  "mcpServers": {
    "sanity": {
      "command": "npx",
      "args": ["-y", "@sanity/mcp-server"],
      "env": {
        "SANITY_PROJECT_ID": "<project-id>",
        "SANITY_DATASET": "production",
        "SANITY_API_TOKEN": "<token>"
      }
    }
  }
}
```

Jak uzyskać Sanity credentials:
1. https://www.sanity.io/manage → nowy projekt → zapisz Project ID
2. Settings → API → Tokens → Add Token (Editor) → zapisz

Opcjonalnie: Next.js DevTools MCP (wbudowany w Next.js 16 — `npx next devtools-mcp`).

### Init projektu

```bash
pnpm create next-app@latest myciecisnieniem-blog \
  --typescript --tailwind --app --src-dir --turbopack

cd myciecisnieniem-blog

pnpm add next-sanity @sanity/image-url @portabletext/react sanity
pnpm add react-compare-slider
```

---

## Krok 1 — Sanity Schema

> **Uwaga Next.js 16:** `middleware.ts` → `proxy.ts`, async `params`/`searchParams`, Turbopack domyślny.

### Struktura

```
src/sanity/
├── schemas/
│   ├── index.ts
│   ├── post.ts
│   ├── category.ts
│   ├── author.ts
│   ├── faq.ts
│   ├── serviceArea.ts
│   └── blockContent.ts
└── lib/
    ├── client.ts
    ├── queries.ts
    └── image.ts
```

### post.ts

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Wpis blogowy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (r) => r.required().max(70),
      description: 'Maks. 70 znaków — wyświetla się w Google'
    }),
    defineField({
      name: 'slug',
      title: 'URL wpisu',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required()
    }),
    defineField({
      name: 'metaDescription',
      title: 'Opis SEO',
      type: 'text',
      rows: 3,
      validation: (r) => r.required().max(160)
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'author' }]
    }),
    defineField({
      name: 'heroImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Opis zdjęcia', type: 'string',
          validation: (r) => r.required() }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Kategorie',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data publikacji',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'body',
      title: 'Treść',
      type: 'blockContent'
    }),
    defineField({
      name: 'beforeAfterGallery',
      title: 'Galeria Przed/Po',
      type: 'array',
      of: [{
        type: 'object',
        name: 'beforeAfterPair',
        fields: [
          { name: 'before', title: 'PRZED', type: 'image', options: { hotspot: true },
            fields: [{ name: 'alt', type: 'string' }] },
          { name: 'after', title: 'PO', type: 'image', options: { hotspot: true },
            fields: [{ name: 'alt', type: 'string' }] },
          { name: 'caption', title: 'Podpis', type: 'string' }
        ]
      }]
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ',
      type: 'array',
      of: [{
        type: 'object',
        name: 'faqItem',
        fields: [
          { name: 'question', title: 'Pytanie', type: 'string', validation: (r) => r.required() },
          { name: 'answer', title: 'Odpowiedź', type: 'text', rows: 4, validation: (r) => r.required() }
        ]
      }]
    }),
    defineField({ name: 'relatedCity', title: 'Miasto', type: 'string' }),
    defineField({
      name: 'relatedService',
      title: 'Usługa',
      type: 'string',
      options: {
        list: [
          { title: 'Mycie elewacji', value: 'mycie-elewacji' },
          { title: 'Czyszczenie kostki brukowej', value: 'czyszczenie-kostki' },
          { title: 'Mycie dachu', value: 'mycie-dachu' },
          { title: 'Czyszczenie po budowie', value: 'czyszczenie-po-budowie' },
          { title: 'Mycie ogrodzeń', value: 'mycie-ogrodzen' },
          { title: 'Inne', value: 'inne' }
        ]
      }
    })
  ],
  orderings: [
    { title: 'Najnowsze', name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }] }
  ],
  preview: {
    select: { title: 'title', subtitle: 'relatedCity', media: 'heroImage' }
  }
})
```

### blockContent.ts — Rich text ze zdjęciami i CTA

```typescript
import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'blockContent',
  title: 'Treść',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normalny', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Cytat', value: 'blockquote' }
      ],
      marks: {
        decorators: [
          { title: 'Pogrubienie', value: 'strong' },
          { title: 'Kursywa', value: 'em' }
        ],
        annotations: [{
          name: 'link', type: 'object', title: 'Link',
          fields: [
            { name: 'href', type: 'url', title: 'URL' },
            { name: 'blank', type: 'boolean', title: 'Nowa karta', initialValue: false }
          ]
        }]
      }
    }),
    // Zdjęcia w treści
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Opis zdjęcia', type: 'string', validation: (r) => r.required() },
        { name: 'caption', title: 'Podpis', type: 'string' }
      ]
    }),
    // Przycisk CTA w treści
    defineArrayMember({
      type: 'object',
      name: 'callToAction',
      title: 'Przycisk CTA',
      fields: [
        { name: 'text', title: 'Tekst', type: 'string', initialValue: 'Zamów bezpłatną wycenę' },
        { name: 'url', title: 'Link', type: 'url', initialValue: 'https://myciecisnieniem.pl/#kontakt' },
        { name: 'style', title: 'Styl', type: 'string',
          options: { list: [
            { title: 'Główny', value: 'primary' },
            { title: 'Telefon', value: 'phone' },
            { title: 'WhatsApp', value: 'whatsapp' }
          ]}, initialValue: 'primary'
        }
      ]
    })
  ]
})
```

### Pozostałe schematy (minimalne)

```typescript
// category.ts
export default defineType({
  name: 'category', title: 'Kategoria', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nazwa', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', title: 'Opis', type: 'text' })
  ]
})

// author.ts
export default defineType({
  name: 'author', title: 'Autor', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Imię i nazwisko', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'photo', title: 'Zdjęcie', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({ name: 'role', title: 'Stanowisko', type: 'string' }),
    defineField({ name: 'experience', title: 'Lata doświadczenia', type: 'number' })
  ]
})

// faq.ts — globalne FAQ
export default defineType({
  name: 'faq', title: 'FAQ', type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Pytanie', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', title: 'Odpowiedź', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Kategoria', type: 'string' }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' })
  ]
})

// serviceArea.ts
export default defineType({
  name: 'serviceArea', title: 'Obszar obsługi', type: 'document',
  fields: [
    defineField({ name: 'city', title: 'Miasto/Dzielnica', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'city' } }),
    defineField({ name: 'metaDescription', title: 'Opis SEO', type: 'text', rows: 3, validation: (r) => r.max(160) }),
    defineField({ name: 'body', title: 'Treść', type: 'blockContent' }),
    defineField({ name: 'services', title: 'Usługi', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'gallery', title: 'Zdjęcia', type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string' }] }] }),
    defineField({ name: 'testimonials', title: 'Opinie', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'name', type: 'string' },
        { name: 'text', type: 'text' },
        { name: 'rating', type: 'number', validation: (r) => r.min(1).max(5) }
      ]}]
    })
  ]
})
```

---

## Krok 2 — Routing Next.js 16

> **Next.js 16 breaking changes:**
> - `middleware.ts` → `proxy.ts` (rename + export `proxy` function)
> - `params` i `searchParams` są **async** — zawsze `await`
> - Turbopack domyślny — nie trzeba flagi `--turbopack`
> - React 19.2 (View Transitions, React Compiler)
> - `use cache` + Cache Components zamiast starego caching

### Drzewo plików

```
src/app/
├── layout.tsx                       # Root layout, fonts, metadataBase
├── not-found.tsx
│
├── blog/
│   ├── page.tsx                     # Lista wpisów (/blog)
│   ├── [slug]/
│   │   └── page.tsx                 # Wpis (/blog/mycie-elewacji-porady)
│   ├── kategoria/
│   │   └── [category]/
│   │       └── page.tsx             # Wpisy w kategorii
│   ├── faq/
│   │   └── page.tsx                 # Strona FAQ
│   ├── o-autorze/
│   │   └── page.tsx                 # Profil autora
│   └── uslugi/
│       └── [slug]/
│           └── page.tsx             # Strona obsługiwanego miasta
│
├── studio/
│   └── [[...tool]]/
│       └── page.tsx                 # Sanity Studio (embedded)
│
├── api/
│   └── revalidate/
│       └── route.ts                 # Webhook Sanity → ISR
│
├── sitemap.ts                       # Dynamiczny sitemap.xml
├── robots.ts                        # robots.txt
└── llms.txt/
    └── route.ts                     # Plik llms.txt (Route Handler)

src/components/
├── blog/
│   ├── PostCard.tsx
│   ├── PostBody.tsx                 # Portable Text renderer
│   ├── TableOfContents.tsx
│   ├── BeforeAfterSlider.tsx        # react-compare-slider
│   ├── FaqAccordion.tsx             # HTML <details>/<summary>
│   ├── RelatedPosts.tsx
│   ├── ReadingTime.tsx
│   ├── Breadcrumbs.tsx
│   ├── ShareButtons.tsx
│   ├── CallToAction.tsx
│   ├── StickyContactBar.tsx         # Mobile sticky (tel + WhatsApp)
│   └── AuthorCard.tsx
├── seo/
│   ├── BlogPostingSchema.tsx        # JSON-LD
│   ├── LocalBusinessSchema.tsx
│   ├── FaqSchema.tsx
│   ├── BreadcrumbSchema.tsx
│   └── ServiceSchema.tsx
└── ui/
    ├── Header.tsx
    ├── Footer.tsx
    └── Pagination.tsx
```

---

## Krok 3 — Kluczowe implementacje

### Metadata (Next.js 16 — async params)

```typescript
// app/blog/[slug]/page.tsx
import type { PageProps } from 'next'

export async function generateMetadata(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params  // ASYNC w Next.js 16!
  const post = await getPost(slug)

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `https://myciecisnieniem.pl/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://myciecisnieniem.pl/blog/${slug}`,
      siteName: 'Mycie Ciśnieniem',
      images: [{ url: post.heroImage?.url, width: 1200, height: 630, alt: post.heroImage?.alt }],
      locale: 'pl_PL',
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPost(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const post = await getPost(slug)
  // ...render
}
```

### Root Layout

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'latin-ext'] }) // latin-ext = polskie znaki!

export const metadata = {
  metadataBase: new URL('https://myciecisnieniem.pl'),
  title: { default: 'Blog | Mycie Ciśnieniem', template: '%s | Mycie Ciśnieniem' },
}
```

### Schema JSON-LD (przykład BlogPosting)

```typescript
// components/seo/BlogPostingSchema.tsx
export function BlogPostingSchema({ post }: { post: Post }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: post.heroImage?.url,
      datePublished: post.publishedAt,
      author: { '@type': 'Person', name: post.author.name,
        url: 'https://myciecisnieniem.pl/blog/o-autorze' },
      publisher: { '@type': 'Organization', name: 'Mycie Ciśnieniem',
        url: 'https://myciecisnieniem.pl' },
    })}} />
  )
}
```

**Schematy per strona:**

| Strona | JSON-LD |
|---|---|
| `/blog/[slug]` | `BlogPosting` + `BreadcrumbList` + `FAQPage` (jeśli ma FAQ) |
| `/blog` | `CollectionPage` + `BreadcrumbList` |
| `/blog/faq` | `FAQPage` + `BreadcrumbList` |
| `/blog/uslugi/[slug]` | `Service` + `LocalBusiness` + `BreadcrumbList` |
| `/blog/o-autorze` | `Person` + `BreadcrumbList` |
| Layout (globalny) | `LocalBusiness` (`HomeAndConstructionBusiness`) |

### Sitemap + Robots

```typescript
// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://myciecisnieniem.pl'
  const posts = await getAllPosts()
  const areas = await getAllServiceAreas()

  return [
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      priority: 0.7,
    })),
    ...areas.map((a) => ({
      url: `${base}/blog/uslugi/${a.slug}`,
      priority: 0.8,
    })),
  ]
}

// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/studio/', '/api/'] }],
    sitemap: 'https://myciecisnieniem.pl/sitemap.xml',
  }
}
```

### llms.txt (Route Handler)

```typescript
// app/llms.txt/route.ts
import { NextResponse } from 'next/server'
import { getAllPosts, getAllServiceAreas } from '@/sanity/lib/queries'

export async function GET() {
  const posts = await getAllPosts()
  const areas = await getAllServiceAreas()
  const base = 'https://myciecisnieniem.pl'

  const content = `# Mycie Ciśnieniem

> Profesjonalne mycie ciśnieniowe — firma usługowa działająca lokalnie w Polsce. Oferujemy mycie elewacji, czyszczenie kostki brukowej, mycie dachów i ogrodzeń.

## Usługi
- Mycie elewacji
- Czyszczenie kostki brukowej
- Mycie dachu
- Czyszczenie po budowie
- Mycie ogrodzeń

## Strona główna
- [myciecisnieniem.pl](${base})

## Blog
${posts.map((p) => `- [${p.title}](${base}/blog/${p.slug})`).join('\n')}

## Obsługiwane obszary
${areas.map((a) => `- [${a.city}](${base}/blog/uslugi/${a.slug})`).join('\n')}

## FAQ
- [Najczęściej zadawane pytania](${base}/blog/faq)

## Kontakt
- Strona: ${base}
- Telefon: [UZUPEŁNIJ]
`

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
```

### ISR Revalidation Webhook

```typescript
// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid' }, { status: 401 })
  }
  revalidateTag('posts')
  revalidateTag('service-areas')
  revalidateTag('faqs')
  return NextResponse.json({ revalidated: true })
}
```

W Sanity → Settings → API → Webhooks → URL: `https://myciecisnieniem.pl/api/revalidate?secret=TWOJ_SECRET`

### Podłączenie pod istniejący one-page HTML

Strona myciecisnieniem.pl to one-page HTML. Rozwiązanie:

**Pliki HTML wrzuć do `public/`** w projekcie Next.js. Plik `public/index.html` nie zadziała (Next.js go przesłoni), więc:

```typescript
// app/page.tsx — strona główna serwuje oryginalny HTML
import { readFileSync } from 'fs'
import path from 'path'

export default function Home() {
  const html = readFileSync(path.join(process.cwd(), 'public', 'site', 'index.html'), 'utf-8')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
```

**Albo lepiej — Vercel rewrites:**

```json
// vercel.json
{
  "rewrites": [
    { "source": "/blog/:path*", "destination": "/blog/:path*" },
    { "source": "/studio/:path*", "destination": "/studio/:path*" }
  ]
}
```

I trzymaj HTML one-page jako `app/page.tsx` (przepisany do React/JSX) lub jako static HTML z rewrites. Najprostsze: **przepisz one-page do `app/page.tsx`** — jest to jedna strona, więc to szybkie.

---

## Krok 4 — Stałe firmy

```typescript
// lib/constants.ts
export const COMPANY = {
  name: '', // ← UZUPEŁNIJ
  phone: '+48', // ← UZUPEŁNIJ
  whatsapp: '+48', // ← UZUPEŁNIJ (ten sam co phone)
  email: '', // ← UZUPEŁNIJ
  url: 'https://myciecisnieniem.pl',
  address: {
    streetAddress: '', // ← UZUPEŁNIJ
    addressLocality: '', // ← UZUPEŁNIJ
    postalCode: '', // ← UZUPEŁNIJ
    addressCountry: 'PL',
  },
  nip: '', // ← UZUPEŁNIJ
  openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-14:00', // ← UZUPEŁNIJ
  socialMedia: { facebook: '' }, // ← UZUPEŁNIJ
} as const
```

---

## Krok 5 — Env vars (Vercel)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxxxx
REVALIDATION_SECRET=xxxxx    # openssl rand -hex 32
NEXT_PUBLIC_SITE_URL=https://myciecisnieniem.pl
```

---

## Krok 6 — Deployment checklist

- [ ] Sanity: projekt + schematy + CORS (`myciecisnieniem.pl` + `localhost:3000`)
- [ ] Sanity: webhook do rewalidacji
- [ ] Vercel: projekt podpięty, env vars ustawione
- [ ] DNS: domena na Vercel
- [ ] Google Search Console: zweryfikowana domena + submitted sitemap
- [ ] `constants.ts` uzupełniony
- [ ] Test PageSpeed ≥ 90
- [ ] Test Rich Results (Google) — schema OK
- [ ] `llms.txt` dostępny pod `myciecisnieniem.pl/llms.txt`

---

## Sugestie dla użytkownika (do przekazania)

Blog jest pusty — oto sugerowana struktura, którą możesz stworzyć w Sanity:

**Kategorie (przykłady):**
Realizacje · Poradniki · Oferta sezonowa

**Strony miast (jeśli obsługujesz wiele lokalizacji):**
Np. Warszawa, Piaseczno, Pruszków — każde jako osobny „Obszar obsługi" w Sanity

**Pierwszy wpis — co warto opublikować na start:**
Opis konkretnej realizacji ze zdjęciami przed/po + FAQ pod spodem

---

*Dokument: luty 2026 · Next.js 16.1 · Sanity v3*
