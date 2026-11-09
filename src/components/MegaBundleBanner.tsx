"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { Sparkles, ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";

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
              <div className="relative w-64 h-48 sm:w-72 sm:h-52">
                
                {/* Book Stack Composition */}
                <div className="absolute left-4 top-4 w-32 h-44 rounded-xl shadow-xl overflow-hidden border-2 border-white dark:border-slate-800 transform -rotate-12 hover:rotate-0 transition-transform">
                  <Image
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
                    alt="Bundle Book 1"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute right-4 top-2 w-32 h-44 rounded-xl shadow-xl overflow-hidden border-2 border-white dark:border-slate-800 transform rotate-12 hover:rotate-0 transition-transform">
                  <Image
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
                    alt="Bundle Book 2"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-36 h-48 rounded-xl shadow-2xl overflow-hidden border-2 border-white dark:border-slate-800 z-10 hover:scale-105 transition-transform">
                  <Image
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80"
                    alt="Bundle Main"
                    fill
                    className="object-cover"
                  />
                  {/* Badge */}
                  <div className="absolute bottom-2 inset-x-2 py-1 bg-brand-orange/95 text-white text-[10px] font-black text-center rounded-md">
                    78% OFF
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
