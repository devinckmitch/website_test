import type { CollectionConfig } from 'payload'

export const NewsArticles: CollectionConfig = {
  slug: 'news-articles',
  admin: {
    useAsTitle: 'titleNl',
    description: 'Beheer nieuwsberichten in drie talen',
  },
  fields: [
    {
      name: 'titleNl',
      type: 'text',
      required: true,
      label: 'Titel (NL)',
    },
    {
      name: 'titleFr',
      type: 'text',
      label: 'Titre (FR)',
    },
    {
      name: 'titleEn',
      type: 'text',
      label: 'Title (EN)',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-vriendelijke identifier, bijv. club-kampioenschap-2025',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      label: 'Publicatiedatum',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hoofdafbeelding',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Samenvatting (NL)',
    },
    {
      name: 'bodyNl',
      type: 'richText',
      label: 'Inhoud (NL)',
    },
    {
      name: 'bodyFr',
      type: 'richText',
      label: 'Contenu (FR)',
    },
    {
      name: 'bodyEn',
      type: 'richText',
      label: 'Content (EN)',
    },
  ],
}
