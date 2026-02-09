import { defineType, defineField, defineArrayMember } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Wpis blogowy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytul',
      type: 'string',
      validation: (r) => r.required().max(70),
      description: 'Maks. 70 znakow — wyswietla sie w Google',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data publikacji',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Zdjecie glowne',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Tekst alternatywny (SEO)',
          validation: (r) => r.required(),
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Krotki opis (SEO)',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(160),
      description: 'Maks. 160 znakow — wyswietla sie w Google pod tytulem',
    }),
    defineField({
      name: 'categories',
      title: 'Kategorie',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'body',
      title: 'Tresc',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normalny', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Cytat', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Pogrubienie', value: 'strong' },
              { title: 'Kursywa', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  { name: 'blank', type: 'boolean', title: 'Otworz w nowej karcie', initialValue: false },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Tekst alternatywny', validation: (r) => r.required() },
            { name: 'caption', type: 'string', title: 'Podpis' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'beforeAfter',
      title: 'Galeria Przed/Po',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'beforeAfterItem',
          title: 'Para Przed/Po',
          fields: [
            { name: 'title', type: 'string', title: 'Opis (np. "Kostka brukowa - ul. Klonowa")' },
            { name: 'before', type: 'image', title: 'Przed', options: { hotspot: true } },
            { name: 'after', type: 'image', title: 'Po', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'title', media: 'after' },
          },
        },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ (pytania i odpowiedzi)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'Pytanie',
          fields: [
            { name: 'question', type: 'string', title: 'Pytanie', validation: (r) => r.required() },
            { name: 'answer', type: 'text', title: 'Odpowiedz', rows: 4, validation: (r) => r.required() },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Najnowsze',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', media: 'mainImage', date: 'publishedAt' },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString('pl-PL') : 'Brak daty',
      }
    },
  },
})
