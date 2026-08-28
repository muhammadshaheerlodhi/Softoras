export type Project = {
  slug: string
  name: string
  kind: 'product' | 'platform' | 'website' | 'commerce' | 'growth'
  url?: string
  secondaryUrl?: string
  secondaryLabel?: string
  image: string
  summary: string
  work: string[]
  stack: string[]
  body: string[]
}

export const projects: Project[] = [
  {
    slug: 'erp',
    name: 'ERP',
    kind: 'product',
    url: 'https://softoras-erp.vercel.app',
    image: '/projects/erp.png',
    summary: 'Cloud ERP for CRM, sales, inventory, HR, accounting, and operations — built and operated by Softoras.',
    work: ['SaaS product', 'Multi-module architecture', 'Cloud deployment', 'Role-based access'],
    stack: ['Next.js', 'Supabase', 'AWS-ready cloud', 'TypeScript'],
    body: [
      'ERP is Softoras’s own cloud product: CRM, sales documents, inventory, purchasing, HR, payroll, accounting, projects, and related operations in one application.',
      'The public product site and application are live. We present it as a shipped SaaS system — modules, dashboards, and a trial path — not a slide deck.',
    ],
  },
  {
    slug: 'utcli-solutions',
    name: 'UTCLI Solutions',
    kind: 'platform',
    url: 'https://www.utclisolutions.com',
    image: '/projects/utcli.png',
    summary: 'Education and career platform: courses, ebooks, student queries, and digital learning operations.',
    work: [
      'Website development',
      'Course selling infrastructure',
      'Course upload and catalog',
      'Student query management',
      'Digital products and ebooks',
    ],
    stack: ['Web platform', 'Course commerce', 'Content operations'],
    body: [
      'UTCLI Solutions is live at utclisolutions.com — a learning business around technology training, corporate programs, coaching, and digital downloads, with Imran Afzal.',
      'Softoras work covered the public site plus the operational layer around course sales, uploads, student queries, and related education workflows.',
    ],
  },
  {
    slug: 'vivacity-solutions',
    name: 'Vivacity Solutions',
    kind: 'website',
    url: 'https://www.vivacity-solutions.com',
    secondaryUrl: 'https://crm.vivacity-solutions.com',
    secondaryLabel: 'CRM',
    image: '/projects/vivacity.png',
    summary: 'Company website for Vivacity Solutions — the public IT services presence.',
    work: ['Website development', 'Brand and IA', 'Responsive delivery', 'Linked CRM surface'],
    stack: ['Web platform', 'GoHighLevel', 'CRM'],
    body: [
      'Vivacity Solutions is a US IT services company. Softoras built the public website at vivacity-solutions.com.',
      'The site sits next to a separate CRM product used for CRM reselling at crm.vivacity-solutions.com.',
    ],
  },
  {
    slug: 'vivacity-crm',
    name: 'Vivacity CRM',
    kind: 'product',
    url: 'https://crm.vivacity-solutions.com',
    image: '/projects/vivacity-crm.png',
    summary: 'CRM reselling product — pipelines, automation, and a packaged CRM offer on its own live site.',
    work: [
      'CRM reselling',
      'Product website',
      'Pipeline and automation',
      'Lead capture and follow-up',
    ],
    stack: ['GoHighLevel', 'CRM product', 'Automations'],
    body: [
      'Vivacity CRM is the CRM reselling surface at crm.vivacity-solutions.com (www.crm.vivacity-solutions.com resolves to the same product).',
      'This is a packaged CRM offer — architecture, pipelines, and automation — not only an internal ops board.',
    ],
  },
  {
    slug: 'cryo-sculpting-boca',
    name: 'Cryo Sculpting Boca Lab',
    kind: 'growth',
    url: 'https://cryosculptinglabboca.com',
    image: '/projects/cryo.png',
    summary: 'Website plus Meta ads, CRM pipeline, booking, and follow-up automation for a Boca Raton wellness lab.',
    work: [
      'Website development',
      'Meta Ads',
      'Lead generation',
      'CRM pipeline',
      'Booking and follow-up automation',
    ],
    stack: ['GoHighLevel', 'Meta Ads', 'SMS / email', 'Booking'],
    body: [
      'Cryo Sculpting Lab Boca is a body-contouring and wellness practice in Boca Raton, Florida. The live site is cryosculptinglabboca.com.',
      'The work combined the website with paid acquisition, a CRM pipeline, booking, and automated follow-up so ads, the site, and operations sit on one path. We do not publish unverified conversion numbers.',
    ],
  },
  {
    slug: 'awais-creations',
    name: 'Awais Creations',
    kind: 'website',
    url: 'https://awaiscreations.com',
    image: '/projects/awais.png',
    summary: 'WordPress site for Raja Awais Ayub — branding, structure, and a responsive content site.',
    work: ['WordPress development', 'Personal branding site', 'Portfolio architecture', 'Responsive performance'],
    stack: ['WordPress', 'Responsive UI', 'Content structure'],
    body: [
      'Awais Creations is live at awaiscreations.com, built for Raja Awais Ayub.',
      'The brief was a personal brand site: portfolio architecture, responsive layout, and a content presentation that stays maintainable in WordPress.',
    ],
  },
  {
    slug: 'back-office-solutions',
    name: 'Back Office Solutions',
    kind: 'platform',
    url: 'https://va.backofficesolutions.net',
    image: '/projects/bos.png',
    summary: 'Full business platform: website, admin, database, Supabase, and operational workflows.',
    work: [
      'Website',
      'Admin panel',
      'Custom functionality',
      'Database and Supabase',
      'Business workflows',
    ],
    stack: ['Next.js', 'Supabase', 'Custom admin', 'Operational workflows'],
    body: [
      'Back Office Solutions is reached at va.backofficesolutions.net — the live entry URL for the platform.',
      'The build included the public site, backend/admin, custom features, database, Supabase integration, and the workflows staff use to run the operation.',
    ],
  },
  {
    slug: 'teknotize-merchandise',
    name: 'Teknotize Merchandise',
    kind: 'commerce',
    url: 'https://www.teknotizemerchandise.com',
    image: '/projects/teknotize.png',
    summary: 'Shopify storefront for athlete merchandise — catalog, storefront, and conversion-focused ecommerce.',
    work: ['Shopify development', 'Storefront UX', 'Product catalog', 'Responsive ecommerce'],
    stack: ['Shopify', 'Ecommerce', 'Theme / storefront'],
    body: [
      'Teknotize Merchandise is a Shopify store for athlete apparel and branded merch, with collections, athlete pages, and a sign-up path for athletes and NIL agencies.',
      'Softoras work was Shopify storefront development and ecommerce structure. We do not claim order volumes or revenue that we cannot verify from the public store.',
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug)
}
