import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'titleNl',
    description: 'Beheer evenementen en tornooien',
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
      name: 'date',
      type: 'date',
      required: true,
      label: 'Datum',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'Einddatum (optioneel)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Afbeelding',
    },
    {
      name: 'descriptionNl',
      type: 'richText',
      label: 'Beschrijving (NL)',
    },
    {
      name: 'descriptionFr',
      type: 'richText',
      label: 'Description (FR)',
    },
    {
      name: 'descriptionEn',
      type: 'richText',
      label: 'Description (EN)',
    },
    {
      name: 'registrationUrl',
      type: 'text',
      label: 'Inschrijvingslink (optioneel)',
    },
  ],
}
