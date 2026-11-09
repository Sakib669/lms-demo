"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { WORKSHOP } from "@/data/mockData";
import { Play, ArrowRight, Video, MessageSquare, Award, CheckCircle2, Calendar, Clock } from "lucide-react";

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
    <section className="py-14 bg-white dark:bg-[#071324] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Midnight Container matching screenshot */}
        <div className="relative rounded-3xl bg-[#0B1E36] text-white p-6 sm:p-8 lg:p-12 overflow-hidden shadow-2xl">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content (4 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-black tracking-wide">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>● LIVE</span>
                <span className="text-white/80">Workshop & Live Session</span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                {isBn
                  ? "বিশেষজ্ঞদের সাথে সরাসরি শিখুন, প্রশ্ন করুন, সমাধান নিন।"
                  : "Learn Directly from Experts, Ask Live Questions, and Solve Challenges."}
              </h3>

              {/* 3 Pill Features */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-xs font-semibold text-slate-200">
                  <Video className="w-3.5 h-3.5 text-blue-400" />
                  <span>{isBn ? "লাইভ ক্লাস" : "Live Class"}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-xs font-semibold text-slate-200">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isBn ? "ডাউট সলভ" : "Doubt Clearing"}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-xs font-semibold text-slate-200">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isBn ? "সার্টিফিকেট" : "Certificate"}</span>
                </div>
              </div>

              {/* View all sessions link */}
              <div className="pt-2">
                <Link
                  href="/workshops"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/50 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
                >
                  <span>{isBn ? "সকল সেশন দেখুন" : "View All Sessions"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Middle: Instructor Live Video Preview Card (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() =>
                  setPreviewVideo({
                    title: isBn ? WORKSHOP.titleBn : WORKSHOP.title,
                    videoUrl: WORKSHOP.videoPreviewUrl,
                  })
                }
                className="group relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/20 cursor-pointer shadow-xl hover:scale-102 transition-transform"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Live Session Instructor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/25 transition-colors"></div>

                {/* Play Button Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/40 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Live Tag inside video */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>{isBn ? "লাইভ প্রিভিউ দেখুন" : "Watch Preview"}</span>
                </div>
              </div>
            </div>

            {/* Right: Upcoming Workshop Card (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-5 text-slate-900 shadow-xl space-y-3">
                
                {/* Date Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 text-brand-orange text-xs font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{isBn ? WORKSHOP.dateBn : WORKSHOP.date}</span>
                </div>

                {/* Title */}
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {isBn ? WORKSHOP.titleBn : WORKSHOP.title}
                </h4>

                {/* Time & Instructor */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{isBn ? WORKSHOP.timeBn : WORKSHOP.time}</span>
                </div>

                {/* Registration Button */}
                <button
                  onClick={handleRegister}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md ${
                    isRegistered
                      ? "bg-emerald-600 text-white shadow-emerald-600/20"
                      : "bg-brand-orange hover:bg-brand-orangeHover text-white shadow-brand-orange/25 active:translate-y-0.5"
                  }`}
                >
                  {isRegistered ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isBn ? "রেজিস্ট্রেশন সম্পন্ন!" : "Seat Confirmed!"}</span>
                    </>
                  ) : (
                    <span>
                      {isBn ? "রেজিস্ট্রেশন করুন, মাত্র ১৯৯ টাকা" : "Register Now for ৳ 199"}
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
