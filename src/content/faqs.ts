export type FaqItem = {
  q: string
  a: string
}

export const homeFaqs: FaqItem[] = [
  {
    q: 'What is Softoras?',
    a: 'Softoras is an engineering-led technology company that builds SaaS products, ERP systems, CRM ecosystems, AI agents, automation workflows, custom software, and cloud infrastructure. We focus on systems your business can run every day, not one-off websites.',
  },
  {
    q: 'What services does Softoras offer?',
    a: 'We offer custom software and SaaS, AI agents and voice AI, CRM and GoHighLevel setup, automation and integrations, web and mobile development, cloud and DevOps, business systems, and UI/UX product development. One team can cover discovery, build, integration, and launch.',
  },
  {
    q: 'What is Softoras ERP and how does it connect to your services?',
    a: 'Softoras ERP is our flagship cloud product for CRM, sales, inventory, HR, payroll, accounting, and operations. You can explore it on this site under Products. We also implement, integrate, and extend ERP-style systems for clients who need custom ops, reporting, or connections to CRM and automation tools.',
  },
  {
    q: 'Can Softoras connect my CRM, ERP, and automations together?',
    a: 'Yes. That is a core part of what we do. We wire CRM pipelines, ERP modules, webhooks, n8n or Make workflows, AI agents, and customer-facing sites so data moves once and teams stop copying between tools.',
  },
  {
    q: 'How reliable are Softoras builds in production?',
    a: 'We ship with staging environments, documented deploy paths, error handling on automations, and cloud architecture designed for real traffic. Softoras runs its own live ERP product and client systems in production, so reliability is part of how we design, not an afterthought.',
  },
  {
    q: 'Do you work with startups and established businesses?',
    a: 'Both. We help founders launch MVPs and SaaS products, and we help established teams replace manual ops, unify CRM and internal tools, or add AI and automation without breaking what already works.',
  },
  {
    q: 'Where is Softoras based?',
    a: 'We operate from Phase 8, Bahria Town, Rawalpindi, Pakistan and Khor Fakkan, Sharjah, UAE. We work with clients globally and respond within one business day on new inquiries.',
  },
  {
    q: 'How do I start a project with Softoras?',
    a: 'Use the contact form on this site or email admin@softoras.com with a short description of your business, the problem you want solved, and any tools you already use. We will reply with next steps, scope options, and a practical path to a first release.',
  },
]

