export type CaseStudy = {
  slug: string
  title: string
  client: string
  industry: string
  oneLiner: string
  summary: string
  challenge: string
  solution: string
  results: string[]
  stack: string[]
  sections: { heading: string; body: string }[]
  image: string
  pdf?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'cryo-sculpting-lab',
    title: 'Lead pipeline that books consultations on its own',
    client: 'The Cryo Sculpting Lab',
    industry: 'Wellness & Aesthetics',
    oneLiner: 'Meta Ads to landing page to GoHighLevel — with automations that follow up, book, and recover no-shows.',
    summary:
      'We designed a single-meaning lead pipeline and a full automation layer so every ad lead is answered instantly, nurtured automatically, and synced back to Meta for smarter spend.',
    challenge:
      'Leads from ads were landing without a clean stage structure. Follow-up depended on staff remembering to call, no-shows were leaking revenue, and conversion events were not feeding back into Meta.',
    solution:
      'Softoras built a GoHighLevel CRM pipeline with seven clear stages and eleven automations covering speed-to-lead, missed-call text-back, nurture drips, booking, reminders, no-show recovery, onboarding, reviews, and Meta CAPI sync.',
    results: [
      'Every form submit gets SMS + email within 60 seconds',
      'Pipeline stages have one meaning each — no messy boards',
      'No-shows move into an automatic rebooking sequence',
      'Lead, Booked, and Purchase events sync back to Meta',
    ],
    stack: ['GoHighLevel', 'Meta Ads', 'Meta CAPI', 'SMS + Email Automation'],
    image: '/case-studies/cryo.png',
    pdf: '/case-studies/cryo-sculpting-lab.pdf',
    sections: [
      {
        heading: 'Pipeline stages',
        body: 'New Lead → Contacted → Qualified → Consultation Booked → Consultation Completed → Client Won, with Nurture as a parked lane for no-shows and quiet leads. Lost is a tag, not a stage, so the board stays focused on live opportunities.',
      },
      {
        heading: 'Automation workflows',
        body: 'Speed-to-lead on form submit, missed-call text-back, multi-day nurture, booking confirmation, 24-hour and 1-hour reminders, no-show recovery, post-consultation follow-up, client onboarding, review and referral requests, win-back reactivation, and Meta CAPI event sync.',
      },
    ],
  },
  {
    slug: 'crm-revamp-service-business',
    title: 'CRM revamp for a service business',
    client: 'Service operations team',
    industry: 'Professional Services',
    oneLiner: 'Reduced manual follow-ups and improved lead response speed.',
    summary:
      'We rebuilt the CRM, pipelines, and outreach automations so the team could respond faster and stop chasing leads by hand.',
    challenge:
      'Follow-ups lived in inboxes and spreadsheets. Leads waited too long for a first reply, and nobody had a single view of pipeline health.',
    solution:
      'Softoras implemented GoHighLevel with Make.com and Zapier automations: lead capture, stage movement, reminders, and reporting in one place.',
    results: [
      'Faster first response on new leads',
      'Less manual chasing across the team',
      'Clear pipeline reporting for operations',
    ],
    stack: ['GoHighLevel', 'Make.com', 'Zapier'],
    image: '/case-studies/crm.png',
    sections: [
      {
        heading: 'What we delivered',
        body: 'A production CRM with pipelines, automated follow-ups, and integrations that keep sales and operations aligned without extra admin work.',
      },
    ],
  },
  {
    slug: 'saas-operations-dashboard',
    title: 'Custom SaaS operations dashboard',
    client: 'Growth-stage SaaS team',
    industry: 'SaaS',
    oneLiner: 'Unified sales, onboarding, and operations tracking in one platform.',
    summary:
      'We designed and built a custom operations dashboard so sales, onboarding, and delivery lived in one system instead of scattered tools.',
    challenge:
      'The team was switching between tools to see sales, onboarding, and delivery. Reporting was slow and ownership was unclear.',
    solution:
      'Softoras built a Next.js + Supabase platform with role-aware dashboards, structured records, and a clean workflow from lead to delivery.',
    results: [
      'One source of truth for sales and operations',
      'Faster reporting without spreadsheet exports',
      'A stack that can scale with the product',
    ],
    stack: ['Next.js', 'Supabase', 'TypeScript'],
    image: '/case-studies/saas.png',
    sections: [
      {
        heading: 'What we delivered',
        body: 'A production web app with dashboards, structured data, and workflows that match how the business actually operates.',
      },
    ],
  },
  {
    slug: 'appointment-lead-engine',
    title: 'Appointment and lead engine',
    client: 'Appointment-led business',
    industry: 'Sales & Booking',
    oneLiner: 'A booking and nurturing system with automated reminders.',
    summary:
      'We created a booking and nurturing engine so leads get booked, reminded, and followed up without the team chasing every calendar gap.',
    challenge:
      'Bookings were inconsistent, reminders were manual, and unbooked leads went cold.',
    solution:
      'Softoras connected HubSpot with n8n and email/SMS automations for capture, booking, reminders, and nurture.',
    results: [
      'Automated booking confirmations and reminders',
      'Fewer missed appointments',
      'A nurture path for leads who do not book immediately',
    ],
    stack: ['HubSpot', 'n8n', 'Email/SMS Automations'],
    image: '/case-studies/appointments.png',
    sections: [
      {
        heading: 'What we delivered',
        body: 'An appointment engine that captures demand, books it, and keeps the calendar full with less manual follow-up.',
      },
    ],
  },
  {
    slug: 'utcli-production-systems',
    title: 'Production systems for UTCLI LLC',
    client: 'UTCLI LLC',
    industry: 'Operations',
    oneLiner: 'Cloud-based applications and workflows built for real production use.',
    summary:
      'Softoras worked with UTCLI LLC on production systems — CRM infrastructure, automation, and cloud applications designed to last.',
    challenge:
      'The business needed reliable production systems, not a prototype that would break as volume grew.',
    solution:
      'We delivered cloud-based applications and scalable workflows with clear ownership, automation, and a maintainable architecture.',
    results: [
      'Production systems used in live operations',
      'Automation covering recurring work',
      'A foundation that can take more volume',
    ],
    stack: ['CRM Systems', 'AWS', 'Automation Workflows'],
    image: '/case-studies/utcli.png',
    sections: [
      {
        heading: 'Engagement',
        body: 'A production partnership focused on systems the team can run every day: CRM, automation, and cloud applications with long-term maintainability.',
      },
    ],
  },
  {
    slug: 'vivacity-na-crm',
    title: 'CRM infrastructure for Vivacity NA',
    client: 'Vivacity NA',
    industry: 'Growth Operations',
    oneLiner: 'CRM infrastructure and automation systems for a live production team.',
    summary:
      'We built CRM infrastructure and automation so Vivacity NA could run lead and operations work on a system that matches how the team sells and delivers.',
    challenge:
      'The team needed production CRM infrastructure, not a disconnected set of tools.',
    solution:
      'Softoras implemented CRM systems, pipelines, and automations that fit the live operating model.',
    results: [
      'Production CRM used by the team',
      'Automation on repetitive follow-up',
      'Clearer reporting across the operation',
    ],
    stack: ['GoHighLevel', 'CRM Automation', 'Cloud Architecture'],
    image: '/case-studies/vivacity.png',
    sections: [
      {
        heading: 'Engagement',
        body: 'Hands-on CRM and automation work for a production team, with systems designed around real pipelines rather than generic templates.',
      },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug)
}

export function getCaseStudySlugs() {
  return caseStudies.map((item) => item.slug)
}
