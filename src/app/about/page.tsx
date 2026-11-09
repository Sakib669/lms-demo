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
    <div className="py-14 bg-white dark:bg-[#060814] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{isBn ? "আমাদের লক্ষ্য ও উদ্দেশ্য" : "Our Mission & Vision"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {isBn ? "বাস্তব জীবনের জ্ঞান সবার কাছে পৌঁছে দেওয়া" : "Democratizing Pragmatic Real-World Knowledge"}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            {isBn
              ? "সাধারণ নাগরিকের আইনি সচেতনতা, স্বাস্থ্য সুরক্ষা, অর্থনৈতিক মুক্তি ও ক্যারিয়ার উৎকর্ষ সাধনে নিবেদিত একটি আধুনিক এড-টেক প্রতিষ্ঠান।"
              : "An agile education collective empowering individuals with legal literacy, wellness science, and financial sovereignty."}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {isBn ? "আইনি সচেতনতা ও সুরক্ষা" : "Legal Sovereignty"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {isBn
                ? "পারিবারিক আইন, চুক্তি যাচাই ও অধিকার বিষয়ে স্পষ্ট ব্যবহারিক জ্ঞান যা যে কোনো প্রতারণা থেকে আপনাকে সুরক্ষিত রাখে।"
                : "Demystifying contracts, inheritance frameworks, and property titles to eliminate exploitation."}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {isBn ? "শীর্ষ বিশেষজ্ঞদের নির্দেশনা" : "Vetted Practitioners"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {isBn
                ? "সুপ্রিম কোর্টের অভিজ্ঞ আইনজীবী, সিএফএ চার্টারহোল্ডার ও পুষ্টিবিদদের দ্বারা তৈরি কোর্স কারিকুলাম।"
                : "Curriculums engineered exclusively by practicing advocates, portfolio managers, and medical specialists."}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brand-orange flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {isBn ? "সক্রিয় কমিউনিটি ও ডাউট সলভ" : "Active Peer Community"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {isBn
                ? "লাইভ ইন্টারঅ্যাক্টিভ সেশন এবং পারস্পরিক প্রশ্নোত্তরের মাধ্যমে পূর্ণাঙ্গ শিখন অভিজ্ঞতা।"
                : "Live workshops with dedicated doubt-clearing sessions to guarantee concept retention."}
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0B1E36] to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black">
              {isBn ? "আজই আপনার জ্ঞান ও ক্যারিয়ার যাত্রা শুরু করুন" : "Begin Your Mastery Journey Today"}
            </h3>
            <p className="text-xs text-slate-400">
              {isBn ? "আমাদের যে কোনো কোর্সে ভর্তি হয়ে যুক্ত হোন শিক্ষার্থীদের সাথে।" : "Join thousands of proactive learners building a secure tomorrow."}
            </p>
          </div>
          <Link
            href="/courses"
            className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>{isBn ? "কোর্সগুলো দেখুন" : "Explore Courses"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
