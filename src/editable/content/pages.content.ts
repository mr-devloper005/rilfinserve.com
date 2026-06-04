import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find trusted businesses and local services',
      description: 'Search business listings, compare service providers, and discover companies ready to help.',
      openGraphTitle: 'Find trusted businesses and local services',
      openGraphDescription: 'Browse a cleaner business listing marketplace built for service discovery and direct action.',
      keywords: ['business listing', 'local services', 'service providers', 'business directory'],
    },
    hero: {
      badge: 'Business directory',
      title: ['Find the right', 'professional for your next job.'],
      description: 'Search verified business profiles, compare services, and contact providers with the details you need before you decide.',
      primaryCta: { label: 'Browse listings', href: '/listing' },
      secondaryCta: { label: 'List your business', href: '/create' },
      searchPlaceholder: 'What service are you looking for?',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Service profiles stay clear, comparable, and easy to act on.',
      featureCardDescription: 'Visitors can move from search to profile details, phone, email, website, and location without friction.',
    },
    intro: {
      badge: 'Why it works',
      title: 'A listing-first experience for people who need useful business choices.',
      paragraphs: [
        'Visitors usually arrive with a task in mind: find a cleaner, compare marketing partners, book a wellness specialist, or check a local service provider before making contact.',
        'The directory keeps the experience focused on business names, service categories, summaries, locations, and quick actions so people can make practical comparisons.',
        'Business owners get a clearer profile surface that supports discovery, trust, and direct enquiries without making the site feel crowded or stretched.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Service-led search with business categories and direct navigation.',
        'Directory cards designed for comparing companies at a glance.',
        'Profile detail pages with contact, map, website, and service information.',
        'Centered page widths that keep reading and forms comfortable.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Contact support', href: '/contact' },
    },
    cta: {
      badge: 'For businesses',
      title: 'Create a profile customers can understand quickly.',
      description: 'Add your services, contact details, images, and profile description so people can discover and choose your business with confidence.',
      primaryCta: { label: 'Create listing', href: '/create' },
      secondaryCta: { label: 'Contact us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest businesses in this section.',
    },
  },
  about: {
    badge: 'About the directory',
    title: 'Business discovery that feels clear, practical, and trustworthy.',
    description: `${slot4BrandConfig.siteName} helps visitors find businesses by service, compare useful details, and move from browsing to contact with less noise.`,
    paragraphs: [
      'The platform is shaped around listing quality: clear names, helpful summaries, categories, location details, and direct contact options.',
      'For customers, the goal is confident discovery. For businesses, the goal is a profile that makes services easier to understand and easier to request.',
      'Every page is designed around the same simple rhythm: search, compare, open a profile, and take action.',
    ],
    values: [
      {
        title: 'Service-first browsing',
        description: 'Categories, search, and cards are built around the way people look for practical help.',
      },
      {
        title: 'Useful business profiles',
        description: 'Each profile can surface contact details, services, images, links, and location cues in one readable place.',
      },
      {
        title: 'Calm, centered layouts',
        description: 'The site avoids stretched pages and keeps forms, cards, and details sized for comfortable scanning.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with a listing, category, or business profile?',
    description: 'Tell us what you want to add, update, verify, or improve. We will route your request to the right listing support workflow.',
    formTitle: 'Send listing enquiry',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search businesses, services, categories, and listing details across the directory.',
    },
    hero: {
      badge: 'Search services',
      title: 'Find businesses by service, category, or location.',
      description: 'Use keywords, categories, and listing types to compare business profiles and find the provider that fits.',
      placeholder: 'Search cleaning, web design, accounting, wellness...',
    },
    resultsTitle: 'Latest business results',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a business listing for the directory.',
    },
    locked: {
      badge: 'Business access',
      title: 'Login to create a business listing.',
      description: 'Use your account to add a business profile, service details, images, links, and contact information.',
    },
    hero: {
      badge: 'Listing workspace',
      title: 'Create a clear profile for your business.',
      description: 'Add service category, description, contact details, website, image, and business story so customers can compare you confidently.',
    },
    formTitle: 'Business listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing draft saved successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for the business listing directory.',
      badge: 'Business account',
      title: 'Welcome back to your listing dashboard.',
      description: 'Login to create business profiles, manage listing drafts, and continue exploring service providers.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for the business listing directory.',
      badge: 'Join the directory',
      title: 'Create an account and list your business.',
      description: 'Create an account to submit business details, save listing drafts, and make your services easier to discover.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related gallery profiles',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
