"use client";

import { useState, type ComponentType } from "react";
import Link from "next/link";
import {
  Check,
  X,
  AlertTriangle,
  ChevronDown,
  BookOpen,
  Receipt,
  Globe,
  Banknote,
  Landmark,
  BarChart3,
  Target,
  Users,
  FileText,
  ShoppingCart,
  ScanBarcode,
  Truck,
  Package,
  Factory,
  ClipboardList,
  Wallet,
  Camera,
  CalendarDays,
  BadgeCheck,
  FolderKanban,
  Megaphone,
  Link2,
  LayoutDashboard,
  Shield,
  Palette,
  Files,
  Monitor,
  Calculator,
  Lock,
  FileBarChart,
  Star,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ErpLogo } from "@/components/erp/logo";
import { ERP_LOGIN, ERP_REGISTER } from "@/lib/erp/paths";
import {
  LANDING_EMAIL,
  LANDING_WHATSAPP,
  LANDING_FEATURES,
  LANDING_INDUSTRIES,
  LANDING_FAQ,
  FEATURE_CATEGORIES,
  COMPARISON_COLUMNS,
  COMPARISON_ROWS,
  TRIAL_FEATURES,
  PRO_FEATURES,
  WHITE_LABEL_FEATURES,
  TESTIMONIALS,
  PAYMENT_METHODS,
  type FeatureCategory,
  type ComparisonCell,
} from "@/features/landing/data/landing-content";
import { scrollToHero, scrollToSection } from "@/features/landing/lib/scroll-to";

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  book: BookOpen, receipt: Receipt, globe: Globe, banknote: Banknote, landmark: Landmark,
  chart: BarChart3, target: Target, users: Users, file: FileText, cart: ShoppingCart,
  scan: ScanBarcode, truck: Truck, package: Package, factory: Factory, clipboard: ClipboardList,
  wallet: Wallet, camera: Camera, calendar: CalendarDays, badge: BadgeCheck, folder: FolderKanban,
  megaphone: Megaphone, link: Link2, dashboard: LayoutDashboard, shield: Shield, palette: Palette,
  files: Files, monitor: Monitor, calculator: Calculator, lock: Lock, report: FileBarChart,
};

const FEATURE_COLORS = [
  "from-sky-500 to-blue-600",
  "from-cyan-500 to-sky-600",
  "from-blue-500 to-indigo-600",
  "from-teal-500 to-cyan-600",
  "from-sky-400 to-blue-500",
  "from-indigo-500 to-blue-600",
];

function FeatureBadge({ badge }: { badge?: string }) {
  if (!badge) return null;
  const colors =
    badge === "Pro" ? "bg-sky-100 text-sky-700"
    : badge === "Compliance" ? "bg-emerald-100 text-emerald-700"
    : "bg-amber-100 text-amber-800";
  return <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase", colors)}>{badge}</span>;
}

