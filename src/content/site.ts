export const ERP_URL = 'https://softoras-erp.vercel.app'
export const TAGLINE = 'Think SaaS. Think Softoras.'
export const MISSION =
  'Softoras does not just build websites — Softoras builds systems.'

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

export const stats = [
  { value: '8+', label: 'Live projects' },
  { value: '8', label: 'Core services' },
  { value: '2', label: 'Global offices' },
]

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
    slug: 'software-products',
    title: 'Custom Software & SaaS',
    icon: '01',
    description:
      'From internal platforms to customer-facing SaaS products, we design and engineer scalable software around your business model.',
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
    description:
      'Build intelligent voice and conversational agents using modern AI platforms, APIs and business workflows.',
    points: ['Voice agents', 'Chat flows', 'CRM-connected bots', 'OpenAI & Vapi'],
    detail:
      'AI that does work — not a demo chatbot. Voice agents on Vapi that book appointments, chat flows that qualify leads, and bots wired into CRM so conversations update pipelines automatically.',
    deliverables: ['Voice or chat agent setup', 'Prompt and flow design', 'CRM and calendar integration', 'Call logging and monitoring', 'Fallback to human handoff'],
    tools: ['OpenAI', 'Vapi', 'GoHighLevel', 'Twilio', 'n8n'],
  },
  {
    slug: 'crm-gohighlevel',
    title: 'CRM & GoHighLevel',
    icon: '03',
    description:
      'Design CRM ecosystems, pipelines, workflows, lead management, appointment systems, messaging and reporting.',
    points: ['Pipeline design', 'Lead routing', 'SMS and email', 'Booking flows'],
    detail:
      'CRM setup that matches how your team actually sells and serves. GoHighLevel sub-accounts, pipelines, automations, calendars, SMS sequences, and Follow Up Boss integrations.',
    deliverables: ['Pipeline and stage design', 'GHL or HubSpot setup', 'SMS and email sequences', 'Booking and calendar flows', 'Reporting dashboards'],
    tools: ['GoHighLevel', 'HubSpot', 'Follow Up Boss', 'Calendly', 'Twilio'],
  },
  {
    slug: 'ai-automation',
    title: 'Automation & Integrations',
    icon: '04',
    description:
      'Connect your tools, eliminate repetitive work and build reliable automated workflows across your business.',
    points: ['n8n workflows', 'Make and Zapier', 'Webhooks', 'AI in pipelines'],
    detail:
      'Automations that replace manual copy-paste between tools. Lead comes in → CRM updates → SMS sends → task created → team notified. Built with error handling, retries, and documentation.',
    deliverables: ['Workflow mapping and design', 'n8n / Make / Zapier builds', 'Webhook and API connections', 'AI steps in pipelines', 'Monitoring and alerts'],
    tools: ['n8n', 'Make', 'Zapier', 'OpenAI', 'HubSpot'],
  },
  {
    slug: 'web-development',
    title: 'Web & Mobile Development',
    icon: '05',
    description:
      'Build high-performance websites, web applications and mobile experiences designed around real users.',
    points: ['React and Next.js', 'Responsive UI', 'Performance', 'Mobile-friendly'],
    detail:
      'Full-stack web development when you need both the interface and the engine behind it. React and Next.js frontends, Node, PHP, Laravel, or Python backends, shipped responsive.',
    deliverables: ['Frontend and backend code', 'Responsive layouts', 'API integration', 'Performance optimization', 'Cross-browser testing'],
    tools: ['React', 'Next.js', 'Node.js', 'PHP', 'Python'],
  },
  {
    slug: 'cloud-servers',
    title: 'Cloud & DevOps',
    icon: '06',
    description:
      'Deploy secure, scalable and maintainable infrastructure using modern cloud and deployment technologies.',
    points: ['AWS architecture', 'Vercel deploys', 'Cloudflare & DNS', 'CI/CD pipelines'],
    detail:
      'Infrastructure that stays calm under traffic. AWS architecture, Vercel for frontend deploys, Cloudflare for DNS and edge, SSL, backups, and CI/CD so releases are repeatable.',
    deliverables: ['Cloud architecture plan', 'AWS / Vercel setup', 'DNS and SSL', 'Deploy pipelines', 'Monitoring and uptime checks'],
    tools: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'GitHub'],
  },
  {
    slug: 'business-systems',
    title: 'Business Systems',
    icon: '07',
    description:
      'Connect CRM, ERP, operations, sales and internal processes into one efficient digital ecosystem.',
    points: ['Custom admin', 'Ops workflows', 'Role-based access', 'Reporting'],
    detail:
      'The internal tools that run the business: custom admin panels, inventory systems, HR workflows, reporting dashboards, and databases your team relies on daily.',
    deliverables: ['Custom admin panels', 'Database design', 'Role-based access', 'Reporting and exports', 'Ops workflow automation'],
    tools: ['Supabase', 'MongoDB', 'PostgreSQL', 'React', 'AWS'],
  },
  {
    slug: 'custom-websites',
    title: 'UI/UX & Product Development',
    icon: '08',
    description:
      'Turn complex ideas into intuitive interfaces and production-ready digital products.',
    points: ['UX flows', 'UI in code', 'Design systems', 'Product screens'],
    detail:
      'Product thinking applied to every screen: user flows, wireframes, design systems, and interfaces built directly in React and Next.js.',
    deliverables: ['UX flows and wireframes', 'UI design implemented in code', 'Component libraries', 'Responsive product screens', 'Handoff-ready design system'],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Framer Motion'],
  },
]

