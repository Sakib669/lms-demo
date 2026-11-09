"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { BLOG_POSTS } from "@/data/mockData";
import { ArrowRight, Calendar, Clock, Laptop, Heart, TrendingUp, Sparkles, BookOpen } from "lucide-react";

const BLOG_ICONS = [Laptop, Sparkles, TrendingUp, Heart];

export default function BlogSection() {
  const { language } = useApp();
  const isBn = language === "bn";

  return (
    <section className="py-14 sm:py-16 bg-white dark:bg-[#060814] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9">
          <div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-[#0000F2] dark:text-[#00D2FF] mb-1">
              {isBn ? "নলেজ হাব ও গবেষণা" : "Executive Journal"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "সাম্প্রতিক বিশ্লেষণ ও প্রয়োজনীয় জ্ঞান" : "Research, Case Studies & Insights"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal">
              {isBn ? "দৈনন্দিন আইন, পুষ্টি ও ক্যারিয়ার কৌশলের গভীর পর্যালোচনা" : "Concise architectural breakdowns of everyday legal and financial mechanisms"}
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors group self-start sm:self-auto"
          >
            <span>{isBn ? "সকল প্রবন্ধ পড়ুন" : "View All Publications"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BLOG_POSTS.map((post, index) => {
            const IconComponent = BLOG_ICONS[index % BLOG_ICONS.length];

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-[#FAFAFD] dark:bg-[#0B0F19] rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-subtle hover:shadow-posh-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Visual Editorial Header Banner */}
                <div className="relative aspect-[16/10] bg-slate-950 p-4 flex flex-col justify-between text-white overflow-hidden border-b border-slate-800">
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#00D2FF] border border-white/10">
                      {isBn ? post.categoryBn : post.category}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <IconComponent className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-1 text-[11px] font-mono text-slate-300">
                    <Clock className="w-3 h-3 text-[#00D2FF]" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Subtle Grid texture inside header */}
                  <div className="absolute inset-0 enterprise-grid opacity-20 pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0000F2]/20 rounded-full blur-2xl pointer-events-none"></div>
                </div>

                {/* Body Content */}
                <div className="p-4 flex flex-col flex-1 justify-between bg-white dark:bg-[#0B0F19]">
                  <div>
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-2">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span className="tabular-nums">{isBn ? post.dateBn : post.date}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0000F2] dark:group-hover:text-[#00D2FF] transition-colors line-clamp-2 leading-snug mb-2"
                      title={isBn ? post.titleBn : post.title}
                    >
                      {isBn ? post.titleBn : post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {isBn ? post.summaryBn : post.summary}
                    </p>
                  </div>

                  {/* Read Article Link */}
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#0000F2] dark:group-hover:text-[#00D2FF] transition-colors">
                    <span>{isBn ? "প্রবন্ধ পড়ুন" : "Read Insight"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
