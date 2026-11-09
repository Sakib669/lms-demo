"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { FAQS } from "@/data/mockData";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const { language } = useApp();
  const isBn = language === "bn";
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");
  const [isSectionOpen, setIsSectionOpen] = useState(true);

  return (
    <section className="py-8 bg-slate-50 dark:bg-[#071324] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Pill Bar matching screenshot */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
          
          {/* Header Toggle */}
          <button
            onClick={() => setIsSectionOpen(!isSectionOpen)}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)" : "Frequently Asked Questions (FAQ)"}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {isBn ? "কোর্স, ভর্তি ও পেমেন্ট সংক্রান্ত সাধারণ তথ্য" : "Quick answers regarding enrollment, certificates & access"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300">
              <span>{isSectionOpen ? (isBn ? "সংক্ষেপ করুন" : "Collapse") : (isBn ? "সকল প্রশ্ন দেখুন" : "Expand All")}</span>
              {isSectionOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </div>
          </button>

          {/* Collapsible Questions List */}
          {isSectionOpen && (
            <div className="border-t border-slate-100 dark:border-slate-800 p-4 sm:p-6 space-y-3 animate-in fade-in duration-200">
              {FAQS.map((faq) => {
                const isOpen = expandedId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="rounded-xl border border-slate-100 dark:border-slate-800/80 overflow-hidden bg-slate-50/50 dark:bg-slate-950/40"
                  >
                    <button
                      onClick={() => setExpandedId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:text-brand-orange transition-colors"
                    >
                      <span>{isBn ? faq.questionBn : faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand-orange" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                        {isBn ? faq.answerBn : faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
