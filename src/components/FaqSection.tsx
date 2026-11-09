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
    <section className="py-12 bg-white dark:bg-[#060814] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Pill Bar */}
        <div className="bg-[#FAFAFD] dark:bg-[#0B0F19] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-subtle overflow-hidden">
          
          {/* Header Toggle */}
          <button
            onClick={() => setIsSectionOpen(!isSectionOpen)}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] flex items-center justify-center font-bold">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                  {isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)" : "Frequently Asked Questions (FAQ)"}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {isBn ? "কোর্স, ভর্তি, অ্যাক্সেস ও পেমেন্ট সংক্রান্ত তথ্য" : "Answers regarding certification, enrollment, and multi-device access"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>{isSectionOpen ? (isBn ? "সংক্ষেপ করুন" : "Collapse") : (isBn ? "সকল প্রশ্ন দেখুন" : "Expand All")}</span>
              {isSectionOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </div>
          </button>

          {/* Collapsible Questions List */}
          {isSectionOpen && (
            <div className="border-t border-slate-200/70 dark:border-slate-800 p-4 sm:p-6 space-y-3 animate-in fade-in duration-200">
              {FAQS.map((faq) => {
                const isOpen = expandedId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="rounded-xl border border-slate-200/60 dark:border-slate-800/90 overflow-hidden bg-white dark:bg-[#070B14]"
                  >
                    <button
                      onClick={() => setExpandedId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-200 hover:text-[#0000F2] dark:hover:text-[#00D2FF] transition-colors"
                    >
                      <span>{isBn ? faq.questionBn : faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#0000F2] dark:text-[#00D2FF]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3 font-normal">
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
