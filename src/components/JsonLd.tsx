/**
 * JSON-LD structured data component for SEO.
 * Uses dangerouslySetInnerHTML intentionally - content is server-generated
 * schema.org data, never user input. This is the standard Next.js pattern.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
