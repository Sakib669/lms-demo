"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { WORKSHOP } from "@/data/mockData";
import {
  Calendar,
  Clock,
  Video,
  PlayCircle,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
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
    <div className="py-12 bg-slate-50/60 dark:bg-[#060814] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-black uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Live Interactive Sessions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {isBn ? "লাইভ ওয়ার্কশপ ও মাস্টারক্লাস" : "Live Masterclasses & Interactive Workshops"}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            {isBn
              ? "সরাসরি দেশের শীর্ষস্থানীয় বিশেষজ্ঞদের সাথে যুক্ত হয়ে প্রশ্নোত্তর ও বাস্তব সমাধান গ্রহণ করুন।"
              : "Engage live with industry veterans for direct doubt-clearing and strategic guidance."}
          </p>
        </div>

        {/* Featured Live Workshop Hero Card */}
        <div className="rounded-3xl bg-[#0B1E36] text-white p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-red-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>LIVE SESSION</span>
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{isBn ? WORKSHOP.dateBn : WORKSHOP.date}</span>
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{isBn ? WORKSHOP.timeBn : WORKSHOP.time}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
                {isBn ? WORKSHOP.titleBn : WORKSHOP.title}
              </h2>

              {/* Instructor */}
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-orange">
                  <Image
                    src={WORKSHOP.instructorAvatar}
                    alt={WORKSHOP.instructor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{WORKSHOP.instructor}</h4>
                  <p className="text-xs text-slate-400">{WORKSHOP.instructorRole}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-300">
                {WORKSHOP.featuresBn.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleRegister}
                  className={`px-8 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg transition-all ${
                    isConfirmed
                      ? "bg-emerald-600 text-white shadow-emerald-600/30"
                      : "bg-brand-orange hover:bg-brand-orangeHover text-white shadow-brand-orange/30 active:translate-y-0.5"
                  }`}
                >
                  {isConfirmed ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{isBn ? "সিট কনফার্ম হয়েছে!" : "Seat Confirmed!"}</span>
                    </>
                  ) : (
                    <>
                      <span>{isBn ? "রেজিস্ট্রেশন করুন (মাত্র ১৯৯ ৳)" : "Register for ৳ 199"}</span>
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
                  className="px-5 py-3.5 rounded-2xl border border-white/20 hover:bg-white/10 text-white font-bold text-xs flex items-center gap-2"
                >
                  <PlayCircle className="w-4 h-4 text-brand-orange" />
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
                className="relative aspect-video rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Live Session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 fill-white" />
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
