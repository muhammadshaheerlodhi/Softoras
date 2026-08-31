"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Check,
  Users,
  BarChart3,
  Target,
  ShoppingCart,
  Package,
  Wallet,
  Factory,
  Camera,
  Megaphone,
  FileText,
  Shield,
} from "lucide-react";
import { LandingParticles } from "./landing-particles";
import { LANDING_WHATSAPP } from "@/features/landing/data/landing-content";
import { ERP_REGISTER } from "@/lib/erp/paths";

const ORBIT_ITEMS = [
  { Icon: BarChart3, label: "Analytics" },
  { Icon: Target, label: "CRM" },
  { Icon: ShoppingCart, label: "Sales" },
  { Icon: Package, label: "Inventory" },
  { Icon: Wallet, label: "Payroll" },
  { Icon: Factory, label: "Manufacturing" },
  { Icon: Camera, label: "Attendance" },
  { Icon: Megaphone, label: "Marketing" },
  { Icon: TrendingUp, label: "+24% Revenue", accent: "text-emerald-500" },
  { Icon: Check, label: "Invoice Sent", accent: "text-[#0284c7]" },
  { Icon: Users, label: "18 Employees", accent: "text-[#0284c7]" },
  { Icon: FileText, label: "P&L Ready", accent: "text-violet-500" },
  { Icon: Shield, label: "SOC2 Secure", accent: "text-emerald-500" },
];

const ORBIT_DURATION = 28;

export function LandingHero() {
  const [imgError, setImgError] = useState(false);
  const dashboardSrc = "/dashboard-preview.svg";

  return (
    <section id="hero" className="relative min-h-[88vh] overflow-hidden bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0ea5e9] pt-6 sm:pt-10">
      <LandingParticles />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.3),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.2),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div className="space-y-6 landing-hero-text">
          <div className="landing-pulse-slow inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            30+ Modules • Cloud ERP • 15-Day Free Trial
          </div>

          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Run Your Entire Business. From One Screen
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Easier than NetSuite. More powerful than QuickBooks. Built specifically for businesses who want to grow.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={ERP_REGISTER}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-[#0284c7] shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            >
              Start 15-Day Free Trial →
            </Link>
            <a
              href={`https://wa.me/${LANDING_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/80 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#0284c7]"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Secure Cloud", "Multi-Currency", "5-Min Setup", "30+ Modules"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard with anticlockwise orbiting badges */}
        <div className="dashboard-orbit-stage relative mx-auto w-full max-w-xl">
          <div className="dashboard-orbit-track pointer-events-none absolute left-1/2 top-1/2 z-0 h-0 w-0">
            {ORBIT_ITEMS.map(({ Icon, label, accent }, i) => (
              <div
                key={label}
                className="dashboard-orbit-item"
                style={{
                  animationDelay: `${-(i * ORBIT_DURATION) / ORBIT_ITEMS.length}s`,
                }}
              >
                <div className="flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-white/30 bg-white/95 px-2.5 py-1.5 shadow-lg backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-2">
                  <Icon className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${accent || "text-[#0284c7]"}`} />
                  <span className="text-[9px] font-semibold text-slate-700 sm:text-[10px]">{label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mx-4 overflow-hidden rounded-2xl border-4 border-white/30 bg-slate-900 shadow-2xl shadow-sky-900/50 sm:mx-8">
            <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-xs text-slate-400">Softoras ERP ΓÇö Dashboard</span>
            </div>
            <div className="relative aspect-[16/10] w-full bg-slate-900">
              {!imgError && (
                <Image
                  src={dashboardSrc}
                  alt="Softoras ERP Dashboard"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => setImgError(true)}
                />
              )}
              {imgError && (
                <div className="flex h-full bg-[#0f172a] p-3">
                  <div className="w-14 shrink-0 space-y-2 rounded-lg bg-[#0284c7] p-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-6 rounded bg-white/20" />
                    ))}
                  </div>
                  <div className="ml-3 flex-1 space-y-2">
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { l: "Revenue", v: "$1.3M", c: "bg-sky-500/20 text-sky-300" },
                        { l: "Profit", v: "$1.3M", c: "bg-emerald-500/20 text-emerald-300" },
                        { l: "Customers", v: "128", c: "bg-violet-500/20 text-violet-300" },
                        { l: "Leads", v: "45", c: "bg-amber-500/20 text-amber-300" },
                      ].map((s) => (
                        <div key={s.l} className={`rounded-lg p-2 ${s.c}`}>
                          <p className="text-[9px] opacity-70">{s.l}</p>
                          <p className="text-sm font-bold">{s.v}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex h-20 items-end gap-1 rounded-lg bg-slate-800 p-2">
                      {[35, 55, 40, 70, 50, 85, 65, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t bg-sky-500/70" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
