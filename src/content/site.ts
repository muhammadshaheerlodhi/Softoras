export const ERP_URL = 'https://softoras-erp.vercel.app'
export const ERP_PATH = '/products/erp'
export const TAGLINE = 'Think SaaS. Think Softoras.'
export const MISSION = 'Softoras does not just build websites. Softoras builds systems.'

export const site = {
  name: 'Softoras',
  email: 'admin@softoras.com',
  phones: {
    pakistan: { label: '+92 334 4255662', href: 'tel:+923344255662' },
    uae: { label: '+971 50 170 3257', href: 'tel:+971501703257' },
  },
  offices: {
    pakistan: 'Phase 8, Bahria Town, Rawalpindi, Pakistan',
    uae: 'Khor Fakkan, Sharjah, United Arab Emirates',
  },
  linkedin: 'https://www.linkedin.com/in/muhammad-shaheer-lodhi-655aa8227',
}

export const ceo = {
  name: 'Muhammad Shaheer Lodhi',
  title: 'CEO and Founder',
  credentials: 'AWS Certified Solutions Architect Associate',
  bio: 'Shaheer is a software engineer and AWS Certified Solutions Architect Associate. He builds and runs product work across software, web, backend, cloud, DevOps, CRM, GoHighLevel, AI automation, and SaaS, including Softoras ERP.',
  photo: '/about/shaheer-lodhi.png',
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
  overview: string
  useCases: string[]
  outcomes: string[]
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
      'From MVP to production SaaS: auth, dashboards, billing hooks, role-based access, and APIs your team can extend. Softoras has shipped its own ERP product and client platforms. We know what it takes to go from wireframe to a login screen real users hit every day.',
    overview:
      'We partner with founders and operators who need software that becomes part of daily operations, not a one-off deliverable. Every build starts with how users log in, what they do next, and how the business measures success.',
    useCases: [
      'Launching a subscription product with billing and role-based access',
      'Replacing spreadsheets with a custom admin panel your team runs daily',
      'Building a client portal that connects to CRM, payments, and reporting',
      'Extending an existing product with new modules and API integrations',
    ],
    outcomes: [
      'Production-ready auth, dashboards, and admin flows',
      'APIs and data models your team can extend without rework',
      'Staging and production environments with a clear release path',
      'Documentation and handoff so internal teams can maintain the system',
    ],
    deliverables: ['Product UI and UX flows', 'Auth and user roles', 'Admin panels', 'REST or webhook APIs', 'Staging and production deploys'],
    tools: ['Supabase', 'PostgreSQL', 'AWS', 'Stripe', 'Vercel', 'GitHub', 'Docker', 'MongoDB', 'Cloudflare', 'Airtable'],
  },
  {
    slug: 'ai-agents-bots',
    title: 'AI Agents & Voice AI',
    icon: '02',
    description:
      'Build intelligent voice and conversational agents using modern AI platforms, APIs and business workflows.',
    points: ['Voice agents', 'Chat flows', 'CRM-connected bots', 'OpenAI & Vapi'],
    detail:
      'AI that does work, not a demo chatbot. Voice agents on Vapi that book appointments, chat flows that qualify leads, and bots wired into CRM so conversations update pipelines automatically.',
    overview:
      'We design agents around real business outcomes: booked calls, qualified leads, support triage, and CRM updates. Prompts, flows, and fallbacks are built for production traffic, not conference demos.',
    useCases: [
      'Voice agents that answer calls, qualify intent, and book appointments',
      'Website chat that captures leads and routes them into GoHighLevel or HubSpot',
      'Support bots with human handoff and logged conversation history',
      'AI steps inside n8n or Make workflows for classification and routing',
    ],
    outcomes: [
      'Agents connected to CRM, calendar, and messaging tools',
      'Monitored flows with logging, retries, and escalation paths',
      'Prompt and knowledge-base structure your team can refine over time',
      'Measurable impact on response time, booking rate, or lead quality',
    ],
    deliverables: ['Voice or chat agent setup', 'Prompt and flow design', 'CRM and calendar integration', 'Call logging and monitoring', 'Fallback to human handoff'],
    tools: ['OpenAI', 'Vapi', 'Twilio', 'GoHighLevel', 'HubSpot', 'n8n', 'Make', 'Zapier', 'Mailgun', 'Calendly'],
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
    overview:
      'A CRM should mirror how your team sells, serves, and follows up. We map stages, automations, and messaging so leads move cleanly from first touch to closed deal without manual copy-paste.',
    useCases: [
      'GoHighLevel sub-account setup with pipelines, calendars, and SMS sequences',
      'Lead routing from ads, forms, and calls into the right owner or stage',
      'Appointment booking flows with reminders and no-show recovery',
      'HubSpot or Follow Up Boss integrations for teams already on those platforms',
    ],
    outcomes: [
      'Pipeline stages with one clear meaning for every deal or lead',
      'Automations for nurture, booking, and internal notifications',
      'Reporting views operators can trust without exporting to spreadsheets',
      'Documented workflows the sales and ops team can run independently',
    ],
    deliverables: ['Pipeline and stage design', 'GHL or HubSpot setup', 'SMS and email sequences', 'Booking and calendar flows', 'Reporting dashboards'],
    tools: ['GoHighLevel', 'HubSpot', 'Follow Up Boss', 'Calendly', 'Twilio', 'Stripe', 'Zapier', 'Make', 'DocuSign', 'Mailgun'],
  },
  {
    slug: 'ai-automation',
    title: 'Automation & Integrations',
    icon: '04',
    description:
      'Connect your tools, eliminate repetitive work and build reliable automated workflows across your business.',
    points: ['n8n workflows', 'Make and Zapier', 'Webhooks', 'AI in pipelines'],
    detail:
      'Automations that replace manual copy-paste between tools. Lead comes in, CRM updates, SMS sends, task created, team notified. Built with error handling, retries, and documentation.',
    overview:
      'Most teams lose hours moving data between CRM, email, ads, and internal tools. We build automations that run reliably, fail gracefully, and stay visible when something needs attention.',
    useCases: [
      'Lead capture from ads or forms into CRM with instant follow-up messages',
      'Syncing data between ERP, CRM, and support tools via webhooks',
      'AI classification steps inside n8n or Make for routing and tagging',
      'Scheduled reports, alerts, and internal task creation from live data',
    ],
    outcomes: [
      'Documented workflows with error handling and retry logic',
      'Fewer manual handoffs between sales, ops, and delivery teams',
      'Webhook and API connections tested against real production volume',
      'Monitoring so failures surface before customers notice',
    ],
    deliverables: ['Workflow mapping and design', 'n8n / Make / Zapier builds', 'Webhook and API connections', 'AI steps in pipelines', 'Monitoring and alerts'],
    tools: ['n8n', 'Make', 'Zapier', 'OpenAI', 'HubSpot', 'GoHighLevel', 'Twilio', 'Mailgun', 'Airtable', 'Stripe'],
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
    overview:
      'We build public sites and web applications that load fast, read clearly on mobile, and connect to the systems behind them. Design, frontend, backend, and deploy are handled as one delivery path.',
    useCases: [
      'Marketing sites with CMS-friendly structure and strong performance scores',
      'Customer portals and dashboards backed by APIs and auth',
      'Mobile-first experiences for field teams, clients, or members',
      'Refactoring legacy sites into modern React or Next.js stacks',
    ],
    outcomes: [
      'Responsive layouts tested across common devices and browsers',
      'Performance optimization for Core Web Vitals and real user load',
      'Clean integration with CRM, forms, analytics, and backend services',
      'Maintainable codebase with components your team can extend',
    ],
    deliverables: ['Frontend and backend code', 'Responsive layouts', 'API integration', 'Performance optimization', 'Cross-browser testing'],
    tools: ['WordPress', 'Shopify', 'Vercel', 'Cloudflare', 'Supabase', 'Laravel', 'Stripe', 'GitHub', 'Docker', 'Canva'],
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
    overview:
      'Production systems need more than a deploy button. We design cloud architecture, access control, DNS, SSL, backups, and release pipelines so your team can ship with confidence.',
    useCases: [
      'AWS architecture for apps that need compute, storage, and managed services',
      'Vercel or similar frontend deploys with preview environments per branch',
      'Cloudflare DNS, SSL, and edge rules for global availability',
      'CI/CD pipelines that run tests and promote builds to production safely',
    ],
    outcomes: [
      'Documented infrastructure your team understands and can operate',
      'Repeatable deploy process with rollback options',
      'Monitoring and uptime checks for critical services',
      'Security basics covered: access, SSL, secrets, and backups',
    ],
    deliverables: ['Cloud architecture plan', 'AWS / Vercel setup', 'DNS and SSL', 'Deploy pipelines', 'Monitoring and uptime checks'],
    tools: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'GitHub', 'Supabase', 'PostgreSQL', 'MongoDB'],
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
    overview:
      'Internal systems are where revenue and margin are protected. We build admin panels, ops workflows, and reporting tools that staff use every day, connected to the same data your customer-facing products rely on.',
    useCases: [
      'Custom admin panels for inventory, orders, or service delivery',
      'HR, payroll, or ops workflows with role-based permissions',
      'Reporting dashboards fed from CRM, ERP, and operational databases',
      'Connecting legacy spreadsheets to a single source of truth',
    ],
    outcomes: [
      'Role-based access so teams see only what they need',
      'Workflows that reduce manual reconciliation and duplicate entry',
      'Exports and dashboards leadership can use for weekly decisions',
      'Systems designed to grow with new modules and user groups',
    ],
    deliverables: ['Custom admin panels', 'Database design', 'Role-based access', 'Reporting and exports', 'Ops workflow automation'],
    tools: ['Supabase', 'MongoDB', 'PostgreSQL', 'AWS', 'Airtable', 'Asana', 'DocuSign', 'Stripe', 'GoHighLevel', 'HubSpot'],
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
    overview:
      'Great products feel obvious to use because the hard thinking happened before pixels. We map flows, define UI patterns, and implement design systems directly in code so what ships matches what users need.',
    useCases: [
      'New product UX from first wireframe through production UI',
      'Design system and component library for a growing SaaS team',
      'Redesigning complex dashboards for clarity and daily usability',
      'Marketing pages that match product UI quality and brand consistency',
    ],
    outcomes: [
      'Documented user flows and screen logic before heavy development',
      'Component libraries that keep new features visually consistent',
      'Accessible, responsive interfaces built in React and Next.js',
      'Faster iteration because design and engineering share the same codebase',
    ],
    deliverables: ['UX flows and wireframes', 'UI design implemented in code', 'Component libraries', 'Responsive product screens', 'Handoff-ready design system'],
    tools: ['Figma', 'Framer', 'Canva', 'FigJam', 'Miro', 'Adobe XD', 'Notion', 'Zeplin'],
  },
]

