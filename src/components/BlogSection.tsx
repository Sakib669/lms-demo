"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { BLOG_POSTS } from "@/data/mockData";
import { ArrowRight, Calendar, Clock, Laptop, Heart, TrendingUp, Sparkles } from "lucide-react";

const BLOG_GRADIENTS = [
  "from-blue-600 via-indigo-600 to-purple-700",
  "from-emerald-600 via-teal-600 to-cyan-700",
  "from-amber-500 via-orange-600 to-red-600",
  "from-rose-500 via-pink-600 to-purple-600",
];

const BLOG_ICONS = [Laptop, Sparkles, TrendingUp, Heart];

export default function BlogSection() {
  const { language } = useApp();
  const isBn = language === "bn";

  return (
    <section className="py-14 bg-white dark:bg-[#071324] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {isBn ? "সাম্প্রতিক ব্লগ" : "Recent Articles & Insights"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {isBn ? "জানুন, শিখুন, সচেতন থাকুন" : "Expand your horizons with expert write-ups"}
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange hover:text-brand-orangeHover transition-colors group"
          >
            <span>{isBn ? "সকল ব্লগ দেখুন" : "View All Blogs"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, index) => {
            const IconComponent = BLOG_ICONS[index % BLOG_ICONS.length];
            const gradient = BLOG_GRADIENTS[index % BLOG_GRADIENTS.length];

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-slate-50/60 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden hover:shadow-card-hover hover:-translate-y-1.5 transition-all"
              >
                {/* Visual Thumbnail Banner */}
                <div className={`relative aspect-[16/10] bg-gradient-to-tr ${gradient} p-4 flex flex-col justify-between text-white overflow-hidden`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/40 backdrop-blur-sm text-white">
                      {isBn ? post.categoryBn : post.category}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="text-xs font-bold text-white/90 line-clamp-1 drop-shadow-sm">
                    {post.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1 justify-between bg-white dark:bg-slate-900">
                  <div>
                    {/* Date */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2 font-medium">
                      <Calendar className="w-3 h-3 text-brand-orange" />
                      <span>{isBn ? post.dateBn : post.date}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug mb-2"
                      title={isBn ? post.titleBn : post.title}
                    >
                      {isBn ? post.titleBn : post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {isBn ? post.summaryBn : post.summary}
                    </p>
                  </div>

                  {/* Read Link */}
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-brand-orange group-hover:translate-x-0.5 transition-transform">
                    <span>{isBn ? "বিস্তারিত পড়ুন" : "Read Article"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
