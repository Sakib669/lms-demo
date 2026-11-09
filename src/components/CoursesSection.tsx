"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { COURSES } from "@/data/mockData";
import { Star, ArrowRight, ShoppingCart, Check, Eye } from "lucide-react";

export default function CoursesSection() {
  const { language, addToCart, cart, enrolledCourseIds } = useApp();
  const isBn = language === "bn";

  return (
    <section className="py-14 bg-slate-50/70 dark:bg-[#060e1a] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {isBn ? "জনপ্রিয় কোর্স সমূহ" : "Popular Flagship Courses"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {isBn ? "মৌলিক জ্ঞান, বাস্তব জীবন" : "Practical knowledge for modern life"}
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange hover:text-brand-orangeHover transition-colors group"
          >
            <span>{isBn ? "সব কোর্স দেখুন" : "View All Courses"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Column Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {COURSES.map((course) => {
            const isInCart = cart.some((item) => item.id === course.id);
            const isEnrolled = enrolledCourseIds.includes(course.id);

            return (
              <div
                key={course.id}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all overflow-hidden"
              >
                {/* Thumbnail & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider text-white bg-brand-orange shadow-sm">
                      {isBn ? course.badgeBn || course.badge : course.badge}
                    </div>
                  )}

                  {/* Level Tag */}
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold text-slate-800 dark:text-slate-100 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm">
                    {course.level}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Category */}
                    <div className="text-[11px] font-semibold text-brand-orange mb-1">
                      {isBn ? course.categoryBn : course.category}
                    </div>

                    {/* Title */}
                    <Link
                      href={`/courses/${course.id}`}
                      className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug mb-2"
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
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {course.rating}
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        ({course.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-brand-orange">
                          ৳ {course.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ৳ {course.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Button Group */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <Link
                        href={`/courses/${course.id}`}
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        <span>{isBn ? "বিস্তারিত" : "Details"}</span>
                      </Link>

                      {isEnrolled ? (
                        <Link
                          href={`/learn/${course.id}`}
                          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
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