export function getService(slug: string) {
  return services.find((item) => item.slug === slug)
}

/** Business-language solution areas — what Softoras can solve. */
export const solutionAreas = [
  {
    title: 'Lead & Customer Management',
    text: 'Capture leads, route them through CRM pipelines, and keep follow-up consistent across SMS, email and booking flows.',
  },
  {
    title: 'Sales & Revenue Operations',
    text: 'Pipeline design, deal tracking, proposals, and sales workflows that connect marketing activity to closed revenue.',
  },
  {
    title: 'AI-Powered Customer Communication',
    text: 'Voice and chat agents that answer, qualify, book, and hand off — wired into the CRM your team already uses.',
  },
  {
    title: 'Business Automation',
    text: 'Replace manual steps between tools with n8n, Make, or Zapier workflows that run reliably at scale.',
  },
  {
    title: 'Internal Operations',
    text: 'Admin panels, inventory, HR workflows, and the software staff use every day — not just the public homepage.',
  },
  {
    title: 'Data & Reporting',
    text: 'Dashboards, exports, and connected data flows so operators see what is happening without spreadsheet chaos.',
  },
  {
    title: 'Cloud Infrastructure',
    text: 'AWS, Vercel, Cloudflare, DNS, and deploy pipelines so products stay online and releases stay calm.',
  },
  {
    title: 'Digital Product Development',
    text: 'SaaS products, web apps, and customer-facing platforms — from first screen to a system people log into daily.',
  },
]

/** Industry verticals for the solutions page. */
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
  {
    title: 'Discover',
    text: 'Understand the business, users, and goals. Map the operation and define what the system actually needs to do.',
  },
  {
    title: 'Plan',
    text: 'Define scope, architecture, integrations, timeline, and priorities — so the first release is shippable and useful.',
  },
  {
    title: 'Design',
    text: 'Create the experience and system structure: flows, UI direction, and technical plan before production code.',
  },
  {
    title: 'Build',
    text: 'Develop the product, automation, or platform in slices the team can use — not a long black-box build.',
  },
  {
    title: 'Integrate',
    text: 'Connect APIs, CRMs, AI tools, payments, email, and third-party services into one working ecosystem.',
  },
  {
    title: 'Launch',
    text: 'Deploy to cloud, run production tests, configure DNS and access, and put the system in front of real users.',
  },
  {
    title: 'Improve',
    text: 'Monitor, optimize, and scale — tightening automations, speed, and the workflows used every week.',
  },
]

export const strengths = [
  { title: 'Engineering-first thinking', text: 'Architecture and code quality come before decoration — systems built to last.' },
  { title: 'Product mindset', text: 'We build software people log into daily, not one-off pages that sit unused.' },
  { title: 'Automation expertise', text: 'n8n, Make, Zapier, GoHighLevel, and AI agents wired into real business pipelines.' },
  { title: 'Broad technology ecosystem', text: 'CRM, cloud, development, commerce, and ops tools — one team, one delivery path.' },
  { title: 'End-to-end implementation', text: 'From discovery through deploy — no handoffs that lose context mid-build.' },
  { title: 'Scalable architecture', text: 'Systems designed to grow with users, modules, traffic, and business complexity.' },
  { title: 'Modern cloud infrastructure', text: 'AWS Solutions Architecture, Vercel, Cloudflare, Docker, and production deploys.' },
  { title: 'Business-focused solutions', text: 'Every build starts with the operation — not a technology checklist.' },
]

export const aboutBlocks = {
  intro:
    'Softoras is an engineering-led technology company focused on software, SaaS, AI, automation, CRM, cloud and digital products. We combine product thinking with engineering and automation expertise to create solutions that are useful, maintainable and scalable.',
  whatWeBelieve:
    'Business problems deserve systems — not templates. Software should connect CRM, operations, sales, and customer communication into workflows people actually run every day.',
  howWeWork:
    'We scope in slices, ship early, integrate deeply, and stay on the work through launch. One team owns the path from idea to production.',
  whatMakesUsDifferent:
    'Softoras builds and runs its own SaaS product (ERP), ships live client systems across CRM and automation, and works across the full stack — frontend, backend, cloud, and ops tools.',
  builtWithPurpose:
    'Led by Muhammad Shaheer Lodhi — AWS Certified Solutions Architect, full-stack engineer, and builder of live products. Offices in Rawalpindi, Pakistan and Khor Fakkan, Sharjah, UAE.',
}

/** ERP modules confirmed in the live Softoras ERP product. */
export const erpModules = [
  'CRM',
  'Sales',
  'Inventory',
  'Purchasing',
  'HR',
  'Payroll',
  'Accounting',
  'Projects',
]
