"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { ArrowRight, Users, GraduationCap, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const { language } = useApp();
  const isBn = language === "bn";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 dark:from-slate-900 dark:via-[#071324] dark:to-slate-950 pt-8 pb-16 lg:py-20 border-b border-slate-100 dark:border-slate-800/80">
      {/* Subtle ambient lighting meshes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/20 dark:bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              {isBn ? "Learning for a Better Life • বাস্তবমুখী শিক্ষা" : "Learning for a Better Life • Practical Skills"}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.18] max-w-2xl">
              {isBn ? (
                <>
                  আপনার দৈনন্দিন জীবনকে <br className="hidden sm:inline" />
                  সুন্দর ও সহজ করার <br className="hidden sm:inline" />
                  <span className="text-brand-orange">বিশ্বস্ত সহযোগী।</span>
                </>
              ) : (
                <>
                  Your Trusted Partner to <br className="hidden sm:inline" />
                  Elevate and Simplify <br className="hidden sm:inline" />
                  <span className="text-brand-orange">Everyday Life Skills.</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {isBn
                ? "জীবনের প্রয়োজনীয় সকল গুরুত্বপূর্ণ বিষয়ে সহজ, বাস্তবসম্মত এবং নির্ভরযোগ্য শিক্ষা — যাতে আপনি আরও সচেতন, দক্ষ এবং আত্মবিশ্বাসী হতে পারেন।"
                : "Accessible, practical, and dependable education on all critical life domains — empowering you to become informed, skilled, and fiercely confident."}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-orange/25 active:translate-y-0.5 transition-all group"
              >
                <span>{isBn ? "কোর্সগুলো দেখুন" : "Explore Courses"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base border border-slate-200 dark:border-slate-700 active:translate-y-0.5 transition-all"
              >
                {isBn ? "আমাদের সম্পর্কে জানুন" : "About Us"}
              </Link>
            </div>

            {/* Quick trust metrics under buttons */}
            <div className="pt-2 flex items-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{isBn ? "আজীবন অ্যাক্সেস" : "Lifetime Access"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{isBn ? "ভেরিফায়েড সার্টিফিকেট" : "Verified Certificate"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{isBn ? "২৪/৭ সাপোর্ট" : "24/7 Expert Support"}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Stats */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Student Photo Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-slate-200/60 dark:shadow-black/50 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Student learning on laptop with coffee"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Three Floating Stat Cards (Stacked rightwards as in the screenshot) */}
              <div className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-20">
                
                {/* Stat 1: Learners */}
                <div className="flex items-center gap-3.5 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/40 hover:-translate-x-1.5 transition-transform">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {isBn ? "লার্নার্স" : "Learners"}
                    </div>
                    <div className="text-lg font-black text-slate-900 dark:text-white">
                      3.8K+
                    </div>
                  </div>
                </div>

                {/* Stat 2: Courses */}
                <div className="flex items-center gap-3.5 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/40 hover:-translate-x-1.5 transition-transform">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {isBn ? "কোর্স" : "Courses"}
                    </div>
                    <div className="text-lg font-black text-slate-900 dark:text-white">
                      50+
                    </div>
                  </div>
                </div>

                {/* Stat 3: E-Books */}
                <div className="flex items-center gap-3.5 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/40 hover:-translate-x-1.5 transition-transform">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-brand-orange flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {isBn ? "ই-বুক" : "E-Book"}
                    </div>
                    <div className="text-lg font-black text-slate-900 dark:text-white">
                      60+
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
