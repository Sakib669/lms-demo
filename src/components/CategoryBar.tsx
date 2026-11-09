"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { CATEGORIES } from "@/data/mockData";
import {
  Scale,
  HeartPulse,
  Coins,
  Sprout,
  Briefcase,
  ShieldCheck,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Scale,
  HeartPulse,
  Coins,
  Sprout,
  Briefcase,
  ShieldCheck,
  LayoutGrid,
};

export default function CategoryBar() {
  const { language } = useApp();
  const isBn = language === "bn";

  return (
    <section className="py-12 bg-white dark:bg-[#060814] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip with View All link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-[#0000F2] dark:text-[#00D2FF] mb-1">
              {isBn ? "জ্ঞান অন্বেষণ" : "Disciplines & Tracks"}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "প্রয়োজনীয় ক্ষেত্রসমূহ বেছে নিন" : "Curated Fields of Specialization"}
            </h2>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors group self-start sm:self-auto"
          >
            <span>{isBn ? "সকল ক্যাটাগরি" : "All Specializations"}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 7 Category Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-3.5">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.iconName] || LayoutGrid;

            return (
              <Link
                key={cat.id}
                href={`/courses?category=${cat.id}`}
                className="group relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-[#FAFAFD] dark:bg-[#0B0F19] hover:bg-white dark:hover:bg-[#0E1422] hover:border-[#0000F2]/40 dark:hover:border-[#00D2FF]/40 shadow-subtle hover:shadow-posh hover:-translate-y-1 transition-all duration-300 text-center"
              >
                {/* Icon Container with subtle glass depth */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-2.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 group-hover:text-[#0000F2] dark:group-hover:text-[#00D2FF] border border-slate-200/50 dark:border-slate-700/50">
                  <IconComponent className="w-5 h-5 transition-transform" />
                </div>

                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-[#0000F2] dark:group-hover:text-[#00D2FF] transition-colors line-clamp-1">
                  {isBn ? cat.nameBn : cat.name}
                </span>

                <span className="text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 mt-0.5">
                  {cat.courseCount} {isBn ? "কোর্স" : "courses"}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
