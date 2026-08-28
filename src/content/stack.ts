export const stackGroups = [
  {
    title: 'CRM & Sales',
    items: ['GoHighLevel', 'HubSpot', 'Follow Up Boss', 'Calendly', 'Stripe'],
    tools: ['gohighlevel', 'hubspot', 'followupboss', 'calendly', 'stripe'],
  },
  {
    title: 'AI & Automation',
    items: ['OpenAI', 'Vapi', 'n8n', 'Make', 'Zapier', 'Twilio', 'Mailgun'],
    tools: ['openai', 'vapi', 'n8n', 'make', 'zapier', 'twilio', 'mailgun'],
  },
  {
    title: 'Development',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'PHP', 'Laravel', 'Cursor'],
    tools: ['react', 'nextjs', 'typescript', 'javascript', 'nodedotjs', 'python', 'php', 'laravel', 'cursor'],
  },
  {
    title: 'Cloud & Infrastructure',
    items: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'GitHub'],
    tools: ['aws', 'vercel', 'cloudflare', 'docker', 'github'],
  },
  {
    title: 'Business & Operations',
    items: ['Airtable', 'Asana', 'DocuSign', 'Mailgun', 'Supabase', 'MongoDB'],
    tools: ['airtable', 'asana', 'docusign', 'mailgun', 'supabase', 'mongodb'],
  },
  {
    title: 'Commerce & CMS',
    items: ['Shopify', 'WordPress', 'Canva', 'YouTube'],
    tools: ['shopify', 'wordpress', 'canva', 'youtube'],
  },
]

export const tools = [
  { name: 'GoHighLevel', logo: '/tech/gohighlevel.svg', slug: 'gohighlevel' },
  { name: 'HubSpot', logo: '/tech/hubspot.svg', slug: 'hubspot' },
  { name: 'Follow Up Boss', logo: '/tech/followupboss.svg', slug: 'followupboss' },
  { name: 'Make', logo: '/tech/make.svg', slug: 'make' },
  { name: 'n8n', logo: '/tech/n8n.svg', slug: 'n8n' },
  { name: 'Zapier', logo: '/tech/zapier.svg', slug: 'zapier' },
  { name: 'OpenAI', logo: '/tech/openai.svg', slug: 'openai' },
  { name: 'Vapi', logo: '/tech/vapi.svg', slug: 'vapi' },
  { name: 'Twilio', logo: '/tech/twilio.svg', slug: 'twilio' },
  { name: 'Mailgun', logo: '/tech/mailgun.svg', slug: 'mailgun' },
  { name: 'Calendly', logo: '/tech/calendly.svg', slug: 'calendly' },
  { name: 'Stripe', logo: '/tech/stripe.svg', slug: 'stripe' },
  { name: 'Cursor', logo: '/tech/cursor.svg', slug: 'cursor' },
  { name: 'AWS', logo: '/tech/aws.svg', slug: 'aws' },
  { name: 'Vercel', logo: '/tech/vercel.svg', slug: 'vercel' },
  { name: 'Cloudflare', logo: '/tech/cloudflare.svg', slug: 'cloudflare' },
  { name: 'GitHub', logo: '/tech/github.svg', slug: 'github' },
  { name: 'Docker', logo: '/tech/docker.svg', slug: 'docker' },
  { name: 'React', logo: '/tech/react.svg', slug: 'react' },
  { name: 'Next.js', logo: '/tech/nextjs.svg', slug: 'nextjs' },
  { name: 'TypeScript', logo: '/tech/typescript.svg', slug: 'typescript' },
  { name: 'JavaScript', logo: '/tech/javascript.svg', slug: 'javascript' },
  { name: 'Node.js', logo: '/tech/nodedotjs.svg', slug: 'nodedotjs' },
  { name: 'Python', logo: '/tech/python.svg', slug: 'python' },
  { name: 'PHP', logo: '/tech/php.svg', slug: 'php' },
  { name: 'Laravel', logo: '/tech/laravel.svg', slug: 'laravel' },
  { name: 'MongoDB', logo: '/tech/mongodb.svg', slug: 'mongodb' },
  { name: 'Supabase', logo: '/tech/supabase.svg', slug: 'supabase' },
  { name: 'Shopify', logo: '/tech/shopify.svg', slug: 'shopify' },
  { name: 'WordPress', logo: '/tech/wordpress.svg', slug: 'wordpress' },
  { name: 'Airtable', logo: '/tech/airtable.svg', slug: 'airtable' },
  { name: 'Asana', logo: '/tech/asana.svg', slug: 'asana' },
  { name: 'DocuSign', logo: '/tech/docusign.svg', slug: 'docusign' },
  { name: 'Canva', logo: '/tech/canva.svg', slug: 'canva' },
  { name: 'YouTube', logo: '/tech/youtube.svg', slug: 'youtube' },
]

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug)
}
