"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { BLOG_POSTS } from "@/data/mockData";
import { Calendar, Clock, ChevronLeft, Share2, Check } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { language } = useApp();
  const isBn = language === "bn";
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((b) => b.slug === slug) || BLOG_POSTS[0];

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="py-12 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{isBn ? "সকল প্রবন্ধে ফিরুন" : "Back to Journal"}</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] text-xs font-mono font-bold uppercase tracking-wider border border-blue-200/50">
            {isBn ? post.categoryBn : post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            {isBn ? post.titleBn : post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-b border-slate-200/70 dark:border-slate-800 pb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0000F2] dark:text-[#00D2FF]" />
              <span className="tabular-nums">{isBn ? post.dateBn : post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0000F2] dark:text-[#00D2FF]" />
              <span className="tabular-nums">{post.readTime}</span>
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 shadow-posh border border-slate-200/80 dark:border-slate-800">
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
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 flex items-center justify-between shadow-subtle">
          <span className="text-xs font-semibold text-slate-500">
            {isBn ? "প্রবন্ধটি সহকর্মীদের সাথে শেয়ার করুন:" : "Share this insight:"}
          </span>
          <button
            onClick={handleCopyLink}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              copied
                ? "bg-emerald-600 text-white"
                : "posh-button-primary !py-1.5 !px-3.5 !text-xs !rounded-xl"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{isBn ? "লিংক কপি হয়েছে!" : "Link Copied!"}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{isBn ? "লিংক কপি করুন" : "Copy Link"}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </article>
  );
}
