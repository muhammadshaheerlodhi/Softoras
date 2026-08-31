export const LANDING_WHATSAPP = "923045539776";
export const LANDING_EMAIL = "lodhishaheer@gmail.com";
export const SKY_BLUE = "#0284c7";
export const SKY_BLUE_LIGHT = "#0ea5e9";

export const FEATURE_CATEGORIES = [
  "All",
  "Finance",
  "HR & Payroll",
  "Sales & CRM",
  "Inventory",
  "Compliance",
] as const;

export type FeatureCategory = (typeof FEATURE_CATEGORIES)[number];

export interface LandingFeature {
  title: string;
  description: string;
  backText: string;
  category: Exclude<FeatureCategory, "All">;
  icon: string;
  badge?: "Pro" | "Compliance" | "White Label";
}

export const LANDING_FEATURES: LandingFeature[] = [
  { title: "Tax & Compliance Engine", description: "Automated tax calculations, withholding, and compliance built into every transaction.", backText: "Supports multiple tax regimes including US sales tax, VAT, and regional compliance modules.", category: "Compliance", icon: "receipt", badge: "Compliance" },
  { title: "IFRS Chart of Accounts", description: "188 pre-configured accounts for trading, manufacturing, and services.", backText: "Fully customizable chart with parent-child hierarchy and opening balances.", category: "Finance", icon: "book" },
  { title: "Multi-Currency", description: "USD, EUR, GBP, AED and 12+ currencies with automatic exchange rates.", backText: "Set your base currency and invoice in any currency ΓÇö reports always reconcile.", category: "Finance", icon: "globe" },
  { title: "Bank Reconciliation", description: "Match bank statements with book entries automatically.", backText: "Import CSV statements, auto-match transactions, and close books faster.", category: "Finance", icon: "landmark" },
  { title: "Profit & Loss / Balance Sheet", description: "IFRS-aligned financial reports with expandable line items.", backText: "Drill down from summary to journal entries with one click.", category: "Finance", icon: "chart" },
  { title: "CRM ΓÇö Leads & Pipeline", description: "Track leads, opportunities, and sales pipeline with visual charts.", backText: "Kanban boards, stage tracking, and win-rate analytics included.", category: "Sales & CRM", icon: "target" },
  { title: "Customers & Contacts", description: "Full customer database with contact history and statements.", backText: "360┬░ customer view with invoices, payments, and communication log.", category: "Sales & CRM", icon: "users" },
  { title: "Sales Invoicing", description: "Professional invoices with PDF generation and your logo.", backText: "Recurring invoices, payment reminders, and online payment links.", category: "Sales & CRM", icon: "file", badge: "Pro" },
  { title: "Quotations & Sales Orders", description: "Quote to order to invoice workflow for any business.", backText: "Convert quotes to orders to invoices in seconds ΓÇö no re-entry.", category: "Sales & CRM", icon: "cart" },
  { title: "POS / Till", description: "Point of sale for retail with instant invoicing and receipts.", backText: "Barcode scanning, cash drawer, and daily closing reports.", category: "Sales & CRM", icon: "scan" },
  { title: "Purchasing & Vendors", description: "Purchase orders, vendor management, and goods receipt tracking.", backText: "Three-way matching: PO, GRN, and vendor bill.", category: "Inventory", icon: "truck" },
  { title: "Inventory & Warehouses", description: "Multi-warehouse stock, transfers, and adjustments.", backText: "Real-time stock levels, low-stock alerts, and valuation reports.", category: "Inventory", icon: "package" },
  { title: "Manufacturing & BOM", description: "Bill of Materials, production orders, raw material tracking.", backText: "Work orders, material consumption, and finished goods costing.", category: "Inventory", icon: "factory", badge: "Pro" },
  { title: "HR & Payroll", description: "Full payroll processing with tax deductions and payslips.", backText: "Salary structures, bonuses, deductions, and direct deposit ready.", category: "HR & Payroll", icon: "wallet" },
  { title: "Selfie Attendance", description: "GPS-verified check-in from employee phones. No hardware needed.", backText: "Geofenced office locations, selfie verification, and attendance reports.", category: "HR & Payroll", icon: "camera", badge: "Pro" },
  { title: "Leave Management", description: "Annual, sick, casual leave types with approval workflow.", backText: "Leave balances, calendar view, and manager approval chain.", category: "HR & Payroll", icon: "calendar" },
  { title: "Employee Records", description: "Departments, designations, performance reviews, and documents.", backText: "Org chart, employee self-service portal, and document vault.", category: "HR & Payroll", icon: "badge" },
  { title: "Projects & Timesheets", description: "Project billing, tasks, milestones, and time tracking.", backText: "Billable hours, project profitability, and Gantt-style milestones.", category: "Sales & CRM", icon: "folder" },
  { title: "Marketing Hub", description: "Schedule social posts and track ad campaigns.", backText: "Facebook, Instagram integration with campaign ROI tracking.", category: "Sales & CRM", icon: "megaphone", badge: "Pro" },
  { title: "Customer Portal", description: "Give customers a link to view invoices and account statements.", backText: "Branded portal with online payment and document download.", category: "Sales & CRM", icon: "link" },
  { title: "Real-time Dashboard", description: "6 preset views ΓÇö Executive, Sales, Finance, HR, Manufacturing, Inventory.", backText: "Customizable KPI cards with date filters and export.", category: "Finance", icon: "dashboard" },
  { title: "Role-based Permissions", description: "Control exactly what each employee can see and do.", backText: "Granular module-level access with custom role builder.", category: "HR & Payroll", icon: "shield" },
  { title: "White Label Branding", description: "Your logo, colors, and domain. Resell to your own clients.", backText: "Full rebrand in minutes. Your clients never see Softoras.", category: "Sales & CRM", icon: "palette", badge: "White Label" },
  { title: "Document Management", description: "Store contracts, files, and company documents securely.", backText: "Version history, folder structure, and permission-based access.", category: "Finance", icon: "files" },
  { title: "Assets & Maintenance", description: "Track company assets, assignments, and maintenance schedules.", backText: "Depreciation schedules, assignment history, and maintenance alerts.", category: "Inventory", icon: "monitor" },
  { title: "Tax Calculator", description: "Built-in tax calculator for withholding and sales tax.", backText: "Configurable rates by region with audit trail.", category: "Compliance", icon: "calculator", badge: "Compliance" },
  { title: "Accounting Periods", description: "Open and close fiscal periods with full audit trail.", backText: "Period locking prevents backdated entries after close.", category: "Finance", icon: "lock" },
  { title: "Reports Hub", description: "Sales, purchases, inventory, HR, finance, and CRM reports.", backText: "50+ reports with PDF/Excel export and scheduled delivery.", category: "Finance", icon: "report" },
  { title: "Delivery & Dispatch", description: "Delivery notes, gate passes, and dispatch tracking.", backText: "Link deliveries to sales orders and track fulfillment status.", category: "Inventory", icon: "clipboard" },
  { title: "PDC & Cheque Management", description: "Post-dated cheques received and issued with maturity tracking.", backText: "Cheque register, maturity calendar, and bank deposit workflow.", category: "Compliance", icon: "banknote", badge: "Compliance" },
];

