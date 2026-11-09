"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { ArrowRight, Users, GraduationCap, BookOpen, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { language } = useApp();
  const isBn = language === "bn";

  return (
    <section className="relative overflow-hidden bg-[#FAFAFD] dark:bg-[#060814] pt-8 pb-16 lg:py-24 border-b border-slate-200/70 dark:border-slate-800/80">
      {/* Precision enterprise architectural grid background */}
      <div className="absolute inset-0 enterprise-grid opacity-60 dark:opacity-40 pointer-events-none"></div>

      {/* Subtle radial spotlight overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0000F2]/[0.07] dark:from-[#0000F2]/[0.15] via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-7">
            
            {/* Enterprise Micro-Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 shadow-subtle text-slate-700 dark:text-slate-300 text-xs font-semibold"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0000F2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0000F2]"></span>
              </span>
              <span className="tracking-wide">
                {isBn ? "বাস্তবমুখী জ্ঞান ও ক্যারিয়ারের নির্ভরযোগ্য প্ল্যাটফর্ম" : "Hermes Academy • Executive Practical Skills"}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[56px] font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.12]"
            >
              {isBn ? (
                <>
                  দৈনন্দিন জটিলতা পেরিয়ে <br className="hidden sm:inline" />
                  বাস্তব জীবনে এগিয়ে থাকার <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-slate-900 via-[#0000F2] to-[#1D4ED8] dark:from-white dark:via-[#38BDF8] dark:to-[#00D2FF] bg-clip-text text-transparent">
                    সুস্পষ্ট জ্ঞান ও দক্ষতা।
                  </span>
                </>
              ) : (
                <>
                  Actionable Mastery to <br className="hidden sm:inline" />
                  Navigate Complex Real-Life <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-slate-900 via-[#0000F2] to-[#1D4ED8] dark:from-white dark:via-[#38BDF8] dark:to-[#00D2FF] bg-clip-text text-transparent">
                    Law, Health & Finance.
                  </span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal"
            >
              {isBn
                ? "আইনি অধিকার, কর ব্যবস্থাপনা, পুষ্টিবিজ্ঞান ও ডিজিটাল স্বাক্ষরতার মত মৌলিক বিষয়ে বিশেষজ্ঞদের বাস্তব অভিজ্ঞতাভিত্তিক প্র্যাকটিক্যাল কোর্স ও ই-বুক।"
                : "Curated high-utility curriculums taught by licensed advocates, accredited nutritionists, and enterprise engineers designed for immediate impact."}
            </motion.p>

            {/* Dual Enterprise Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <Link
                href="/courses"
                className="posh-button-primary !py-3.5 !px-6 !text-sm !rounded-xl group shadow-[0_4px_20px_-4px_rgba(15,23,42,0.25)] hover:shadow-[0_8px_25px_-4px_rgba(15,23,42,0.35)]"
              >
                <span>{isBn ? "কোর্স ক্যাটালগ দেখুন" : "Explore Curriculums"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="posh-button-secondary !py-3.5 !px-6 !text-sm !rounded-xl"
              >
                <span>{isBn ? "আমাদের পদ্ধতি জানুন" : "Our Methodology"}</span>
              </Link>
            </motion.div>

            {/* Enterprise Trust Metric Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF]" />
                <span>{isBn ? "লাইফটাইম এক্সেস" : "Permanent Access"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF]" />
                <span>{isBn ? "যাচাইকৃত সনদপত্র" : "Verified Credential"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF]" />
                <span>{isBn ? "সরাসরি প্রশ্নোত্তর সাপোর্ট" : "Direct Expert QA"}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual & Posh Telemetry Cards */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Photo Frame with Refined Glass Accent */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-900/5 shadow-posh aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
                  alt="Student mastering professional curriculum"
                  fill
                  priority
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                
                {/* Subtle architectural vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

                {/* Micro Verified Live Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span>{isBn ? "সেশন সক্রিয় রয়েছে" : "Cohort 2026 In Progress"}</span>
                </div>
              </div>

              {/* Three Stacked Frosted Telemetry Cards */}
              <div className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                
                {/* Stat 1: Learners */}
                <div className="flex items-center gap-3.5 px-4 py-3 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-posh hover:-translate-x-1.5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {isBn ? "মোট শিক্ষার্থী" : "Active Learners"}
                    </div>
                    <div className="text-base font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
                      3,840+
                    </div>
                  </div>
                </div>

                {/* Stat 2: Courses */}
                <div className="flex items-center gap-3.5 px-4 py-3 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-posh hover:-translate-x-1.5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {isBn ? "কোর্স কারিকুলাম" : "Specialized Courses"}
                    </div>
                    <div className="text-base font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
                      52+
                    </div>
                  </div>
                </div>

                {/* Stat 3: Publications */}
                <div className="flex items-center gap-3.5 px-4 py-3 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-posh hover:-translate-x-1.5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] flex items-center justify-center font-bold">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {isBn ? "রিসার্চ ও ই-বুক" : "E-Books & Guides"}
                    </div>
                    <div className="text-base font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
                      64+
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
