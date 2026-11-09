"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { WORKSHOP } from "@/data/mockData";
import { Play, ArrowRight, Video, MessageSquare, Award, CheckCircle2, Calendar, Clock, Radio } from "lucide-react";

export default function WorkshopSection() {
  const { language, setPreviewVideo, registerWorkshop, isWorkshopRegistered } = useApp();
  const isBn = language === "bn";
  const [justRegistered, setJustRegistered] = useState(false);

  const isRegistered = isWorkshopRegistered(WORKSHOP.id) || justRegistered;

  const handleRegister = () => {
    registerWorkshop(WORKSHOP.id);
    setJustRegistered(true);
  };

  return (
    <section className="py-14 sm:py-16 bg-[#F8FAFC] dark:bg-[#070B14] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Studio Console Container */}
        <div className="relative rounded-3xl bg-slate-950 text-white p-6 sm:p-8 lg:p-12 overflow-hidden border border-slate-800 shadow-posh-hover">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0000F2]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>● LIVE</span>
                <span className="text-slate-300 font-medium">{isBn ? "ইন্টারেক্টিভ মাস্টারক্লাস" : "Executive Live Cohort"}</span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                {isBn
                  ? "বিশেষজ্ঞদের সাথে সরাসরি যুক্ত হয়ে বাস্তব প্রশ্ন ও সমাধান নিন।"
                  : "Direct Cohort Access: Ask Tough Questions, Gain Real-Time Clarity."}
              </h3>

              {/* 3 Pill Features */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200">
                  <Video className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>{isBn ? "লাইভ ক্লাস" : "Live Streaming"}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isBn ? "প্রশ্নোত্তর সেশন" : "Direct Q&A"}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isBn ? "অংশগ্রহণ সনদ" : "Certificate"}</span>
                </div>
              </div>

              {/* View all sessions link */}
              <div className="pt-2">
                <Link
                  href="/workshops"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/40 text-xs sm:text-sm font-bold text-white hover:bg-white/5 transition-colors"
                >
                  <span>{isBn ? "সকল সেশনের ক্যালেন্ডার দেখুন" : "View Full Schedule"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Middle: Instructor Live Video Preview (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() =>
                  setPreviewVideo({
                    title: isBn ? WORKSHOP.titleBn : WORKSHOP.title,
                    videoUrl: WORKSHOP.videoPreviewUrl,
                  })
                }
                className="group relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 cursor-pointer shadow-xl hover:scale-[1.02] transition-transform duration-300"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Live Session Instructor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/25 transition-colors"></div>

                {/* Play Button Icon Overlay with Electric Cobalt Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                {/* Live Tag inside video */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white flex items-center gap-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>{isBn ? "ট্রেলার প্রিভিউ দেখুন" : "Watch Teaser"}</span>
                </div>
              </div>
            </div>

            {/* Right: Upcoming Workshop Card (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-[#0B0F19] rounded-2xl p-5 text-slate-900 dark:text-white shadow-xl space-y-3.5 border border-slate-200/80 dark:border-slate-800">
                
                {/* Date Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] text-xs font-bold border border-blue-200/50 dark:border-blue-900/50">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{isBn ? WORKSHOP.dateBn : WORKSHOP.date}</span>
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold text-slate-950 dark:text-white leading-snug">
                  {isBn ? WORKSHOP.titleBn : WORKSHOP.title}
                </h4>

                {/* Time & Instructor */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isBn ? WORKSHOP.timeBn : WORKSHOP.time}</span>
                </div>

                {/* Registration Button */}
                <button
                  onClick={handleRegister}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                    isRegistered
                      ? "bg-emerald-600 text-white"
                      : "bg-[#0000F2] hover:bg-[#0000D0] text-white shadow-[#0000F2]/25 active:scale-95"
                  }`}
                >
                  {isRegistered ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isBn ? "রেজিস্ট্রেশন সম্পন্ন!" : "Seat Confirmed"}</span>
                    </>
                  ) : (
                    <span>
                      {isBn ? "সিট কনফার্ম করুন (৳ ১৯৯)" : "Confirm Seat • ৳ 199"}
                    </span>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
