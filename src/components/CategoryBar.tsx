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
    <section className="py-12 bg-white dark:bg-[#071324] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Section Heading */}
          <div className="lg:max-w-xs shrink-0">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {isBn ? "কোন বিষয়ে শিখতে চান?" : "What Do You Want to Learn?"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {isBn ? "আপনার প্রয়োজন অনুযায়ী বেছে নিন" : "Select according to your goals"}
            </p>
          </div>

          {/* 7 Category Badges in a Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 flex-1">
            {CATEGORIES.map((cat) => {
              const IconComponent = ICON_MAP[cat.iconName] || LayoutGrid;

              return (
                <Link
                  key={cat.id}
                  href={`/courses?category=${cat.id}`}
                  className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-orange/40 dark:hover:border-brand-orange/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 mb-2.5 shadow-sm"
                    style={{
                      backgroundColor: `${cat.color}15`,
                      color: cat.color,
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-orange transition-colors line-clamp-1">
                    {isBn ? cat.nameBn : cat.name}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 mt-0.5">
                    {cat.courseCount} {isBn ? "টি বিষয়" : "items"}
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
