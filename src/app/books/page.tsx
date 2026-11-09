"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { EBOOKS } from "@/data/mockData";
import { BookOpen, ShoppingCart, Check, Search, Star, Sparkles } from "lucide-react";

export default function BooksPage() {
  const { language, addToCart, cart, setReadingEbook } = useApp();
  const isBn = language === "bn";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", labelBn: "সব ই-বুক", labelEn: "All Publications" },
    { id: "law", labelBn: "আইন ও অধিকার", labelEn: "Law & Rights" },
    { id: "health", labelBn: "স্বাস্থ্য ও জীবনযাপন", labelEn: "Health & Nutrition" },
    { id: "business", labelBn: "উদ্যোক্তা ও বাণিজ্য", labelEn: "Business & Corporate" },
    { id: "digital", labelBn: "ডিজিটাল সাক্ষরতা", labelEn: "Digital Literacy" },
  ];

  const filteredBooks = EBOOKS.filter((book) => {
    const matchesCategory =
      selectedCategory === "all" ||
      book.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      book.categoryBn.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      !search ||
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.titleBn.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-200/50">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isBn ? "ডিজিটাল লাইব্রেরি ও গাইড" : "Executive Publications"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {isBn ? "প্রয়োজনীয় ডিজিটাল ই-বুক সংকলন" : "Field Manuals & Curated Reference Guides"}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-normal">
            {isBn
              ? "প্রিন্ট বইয়ের ঝামেলা ছাড়াই সরাসরি আপনার মোবাইল, ট্যাব বা ল্যাপটপে অফলাইন পড়ার সুবিধা।"
              : "Direct digital editions equipped with contract templates, checklists and interactive preview readers."}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-[#0B0F19] rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-subtle mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isBn ? "বইয়ের নাম বা লেখক অনুসন্ধান করুন..." : "Search publications, topics or authors..."}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30 text-slate-900 dark:text-white"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold"
                      : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {isBn ? cat.labelBn : cat.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* E-Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredBooks.map((ebook) => {
            const isInCart = cart.some((i) => i.id === ebook.id);

            return (
              <div
                key={ebook.id}
                className="group flex flex-col bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 shadow-subtle hover:shadow-posh-hover hover:-translate-y-1.5 transition-all duration-300 justify-between"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full max-w-[190px] mx-auto rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 bg-slate-900 mb-3.5 border border-slate-200/80 dark:border-slate-700/80">
                    <Image
                      src={ebook.coverImage}
                      alt={ebook.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 via-white/20 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 left-0 w-[1px] bg-white/40 pointer-events-none"></div>

                    {ebook.badge && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-sm">
                        {isBn ? ebook.badgeBn || ebook.badge : ebook.badge}
                      </div>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-[#0000F2] dark:group-hover:text-[#00D2FF] transition-colors mb-1">
                    {isBn ? ebook.titleBn : ebook.title}
                  </h3>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mb-2 font-normal">
                    {ebook.author}
                  </div>

                  <div className="inline-block px-2 py-0.5 rounded-md bg-blue-50/80 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] border border-blue-200/40 dark:border-blue-900/40 text-[10px] font-semibold mb-3">
                    {isBn ? ebook.formatsBn : ebook.formats.join(" • ")}
                  </div>
                </div>

                {/* Bottom Aligned Action Block */}
                <div className="mt-auto pt-3 border-t border-slate-200/60 dark:border-slate-800">
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
                          : "posh-button-primary"
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
    </div>
  );
}