export type ComparisonStatus = "yes" | "no" | "partial" | "text";

export interface ComparisonCell {
  status: ComparisonStatus;
  label?: string;
}

export const COMPARISON_COLUMNS = ["Softoras ERP", "NetSuite", "QuickBooks", "Odoo", "SAP"] as const;

export const COMPARISON_ROWS: { feature: string; values: ComparisonCell[] }[] = [
  { feature: "Easy to use", values: [{ status: "yes", label: "Very easy" }, { status: "no", label: "Complex" }, { status: "yes", label: "Easy" }, { status: "partial", label: "Moderate" }, { status: "no", label: "Complex" }] },
  { feature: "Setup time", values: [{ status: "text", label: "Minutes" }, { status: "text", label: "Months" }, { status: "text", label: "Days" }, { status: "text", label: "Weeks" }, { status: "text", label: "Months" }] },
  { feature: "All-in-one ERP", values: [{ status: "yes" }, { status: "yes" }, { status: "no" }, { status: "yes" }, { status: "yes" }] },
  { feature: "Manufacturing BOM", values: [{ status: "yes" }, { status: "yes" }, { status: "no" }, { status: "yes" }, { status: "yes" }] },
  { feature: "CRM built-in", values: [{ status: "yes" }, { status: "partial" }, { status: "partial" }, { status: "yes" }, { status: "partial" }] },
  { feature: "HR & Payroll", values: [{ status: "yes" }, { status: "yes" }, { status: "partial" }, { status: "yes" }, { status: "yes" }] },
  { feature: "Selfie GPS attendance", values: [{ status: "yes" }, { status: "no" }, { status: "no" }, { status: "no" }, { status: "no" }] },
  { feature: "White label reselling", values: [{ status: "yes" }, { status: "no" }, { status: "no" }, { status: "partial" }, { status: "no" }] },
  { feature: "Multi-currency", values: [{ status: "yes" }, { status: "yes" }, { status: "partial" }, { status: "yes" }, { status: "yes" }] },
  { feature: "Mobile-friendly", values: [{ status: "yes" }, { status: "partial" }, { status: "yes" }, { status: "partial" }, { status: "partial" }] },
  { feature: "Starting price", values: [{ status: "text", label: "$0 trial" }, { status: "text", label: "$999+/mo" }, { status: "text", label: "$30/mo" }, { status: "text", label: "$25/user" }, { status: "text", label: "$1,500+/mo" }] },
  { feature: "Best for growing SMBs", values: [{ status: "yes", label: "Built for it" }, { status: "no", label: "Enterprise" }, { status: "partial", label: "Accounting" }, { status: "partial", label: "Technical" }, { status: "no", label: "Enterprise" }] },
];

