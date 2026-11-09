"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { EBOOKS } from "@/data/mockData";
import { ArrowRight, ShoppingCart, Check, BookOpen } from "lucide-react";

export default function EbooksSection() {
  const { language, addToCart, cart, setReadingEbook } = useApp();
  const isBn = language === "bn";

  return (
    <section className="py-14 sm:py-16 bg-white dark:bg-[#060814] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9">
          <div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-[#0000F2] dark:text-[#00D2FF] mb-1">
              {isBn ? "ডিজিটাল রিসার্চ ও প্রকাশনা" : "Executive Publications"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "প্র্যাকটিক্যাল গাইড ও রেফারেন্স ই-বুক" : "Field Manuals & Curated E-Books"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal">
              {isBn ? "ল্যাপটপ, মোবাইল ও রিডারে পড়ার উপযোগী তাৎক্ষণিক ডিজিটাল সংস্করণ" : "Optimized for mobile, tablet, and reader devices with interactive indexes"}
            </p>
          </div>

          <Link
            href="/books"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors group self-start sm:self-auto"
          >
            <span>{isBn ? "সব ই-বুক দেখুন" : "View All Publications"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Column E-Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {EBOOKS.map((ebook) => {
            const isInCart = cart.some((item) => item.id === ebook.id);

            return (
              <div
                key={ebook.id}
                className="group flex flex-col bg-[#FAFAFD] dark:bg-[#0B0F19] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 shadow-subtle hover:shadow-posh-hover hover:-translate-y-1.5 transition-all duration-300 justify-between"
              >
                <div>
                  {/* Luxury 3D Book Presentation */}
                  <div className="relative aspect-[3/4] w-full max-w-[190px] mx-auto rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 bg-slate-900 mb-3.5 border border-slate-200/80 dark:border-slate-700/80">
                    <Image
                      src={ebook.coverImage}
                      alt={ebook.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Realistic 3D spine lighting & edge highlight */}
                    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 via-white/20 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 left-0 w-[1px] bg-white/40 pointer-events-none"></div>

                    {/* Subtle Badge */}
                    {ebook.badge && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-sm">
                        {isBn ? ebook.badgeBn || ebook.badge : ebook.badge}
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-[#0000F2] dark:group-hover:text-[#00D2FF] transition-colors mb-1"
                    title={isBn ? ebook.titleBn : ebook.title}
                  >
                    {isBn ? ebook.titleBn : ebook.title}
                  </h3>

                  {/* Author */}
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mb-2">
                    {ebook.author}
                  </div>

                  {/* Format Pill */}
                  <div className="inline-block px-2 py-0.5 rounded-md bg-blue-50/80 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] border border-blue-200/40 dark:border-blue-900/40 text-[10px] font-semibold mb-3">
                    {isBn ? ebook.formatsBn : ebook.formats.join(" • ")}
                  </div>
                </div>

                {/* Bottom Aligned Action Block (Fixed Baseline across grid) */}
                <div className="mt-auto pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  {/* Price Row */}
                  <div className="flex items-baseline justify-between mb-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
                        ৳ {ebook.price}
                      </span>
                      <span className="text-xs font-mono text-slate-400 line-through tabular-nums">
                        ৳ {ebook.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => setReadingEbook(ebook)}
                      className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>{isBn ? "পড়ুন" : "Read"}</span>
                    </button>

                    <button
                      onClick={() =>
                        addToCart({
                          id: ebook.id,
                          type: "ebook",
                          title: ebook.title,
                          titleBn: ebook.titleBn,
                          price: ebook.price,
                          originalPrice: ebook.originalPrice,
                          thumbnail: ebook.coverImage,
                        })
                      }
                      className={`flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        isInCart
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-950 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white active:scale-95"
                      }`}
                    >
                      {isInCart ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>{isBn ? "যুক্ত" : "Added"}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3 h-3" />
                          <span>{isBn ? "কিনুন" : "Buy"}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
