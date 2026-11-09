"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Sparkles, ArrowRight, CheckCircle2, ShoppingBag, BookOpen, Layers } from "lucide-react";

export default function MegaBundleBanner() {
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

  const isInCart = cart.some((item) => item.id === bundleItem.id);

  return (
    <section className="py-12 bg-white dark:bg-[#071324] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50/70 to-orange-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-orange-950/20 border-2 border-orange-200/80 dark:border-orange-900/40 p-6 sm:p-8 lg:p-10 shadow-lg shadow-orange-100/50 dark:shadow-none overflow-hidden">
          
          {/* Subtle background ambient glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-orange text-white text-xs font-black uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isBn ? "মেগা অফার Bundle" : "Mega Offer Bundle"}</span>
              </div>

              {/* Tagline */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                {isBn ? "একসাথে কিনুন, বেশি সাশ্রয় করুন" : "Buy Together, Unlock Maximum Value"}
              </h3>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 pt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{isBn ? "সবগুলি ফ্ল্যাগশিপ কোর্স + ই-বুক একসাথে" : "All flagship courses + digital e-books"}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{isBn ? "বিশেষ প্র্যাকটিক্যাল টুলস ও চেকলিস্ট" : "Exclusive checklists, templates & audio guides"}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{isBn ? "জীবন ও ক্যারিয়ার গড়ার কমপ্লিট প্যাকেজ" : "Lifetime access to all future course updates"}</span>
                </li>
              </ul>
            </div>

            {/* Center Graphic: Book/Course Stack (4 cols) */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-72 h-52 flex items-center justify-center">
                
                {/* 3D Stack Graphic Card 1 */}
                <div className="absolute left-2 top-4 w-32 h-44 rounded-xl shadow-xl overflow-hidden bg-gradient-to-tr from-blue-700 to-indigo-900 text-white p-3 border-2 border-white dark:border-slate-800 transform -rotate-12 hover:rotate-0 transition-transform">
                  <span className="text-[9px] font-black text-amber-300 uppercase">E-BOOK</span>
                  <div className="text-[11px] font-bold mt-2 leading-tight">পারিবারিক আইন সহায়িকা</div>
                  <div className="absolute bottom-2 right-2 text-white/40">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                {/* 3D Stack Graphic Card 2 */}
                <div className="absolute right-2 top-2 w-32 h-44 rounded-xl shadow-xl overflow-hidden bg-gradient-to-tr from-emerald-700 to-teal-900 text-white p-3 border-2 border-white dark:border-slate-800 transform rotate-12 hover:rotate-0 transition-transform">
                  <span className="text-[9px] font-black text-emerald-300 uppercase">COURSE</span>
                  <div className="text-[11px] font-bold mt-2 leading-tight">সুস্থ জীবন ও পুষ্টি বিজ্ঞান</div>
                  <div className="absolute bottom-2 right-2 text-white/40">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>

                {/* Main Hero Card in Center */}
                <div className="relative w-36 h-48 rounded-xl shadow-2xl overflow-hidden bg-gradient-to-tr from-brand-orange via-amber-500 to-yellow-500 text-white p-3.5 border-2 border-white dark:border-slate-800 z-10 hover:scale-105 transition-transform flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-black/40 text-[9px] font-black uppercase tracking-wider">
                      ALL-IN-ONE
                    </span>
                    <div className="text-xs font-black mt-2 leading-tight">
                      SkillForge Master Bundle
                    </div>
                  </div>
                  <div className="p-1.5 bg-black/40 backdrop-blur-sm text-center rounded-lg text-[10px] font-black">
                    78% SAVINGS
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: CTA & Poetic Quote (3 cols) */}
            <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end text-left lg:text-right space-y-4">
              
              {/* Price comparison */}
              <div>
                <span className="text-xs text-slate-400 line-through mr-2">৳ ৪,৫০০</span>
                <span className="text-2xl sm:text-3xl font-black text-brand-orange">৳ ৯৯৯</span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => addToCart(bundleItem)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm shadow-md shadow-brand-orange/30 active:translate-y-0.5 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isInCart ? (isBn ? "কার্টে যুক্ত আছে" : "Added to Cart") : (isBn ? "অফারটি নিন" : "Claim Bundle")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Quote */}
              <blockquote className="text-xs sm:text-sm italic font-medium text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
                {isBn
                  ? "“জ্ঞানই শুধু জ্ঞান নয়, এটি একটি সুন্দর জীবন গঠনের পথ।”"
                  : "“Knowledge is not mere theory; it is the authentic pathway to building an empowered life.”"}
              </blockquote>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
