"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Sparkles, ArrowRight, CheckCircle2, ShoppingBag, BookOpen, Layers, ShieldCheck } from "lucide-react";

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
    <section className="py-14 bg-[#FAFAFD] dark:bg-[#060814] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Matte Obsidian / Deep Sapphire Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-[#0B1528] to-[#070D18] border border-slate-800 text-white p-7 sm:p-10 lg:p-12 shadow-posh-hover overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0000F2]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-400/30 text-[#00D2FF] text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isBn ? "এক্সিকিউটিভ মেগা বান্ডল" : "Executive Master Collection"}</span>
              </div>

              {/* Tagline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                {isBn ? (
                  <>
                    সব জ্ঞান এক ছাতার নিচে — <br />
                    <span className="text-[#00D2FF]">সর্বোচ্চ সাশ্রয়ে আজীবন এক্সেস।</span>
                  </>
                ) : (
                  <>
                    Complete Professional Suite — <br />
                    <span className="text-[#00D2FF]">Lifetime Access at 78% Savings.</span>
                  </>
                )}
              </h3>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 pt-2 text-sm font-normal text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>{isBn ? "সকল ফ্ল্যাগশিপ কোর্স + ডিজিটাল ই-বুক লাইব্রেরি" : "All flagship video masterclasses + full publications"}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>{isBn ? "প্র্যাকটিক্যাল চুক্তি ড্রাফটিং ও লিগ্যাল টেমপ্লেট কিট" : "Ready-to-use contracts, templates, and calculation sheets"}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>{isBn ? "ভবিষ্যতের সকল সংযোজন ও আপডেট সম্পূর্ণ ফ্রি" : "Free access to all future revisions & course additions"}</span>
                </li>
              </ul>
            </div>

            {/* Center Graphic: Posh 3D Presentation (4 cols) */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-72 h-52 flex items-center justify-center">
                
                {/* 3D Stack Graphic Left */}
                <div className="absolute left-3 top-4 w-32 h-44 rounded-xl shadow-xl overflow-hidden bg-slate-900 text-white p-3 border border-slate-700/80 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="text-[9px] font-mono text-[#00D2FF] uppercase tracking-wider">LEGAL GUIDE</span>
                  <div className="text-[11px] font-bold mt-2 leading-tight">পারিবারিক আইন ও চুক্তি সহায়িকা</div>
                  <div className="absolute bottom-2 right-2 text-white/30">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>

                {/* 3D Stack Graphic Right */}
                <div className="absolute right-3 top-2 w-32 h-44 rounded-xl shadow-xl overflow-hidden bg-slate-900 text-white p-3 border border-slate-700/80 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider">HEALTH SUITE</span>
                  <div className="text-[11px] font-bold mt-2 leading-tight">সুস্থ জীবন ও পুষ্টি বিজ্ঞান</div>
                  <div className="absolute bottom-2 right-2 text-white/30">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                {/* Main Master Card in Center */}
                <div className="relative w-36 h-48 rounded-xl shadow-2xl overflow-hidden bg-gradient-to-tr from-[#0000F2] via-[#1D4ED8] to-[#00D2FF] text-white p-3.5 border border-white/20 z-10 hover:scale-105 transition-transform flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-black/40 text-[9px] font-mono font-bold uppercase tracking-wider">
                      LIFETIME PASS
                    </span>
                    <div className="text-xs font-black mt-2 leading-tight">
                      SkillForge Polymath Suite
                    </div>
                  </div>
                  <div className="p-1.5 bg-black/40 backdrop-blur-sm text-center rounded-lg text-[10px] font-mono font-bold tracking-wider">
                    78% SAVINGS
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: CTA & Quotation (3 cols) */}
            <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end text-left lg:text-right space-y-4">
              
              {/* Price comparison */}
              <div>
                <span className="text-xs font-mono text-slate-400 line-through mr-2 tabular-nums">৳ ৪,৫০০</span>
                <span className="text-3xl font-extrabold font-mono text-white tabular-nums">৳ ৯৯৯</span>
              </div>

              {/* High-End Action Button */}
              <button
                onClick={() => addToCart(bundleItem)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-[#0000F2]" />
                <span>{isInCart ? (isBn ? "কার্টে যুক্ত আছে" : "Added to Cart") : (isBn ? "বান্ডলটি এনরোল করুন" : "Claim Master Pass")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Verified Security Badge */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isBn ? "এককালীন পেমেন্ট • কোনো লুকানো চার্জ নেই" : "One-time payment • No recurring fees"}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
