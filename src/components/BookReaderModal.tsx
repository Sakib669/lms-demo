"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { X, BookOpen, ChevronLeft, ChevronRight, ShoppingCart, Type, Check } from "lucide-react";

export default function BookReaderModal() {
  const { readingEbook, setReadingEbook, addToCart, cart, language } = useApp();
  const isBn = language === "bn";
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");

  if (!readingEbook) return null;

  const isInCart = cart.some((i) => i.id === readingEbook.id);

  const fontSizeClasses = {
    sm: "text-xs sm:text-sm leading-relaxed",
    base: "text-sm sm:text-base leading-relaxed",
    lg: "text-base sm:text-lg leading-loose",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-12 rounded-md overflow-hidden bg-slate-200 shadow-sm shrink-0">
              <Image
                src={readingEbook.coverImage}
                alt={readingEbook.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">
                {isBn ? "নমুনা অধ্যায় পাঠিকা" : "Sample Chapter Preview"}
              </span>
              <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white line-clamp-1">
                {isBn ? readingEbook.titleBn : readingEbook.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Font size adjustment */}
            <div className="flex items-center bg-slate-200/60 dark:bg-slate-800 rounded-xl p-1 gap-1">
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2 py-1 text-xs font-bold rounded-lg ${
                  fontSize === "sm" ? "bg-white dark:bg-slate-700 text-brand-orange shadow-sm" : "text-slate-500"
                }`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`px-2 py-1 text-xs font-bold rounded-lg ${
                  fontSize === "base" ? "bg-white dark:bg-slate-700 text-brand-orange shadow-sm" : "text-slate-500"
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2 py-1 text-xs font-bold rounded-lg ${
                  fontSize === "lg" ? "bg-white dark:bg-slate-700 text-brand-orange shadow-sm" : "text-slate-500"
                }`}
              >
                A+
              </button>
            </div>

            <button
              onClick={() => setReadingEbook(null)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#FAF9F6] dark:bg-slate-900 text-slate-800 dark:text-slate-200">
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                {isBn ? "প্রথম অধ্যায়" : "Chapter One"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {readingEbook.sampleChapter.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {isBn ? "লেখক:" : "By"} {readingEbook.author}
              </p>
            </div>

            <div className={`space-y-4 font-serif ${fontSizeClasses[fontSize]}`}>
              {readingEbook.sampleChapter.content.map((para, i) => (
                <p key={i} className="first-letter:text-3xl first-letter:font-black first-letter:text-brand-orange first-letter:mr-1">
                  {para}
                </p>
              ))}

              <p>
                {isBn
                  ? "জীবনের প্রতিটি গুরুত্বপূর্ণ সিদ্ধান্ত নেওয়ার পূর্বে নির্ভরযোগ্য তথ্যের ভিত্তি থাকা আবশ্যক। যখন কোনো ব্যক্তি তার অধিকার সম্পর্কে সম্পূর্ণ সচেতন থাকে, তখন যেকোনো আইনি বা পেশাদার প্রতিকূলতা অনায়াসে মোকাবিলা করা সম্ভব।"
                  : "Before making any pivotal life or financial choice, grounding yourself in verifiable knowledge is indispensable. When individuals achieve total clarity regarding their civic protections, commercial vulnerability shrinks to near-zero."}
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-sans not-italic">
                <strong>{isBn ? "লক্ষ্য করুন:" : "Notice:"}</strong>{" "}
                {isBn
                  ? "এটি বইটির সংক্ষিপ্ত নমুনা অধ্যায়। সম্পূর্ণ বইটি পড়তে এবং অডিও গাইড পেতে নিচের বাটনে ক্লিক করে সংগ্রহ করুন।"
                  : "This is a free preview sample. To access the unabridged text, audio narration, and checklists, obtain the full edition."}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-950">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-brand-orange">৳ {readingEbook.price}</span>
            <span className="text-xs text-slate-400 line-through">৳ {readingEbook.originalPrice}</span>
          </div>

          <button
            onClick={() =>
              addToCart({
                id: readingEbook.id,
                type: "ebook",
                title: readingEbook.title,
                titleBn: readingEbook.titleBn,
                price: readingEbook.price,
                originalPrice: readingEbook.originalPrice,
                thumbnail: readingEbook.coverImage,
              })
            }
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all ${
              isInCart
                ? "bg-emerald-600 text-white"
                : "bg-brand-orange hover:bg-brand-orangeHover text-white shadow-brand-orange/20"
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4" />
                <span>{isBn ? "কার্টে যুক্ত আছে" : "In Cart"}</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>{isBn ? "সম্পূর্ণ ই-বুকটি কিনুন" : "Unlock Full Book"}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