function ComparisonValue({ cell }: { cell: ComparisonCell }) {
  if (cell.status === "text") {
    return <span className="text-xs font-medium text-slate-700 sm:text-sm">{cell.label}</span>;
  }
  if (cell.status === "yes") {
    return (
      <div className="flex flex-col items-center justify-center gap-0.5">
        <Check className="h-5 w-5 text-emerald-500" strokeWidth={2.5} />
        {cell.label && <span className="text-[10px] font-medium text-emerald-600">{cell.label}</span>}
      </div>
    );
  }
  if (cell.status === "no") {
    return (
      <div className="flex flex-col items-center justify-center gap-0.5">
        <X className="h-5 w-5 text-red-400" strokeWidth={2.5} />
        {cell.label && <span className="text-[10px] font-medium text-red-400">{cell.label}</span>}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center gap-0.5">
      <AlertTriangle className="h-5 w-5 text-amber-400" strokeWidth={2.5} />
      {cell.label && <span className="text-[10px] font-medium text-amber-600">{cell.label}</span>}
    </div>
  );
}

function FeatureFlipCard({
  title,
  description,
  backText,
  icon,
  badge,
  color,
}: {
  title: string;
  description: string;
  backText: string;
  icon: string;
  badge?: string;
  color: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = ICON_MAP[icon] || Package;

  return (
    <button
      type="button"
      onClick={() => setFlipped(!flipped)}
      className="feature-flip-card h-full min-h-[200px] w-full text-left"
      aria-pressed={flipped}
    >
      <div className={cn("feature-flip-inner h-full", flipped && "flipped")}>
        <div className="feature-flip-front flex h-full min-h-[200px] flex-col rounded-2xl border border-sky-100 bg-white p-6 shadow-md">
          <div className="flex items-start justify-between gap-2">
            <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md", color)}>
              <Icon className="h-6 w-6" />
            </div>
            <FeatureBadge badge={badge} />
          </div>
          <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>
          <p className="mt-3 text-xs font-medium text-[#0284c7]">Click to learn more ΓåÆ</p>
        </div>
        <div className={cn("feature-flip-back flex h-full min-h-[200px] flex-col rounded-2xl bg-gradient-to-br p-6 text-white shadow-md", color)}>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-bold">{title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/90">{backText}</p>
          <p className="mt-3 text-xs font-medium text-white/70">Click to flip back</p>
        </div>
      </div>
    </button>
  );
}

function scrollTo(id: string) {
  scrollToSection(id);
}

function PaymentIcons({ compact }: { compact?: boolean }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", compact ? "mt-4" : "mt-3")}>
      {PAYMENT_METHODS.slice(0, 5).map((pm) => (
        <span
          key={pm.id}
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-600"
        >
          <CreditCard className="h-3 w-3 text-[#0284c7]" />
          {pm.label}
        </span>
      ))}
    </div>
  );
}

export function LandingSections() {
  const [featureFilter, setFeatureFilter] = useState<FeatureCategory>("All");
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredFeatures =
    featureFilter === "All"
      ? LANDING_FEATURES
      : LANDING_FEATURES.filter((f) => f.category === featureFilter);

  const proMonthly = 40;
  const proAnnual = 32;
  const wlMonthly = 200;
  const wlAnnual = 160;

  return (
    <>
      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl" data-animate>
            Get Started in <span className="text-[#0284c7]">Minutes</span>
          </h2>
          <p className="mt-3 text-center text-slate-500">No consultants. No months of setup. Just sign up and go.</p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { n: 1, title: "Sign Up Free", desc: "Create your account in under 5 minutes. No credit card required." },
              { n: 2, title: "Configure", desc: "Choose your industry, currency, and modules. We pre-configure everything." },
              { n: 3, title: "Go Live", desc: "Add products, customers, and employees. Your entire business runs from one screen." },
            ].map((step) => (
              <div key={step.n} className="landing-card flex h-full flex-col p-8 text-center" data-animate>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0284c7] to-[#0ea5e9] text-xl font-bold text-white shadow-lg">
                  {step.n}
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-sky-50/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-animate>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Everything You Need to Run Your Business</h2>
            <p className="mt-3 text-slate-500">30+ features across 15 modules ΓÇö click any card to explore</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {FEATURE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFeatureFilter(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  featureFilter === cat
                    ? "bg-[#0284c7] text-white shadow-md"
                    : "bg-white text-slate-600 shadow-sm hover:bg-sky-50 hover:text-[#0284c7]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" key={featureFilter}>
            {filteredFeatures.length === 0 ? (
              <p className="col-span-full text-center text-slate-500">No features in this category yet.</p>
            ) : (
              filteredFeatures.map((f, i) => (
                <FeatureFlipCard
                  key={f.title}
                  title={f.title}
                  description={f.description}
                  backText={f.backText}
                  icon={f.icon}
                  badge={f.badge}
                  color={FEATURE_COLORS[i % FEATURE_COLORS.length]}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-animate>
            <h2 className="text-3xl font-bold sm:text-4xl">Built for Every Type of Business</h2>
            <p className="mt-3 text-slate-500">From startups to enterprises ΓÇö one platform, every industry</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {LANDING_INDUSTRIES.map((ind) => (
              <div key={ind.name} className="landing-card group border border-sky-100 p-5 hover:border-[#0284c7]" data-animate>
                <span className="text-3xl">{ind.emoji}</span>
                <h3 className="mt-3 font-bold group-hover:text-[#0284c7]">{ind.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{ind.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="bg-sky-50/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold" data-animate>How Softoras ERP Compares</h2>
          <p className="mt-2 text-center text-slate-500">Easier and more affordable than NetSuite ΓÇö more complete than QuickBooks</p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-sky-200 bg-white shadow-lg" data-animate>
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white">
                  <th className="px-4 py-4 text-left font-semibold">Feature</th>
                  {COMPARISON_COLUMNS.map((col) => (
                    <th key={col} className="w-[120px] px-2 py-4 text-center font-semibold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-sky-50/50"}>
                    <td className="px-4 py-4 font-medium text-slate-700">{row.feature}</td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className={cn(
                          "px-2 py-4 text-center align-middle",
                          j === 0 && "bg-sky-50"
                        )}
                      >
                        <ComparisonValue cell={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-animate>
            <h2 className="text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-3 text-slate-500">Pay with Visa, Mastercard, debit, PayPal, Wise, or bank transfer</p>
            <div className="mt-6 inline-flex rounded-full bg-sky-100 p-1">
              <button type="button" onClick={() => setAnnual(false)} className={cn("rounded-full px-4 py-2 text-sm font-medium", !annual && "bg-white shadow")}>Monthly</button>
              <button type="button" onClick={() => setAnnual(true)} className={cn("rounded-full px-4 py-2 text-sm font-medium", annual && "bg-white shadow")}>Annual (Save 20%)</button>
            </div>
          </div>
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-3">
            <div className="landing-card-visible flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-md" data-animate>
              <h3 className="text-xl font-bold">Free Trial</h3>
              <p className="mt-2 text-3xl font-bold">Free <span className="text-base font-normal text-slate-500">/ 15 Days</span></p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {TRIAL_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-[#0284c7]" />{f}</li>
                ))}
              </ul>
              <Link href={ERP_REGISTER} className="landing-btn-primary mt-8 block text-center">Start Free Trial</Link>
            </div>

            <div className="landing-card-visible relative flex flex-col rounded-2xl border-2 border-[#0284c7] bg-gradient-to-b from-sky-50 to-white p-8 shadow-xl" data-animate>
              <span className="absolute -top-3 right-4 rounded-full bg-[#0284c7] px-3 py-1 text-xs font-bold text-white">MOST POPULAR</span>
              <h3 className="text-xl font-bold">Pro Plan</h3>
              <p className="text-sm text-slate-500">Setup: $200 USD one-time</p>
              <p className="mt-1 text-3xl font-bold text-[#0284c7]">${annual ? proAnnual : proMonthly}<span className="text-base font-normal text-slate-500">/mo</span></p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-[#0284c7]" />{f}</li>
                ))}
              </ul>
              <PaymentIcons compact />
              <a
                href={`https://wa.me/${LANDING_WHATSAPP}?text=${encodeURIComponent("Hi, I want to upgrade to the Pro Plan")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-btn-primary mt-4 block w-full text-center"
              >
                Upgrade via WhatsApp
              </a>
            </div>

            <div className="landing-card-visible flex flex-col rounded-2xl border-2 border-sky-300 bg-gradient-to-b from-[#0284c7] to-[#0369a1] p-8 text-white shadow-xl" data-animate>
              <span className="w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-bold">ENTERPRISE</span>
              <h3 className="mt-3 text-xl font-bold">White Label</h3>
              <p className="text-sm text-sky-100">Setup: $400 USD one-time</p>
              <p className="mt-1 text-3xl font-bold">${annual ? wlAnnual : wlMonthly}<span className="text-base font-normal text-sky-200">/mo</span></p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {WHITE_LABEL_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white"><Check className="h-4 w-4 shrink-0 text-sky-200" />{f}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {PAYMENT_METHODS.slice(0, 5).map((pm) => (
                  <span key={pm.id} className="rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-semibold text-white">
                    {pm.label}
                  </span>
                ))}
              </div>
              <a
                href={`https://wa.me/${LANDING_WHATSAPP}?text=${encodeURIComponent("Hi, I want the White Label plan")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-xl bg-white py-3 text-center font-bold text-[#0284c7] transition-all hover:scale-105"
              >
                Get White Label via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold" data-animate>Trusted by Growing Businesses Worldwide</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="landing-card flex h-full flex-col rounded-2xl border border-sky-100 bg-white p-8 shadow-md" data-animate>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-sky-100 pt-4">
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white", t.color)}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6" data-animate>
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">About <span className="text-[#0284c7]">Softoras</span></h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Softoras is a technology company building modern SaaS products for businesses worldwide.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Every business deserves enterprise-grade software without enterprise complexity or cost.
                Softoras ERP gives you <strong>easier than NetSuite</strong>, <strong>more powerful than QuickBooks</strong> ΓÇö
                all from one screen.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Our flagship product includes 30+ modules: CRM, sales, inventory, manufacturing, HR, payroll,
                accounting, projects, marketing, and more ΓÇö with regional compliance modules available globally.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Why Businesses Choose Us</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Set up in minutes ΓÇö not months like NetSuite",
                  "All modules included ΓÇö no per-user upsells",
                  "Selfie GPS attendance ΓÇö no hardware needed",
                  "White label option for IT companies & resellers",
                  "Multi-currency for global trade",
                  "Visa, Mastercard, PayPal, Wise payments accepted",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0284c7]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={ERP_REGISTER} className="landing-btn-primary">Start Free Trial</Link>
            <a
              href={`https://wa.me/${LANDING_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="landing-btn-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-sky-50/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold" data-animate>FAQ</h2>
          <div className="mt-10 space-y-3">
            {LANDING_FAQ.map((item, i) => (
              <div key={item.q} className="overflow-hidden rounded-xl border border-sky-100 bg-white shadow-sm" data-animate>
                <button type="button" className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {item.q}
                  <ChevronDown className={cn("h-5 w-5 shrink-0 text-[#0284c7] transition-transform", openFaq === i && "rotate-180")} />
                </button>
                <div className={cn("overflow-hidden px-5 text-sm text-slate-600 transition-all", openFaq === i ? "max-h-48 pb-4" : "max-h-0")}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-white/90">Join 500+ businesses worldwide. Easier than NetSuite. Start free today.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={ERP_REGISTER} className="rounded-xl bg-white px-8 py-3 font-bold text-[#0284c7] shadow-lg hover:scale-105">Start Free Trial</Link>
            <a href={`https://wa.me/${LANDING_WHATSAPP}`} className="rounded-xl border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-[#0284c7]">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}

export function LandingFooter() {
  const productLinks = [
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "Industries", id: "industries" },
  ];

  const companyLinks = [
    { label: "About", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Login", href: ERP_LOGIN },
    { label: "Register", href: ERP_REGISTER },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com/softoras",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/softoras",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "https://twitter.com/softoras",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand ΓÇö logo aligned with other column headers */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <ErpLogo variant="footer" onClick={scrollToHero} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sky-100">
              Run your entire business from one screen. Easier than NetSuite, more powerful than QuickBooks.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white hover:text-[#0284c7]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-sky-100">
              {productLinks.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(l.id)}
                    className="transition-colors hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-sky-100">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  {"href" in l && l.href ? (
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => scrollTo(l.id!)}
                      className="transition-colors hover:text-white"
                    >
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-sky-100">
              <li>
                <a href={`mailto:${LANDING_EMAIL}`} className="break-all transition-colors hover:text-white">
                  {LANDING_EMAIL}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${LANDING_WHATSAPP}`} className="transition-colors hover:text-white">
                  WhatsApp: +{LANDING_WHATSAPP}
                </a>
              </li>
              <li className="leading-relaxed">Global support ΓÇö 24h response</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-sky-200 sm:flex-row sm:px-6 lg:px-8">
          <p>┬⌐ 2026 Softoras ERP. All rights reserved.</p>
          <p>
            Powered By{" "}
            <span className="font-semibold text-white">Softoras</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
