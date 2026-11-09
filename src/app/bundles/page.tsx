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
    <div className="py-12 bg-slate-50/60 dark:bg-[#060814] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Card */}
        <div className="rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-brand-orange text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBn ? "সীমিত সময়ের মেগা অফার" : "Limited Time Mega Bundle"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {isBn ? "লাইফটাইম অল-ইন-ওয়ান মেগা বান্ডল" : "The Lifetime All-In-One Polymath Bundle"}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {isBn
                ? "আমাদের সকল ফ্ল্যাগশিপ কোর্স, ডিজিটাল ই-বুক, চেকলিস্ট ও ভবিষ্যৎ সকল কোর্সের আনলিমিটেড লাইফটাইম অ্যাক্সেস — এক প্যাকেজে ৭৮% ছাড়ে!"
                : "Unlock all 5 courses, 5 e-books, checklists, and all future updates in one definitive package."}
            </p>
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl sm:text-4xl font-black">৳ ৯৯৯</span>
              <span className="text-sm sm:text-base text-white/70 line-through">৳ ৪,৫০০</span>
              <span className="px-2.5 py-1 bg-white text-brand-orange text-xs font-black rounded-lg">
                SAVE 78%
              </span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => addToCart(bundleItem)}
                className="px-8 py-4 bg-slate-950 hover:bg-black text-white font-black text-sm sm:text-base rounded-2xl shadow-xl active:translate-y-0.5 transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <span>{isInCart ? (isBn ? "কার্টে যুক্ত আছে" : "In Cart") : (isBn ? "অফারটি গ্রহণ করুন" : "Claim Bundle Now")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            {isBn ? "বান্ডলে অন্তর্ভুক্ত কোর্সসমূহ" : "Flagship Courses Included"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COURSES.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4"
              >
                <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                  <Image src={c.thumbnail} alt={c.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {isBn ? c.titleBn : c.title}
                  </h4>
                  <span className="text-[11px] text-slate-400">{c.instructor}</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg">
                  {isBn ? "ইনক্লুডেড" : "Included"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ebooks Included */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            {isBn ? "বান্ডলে অন্তর্ভুক্ত ই-বুকসমূহ" : "Digital E-Books Included"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EBOOKS.map((eb) => (
              <div
                key={eb.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4"
              >
                <div className="relative w-12 h-16 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                  <Image src={eb.coverImage} alt={eb.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {isBn ? eb.titleBn : eb.title}
                  </h4>
                  <span className="text-[11px] text-slate-400">{eb.author}</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg">
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
