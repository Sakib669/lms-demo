"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { COURSES, CATEGORIES } from "@/data/mockData";
import { Search, Star, ShoppingCart, Check, Filter, Layers, Eye } from "lucide-react";

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const { language, addToCart, cart, enrolledCourseIds } = useApp();
  const isBn = language === "bn";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [search, setSearch] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<"popular" | "price-low" | "price-high">("popular");

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" ||
        selectedCategory === "more" ||
        course.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        course.categoryBn.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesSearch =
        !search ||
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.titleBn.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return b.rating - a.rating;
    });
  }, [selectedCategory, search, sortBy]);

  return (
    <div className="py-12 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] text-xs font-semibold tracking-wide border border-blue-200/50 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{isBn ? "সকল ফ্ল্যাগশিপ কারিকুলাম" : "Executive Curriculum Catalog"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {isBn ? "বাস্তবমুখী জ্ঞান অর্জন করুন" : "Master High-Utility Practical Skills"}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-normal">
            {isBn
              ? "আইনি অধিকার, কর পরিকল্পনা, স্বাস্থ্যবিজ্ঞান ও প্রযুক্তিগত দক্ষতার পরিপূর্ণ সংগ্রহ।"
              : "Structured masterclasses designed for corporate officers, entrepreneurs, and discerning individuals."}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white dark:bg-[#0B0F19] rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-subtle mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            
            {/* Search input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isBn ? "কোর্স বা প্রশিক্ষকের নাম অনুসন্ধান করুন..." : "Search courses, topics or instructors..."}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30 focus:border-[#0000F2] text-slate-900 dark:text-white"
              />
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-xs font-semibold text-slate-500">{isBn ? "বাছাই:" : "Sort:"}</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30"
              >
                <option value="popular">{isBn ? "জনপ্রিয়তা অনুযায়ী" : "Highest Rated"}</option>
                <option value="price-low">{isBn ? "মূল্য: কম থেকে বেশি" : "Price: Low to High"}</option>
                <option value="price-high">{isBn ? "মূল্য: বেশি থেকে কম" : "Price: High to Low"}</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                selectedCategory === "all"
                  ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {isBn ? "সব কোর্স" : "All Fields"}
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {isBn ? cat.nameBn : cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-white dark:bg-[#0B0F19] rounded-3xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
              {isBn ? "কোনো কোর্স খুঁজে পাওয়া যায়নি।" : "No courses match your query."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearch("");
              }}
              className="posh-button-primary !py-2 !px-4 !text-xs !rounded-xl"
            >
              {isBn ? "ফিল্টার রিসেট করুন" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => {
              const isInCart = cart.some((item) => item.id === course.id);
              const isEnrolled = enrolledCourseIds.includes(course.id);

              return (
                <div
                  key={course.id}
                  className="group flex flex-col bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-posh-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

                    {course.badge && (
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-sm">
                        {isBn ? course.badgeBn || course.badge : course.badge}
                      </div>
                    )}

                    <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-900 dark:text-slate-100 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div>
                      <div className="text-[11px] font-bold text-[#0000F2] dark:text-[#00D2FF] mb-1">
                        {isBn ? course.categoryBn : course.category}
                      </div>
                      <Link
                        href={`/courses/${course.id}`}
                        className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0000F2] dark:group-hover:text-[#00D2FF] transition-colors line-clamp-2 leading-snug mb-1.5"
                      >
                        {isBn ? course.titleBn : course.title}
                      </Link>
                      <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mb-2">
                        {course.instructor}
                      </div>
                      <div className="flex items-center gap-1.5 mb-3 text-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-mono font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                          {course.rating}
                        </span>
                        <span className="text-slate-400 text-[11px] font-mono tabular-nums">
                          ({course.reviewsCount})
                        </span>
                      </div>
                    </div>

                    {/* Bottom Aligned Action Row */}
                    <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-base font-mono font-bold text-slate-950 dark:text-white tabular-nums">
                            ৳ {course.price}
                          </span>
                          <span className="text-xs font-mono text-slate-400 line-through tabular-nums">
                            ৳ {course.originalPrice}
                          </span>
                        </div>
                      </div>

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
        )}

      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm font-mono text-slate-400">Loading catalog...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