export const PAYMENT_METHODS = [
  { id: "visa", label: "Visa", desc: "Credit or debit card", type: "card" as const },
  { id: "mastercard", label: "Mastercard", desc: "Credit or debit card", type: "card" as const },
  { id: "debit", label: "Debit Card", desc: "Direct bank debit", type: "card" as const },
  { id: "paypal", label: "PayPal", desc: "PayPal checkout", type: "paypal" as const },
  { id: "wise", label: "Wise", desc: "International transfer", type: "wise" as const },
  { id: "bank", label: "Bank Transfer", desc: "Wire / ACH / SWIFT", type: "bank" as const },
  { id: "easypaisa", label: "EasyPaisa", desc: "Mobile wallet", type: "mobile" as const },
  { id: "jazzcash", label: "JazzCash", desc: "Mobile wallet", type: "mobile" as const },
];

export const BANK_TRANSFER_DETAILS = {
  bankName: "Meezan Bank",
  accountName: "Softoras (Pvt) Ltd",
  accountNumber: "01234567890123",
  iban: "PK00MEZN0001234567890123",
  swift: "MEZNPKKA",
  reference: "Your company name + plan",
};

export const LANDING_INDUSTRIES = [
  { emoji: "≡ƒÅ¡", name: "Manufacturing", benefit: "BOM, production orders, factory cost tracking" },
  { emoji: "≡ƒÅ¬", name: "Trading", benefit: "Multi-warehouse stock, buy-sell margins" },
  { emoji: "≡ƒÜ¢", name: "Logistics", benefit: "Fleet, trips, dispatch, fuel tracking" },
  { emoji: "≡ƒæò", name: "Textile", benefit: "Production costing, buyer orders, export docs" },
  { emoji: "≡ƒÆè", name: "Pharmaceutical", benefit: "Batch tracking, expiry dates, compliance" },
  { emoji: "≡ƒî╛", name: "Agriculture", benefit: "Crop tracking, seasonal inventory" },
  { emoji: "Γ£ê∩╕Å", name: "Import & Export", benefit: "Multi-currency, LC management, customs" },
  { emoji: "≡ƒÆ╝", name: "Services", benefit: "Project billing, timesheets, retainers" },
  { emoji: "≡ƒÅù∩╕Å", name: "Construction", benefit: "Project accounting, BOQ, subcontractors" },
  { emoji: "≡ƒÅÑ", name: "Healthcare", benefit: "Patient billing, staff payroll, inventory" },
  { emoji: "≡ƒÄô", name: "Education", benefit: "Fee management, payroll, expense tracking" },
  { emoji: "≡ƒ¢Æ", name: "Retail", benefit: "POS, inventory, daily closing" },
  { emoji: "≡ƒì£", name: "Food & Beverage", benefit: "Recipe costing, production, suppliers" },
  { emoji: "≡ƒÆ╗", name: "IT & SaaS", benefit: "Project billing, subscriptions, timesheets" },
  { emoji: "≡ƒÅó", name: "Wholesale", benefit: "Bulk orders, price lists, distributors" },
];

