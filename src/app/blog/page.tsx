"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { BLOG_POSTS } from "@/data/mockData";
import { Calendar, Clock, ArrowRight, Search, BookOpen } from "lucide-react";

export default function BlogIndexPage() {
  const { language } = useApp();
  const isBn = language === "bn";
  const [search, setSearch] = useState("");

  const filtered = BLOG_POSTS.filter(
    (b) =>
      !search ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.titleBn.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-12 bg-slate-50/60 dark:bg-[#060814] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isBn ? "ব্লগ ও জ্ঞান ভান্ডার" : "SkillForge Journal"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {isBn ? "সচেতন জীবন ও ক্যারিয়ারের গাইড" : "Informed Living & Professional Playbooks"}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            {isBn
              ? "আইন, স্বাস্থ্য, ব্যবসা ও ক্যারিয়ার সম্পর্কিত প্রয়োজনীয় তথ্য ও বিশ্লেষণ।"
              : "Analytical articles and tactical insights for modern creators."}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isBn ? "আর্টিকেল অনুসন্ধান করুন..." : "Search articles..."}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden hover:shadow-card-hover hover:-translate-y-1.5 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {isBn ? post.dateBn : post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug mb-2">
                    {isBn ? post.titleBn : post.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {isBn ? post.summaryBn : post.summary}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-brand-orange">
                  <span>{isBn ? "পড়ুন" : "Read More"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
