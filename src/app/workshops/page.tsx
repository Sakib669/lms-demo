"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { WORKSHOP } from "@/data/mockData";
import {
  Calendar,
  Clock,
  PlayCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function WorkshopsPage() {
  const { language, setPreviewVideo, registerWorkshop, isWorkshopRegistered } = useApp();
  const isBn = language === "bn";
  const [registered, setRegistered] = useState(false);

  const isConfirmed = isWorkshopRegistered(WORKSHOP.id) || registered;

  const handleRegister = () => {
    registerWorkshop(WORKSHOP.id);
    setRegistered(true);
  };

  return (
    <div className="py-12 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-red-500/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Live Interactive Sessions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {isBn ? "লাইভ ওয়ার্কশপ ও মাস্টারক্লাস" : "Executive Live Cohorts & Masterclasses"}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-normal">
            {isBn
              ? "সরাসরি দেশের শীর্ষস্থানীয় বিশেষজ্ঞদের সাথে যুক্ত হয়ে প্রশ্নোত্তর ও বাস্তব সমাধান গ্রহণ করুন।"
              : "Engage live with industry veterans for direct doubt-clearing, case study teardowns and strategic frameworks."}
          </p>
        </div>

        {/* Featured Live Workshop Hero Card */}
        <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-posh-hover overflow-hidden relative">
          
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0000F2]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-md bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>LIVE COHORT</span>
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>{isBn ? WORKSHOP.dateBn : WORKSHOP.date}</span>
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>{isBn ? WORKSHOP.timeBn : WORKSHOP.time}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
                {isBn ? WORKSHOP.titleBn : WORKSHOP.title}
              </h2>

              {/* Instructor */}
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-slate-900">
                  <Image
                    src={WORKSHOP.instructorAvatar}
                    alt={WORKSHOP.instructor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{WORKSHOP.instructor}</h4>
                  <p className="text-xs text-slate-400 font-normal">{WORKSHOP.instructorRole}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-normal text-slate-300">
                {WORKSHOP.featuresBn.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={handleRegister}
                  className={`px-7 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all ${
                    isConfirmed
                      ? "bg-emerald-600 text-white"
                      : "bg-[#0000F2] hover:bg-[#0000D0] text-white shadow-[#0000F2]/25 active:scale-95"
                  }`}
                >
                  {isConfirmed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isBn ? "সিট কনফার্ম হয়েছে!" : "Seat Confirmed!"}</span>
                    </>
                  ) : (
                    <>
                      <span>{isBn ? "রেজিস্ট্রেশন করুন (মাত্র ১৯৯ ৳)" : "Confirm Seat • ৳ 199"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    setPreviewVideo({
                      title: isBn ? WORKSHOP.titleBn : WORKSHOP.title,
                      videoUrl: WORKSHOP.videoPreviewUrl,
                    })
                  }
                  className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/5 text-white font-bold text-xs flex items-center gap-2 transition-colors"
                >
                  <PlayCircle className="w-4 h-4 text-[#00D2FF]" />
                  <span>{isBn ? "প্রিভিউ দেখুন" : "Watch Teaser"}</span>
                </button>
              </div>

            </div>

            {/* Right Video Mockup */}
            <div className="lg:col-span-5">
              <div
                onClick={() =>
                  setPreviewVideo({
                    title: isBn ? WORKSHOP.titleBn : WORKSHOP.title,
                    videoUrl: WORKSHOP.videoPreviewUrl,
                  })
                }
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/15 shadow-2xl group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Live Session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
