"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { EBOOKS } from "@/data/mockData";
import { ArrowRight, ShoppingCart, Check, BookOpen, Star } from "lucide-react";

export default function EbooksSection() {
  const { language, addToCart, cart, setReadingEbook } = useApp();
  const isBn = language === "bn";

  return (
    <section className="py-14 bg-white dark:bg-[#071324] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {isBn ? "জনপ্রিয় ই-বুক সমূহ" : "Popular Digital E-Books"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {isBn ? "প্রিন্ট নয়, সরাসরি ডিজিটাল সংস্করণ" : "Direct digital edition for instant reading"}
            </p>
          </div>

          <Link
            href="/books"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange hover:text-brand-orangeHover transition-colors group"
          >
            <span>{isBn ? "সব ই-বুক দেখুন" : "View All E-Books"}</span>
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
                className="group flex flex-col bg-slate-50/70 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-3.5 shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all justify-between"
              >
                <div>
                  {/* Realistic 3D Book Cover Presentation */}
                  <div className="relative aspect-[3/4] w-full max-w-[190px] mx-auto rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-slate-200 dark:bg-slate-800 mb-3.5 border border-slate-200/60 dark:border-slate-700">
                    <Image
                      src={ebook.coverImage}
                      alt={ebook.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Book spine highlight */}
                    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/20 to-transparent pointer-events-none"></div>

                    {/* Badge */}
                    {ebook.badge && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider text-white bg-amber-500 shadow-sm">
                        {isBn ? ebook.badgeBn || ebook.badge : ebook.badge}
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-brand-orange transition-colors mb-1"
                    title={isBn ? ebook.titleBn : ebook.title}
                  >
                    {isBn ? ebook.titleBn : ebook.title}
                  </h3>

                  {/* Author / Category */}
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mb-2">
                    {ebook.author}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-base font-black text-brand-orange">
                      ৳ {ebook.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ৳ {ebook.originalPrice}
                    </span>
                  </div>

                  {/* Format tag */}
                  <div className="inline-block px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-[10px] font-bold mb-3">
                    {isBn ? ebook.formatsBn : ebook.formats.join(" + ")}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setReadingEbook(ebook)}
                    className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
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
                    className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                      isInCart
                        ? "bg-emerald-600 text-white"
                        : "bg-brand-orange hover:bg-brand-orangeHover text-white shadow-brand-orange/20"
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
