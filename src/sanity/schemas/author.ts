import { defineType, defineField } from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Imie i nazwisko',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Zdjecie',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