export const LANDING_FAQ = [
  { q: "Is there a free trial?", a: "Yes ΓÇö 15 days full access, no credit card required, up to 2 users." },
  { q: "How is Softoras different from NetSuite?", a: "NetSuite is powerful but complex, expensive, and takes months to implement. Softoras ERP is built for growing SMBs ΓÇö set up in minutes, all modules included, and much easier to use." },
  { q: "Do I need to install anything?", a: "No. 100% cloud-based. Works on any browser, phone, or tablet." },
  { q: "What payment methods do you accept?", a: "Visa, Mastercard, debit cards, PayPal, Wise, and bank transfer (ACH/wire)." },
  { q: "How does White Label work?", a: "Rebrand with your logo and colors. Resell to clients under your own brand at any price." },
  { q: "Is my data secure?", a: "Yes. Enterprise-grade cloud hosting with Row Level Security ΓÇö your data is fully isolated." },
  { q: "Can I export my data?", a: "Yes. Export customers, invoices, employees, and accounting data anytime." },
  { q: "Do you support multiple currencies?", a: "Yes. Invoice in USD, EUR, GBP, AED, and 12+ currencies with automatic reporting in your base currency." },
];

export const TRIAL_FEATURES = [
  "2 users max",
  "CRM, Sales & Invoicing",
  "Inventory & HR (basic)",
  "Accounting (basic)",
  "15-day full access",
  "Community support",
];

export const PRO_FEATURES = [
  "Unlimited users",
  "ALL modules unlocked",
  "PDF for all documents",
  "Tax & compliance engine",
  "Manufacturing & Marketing Hub",
  "Selfie attendance",
  "Custom domain support",
  "Priority support",
];

export const WHITE_LABEL_FEATURES = [
  "Everything in Pro PLUS",
  "Your logo & brand colors",
  "Custom domain",
  "Resell at any price",
  "GHL-style UI editing",
  "API access",
  "Dedicated account manager",
  "Source code guidance",
];

export const TESTIMONIALS = [
  {
    text: "We evaluated NetSuite, SAP, and Odoo. Softoras was live in one afternoon while the others quoted months of implementation. Our team actually enjoys using it.",
    name: "James Mitchell",
    role: "COO",
    company: "Apex Manufacturing, Texas",
    initials: "JM",
    color: "from-sky-400 to-blue-600",
  },
  {
    text: "NetSuite wanted $2,400/month. Softoras gives us CRM, inventory, manufacturing, and payroll for $40. The ROI was immediate ΓÇö we saved six figures in year one.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Pacific Trade Co., California",
    initials: "SC",
    color: "from-cyan-400 to-sky-600",
  },
  {
    text: "We white-labeled Softoras for 15 clients. They think it's our own product. Setup took 10 minutes per client. Our SaaS revenue tripled in six months.",
    name: "David Okonkwo",
    role: "CEO",
    company: "CloudFirst Solutions, London",
    initials: "DO",
    color: "from-blue-400 to-indigo-600",
  },
];

export const HERO_ORBIT_ITEMS = [
  { icon: "chart", label: "Analytics", angle: 0 },
  { icon: "users", label: "CRM", angle: 45 },
  { icon: "cart", label: "Sales", angle: 90 },
  { icon: "package", label: "Inventory", angle: 135 },
  { icon: "wallet", label: "Payroll", angle: 180 },
  { icon: "factory", label: "Manufacturing", angle: 225 },
  { icon: "camera", label: "Attendance", angle: 270 },
  { icon: "megaphone", label: "Marketing", angle: 315 },
];
