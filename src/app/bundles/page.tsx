"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { COURSES, EBOOKS } from "@/data/mockData";
import { Sparkles, CheckCircle2, ArrowRight, ShoppingBag, ShieldCheck, Zap } from "lucide-react";

export default function BundlesPage() {
  const { language, addToCart, cart } = useApp();
  const isBn = language === "bn";

  const bundleItem = {
    id: "mega-bundle-all-in-one",
    type: "bundle" as const,
    title: "The Polymath Lifetime All-In-One Bundle",
    titleBn: "মেগা অফার কমপ্লিট লাইফটাইম বান্ডল",
    price: 999,
    originalPrice: 4500,
    thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
  };

  const isInCart = cart.some((i) => i.id === bundleItem.id);

  return (
    <div className="py-12 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Executive Matte Obsidian / Deep Sapphire Hero Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-[#0B1528] to-[#070D18] border border-slate-800 text-white p-8 sm:p-12 shadow-posh-hover relative overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0000F2]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl relative z-10 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-400/30 text-[#00D2FF] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBn ? "এক্সিকিউটিভ মেগা বান্ডল" : "Executive Master Collection"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {isBn ? "লাইফটাইম কমপ্লিট মাস্টার বান্ডল" : "The Polymath Lifetime Master Suite"}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {isBn
                ? "আমাদের সকল ফ্ল্যাগশিপ কোর্স, ডিজিটাল ই-বুক, ড্রাফট চেকলিস্ট ও ভবিষ্যতের সকল আপডেটের আজীবন এক্সেস — ৭৮% সাশ্রয়ে।"
                : "Acquire perpetual institutional access across our complete curriculum catalog, publication library, and future revisions."}
            </p>
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">৳ ৯৯৯</span>
              <span className="text-sm sm:text-base font-mono text-slate-400 line-through tabular-nums">৳ ৪,৫০০</span>
              <span className="px-2.5 py-1 bg-white text-slate-950 text-xs font-mono font-bold rounded-lg">
                SAVE 78%
              </span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => addToCart(bundleItem)}
                className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-xl active:scale-95 transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-[#0000F2]" />
                <span>{isInCart ? (isBn ? "কার্টে যুক্ত আছে" : "In Cart") : (isBn ? "বান্ডলটি এনরোল করুন" : "Claim Master Pass")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* What's included: Courses */}
        <div className="space-y-6">
          <div>
            <div className="text-[11px] font-mono font-bold uppercase text-[#0000F2] dark:text-[#00D2FF] mb-1">
              Flagship Masterclasses
            </div>
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "বান্ডলে অন্তর্ভুক্ত কোর্সসমূহ" : "Curriculums Included in Suite"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COURSES.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 flex items-center gap-4 shadow-subtle"
              >
                <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                  <Image src={c.thumbnail} alt={c.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white truncate">
                    {isBn ? c.titleBn : c.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-normal">{c.instructor}</span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-200/50">
                  {isBn ? "ইনক্লুডেড" : "Included"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ebooks Included */}
        <div className="space-y-6">
          <div>
            <div className="text-[11px] font-mono font-bold uppercase text-[#0000F2] dark:text-[#00D2FF] mb-1">
              Field Manuals & Research
            </div>
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "বান্ডলে অন্তর্ভুক্ত ই-বুকসমূহ" : "Publications Included in Suite"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EBOOKS.map((eb) => (
              <div
                key={eb.id}
                className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 flex items-center gap-4 shadow-subtle"
              >
                <div className="relative w-12 h-16 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                  <Image src={eb.coverImage} alt={eb.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white truncate">
                    {isBn ? eb.titleBn : eb.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-normal">{eb.author}</span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-200/50">
                  {isBn ? "ইনক্লুডেড" : "Included"}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
