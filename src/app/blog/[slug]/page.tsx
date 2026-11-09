"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { BLOG_POSTS } from "@/data/mockData";
import { Calendar, Clock, ChevronLeft, Share2, Bookmark, Check } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { language } = useApp();
  const isBn = language === "bn";

  const post = BLOG_POSTS.find((b) => b.slug === slug) || BLOG_POSTS[0];

  return (
    <article className="py-12 bg-white dark:bg-[#060814] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{isBn ? "সকল ব্লগে ফিরুন" : "Back to Journal"}</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
            {isBn ? post.categoryBn : post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {isBn ? post.titleBn : post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {isBn ? post.dateBn : post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xl border border-slate-200/80 dark:border-slate-800">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <p>
            {isBn
              ? "প্রযুক্তির দ্রুত পরিবর্তনের সাথে তাল মেলাতে গেলে নিজের দৃষ্টিভঙ্গি সর্বদা উন্মুক্ত রাখা জরুরি। দৈনন্দিন পড়াশোনা ও নতুন দক্ষতা অর্জনই পারে আপনাকে যে কোনো সংকটময় মুহূর্তে স্থিতিশীল রাখতে।"
              : "To maintain equilibrium in a hyper-accelerating digital ecosystem, cognitive flexibility is your greatest defense. Regular micro-learning compounds into an unassailable competitive moat."}
          </p>
        </div>

        {/* Share Bar */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500">
            {isBn ? "আর্টিকেলটি শেয়ার করুন:" : "Share this article:"}
          </span>
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert(isBn ? "লিংক কপি করা হয়েছে!" : "Link copied to clipboard!");
              }
            }}
            className="px-3 py-1.5 rounded-xl bg-brand-orange text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{isBn ? "লিংক কপি" : "Copy Link"}</span>
          </button>
        </div>

      </div>
    </article>
  );
}
