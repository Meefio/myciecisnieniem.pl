import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export async function GET() {
  const posts = await client.fetch(POSTS_QUERY)
  const base = 'https://myciecisnieniem.pl'

  const postLinks = posts
    .map((p: any) => `- [${p.title}](${base}/blog/${p.slug.current})`)
    .join('\n')

  const content = `# myciecisnieniem.pl

> Profesjonalne mycie cisnieniowe — kostka brukowa, dach, elewacja, ogrodzenia. Warszawa, Piaseczno i okolice.

## Uslugi
- Mycie kostki brukowej
- Mycie elewacji
- Mycie dachu
- Mycie okien
- Mycie paneli fotowoltaicznych
- Impregnacja powierzchni

## Strona glowna
- [myciecisnieniem.pl](${base})

## Blog
${postLinks || '- Brak wpisow'}

## FAQ
- Odpowiedzi na najczesciej zadawane pytania znajdziesz pod kazdym wpisem na blogu

## Kontakt
- Telefon: 507-296-296
- Email: kontakt@myciecisnieniem.pl
- Strona: ${base}
`

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
