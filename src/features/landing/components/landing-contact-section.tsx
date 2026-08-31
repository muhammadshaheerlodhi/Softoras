"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Mail, MessageCircle, Phone, Send, Building2, CreditCard, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LANDING_EMAIL,
  LANDING_WHATSAPP,
  PAYMENT_METHODS,
  BANK_TRANSFER_DETAILS,
} from "@/features/landing/data/landing-content";

interface ContactSectionProps {
  defaultPlan?: string;
}

function getPaymentType(methodId: string) {
  return PAYMENT_METHODS.find((m) => m.id === methodId)?.type;
}

export function LandingContactSection({ defaultPlan = "trial" }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "United States",
    plan_interest: defaultPlan,
    payment_method: "",
    message: "",
    card_number: "",
    card_expiry: "",
    card_cvv: "",
    card_name: "",
    paypal_email: "",
    wise_email: "",
    wise_reference: "",
    mobile_wallet_number: "",
    bank_reference: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) setForm((f) => ({ ...f, plan_interest: plan }));
  }, []);

  const isPaidPlan = form.plan_interest === "pro" || form.plan_interest === "white_label";
  const paymentType = getPaymentType(form.payment_method);
  const isCard = paymentType === "card";
  const isPayPal = paymentType === "paypal";
  const isWise = paymentType === "wise";
  const isBank = paymentType === "bank";
  const isMobile = paymentType === "mobile";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payment_details: Record<string, string> = {};
      if (isCard) {
        payment_details.card_last4 = form.card_number.slice(-4);
        payment_details.card_expiry = form.card_expiry;
        payment_details.card_name = form.card_name;
      }
      if (isPayPal) payment_details.paypal_email = form.paypal_email;
      if (isWise) {
        payment_details.wise_email = form.wise_email;
        payment_details.wise_reference = form.wise_reference;
      }
      if (isBank) payment_details.bank_reference = form.bank_reference;
      if (isMobile) payment_details.mobile_wallet_number = form.mobile_wallet_number;

      const res = await fetch("/api/landing-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          country: form.country,
          plan_interest: form.plan_interest,
          payment_method: form.payment_method,
          payment_details,
          message: form.message,
          source: "landing_contact",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setSubmitted(true);
      toast.success("Payment request submitted! We'll confirm within 24 hours.");
    } catch {
      toast.error("Failed to send. Please WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  const formatCardNumber = (value: string) =>
    value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="rounded-2xl border border-sky-200 bg-white p-10 shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">Γ£à</div>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">Thank you!</h3>
            <p className="mt-2 text-slate-600">We&apos;ll confirm your payment and activate your plan within 24 hours.</p>
            <a
              href={`https://wa.me/${LANDING_WHATSAPP}`}
              className="landing-btn-primary mt-6 inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp for urgent help
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-2 text-slate-500">Free trial, Pro upgrade, or White Label ΓÇö we&apos;re here to help</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", value: LANDING_EMAIL, href: `mailto:${LANDING_EMAIL}` },
              { icon: MessageCircle, label: "WhatsApp", value: `+${LANDING_WHATSAPP}`, href: `https://wa.me/${LANDING_WHATSAPP}` },
              { icon: Phone, label: "Response time", value: "Within 24 hours" },
              { icon: Building2, label: "Coverage", value: "Global ΓÇö 24h response" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-[#0284c7]">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-semibold text-[#0284c7] hover:underline">{item.value}</a>
                  ) : (
                    <p className="font-semibold text-slate-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-lg lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Name *</Label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label>Email *</Label>
                <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label>Company</Label>
                <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label>Phone</Label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label>Plan</Label>
                <Select value={form.plan_interest} onValueChange={(v) => setForm({ ...form, plan_interest: v, payment_method: "" })}>
                  <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trial">Free Trial</SelectItem>
                    <SelectItem value="pro">Pro Plan ($40/mo + $200 setup)</SelectItem>
                    <SelectItem value="white_label">White Label ($200/mo + $400 setup)</SelectItem>
                    <SelectItem value="exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Country</Label>
                <Select value={form.country} onValueChange={(v) => setForm({ ...form, country: v })}>
                  <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["United States", "United Kingdom", "Canada", "UAE", "Australia", "Pakistan", "Other"].map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {isPaidPlan && (
              <>
                <div className="mt-4">
                  <Label>Payment method *</Label>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {PAYMENT_METHODS.map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setForm({ ...form, payment_method: pm.id })}
                        className={`rounded-xl border p-3 text-left transition-all ${
                          form.payment_method === pm.id
                            ? "border-[#0284c7] bg-sky-50 ring-2 ring-[#0284c7]/30"
                            : "border-slate-200 hover:border-sky-200"
                        }`}
                      >
                        <p className="text-sm font-semibold">{pm.label}</p>
                        <p className="text-xs text-slate-500">{pm.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {isCard && (
                  <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/50 p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CreditCard className="h-4 w-4 text-[#0284c7]" /> Card details
                    </div>
                    <div className="grid gap-3">
                      <div>
                        <Label>Cardholder name *</Label>
                        <Input
                          required
                          placeholder="John Smith"
                          value={form.card_name}
                          onChange={(e) => setForm({ ...form, card_name: e.target.value })}
                          className="mt-1 bg-white"
                        />
                      </div>
                      <div>
                        <Label>Card number *</Label>
                        <Input
                          required
                          placeholder="1234 5678 9012 3456"
                          value={form.card_number}
                          onChange={(e) => setForm({ ...form, card_number: formatCardNumber(e.target.value) })}
                          className="mt-1 bg-white"
                          inputMode="numeric"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label>Expiry *</Label>
                          <Input
                            required
                            placeholder="MM/YY"
                            value={form.card_expiry}
                            onChange={(e) => setForm({ ...form, card_expiry: formatExpiry(e.target.value) })}
                            className="mt-1 bg-white"
                            inputMode="numeric"
                          />
                        </div>
                        <div>
                          <Label>CVV *</Label>
                          <Input
                            required
                            placeholder="123"
                            value={form.card_cvv}
                            onChange={(e) => setForm({ ...form, card_cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                            className="mt-1 bg-white"
                            inputMode="numeric"
                            type="password"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                      <Lock className="h-3 w-3" /> Secured ΓÇö we never store full card numbers
                    </p>
                  </div>
                )}

                {isPayPal && (
                  <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/50 p-4">
                    <Label>PayPal email *</Label>
                    <Input
                      required
                      type="email"
                      placeholder="you@email.com"
                      value={form.paypal_email}
                      onChange={(e) => setForm({ ...form, paypal_email: e.target.value })}
                      className="mt-1 bg-white"
                    />
                    <p className="mt-2 text-xs text-slate-500">We&apos;ll send a PayPal invoice to this address.</p>
                  </div>
                )}

                {isWise && (
                  <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/50 p-4">
                    <div className="mb-3 text-sm font-semibold text-slate-700">Wise transfer details</div>
                    <div className="grid gap-3">
                      <div>
                        <Label>Your Wise email *</Label>
                        <Input
                          required
                          type="email"
                          placeholder="you@email.com"
                          value={form.wise_email}
                          onChange={(e) => setForm({ ...form, wise_email: e.target.value })}
                          className="mt-1 bg-white"
                        />
                      </div>
                      <div>
                        <Label>Transfer reference / note</Label>
                        <Input
                          placeholder="Your company name"
                          value={form.wise_reference}
                          onChange={(e) => setForm({ ...form, wise_reference: e.target.value })}
                          className="mt-1 bg-white"
                        />
                      </div>
                    </div>
                    <div className="mt-3 rounded-lg bg-white p-3 text-xs text-slate-600">
                      <p className="font-semibold text-slate-800">Send payment to:</p>
                      <p className="mt-1">Wise: softoras@wise.com</p>
                      <p>Include your company name in the transfer note.</p>
                    </div>
                  </div>
                )}

                {isBank && (
                  <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/50 p-4">
                    <div className="mb-3 text-sm font-semibold text-slate-700">Bank transfer details</div>
                    <div className="rounded-lg bg-white p-3 text-xs text-slate-600">
                      <p><span className="font-semibold">Bank:</span> {BANK_TRANSFER_DETAILS.bankName}</p>
                      <p><span className="font-semibold">Account name:</span> {BANK_TRANSFER_DETAILS.accountName}</p>
                      <p><span className="font-semibold">Account #:</span> {BANK_TRANSFER_DETAILS.accountNumber}</p>
                      <p><span className="font-semibold">IBAN:</span> {BANK_TRANSFER_DETAILS.iban}</p>
                      <p><span className="font-semibold">SWIFT:</span> {BANK_TRANSFER_DETAILS.swift}</p>
                    </div>
                    <div className="mt-3">
                      <Label>Your transfer reference *</Label>
                      <Input
                        required
                        placeholder={BANK_TRANSFER_DETAILS.reference}
                        value={form.bank_reference}
                        onChange={(e) => setForm({ ...form, bank_reference: e.target.value })}
                        className="mt-1 bg-white"
                      />
                    </div>
                  </div>
                )}

                {isMobile && (
                  <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/50 p-4">
                    <Label>
                      {form.payment_method === "easypaisa" ? "EasyPaisa" : "JazzCash"} mobile number *
                    </Label>
                    <Input
                      required
                      placeholder="03XX XXXXXXX"
                      value={form.mobile_wallet_number}
                      onChange={(e) => setForm({ ...form, mobile_wallet_number: e.target.value })}
                      className="mt-1 bg-white"
                      inputMode="tel"
                    />
                    <p className="mt-2 text-xs text-slate-500">
                      We&apos;ll send a payment request to this number.
                    </p>
                  </div>
                )}
              </>
            )}

            <div className="mt-4">
              <Label>Message</Label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                placeholder="Tell us about your business..."
                className="mt-1"
              />
            </div>

            <Button
              type="submit"
              disabled={loading || (isPaidPlan && !form.payment_method)}
              className="landing-btn-primary mt-5 w-full"
            >
              {loading ? "Submitting..." : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {isPaidPlan ? "Submit Payment Request" : "Send Message"}
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
