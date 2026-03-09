import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    description: 'Beheer afbeeldingen en media bestanden',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt tekst',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Bijschrift',
    },
  ],
}
