import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: slot4BrandConfig.tagline || 'Business listing platform',
    primaryLinks: [
      { label: 'Explore', href: '/listing' },
      { label: 'Search', href: '/search' },
      { label: 'Create listing', href: '/create' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Local services, business profiles, and trusted discovery',
    description: 'A focused business directory for finding service providers, comparing profiles, and helping companies become easier to discover.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Business listings', href: '/listing' },
          { label: 'Search services', href: '/search' },
          { label: 'Create listing', href: '/create' },
          { label: 'Contact support', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean business discovery and practical listing workflows.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Listed',
  },
} as const
