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
    <div className="py-12 bg-slate-50/60 dark:bg-[#060814] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{isBn ? "সকল ফ্ল্যাগশিপ কোর্স" : "All Flagship Courses"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {isBn ? "দক্ষতা অর্জন করুন, ভবিষ্যৎ গড়ুন" : "Master Practical Real-World Skills"}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            {isBn
              ? "আইন, স্বাস্থ্য, ব্যবসা ও ক্যারিয়ার সম্পর্কিত প্রয়োজনীয় সকল কোর্স এক ছাদের নিচে।"
              : "Comprehensive courses across legal literacy, wellness, venture building and career mastery."}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            
            {/* Search input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isBn ? "কোর্স বা প্রশিক্ষকের নাম খুঁজুন..." : "Search courses or instructors..."}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange text-slate-900 dark:text-white"
              />
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-xs font-bold text-slate-500">{isBn ? "বাছাই:" : "Sort:"}</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange"
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors ${
                selectedCategory === "all"
                  ? "bg-brand-orange text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {isBn ? "সব কোর্স" : "All Courses"}
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-brand-orange text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {isBn ? cat.nameBn : cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
              {isBn ? "কোনো কোর্স খুঁজে পাওয়া যায়নি।" : "No courses match your query."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearch("");
              }}
              className="px-4 py-2 bg-brand-orange text-white text-xs font-bold rounded-xl"
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
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {course.badge && (
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider text-white bg-brand-orange shadow-sm">
                        {isBn ? course.badgeBn || course.badge : course.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-brand-orange mb-1">
                        {isBn ? course.categoryBn : course.category}
                      </div>
                      <Link
                        href={`/courses/${course.id}`}
                        className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug mb-1.5"
                      >
                        {isBn ? course.titleBn : course.title}
                      </Link>
                      <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mb-2">
                        {course.instructor}
                      </div>
                      <div className="flex items-center gap-1.5 mb-3 text-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{course.rating}</span>
                        <span className="text-slate-400 text-[11px]">({course.reviewsCount})</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-black text-brand-orange">৳ {course.price}</span>
                        <span className="text-xs text-slate-400 line-through">৳ {course.originalPrice}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={`/courses/${course.id}`}
                          className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          <span>{isBn ? "বিস্তারিত" : "Details"}</span>
                        </Link>

                        {isEnrolled ? (
                          <Link
                            href={`/learn/${course.id}`}
                            className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
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
                            className={`flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-bold shadow-sm ${
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
    <Suspense fallback={<div className="p-12 text-center text-sm font-bold text-slate-400">Loading catalog...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
