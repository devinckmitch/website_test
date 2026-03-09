import type { CollectionConfig } from 'payload'

export const GreenFees: CollectionConfig = {
  slug: 'green-fees',
  admin: {
    useAsTitle: 'season',
    description: 'Beheer de green fee tarieven per seizoen',
  },
  fields: [
    {
      name: 'season',
      type: 'select',
      required: true,
      options: [
        { label: 'Hoogseizoen (Peak)', value: 'peak' },
        { label: 'Middenseizoen (Mid)', value: 'mid' },
        { label: 'Laagseizoen (Low)', value: 'low' },
      ],
    },
    {
      name: 'validFrom',
      type: 'date',
      required: true,
      label: 'Geldig vanaf',
    },
    {
      name: 'validTo',
      type: 'date',
      required: true,
      label: 'Geldig tot',
    },
    {
      name: 'rates',
      type: 'array',
      label: 'Tarieven',
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Categorie',
          admin: {
            placeholder: 'bijv. Championship 18 holes',
          },
        },
        {
          name: 'weekday',
          type: 'number',
          required: true,
          label: 'Weekdag (€)',
        },
        {
          name: 'weekend',
          type: 'number',
          required: true,
          label: 'Weekend & Feestdag (€)',
        },
      ],
    },
  ],
}
