"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { COURSES } from "@/data/mockData";
import { Star, ArrowRight, ShoppingCart, Check, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoursesSection() {
  const { language, addToCart, cart, enrolledCourseIds } = useApp();
  const isBn = language === "bn";
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", labelBn: "সকল কোর্স", labelEn: "All Courses" },
    { id: "আইন", labelBn: "আইন ও অধিকার", labelEn: "Legal Literacy" },
    { id: "স্বাস্থ্য", labelBn: "স্বাস্থ্য ও পুষ্টি", labelEn: "Wellness Science" },
    { id: "ট্যাক্স", labelBn: "ট্যাক্স ও অর্থব্যবস্থা", labelEn: "Tax & Finance" },
  ];

  const displayedCourses = COURSES.filter((c) => {
    if (activeFilter === "all") return true;
    return (
      c.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
      c.categoryBn.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <section className="py-14 sm:py-16 bg-[#F8FAFC] dark:bg-[#070B14] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-[#0000F2] dark:text-[#00D2FF] mb-1">
              {isBn ? "ফ্ল্যাগশিপ কারিকুলাম" : "Flagship Series"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "সর্বাধিক প্রশংসিত ও জনপ্রিয় কোর্স" : "Top-Rated Masterclasses"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal">
              {isBn ? "বাস্তব অভিজ্ঞতা ও পরীক্ষিত কৌশলে সমৃদ্ধ আধুনিক পাঠ্যক্রম" : "Rigorous practical frameworks taught by leading practitioners"}
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 self-start lg:self-auto scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  activeFilter === tab.id
                    ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold shadow-sm"
                    : "bg-white dark:bg-[#0B0F19] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
                }`}
              >
                {isBn ? tab.labelBn : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Column Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {displayedCourses.map((course) => {
            const isInCart = cart.some((item) => item.id === course.id);
            const isEnrolled = enrolledCourseIds.includes(course.id);

            return (
              <div
                key={course.id}
                className="group flex flex-col bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-posh-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Thumbnail & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800/60">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

                  {/* Refined Enterprise Badge */}
                  {course.badge && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-sm">
                      {isBn ? course.badgeBn || course.badge : course.badge}
                    </div>
                  )}

                  {/* Level Tag */}
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-900 dark:text-slate-100 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                    {course.level}
                  </div>
                </div>

                {/* Body Content - flex-1 with flex-col */}
                <div className="p-4 flex flex-col flex-1">
                  
                  {/* Category Pill */}
                  <div className="text-[11px] font-bold text-[#0000F2] dark:text-[#00D2FF] mb-1">
                    {isBn ? course.categoryBn : course.category}
                  </div>

                  {/* Title */}
                  <Link
                    href={`/courses/${course.id}`}
                    className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0000F2] dark:group-hover:text-[#00D2FF] transition-colors line-clamp-2 leading-snug mb-2"
                    title={isBn ? course.titleBn : course.title}
                  >
                    {isBn ? course.titleBn : course.title}
                  </Link>

                  {/* Instructor */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mb-2">
                    {course.instructor}
                  </div>

                  {/* Rating & Review */}
                  <div className="flex items-center gap-1.5 mb-3 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                      {course.rating}
                    </span>
                    <span className="text-slate-400 text-[11px] font-mono tabular-nums">
                      ({course.reviewsCount})
                    </span>
                  </div>

                  {/* Bottom Aligned Action Block (Fixed Baseline) */}
                  <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {/* Price Row */}
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
                          ৳ {course.price}
                        </span>
                        <span className="text-xs font-mono text-slate-400 line-through tabular-nums">
                          ৳ {course.originalPrice}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                      </span>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <Link
                        href={`/courses/${course.id}`}
                        className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        <span>{isBn ? "বিস্তারিত" : "Details"}</span>
                      </Link>

                      {isEnrolled ? (
                        <Link
                          href={`/learn/${course.id}`}
                          className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-bold text-white bg-[#0000F2] hover:bg-[#0000D0] transition-colors shadow-sm"
                        >
                          <Check className="w-3 h-3" />
                          <span>{isBn ? "শিখুন" : "Learn"}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={() =>
                            addToCart({
                              id: course.id,
                              type: "course",
                              title: course.title,
                              titleBn: course.titleBn,
                              price: course.price,
                              originalPrice: course.originalPrice,
                              thumbnail: course.thumbnail,
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
                              <span>{isBn ? "কিনুন" : "Cart"}</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
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
