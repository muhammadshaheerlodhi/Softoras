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
  icon: string
  description: string
  points: string[]
  detail: string
  deliverables: string[]
  tools: string[]
}

export const services: Service[] = [
  {
    slug: 'custom-websites',
    title: 'UI/UX & Product Development',
    icon: '08',
    description: 'Product design, UX flows, and interfaces that feel premium — from wireframe to polished UI in code.',
    points: ['UX flows', 'UI design in code', 'Design systems', 'Product screens'],
    detail:
      'Product thinking applied to every screen: user flows, wireframes, design systems, and interfaces built directly in React and Next.js. We align UX, visual design, and engineering so the product feels cohesive from landing page to admin panel.',
    deliverables: ['UX flows and wireframes', 'UI design implemented in code', 'Component libraries', 'Responsive product screens', 'Handoff-ready design system'],
    tools: ['Figma', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'software-products',
    title: 'Custom Software & SaaS',
    icon: '01',
    description: 'Custom apps and SaaS products, from first screen to a live product people can log into.',
    points: ['SaaS products', 'Web apps', 'Admin panels', 'APIs'],
    detail:
      'From MVP to production SaaS: auth, dashboards, billing hooks, role-based access, and APIs your team can extend. Softoras has shipped its own ERP product and client platforms — we know what it takes to go from wireframe to a login screen real users hit every day.',
    deliverables: ['Product UI and UX flows', 'Auth and user roles', 'Admin panels', 'REST or webhook APIs', 'Staging and production deploys'],
    tools: ['React', 'Next.js', 'Supabase', 'Node.js', 'AWS'],
  },
  {
    slug: 'ai-agents-bots',
    title: 'AI Agents & Voice AI',
    icon: '02',
    description: 'Voice and chat agents that answer, book, and follow up. OpenAI, Vapi, and real workflows.',
    points: ['AI agents', 'AI bots', 'Voice agents', 'Chat flows'],
    detail:
      'AI that does work — not a demo chatbot. Voice agents on Vapi that book appointments, chat flows that qualify leads, and bots wired into CRM so conversations update pipelines automatically. Built with guardrails, handoff paths, and logging you can trust in production.',
    deliverables: ['Voice or chat agent setup', 'Prompt and flow design', 'CRM and calendar integration', 'Call logging and monitoring', 'Fallback to human handoff'],
    tools: ['OpenAI', 'Vapi', 'GoHighLevel', 'Twilio', 'n8n'],
  },
  {
    slug: 'ai-automation',
    title: 'Automation & Integrations',
    icon: '04',
    description: 'n8n, Make, Zapier, and AI in the middle, so leads, emails, and ops move without extra staff.',
    points: ['n8n workflows', 'Make and Zapier', 'OpenAI in pipelines', 'Webhooks'],
    detail:
      'Automations that replace manual copy-paste between tools. Lead comes in → CRM updates → SMS sends → task created → team notified. We design n8n and Make workflows with error handling, retries, and documentation so your ops keep running when volume spikes.',
    deliverables: ['Workflow mapping and design', 'n8n / Make / Zapier builds', 'Webhook and API connections', 'AI steps in pipelines', 'Monitoring and alerts'],
    tools: ['n8n', 'Make', 'Zapier', 'OpenAI', 'HubSpot'],
  },
  {
    slug: 'crm-gohighlevel',
    title: 'CRM & GoHighLevel',
    icon: '03',
    description: 'Pipelines, booking, SMS, and follow up built for teams that live in GHL and HubSpot.',
    points: ['Pipeline design', 'Lead routing', 'SMS and email', 'Booking'],
    detail:
      'CRM setup that matches how your team actually sells and serves. GoHighLevel sub-accounts, pipelines, automations, calendars, SMS sequences, and Follow Up Boss integrations — configured so leads do not fall through cracks and follow up runs on schedule.',
    deliverables: ['Pipeline and stage design', 'GHL or HubSpot setup', 'SMS and email sequences', 'Booking and calendar flows', 'Reporting dashboards'],
    tools: ['GoHighLevel', 'HubSpot', 'Follow Up Boss', 'Calendly', 'Twilio'],
  },
  {
    slug: 'cloud-servers',
    title: 'Cloud & DevOps',
    icon: '06',
    description: 'AWS, Vercel, Cloudflare, DNS, and server setup so the product stays online and can ship safely.',
    points: ['AWS architecture', 'Server management', 'Vercel and Cloudflare', 'DNS and deploys'],
    detail:
      'Infrastructure that stays calm under traffic. AWS architecture, EC2 and Lambda where needed, Vercel for frontend deploys, Cloudflare for DNS and edge, SSL, backups, and CI/CD so releases are repeatable — not a manual FTP upload at midnight.',
    deliverables: ['Cloud architecture plan', 'AWS / Vercel setup', 'DNS and SSL', 'Deploy pipelines', 'Monitoring and uptime checks'],
    tools: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'GitHub'],
  },
  {
    slug: 'web-development',
    title: 'Web & Mobile Development',
    icon: '05',
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
    icon: '07',
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
  { title: 'Discover', text: 'Map the operation, users, and the system that actually needs to exist.' },
  { title: 'Plan', text: 'Scope modules, integrations, timeline, and the path to a shippable first release.' },
  { title: 'Design', text: 'Flows, architecture, and UI direction before the first production commit.' },
  { title: 'Build', text: 'Ship in slices the team can use — not a six-month black box.' },
  { title: 'Integrate', text: 'Connect CRM, ads, payments, email, and third-party tools through APIs.' },
  { title: 'Launch', text: 'Cloud, servers, DNS, and a calm release path to production.' },
  { title: 'Improve', text: 'Tighten automations, speed, analytics, and the workflows used every week.' },
]

export const strengths = [
  { title: 'Engineering-first thinking', text: 'Architecture and code quality come before decoration.' },
  { title: 'Product mindset', text: 'We build systems people log into — not one-off pages.' },
  { title: 'AI & automation expertise', text: 'OpenAI, Vapi, n8n, Make, and real pipelines in production.' },
  { title: 'Broad technology ecosystem', text: 'CRM, cloud, dev, commerce, and ops tools in one team.' },
  { title: 'End-to-end implementation', text: 'Discovery through deploy — one path to live.' },
  { title: 'Scalable architecture', text: 'Systems designed to grow with traffic, users, and modules.' },
  { title: 'Cloud expertise', text: 'AWS Solutions Architecture, Vercel, Cloudflare, and live deploys.' },
  { title: 'Flagship SaaS experience', text: 'Including Softoras ERP — a product we design, build, and run.' },
]
