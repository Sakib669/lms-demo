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
    { id: "all", labelBn: "সব ই-বুক", labelEn: "All E-Books" },
    { id: "law", labelBn: "আইন ও অধিকার", labelEn: "Law & Rights" },
    { id: "health", labelBn: "স্বাস্থ্য ও জীবনযাপন", labelEn: "Health & Wellness" },
    { id: "business", labelBn: "উদ্যোক্তা ও বাণিজ্য", labelEn: "Business & Startups" },
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
    <div className="py-12 bg-slate-50/60 dark:bg-[#060814] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isBn ? "ডিজিটাল লাইব্রেরি" : "Digital Library"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {isBn ? "প্রয়োজনীয় সকল ই-বুক সংকলন" : "Curated Digital E-Books & Guides"}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            {isBn
              ? "প্রিন্ট বইয়ের ঝামেলা ছাড়াই সরাসরি আপনার মোবাইল বা ট্যাবলেটে অফলাইন পড়ার সুবিধা।"
              : "Read seamlessly across mobile, tablet or desktop with direct sample chapters."}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isBn ? "বইয়ের নাম বা লেখক খুঁজুন..." : "Search e-books or authors..."}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange text-slate-900 dark:text-white"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-brand-orange text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
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
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all justify-between"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full max-w-[190px] mx-auto rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-slate-200 dark:bg-slate-800 mb-3.5 border border-slate-200/60 dark:border-slate-700">
                    <Image
                      src={ebook.coverImage}
                      alt={ebook.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/20 to-transparent pointer-events-none"></div>
                    {ebook.badge && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider text-white bg-amber-500 shadow-sm">
                        {isBn ? ebook.badgeBn || ebook.badge : ebook.badge}
                      </div>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-brand-orange transition-colors mb-1">
                    {isBn ? ebook.titleBn : ebook.title}
                  </h3>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mb-2">
                    {ebook.author}
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-base font-black text-brand-orange">
                      ৳ {ebook.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ৳ {ebook.originalPrice}
                    </span>
                  </div>

                  <div className="inline-block px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-[10px] font-bold mb-3">
                    {isBn ? ebook.formatsBn : ebook.formats.join(" + ")}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setReadingEbook(ebook)}
                    className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors"
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
    </div>
  );
}
