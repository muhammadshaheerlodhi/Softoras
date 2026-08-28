export type Project = {
  slug: string
  name: string
  kind: string
  url?: string
  secondaryUrl?: string
  secondaryLabel?: string
  image: string
  hook: string
  summary: string
  challenge: string
  solution: string
  work: string[]
  stack: string[]
  sections: { heading: string; body: string }[]
}

export const projects: Project[] = [
  {
    slug: 'erp',
    name: 'ERP',
    kind: 'Product',
    url: 'https://softoras-erp.vercel.app',
    image: '/projects/erp.png',
    hook: 'One screen for the whole business.',
    summary: 'Cloud ERP for CRM, sales, stock, HR, accounts, and day-to-day operations — built and run by Softoras.',
    challenge: 'Most teams bounce between tools for sales, stock, people, and money. Nothing talks. Reports take too long.',
    solution:
      'We built ERP as a live SaaS product: modules, roles, dashboards, and a trial path you can open today — not a slide deck.',
    work: ['SaaS product', 'CRM and sales', 'Inventory and purchasing', 'HR and payroll', 'Accounting', 'Cloud deploy'],
    stack: ['Next.js', 'Supabase', 'TypeScript', 'AWS-ready cloud'],
    sections: [
      {
        heading: 'What is live',
        body: 'CRM, sales documents, inventory, purchasing, HR, payroll, accounting, and projects sit in one app. Teams get role-based access so the right people see the right screens.',
      },
      {
        heading: 'Why it matters',
        body: 'You can click through a real product. Modules, dashboards, and a 15-day trial are on the public site at softoras-erp.vercel.app.',
      },
    ],
  },
  {
    slug: 'utcli-solutions',
    name: 'UTCLI Solutions',
    kind: 'Education platform',
    url: 'https://www.utclisolutions.com',
    image: '/projects/utcli.png',
    hook: 'A learning business that can sell, teach, and answer students.',
    summary: 'Courses, ebooks, student queries, and the site behind Imran Afzal’s training brand.',
    challenge: 'A training business needs more than a pretty homepage. Courses have to sell, files have to upload, and student questions need a home.',
    solution:
      'Softoras built the live site and the ops around it: course catalog, course sales, uploads, ebooks, and student query handling.',
    work: [
      'Website',
      'Course selling',
      'Course upload and catalog',
      'Student queries',
      'Ebooks and digital products',
    ],
    stack: ['Web platform', 'Course commerce', 'Content ops'],
    sections: [
      {
        heading: 'What you can open',
        body: 'utclisolutions.com is live: courses, corporate training, coaching, ebooks, login, and sign up. The public face matches a real learning shop, not a one-page brochure.',
      },
      {
        heading: 'What we built behind it',
        body: 'Course selling, catalog and uploads, student query flow, and digital downloads so the team can run the education business day to day.',
      },
    ],
  },
  {
    slug: 'vivacity-solutions',
    name: 'Vivacity Solutions',
    kind: 'Company website',
    url: 'https://www.vivacity-solutions.com',
    secondaryUrl: 'https://crm.vivacity-solutions.com',
    secondaryLabel: 'Open CRM',
    image: '/projects/vivacity.png',
    hook: 'A company site that looks as sharp as the work behind it.',
    summary: 'Public website for Vivacity Solutions — a US IT services brand, with a linked CRM product.',
    challenge: 'The company needed a clear public home: services, story, and a path into the CRM offer — without looking generic.',
    solution: 'Softoras built vivacity-solutions.com as the brand site, wired next to the CRM reselling product on its own URL.',
    work: ['Company website', 'Brand and layout', 'Responsive build', 'Link to CRM product'],
    stack: ['Web platform', 'GoHighLevel', 'CRM'],
    sections: [
      {
        heading: 'The live site',
        body: 'www.vivacity-solutions.com is the public face: services, story, and calls to action. It is the company website, not the CRM app.',
      },
      {
        heading: 'How it connects',
        body: 'The CRM reselling product lives at crm.vivacity-solutions.com. Same brand. Separate job: sell and run CRM, not just tell the company story.',
      },
    ],
  },
  {
    slug: 'vivacity-crm',
    name: 'Vivacity CRM',
    kind: 'CRM product',
    url: 'https://crm.vivacity-solutions.com',
    image: '/projects/vivacity-crm.png',
    hook: 'A CRM you can sell. Not a messy board you hide.',
    summary: 'CRM reselling product — pipelines, automation, and a packed offer on its own live site.',
    challenge: 'Reselling CRM only works if the product looks ready: clear offer, trial story, and a system that can actually run leads.',
    solution:
      'Softoras built the CRM product site and the ops layer: pipelines, lead capture, follow-up, and automation you can package and sell.',
    work: ['CRM reselling', 'Product website', 'Pipelines', 'Lead capture', 'Follow-up automation'],
    stack: ['GoHighLevel', 'CRM product', 'Automations'],
    sections: [
      {
        heading: 'The product URL',
        body: 'crm.vivacity-solutions.com is the CRM offer. www.crm.vivacity-solutions.com sends people to the same place.',
      },
      {
        heading: 'What it is for',
        body: 'This is CRM reselling: a packaged system for capture, pipeline, and follow-up — not only an internal board for one team.',
      },
    ],
  },
  {
    slug: 'cryo-sculpting-boca',
    name: 'Cryo Sculpting Boca Lab',
    kind: 'Growth system',
    url: 'https://cryosculptinglabboca.com',
    image: '/projects/cryo.png',
    hook: 'Ads, website, and booking on one path.',
    summary: 'Website, Meta ads, CRM, booking, and follow-up for a Boca Raton wellness lab.',
    challenge:
      'Leads from ads were landing with no clean path. Follow-up depended on someone remembering to call. Bookings and no-shows were easy to lose.',
    solution:
      'Softoras tied the site, Meta ads, a CRM pipeline, booking, and auto follow-up so a lead can go from ad to booked visit without guesswork.',
    work: ['Website', 'Meta Ads', 'Lead gen', 'CRM pipeline', 'Booking', 'Follow-up automation'],
    stack: ['GoHighLevel', 'Meta Ads', 'SMS / email', 'Booking'],
    sections: [
      {
        heading: 'The live site',
        body: 'cryosculptinglabboca.com is the Boca Raton booking and offer site. Softoras built the web side and the growth stack around it.',
      },
      {
        heading: 'The pipeline',
        body: 'Stages stay simple: New Lead → Contacted → Qualified → Consultation Booked → Consultation Completed → Client Won. Quiet leads sit in Nurture. Lost is a tag, not a messy extra column.',
      },
      {
        heading: 'The automations',
        body: 'Fast reply on form submit, missed-call text-back, nurture, booking confirm, reminders, no-show recovery, after-visit follow-up, and Meta event sync so ads and ops stay in the same loop.',
      },
    ],
  },
  {
    slug: 'awais-creations',
    name: 'Awais Creations',
    kind: 'Website',
    url: 'https://awaiscreations.com',
    image: '/projects/awais.png',
    hook: 'A personal brand that looks like the work.',
    summary: 'WordPress site for Raja Awais Ayub — clean structure, strong first screen, easy to keep up.',
    challenge: 'A creator needed a site that feels premium, shows the work, and stays easy to edit in WordPress.',
    solution: 'Softoras built awaiscreations.com as a WordPress brand site: layout, portfolio path, and a responsive build.',
    work: ['WordPress', 'Personal brand site', 'Portfolio layout', 'Responsive design'],
    stack: ['WordPress', 'Responsive UI', 'Content structure'],
    sections: [
      {
        heading: 'What is live',
        body: 'awaiscreations.com opens on a sharp hero, services, portfolio, and a simple path to book or contact. It is a real content site, not a template dump.',
      },
      {
        heading: 'How it is built',
        body: 'WordPress so the owner can keep pages and work updated without a developer for every small change.',
      },
    ],
  },
  {
    slug: 'back-office-solutions',
    name: 'Back Office Solutions',
    kind: 'Business platform',
    url: 'https://va.backofficesolutions.net',
    image: '/projects/bos.png',
    hook: 'Not a brochure. A full back-office platform.',
    summary: 'Website, admin, database, Supabase, and the workflows staff use every day.',
    challenge: 'A VA business needed more than a marketing page. Staff needed admin, data, and real workflows.',
    solution:
      'Softoras built the live platform at va.backofficesolutions.net: public site, admin, custom features, database, and Supabase.',
    work: ['Website', 'Admin panel', 'Custom features', 'Database', 'Supabase', 'Staff workflows'],
    stack: ['Next.js', 'Supabase', 'Custom admin', 'Ops workflows'],
    sections: [
      {
        heading: 'The URL',
        body: 'va.backofficesolutions.net is the live entry. Open it and you are on the real platform, not a placeholder.',
      },
      {
        heading: 'What sits behind the homepage',
        body: 'Admin, database, Supabase, and the flows the team uses to run real-estate VA work — listings, CRM support, follow-ups, and day-to-day ops.',
      },
    ],
  },
  {
    slug: 'teknotize-merchandise',
    name: 'Teknotize Merchandise',
    kind: 'Ecommerce',
    url: 'https://www.teknotizemerchandise.com',
    image: '/projects/teknotize.png',
    hook: 'Athlete merch that looks ready to sell.',
    summary: 'Shopify store for athlete apparel and branded merch — catalog, storefront, and a clean buy path.',
    challenge: 'The store needed a sharp storefront, collections, and a path for athletes and NIL partners to sign up.',
    solution: 'Softoras built the Shopify storefront and ecommerce structure. We do not publish order or revenue numbers we cannot prove.',
    work: ['Shopify', 'Storefront UX', 'Product catalog', 'Responsive shop'],
    stack: ['Shopify', 'Ecommerce', 'Theme / storefront'],
    sections: [
      {
        heading: 'What is live',
        body: 'teknotizemerchandise.com is a live Shopify shop: collections, athlete pages, and sign-up for athletes and NIL agencies.',
      },
      {
        heading: 'What we did',
        body: 'Storefront build and shop structure so the catalog and checkout feel like a real merch brand.',
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug)
}
