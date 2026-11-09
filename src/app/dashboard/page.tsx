"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { COURSES, WORKSHOP } from "@/data/mockData";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileText,
  PlayCircle,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  const {
    user,
    enrolledCourseIds,
    progress,
    registeredWorkshopIds,
    language,
    setIsAuthModalOpen,
  } = useApp();

  const isBn = language === "bn";

  // Filter enrolled courses
  const enrolledCourses = COURSES.filter((c) => enrolledCourseIds.includes(c.id));

  // Count total notes
  const totalNotesCount = Object.values(progress).reduce((acc, curr) => {
    return acc + Object.keys(curr.notes || {}).length;
  }, 0);

  return (
    <div className="py-12 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 shadow-subtle">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-mono font-extrabold text-xl flex items-center justify-center shadow-md">
              {user?.name ? user.name.charAt(0) : "S"}
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-[#0000F2] dark:text-[#00D2FF] uppercase tracking-wider block">
                {isBn ? "প্র্যাকটিশনার পোর্টাল" : "Practitioner Dashboard"}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {isBn ? "স্বাগতম," : "Welcome back,"} {user?.name || "Student"}
              </h1>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                {user?.email || "student@skillforge.com"} • LocalStorage Verified
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/courses"
              className="posh-button-secondary !py-2.5 !px-4 !text-xs !rounded-xl"
            >
              {isBn ? "নতুন কোর্স খুঁজুন" : "Browse Curriculums"}
            </Link>
          </div>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-2xl font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
              {enrolledCourses.length}
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-0.5">
              {isBn ? "এনরোল্ড কোর্স" : "Active Masterclasses"}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-2xl font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
              {Object.values(progress).filter((p) => p.progressPercent === 100).length}
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-0.5">
              {isBn ? "সম্পন্ন কোর্স" : "Certified Modules"}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-2xl font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
              {totalNotesCount}
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-0.5">
              {isBn ? "সংরক্ষিত নোটস" : "Personal Notes"}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-2xl font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">
              {registeredWorkshopIds.length}
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-0.5">
              {isBn ? "লাইভ ওয়ার্কশপ" : "Live Cohorts"}
            </div>
          </div>
        </div>

        {/* Section: My Enrolled Courses */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "আমার সক্রিয় কোর্সসমূহ" : "Active Masterclasses"}
            </h2>
            <span className="text-xs font-mono text-slate-400">
              {enrolledCourses.length} {isBn ? "টি কারিকুলাম" : "Curriculums"}
            </span>
          </div>

          {enrolledCourses.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-subtle">
              <GraduationCap className="w-12 h-12 text-slate-400 mx-auto" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {isBn ? "আপনি এখনও কোনো কোর্সে ভর্তি হননি।" : "No enrolled curriculums found."}
              </h4>
              <Link
                href="/courses"
                className="posh-button-primary inline-flex !py-2 !px-4 !text-xs !rounded-xl"
              >
                {isBn ? "কোর্সগুলো ব্রাউজ করুন" : "Explore Curriculums"}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((c) => {
                const prog = progress[c.id]?.progressPercent || 0;

                return (
                  <div
                    key={c.id}
                    className="flex flex-col justify-between bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-subtle hover:shadow-posh hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 mb-3.5">
                        <Image src={c.thumbnail} alt={c.title} fill className="object-cover" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-white text-[10px] font-mono font-bold">
                          {c.category}
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-slate-950 dark:text-white line-clamp-1 mb-1">
                        {isBn ? c.titleBn : c.title}
                      </h3>
                      <p className="text-xs text-slate-400 mb-3 font-normal">{c.instructor}</p>

                      {/* Progress bar */}
                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between text-xs font-mono font-semibold text-slate-500">
                          <span>{isBn ? "অগ্রগতি" : "Progress"}</span>
                          <span className="text-[#0000F2] dark:text-[#00D2FF] tabular-nums">{prog}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#0000F2] to-[#00D2FF] rounded-full transition-all duration-500"
                            style={{ width: `${prog}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/learn/${c.id}`}
                      className="w-full posh-button-primary !py-2.5 !text-xs !rounded-xl flex items-center justify-center gap-1.5"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>{isBn ? "ক্লাসে প্রবেশ করুন" : "Continue Module"}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Section: Live Workshops Registered */}
        {registeredWorkshopIds.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "রেজিস্টার্ড লাইভ সেশন" : "Upcoming Confirmed Cohorts"}
            </h2>
            <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-posh">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                  Seat Confirmed
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  {isBn ? WORKSHOP.titleBn : WORKSHOP.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {isBn ? WORKSHOP.dateBn : WORKSHOP.date} • {isBn ? WORKSHOP.timeBn : WORKSHOP.time}
                </p>
              </div>
              <Link
                href="/workshops"
                className="posh-button-cobalt !py-2.5 !px-5 !text-xs !rounded-xl shrink-0 flex items-center gap-1.5"
              >
                <span>{isBn ? "লাইভ রুম বিস্তারিত" : "Access Live Room"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
