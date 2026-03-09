import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Instellingen',
  admin: {
    description: 'Globale instellingen voor de website, inclusief booking links en contactgegevens',
  },
  fields: [
    {
      name: 'bookingUrl',
      type: 'text',
      label: 'Booking URL (extern systeem)',
      required: true,
      defaultValue: 'https://www.igolf.be',
      admin: {
        description: 'Link naar het externe green fee boekingssysteem (I-Golf of gelijkaardig)',
      },
    },
    {
      name: 'bookingUrlChampionship',
      type: 'text',
      label: 'Booking URL Championship Baan',
      admin: {
        description: 'Directe link naar Championship baan reservaties',
      },
    },
    {
      name: 'bookingUrlExecutive',
      type: 'text',
      label: 'Booking URL Executive Baan',
      admin: {
        description: 'Directe link naar Executive baan reservaties',
      },
    },
    {
      name: 'memberPortalUrl',
      type: 'text',
      label: 'Ledenportaal URL',
      defaultValue: 'https://www.igolf.be',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefoonnummer',
      defaultValue: '+32 (0)50 60 12 80',
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mailadres',
      defaultValue: 'info@rzgc.be',
    },
    {
      name: 'address',
      type: 'textarea',
      label: 'Adres',
      defaultValue: 'Caddiespad 14\n8300 Knokke-Heist\nBelgië',
    },
    {
      name: 'facebook',
      type: 'text',
      label: 'Facebook URL',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram URL',
    },
  ],
}