export function getService(slug: string) {
  return services.find((item) => item.slug === slug)
}

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
    text: 'Voice and chat agents that answer, qualify, book, and hand off, wired into the CRM your team already uses.',
  },
  {
    title: 'Business Automation',
    text: 'Replace manual steps between tools with n8n, Make, or Zapier workflows that run reliably at scale.',
  },
  {
    title: 'Internal Operations',
    text: 'Admin panels, inventory, HR workflows, and the software staff use every day, not just the public homepage.',
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
    text: 'SaaS products, web apps, and customer-facing platforms, from first screen to a system people log into daily.',
  },
]

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
    text: 'Define scope, architecture, integrations, timeline, and priorities so the first release is shippable and useful.',
  },
  {
    title: 'Design',
    text: 'Create the experience and system structure: flows, UI direction, and technical plan before production code.',
  },
  {
    title: 'Build',
    text: 'Develop the product, automation, or platform in slices the team can use, not a long black-box build.',
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
    text: 'Monitor, optimize, and scale by tightening automations, speed, and the workflows used every week.',
  },
]

export const strengths = [
  { title: 'Engineering-first thinking', text: 'Architecture and code quality come before decoration. Systems built to last.' },
  { title: 'Product mindset', text: 'We build software people log into daily, not one-off pages that sit unused.' },
  { title: 'Automation expertise', text: 'n8n, Make, Zapier, GoHighLevel, and AI agents wired into real business pipelines.' },
  { title: 'Broad technology ecosystem', text: 'CRM, cloud, development, commerce, and ops tools. One team, one delivery path.' },
  { title: 'End-to-end implementation', text: 'From discovery through deploy with no handoffs that lose context mid-build.' },
  { title: 'Scalable architecture', text: 'Systems designed to grow with users, modules, traffic, and business complexity.' },
  { title: 'Modern cloud infrastructure', text: 'AWS Solutions Architecture, Vercel, Cloudflare, Docker, and production deploys.' },
  { title: 'Business-focused solutions', text: 'Every build starts with the operation, not a technology checklist.' },
]

export const aboutBlocks = {
  intro:
    'Softoras is an engineering-led technology company focused on software, SaaS, AI, automation, CRM, cloud and digital products. We combine product thinking with engineering and automation expertise to create solutions that are useful, maintainable and scalable.',
  whatWeBelieve:
    'Business problems deserve systems, not templates. Software should connect CRM, operations, sales, and customer communication into workflows people actually run every day.',
  howWeWork:
    'We scope in slices, ship early, integrate deeply, and stay on the work through launch. One team owns the path from idea to production.',
  whatMakesUsDifferent:
    'Softoras builds and runs its own SaaS product (ERP), ships live client systems across CRM and automation, and works across the full stack: frontend, backend, cloud, and ops tools.',
  builtWithPurpose:
    'Led by Muhammad Shaheer Lodhi, AWS Certified Solutions Architect, full-stack engineer, and builder of live products. Offices in Phase 8, Bahria Town, Rawalpindi and Khor Fakkan, Sharjah, UAE.',
}

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
