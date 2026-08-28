export const ERP_URL = 'https://softoras-erp.vercel.app'
export const TAGLINE = 'Think SaaS. Think Softoras.'

export const site = {
  name: 'Softoras',
  email: 'admin@softoras.com',
  phones: {
    pakistan: { label: '+92 334 4255662', href: 'tel:+923344255662' },
    uae: { label: '+971 50 170 3257', href: 'tel:+971501703257' },
  },
  offices: {
    pakistan: 'Chaklala Scheme 3, Rawalpindi, Pakistan',
    uae: 'Khor Fakkan, Sharjah, United Arab Emirates',
  },
  linkedin: 'https://www.linkedin.com/in/muhammad-shaheer-lodhi-655aa8227',
}

export type Service = {
  slug: string
  title: string
  description: string
  points: string[]
  detail: string
  deliverables: string[]
  tools: string[]
}

export const services: Service[] = [
  {
    slug: 'custom-websites',
    title: 'Custom Websites',
    description: 'Fast, clean sites built around your brand. Next.js, WordPress, or Shopify. Not a template dump.',
    points: ['Business websites', 'Landing pages', 'WordPress', 'Shopify stores'],
    detail:
      'We build marketing sites and landing pages that load fast, look sharp on mobile, and connect to your CRM and analytics. Whether you need a Next.js site, WordPress for content teams, or Shopify for commerce, the build is tailored to your brand — not a generic theme with your logo pasted on.',
    deliverables: ['Responsive UI across devices', 'SEO-ready structure', 'Contact and lead capture', 'CMS or admin where needed', 'Deploy on Vercel or your host'],
    tools: ['Next.js', 'WordPress', 'Shopify', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'software-products',
    title: 'Software and Products',
    description: 'Custom apps and SaaS products, from first screen to a live product people can log into.',
    points: ['SaaS products', 'Web apps', 'Admin panels', 'APIs'],
    detail:
      'From MVP to production SaaS: auth, dashboards, billing hooks, role-based access, and APIs your team can extend. Softoras has shipped its own ERP product and client platforms — we know what it takes to go from wireframe to a login screen real users hit every day.',
    deliverables: ['Product UI and UX flows', 'Auth and user roles', 'Admin panels', 'REST or webhook APIs', 'Staging and production deploys'],
    tools: ['React', 'Next.js', 'Supabase', 'Node.js', 'AWS'],
  },
  {
    slug: 'ai-agents-bots',
    title: 'AI Agents and Bots',
    description: 'Voice and chat agents that answer, book, and follow up. OpenAI, Vapi, and real workflows.',
    points: ['AI agents', 'AI bots', 'Voice agents', 'Chat flows'],
    detail:
      'AI that does work — not a demo chatbot. Voice agents on Vapi that book appointments, chat flows that qualify leads, and bots wired into CRM so conversations update pipelines automatically. Built with guardrails, handoff paths, and logging you can trust in production.',
    deliverables: ['Voice or chat agent setup', 'Prompt and flow design', 'CRM and calendar integration', 'Call logging and monitoring', 'Fallback to human handoff'],
    tools: ['OpenAI', 'Vapi', 'GoHighLevel', 'Twilio', 'n8n'],
  },
  {
    slug: 'ai-automation',
    title: 'AI and n8n Automation',
    description: 'n8n, Make, Zapier, and AI in the middle, so leads, emails, and ops move without extra staff.',
    points: ['n8n workflows', 'Make and Zapier', 'OpenAI in pipelines', 'Webhooks'],
    detail:
      'Automations that replace manual copy-paste between tools. Lead comes in → CRM updates → SMS sends → task created → team notified. We design n8n and Make workflows with error handling, retries, and documentation so your ops keep running when volume spikes.',
    deliverables: ['Workflow mapping and design', 'n8n / Make / Zapier builds', 'Webhook and API connections', 'AI steps in pipelines', 'Monitoring and alerts'],
    tools: ['n8n', 'Make', 'Zapier', 'OpenAI', 'HubSpot'],
  },
  {
    slug: 'crm-gohighlevel',
    title: 'CRM and GoHighLevel',
    description: 'Pipelines, booking, SMS, and follow up built for teams that live in GHL and HubSpot.',
    points: ['Pipeline design', 'Lead routing', 'SMS and email', 'Booking'],
    detail:
      'CRM setup that matches how your team actually sells and serves. GoHighLevel sub-accounts, pipelines, automations, calendars, SMS sequences, and Follow Up Boss integrations — configured so leads do not fall through cracks and follow up runs on schedule.',
    deliverables: ['Pipeline and stage design', 'GHL or HubSpot setup', 'SMS and email sequences', 'Booking and calendar flows', 'Reporting dashboards'],
    tools: ['GoHighLevel', 'HubSpot', 'Follow Up Boss', 'Calendly', 'Twilio'],
  },
  {
    slug: 'cloud-servers',
    title: 'Servers and Cloud',
    description: 'AWS, Vercel, Cloudflare, DNS, and server setup so the product stays online and can ship safely.',
    points: ['AWS architecture', 'Server management', 'Vercel and Cloudflare', 'DNS and deploys'],
    detail:
      'Infrastructure that stays calm under traffic. AWS architecture, EC2 and Lambda where needed, Vercel for frontend deploys, Cloudflare for DNS and edge, SSL, backups, and CI/CD so releases are repeatable — not a manual FTP upload at midnight.',
    deliverables: ['Cloud architecture plan', 'AWS / Vercel setup', 'DNS and SSL', 'Deploy pipelines', 'Monitoring and uptime checks'],
    tools: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'GitHub'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Frontend and backend in one team: React, Next.js, Node, PHP, Python. Shipped responsive.',
    points: ['React and Next.js', 'Node, PHP, Python', 'Responsive UI', 'Performance'],
    detail:
      'Full-stack web development when you need both the interface and the engine behind it. React and Next.js frontends, Node, PHP, Laravel, or Python backends, responsive layouts, and performance tuning so pages score well and feel instant on mobile.',
    deliverables: ['Frontend and backend code', 'Responsive layouts', 'API integration', 'Performance optimization', 'Cross-browser testing'],
    tools: ['React', 'Next.js', 'Node.js', 'PHP', 'Python'],
  },
  {
    slug: 'business-systems',
    title: 'Business Systems',
    description: 'Admin, databases, and the software staff use every day. Not only the public homepage.',
    points: ['Supabase and MongoDB', 'Custom admin', 'Roles and access', 'Ops workflows'],
    detail:
      'The internal tools that run the business: custom admin panels, inventory systems, HR workflows, reporting dashboards, and databases your team relies on daily. We build the software behind the homepage — where operations actually happen.',
    deliverables: ['Custom admin panels', 'Database design', 'Role-based access', 'Reporting and exports', 'Ops workflow automation'],
    tools: ['Supabase', 'MongoDB', 'PostgreSQL', 'React', 'AWS'],
  },
]

export function getService(slug: string) {
  return services.find((item) => item.slug === slug)
}

export const industries = [
  { title: 'Real Estate', text: 'Lead capture, CRM pipelines, listing sites, and follow up for agents and brokerages.', tags: ['CRM', 'Listings', 'GHL'] },
  { title: 'Healthcare', text: 'Booking, intake, patient follow up, and sites that keep operations organized.', tags: ['Booking', 'SMS', 'Forms'] },
  { title: 'Education', text: 'Course catalogs, student queries, enrollment flows, and digital products.', tags: ['LMS', 'Portals', 'Content'] },
  { title: 'Ecommerce', text: 'Shopify and custom shops with clean catalogs, checkout, and ops automation.', tags: ['Shopify', 'Stripe', 'Inventory'] },
  { title: 'Professional Services', text: 'Intake, CRM, proposals, and delivery systems for specialist firms.', tags: ['CRM', 'Docs', 'Pipeline'] },
  { title: 'Agencies', text: 'Client CRM, reporting, automation, and white-label systems that scale accounts.', tags: ['Reporting', 'Automation', 'CRM'] },
  { title: 'Local Businesses', text: 'Websites, ads to CRM, booking, reviews, and follow up that runs daily.', tags: ['Local SEO', 'Booking', 'SMS'] },
  { title: 'SaaS companies', text: 'Product UI, auth, billing, cloud deploy, and systems teams can ship on.', tags: ['SaaS', 'AWS', 'APIs'] },
  { title: 'Legal & Finance', text: 'Secure intake, document workflows, client portals, and compliance-friendly ops.', tags: ['DocuSign', 'Portals', 'CRM'] },
  { title: 'Hospitality', text: 'Reservations, guest comms, review follow up, and property marketing sites.', tags: ['Booking', 'Email', 'Reviews'] },
  { title: 'Fitness & Wellness', text: 'Membership sites, class booking, lead nurture, and mobile-friendly brands.', tags: ['Booking', 'Mobile', 'CRM'] },
  { title: 'Automotive', text: 'Inventory sites, lead routing, service booking, and dealership CRM flows.', tags: ['Inventory', 'CRM', 'Ads'] },
]

export const process = [
  { title: 'Discover', text: 'Map the operation and the system that actually needs to exist.' },
  { title: 'Design', text: 'Flows and a plan before the first production commit.' },
  { title: 'Build', text: 'Ship in slices the team can use, not a six month black box.' },
  { title: 'Integrate', text: 'Connect CRM, ads, payments, email, and tools through APIs.' },
  { title: 'Deploy', text: 'Cloud, servers, DNS, and a release path that stays calm.' },
  { title: 'Optimize', text: 'Tighten automations, speed, and the workflows used every week.' },
]

export const strengths = [
  { title: 'Engineering first', text: 'Code and architecture come before decoration.' },
  { title: 'Custom systems', text: 'Built for the operation, not a generic plugin stack.' },
  { title: 'Modern stack', text: 'React, Next.js, Node, Python, AWS, n8n, and AI where it helps.' },
  { title: 'Automation depth', text: 'GoHighLevel, Make, Zapier, n8n, Twilio, and AI agents in real pipelines.' },
  { title: 'CRM operations', text: 'Pipelines and follow up designed for how sales actually works.' },
  { title: 'Cloud and servers', text: 'AWS Solutions Architecture, Vercel, Cloudflare, and live deploys.' },
  { title: 'Full stack delivery', text: 'Frontend, backend, database, admin. One path to live.' },
  { title: 'SaaS experience', text: 'Including ERP, a cloud product we design, build, and run.' },
]