export const serviceFaqs: Record<string, FaqItem[]> = {
  'software-products': [
    {
      q: 'What types of software does Softoras build?',
      a: 'We build SaaS products, customer portals, internal admin panels, APIs, and subscription platforms with auth, roles, billing hooks, and dashboards your team can extend after launch.',
    },
    {
      q: 'Can you take an idea from MVP to production SaaS?',
      a: 'Yes. We scope the first release around what users need on day one, then ship auth, core workflows, admin tools, and deploy paths so you can onboard real customers without rebuilding later.',
    },
    {
      q: 'Do you hand off code and documentation?',
      a: 'Yes. Deliverables include production code, staging and production environments, and documentation so your internal team or partners can maintain and extend the product.',
    },
    {
      q: 'Can you integrate payments, CRM, or ERP into a custom product?',
      a: 'Yes. We regularly connect Stripe, Supabase, CRM tools, ERP modules, webhooks, and third-party APIs as part of the product architecture from the start.',
    },
  ],
  'ai-agents-bots': [
    {
      q: 'What can Softoras AI agents actually do in production?',
      a: 'Voice agents can answer calls, qualify intent, and book appointments. Chat agents can capture leads, answer FAQs, and update CRM stages. Flows include human handoff, logging, and retries when APIs fail.',
    },
    {
      q: 'Which platforms do you use for voice and chat AI?',
      a: 'We work with OpenAI, Vapi, Twilio, GoHighLevel, and workflow tools like n8n so agents connect to calendars, CRM, and messaging channels your team already uses.',
    },
    {
      q: 'Will conversations sync to my CRM?',
      a: 'Yes. We design agents so qualified leads, bookings, and conversation summaries land in CRM pipelines or contact records automatically instead of sitting in a separate inbox.',
    },
    {
      q: 'Can agents escalate to a human when needed?',
      a: 'Yes. Every production agent includes fallback paths, handoff rules, and monitoring so your team stays in control when the AI should not finish the job alone.',
    },
  ],
  'crm-gohighlevel': [
    {
      q: 'Do you setup GoHighLevel from scratch?',
      a: 'Yes. We configure sub-accounts, pipelines, calendars, SMS and email sequences, forms, and automations mapped to how your sales and ops teams actually work.',
    },
    {
      q: 'Can you fix a messy CRM pipeline?',
      a: 'Yes. We audit stages, naming, automations, and routing so every lead has one clear path, owners get notified correctly, and reporting reflects reality.',
    },
    {
      q: 'Do you work with HubSpot or Follow Up Boss too?',
      a: 'Yes. While GoHighLevel is a specialty, we also design pipelines and integrations for HubSpot, Follow Up Boss, Calendly, and Twilio-based messaging stacks.',
    },
    {
      q: 'Can CRM connect to ads, forms, and booking pages?',
      a: 'Yes. We wire Meta ads, landing pages, website forms, and call tracking into CRM stages with instant follow-up and appointment flows.',
    },
  ],
  'ai-automation': [
    {
      q: 'What tools do you use for automation?',
      a: 'We build with n8n, Make, Zapier, webhooks, and custom API scripts. We choose the stack based on complexity, volume, and who on your team needs to maintain the workflows.',
    },
    {
      q: 'What processes are good candidates for automation?',
      a: 'Lead routing, CRM updates, invoice notifications, data sync between ERP and CRM, AI classification, scheduled reports, and internal task creation are common high-impact starting points.',
    },
    {
      q: 'How do you handle automation failures?',
      a: 'We add error handling, retries, alerts, and logging so failures surface before customers notice. Critical workflows are documented and tested against real volume.',
    },
    {
      q: 'Can you automate across ERP, CRM, and email?',
      a: 'Yes. Cross-system automation is one of our most common requests. We map data once and let workflows keep CRM, ops tools, and messaging in sync.',
    },
  ],
  'web-development': [
    {
      q: 'Do you build marketing sites and web applications?',
      a: 'Yes. We deliver fast, responsive marketing sites and full web apps with auth, dashboards, APIs, and integrations behind the interface.',
    },
    {
      q: 'Which frameworks do you use?',
      a: 'We primarily use React and Next.js on the frontend, with Node.js, PHP, Laravel, or Python on the backend depending on project needs and existing systems.',
    },
    {
      q: 'Will my site work well on mobile?',
      a: 'Yes. Every build is responsive and tested on common screen sizes. Performance and clarity on mobile are part of the definition of done.',
    },
    {
      q: 'Can you connect a website to CRM and analytics?',
      a: 'Yes. Forms, booking flows, chat, pixels, and server events can feed CRM, automation tools, and analytics so marketing and sales see the same data.',
    },
  ],
  'cloud-servers': [
    {
      q: 'Which cloud platforms does Softoras support?',
      a: 'We design and deploy on AWS, Vercel, Cloudflare, Docker-based stacks, and GitHub-driven CI/CD pipelines with DNS, SSL, and environment separation.',
    },
    {
      q: 'Can you migrate an existing app to the cloud?',
      a: 'Yes. We assess the current stack, plan architecture, set up staging and production, migrate data safely, and document how your team releases going forward.',
    },
    {
      q: 'Do you setup monitoring and backups?',
      a: 'Yes. Production setups include uptime checks, basic monitoring, SSL, secrets handling, and backup strategy appropriate to the application.',
    },
    {
      q: 'Is Softoras AWS certified?',
      a: 'Softoras is led by an AWS Certified Solutions Architect Associate. Cloud architecture, access control, and deploy discipline are built into how we ship systems.',
    },
  ],
  'business-systems': [
    {
      q: 'What are business systems in Softoras terms?',
      a: 'Internal tools your staff use daily: admin panels, inventory, HR workflows, reporting dashboards, role-based access, and ops software connected to the same data as customer-facing products.',
    },
    {
      q: 'Can you replace spreadsheets with a real system?',
      a: 'Yes. We often start by mapping spreadsheet logic into a database, permissions, and workflows so teams get one source of truth without losing familiar processes overnight.',
    },
    {
      q: 'Do you build reporting for leadership?',
      a: 'Yes. Dashboards and exports can pull from CRM, ERP, and operational databases so weekly decisions do not depend on manual reconciliation.',
    },
    {
      q: 'Can business systems connect to Softoras ERP?',
      a: 'Yes. We integrate custom admin tools with ERP modules, CRM, and automation layers so finance, ops, and customer teams work from connected data.',
    },
  ],
  'custom-websites': [
    {
      q: 'Is this service only design, or full product UI?',
      a: 'Both. We map UX flows, define UI patterns, and implement design systems directly in React and Next.js so what ships matches what users need in production.',
    },
    {
      q: 'Do you create design systems for SaaS teams?',
      a: 'Yes. Component libraries, spacing, typography, and screen patterns help growing product teams ship new features without visual drift.',
    },
    {
      q: 'Can you redesign a complex dashboard?',
      a: 'Yes. We simplify navigation, hierarchy, and daily workflows so operators can find what they need faster without removing necessary power-user features.',
    },
    {
      q: 'Will design and engineering share the same codebase?',
      a: 'Yes. UI is implemented in code, not handed off as static files only. That keeps iteration fast and ensures responsive, accessible screens in production.',
    },
  ],
}

export function getServiceFaqs(slug: string): FaqItem[] {
  return serviceFaqs[slug] ?? []
}
