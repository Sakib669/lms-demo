"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { ShieldCheck, BookOpen, Users, Award, ArrowRight, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  const { language } = useApp();
  const isBn = language === "bn";

  return (
    <div className="py-14 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] text-xs font-semibold uppercase tracking-wider border border-blue-200/50">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{isBn ? "আমাদের লক্ষ্য ও দর্শন" : "Institutional Mission"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            {isBn ? "বাস্তব জীবনের জ্ঞান সবার কাছে পৌঁছে দেওয়া" : "Democratizing Pragmatic Real-World Fluency"}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
            {isBn
              ? "সাধারণ নাগরিক ও পেশাজীবীদের আইনি সচেতনতা, স্বাস্থ্য সুরক্ষা, অর্থনৈতিক সিদ্ধান্ত ও ক্যারিয়ার উৎকর্ষ সাধনে নিবেদিত আধুনিক এড-টেক প্রতিষ্ঠান।"
              : "An agile education collective empowering professionals with verified legal fluency, wellness science, and financial sovereignty."}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
              {isBn ? "আইনি সচেতনতা ও সুরক্ষা" : "Legal Sovereignty"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              {isBn
                ? "পারিবারিক আইন, চুক্তি যাচাই ও অধিকার বিষয়ে স্পষ্ট ব্যবহারিক জ্ঞান যা যে কোনো বাণিজ্যিক ও ব্যক্তিগত জটিলতা থেকে আপনাকে সুরক্ষিত রাখে।"
                : "Demystifying contracts, inheritance frameworks, and property titles to protect individuals from exploitation."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
              {isBn ? "শীর্ষ বিশেষজ্ঞদের নির্দেশনা" : "Vetted Practitioners"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              {isBn
                ? "সুপ্রিম কোর্টের অভিজ্ঞ আইনজীবী, সিএফএ চার্টারহোল্ডার ও পুষ্টিবিদদের দ্বারা তৈরি কোর্স কারিকুলাম।"
                : "Curriculums engineered exclusively by practicing advocates, financial auditors, and clinical nutritionists."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
              {isBn ? "সক্রিয় কমিউনিটি ও ডাউট সলভ" : "Active Peer Community"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              {isBn
                ? "লাইভ ইন্টারঅ্যাক্টিভ সেশন এবং পারস্পরিক প্রশ্নোত্তরের মাধ্যমে পূর্ণাঙ্গ প্র্যাকটিক্যাল শিখন অভিজ্ঞতা।"
                : "Live cohorts with dedicated case-study breakdowns to guarantee high concept retention."}
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-posh">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {isBn ? "আজই আপনার জ্ঞান ও ক্যারিয়ার যাত্রা শুরু করুন" : "Begin Your Mastery Journey Today"}
            </h3>
            <p className="text-xs text-slate-400 font-normal">
              {isBn ? "আমাদের যেকোনো কোর্সে ভর্তি হয়ে যুক্ত হোন সচেতন শিক্ষার্থীদের কমিউনিটিতে।" : "Join thousands of proactive practitioners building real-world competence."}
            </p>
          </div>
          <Link
            href="/courses"
            className="posh-button-primary !py-3 !px-6 !text-xs sm:!text-sm shrink-0 flex items-center gap-2"
          >
            <span>{isBn ? "কোর্সগুলো দেখুন" : "Explore Curriculums"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
