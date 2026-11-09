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
    <div className="py-12 bg-slate-50/60 dark:bg-[#060814] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-orange to-amber-500 text-white font-black text-2xl flex items-center justify-center shadow-md shadow-brand-orange/20">
              {user?.name ? user.name.charAt(0) : "S"}
            </div>
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                {isBn ? "শিক্ষার্থী ড্যাশবোর্ড" : "Student Dashboard"}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {isBn ? "স্বাগতম," : "Welcome,"} {user?.name || "Student"}
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                {user?.email || "student@skillforge.com"} • LocalStorage Synced
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/courses"
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
            >
              {isBn ? "নতুন কোর্স খুঁজুন" : "Browse Courses"}
            </Link>
          </div>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {enrolledCourses.length}
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-0.5">
              {isBn ? "এনরোল্ড কোর্স" : "Enrolled Courses"}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {Object.values(progress).filter((p) => p.progressPercent === 100).length}
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-0.5">
              {isBn ? "সম্পন্ন কোর্স" : "Completed Courses"}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-brand-orange flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {totalNotesCount}
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-0.5">
              {isBn ? "সংরক্ষিত নোটস" : "Saved Notes"}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {registeredWorkshopIds.length}
            </div>
            <div className="text-xs font-semibold text-slate-400 mt-0.5">
              {isBn ? "লাইভ ওয়ার্কশপ" : "Live Workshops"}
            </div>
          </div>
        </div>

        {/* Section: My Enrolled Courses */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              {isBn ? "আমার সক্রিয় কোর্সসমূহ" : "My Active Courses"}
            </h2>
            <span className="text-xs text-slate-400 font-bold">
              {enrolledCourses.length} {isBn ? "টি কোর্স" : "Courses"}
            </span>
          </div>

          {enrolledCourses.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
              <GraduationCap className="w-12 h-12 text-slate-400 mx-auto" />
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {isBn ? "আপনি এখনও কোনো কোর্সে ভর্তি হননি।" : "You have not enrolled in any course yet."}
              </h4>
              <Link
                href="/courses"
                className="inline-block px-4 py-2 bg-brand-orange text-white text-xs font-bold rounded-xl"
              >
                {isBn ? "কোর্সগুলো ব্রাউজ করুন" : "Explore Courses"}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((c) => {
                const prog = progress[c.id]?.progressPercent || 0;

                return (
                  <div
                    key={c.id}
                    className="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-card hover:shadow-card-hover transition-all"
                  >
                    <div>
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-200 mb-3.5">
                        <Image src={c.thumbnail} alt={c.title} fill className="object-cover" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold">
                          {c.category}
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 mb-1">
                        {isBn ? c.titleBn : c.title}
                      </h3>
                      <p className="text-xs text-slate-400 mb-3">{c.instructor}</p>

                      {/* Progress bar */}
                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between text-xs font-bold text-slate-500">
                          <span>{isBn ? "অগ্রগতি" : "Progress"}</span>
                          <span className="text-brand-orange">{prog}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-orange rounded-full transition-all duration-500"
                            style={{ width: `${prog}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/learn/${c.id}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-brand-orange/20"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>{isBn ? "পড়া চালিয়ে যান" : "Continue Learning"}</span>
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
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              {isBn ? "রেজিস্টার্ড লাইভ সেশন" : "Registered Live Sessions"}
            </h2>
            <div className="p-6 rounded-3xl bg-[#0B1E36] text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-bold uppercase">
                  Seat Confirmed
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  {isBn ? WORKSHOP.titleBn : WORKSHOP.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {isBn ? WORKSHOP.dateBn : WORKSHOP.date} • {isBn ? WORKSHOP.timeBn : WORKSHOP.time}
                </p>
              </div>
              <Link
                href="/workshops"
                className="px-5 py-2.5 bg-brand-orange text-white font-bold text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1.5"
              >
                <span>{isBn ? "লাইভ রুম লিঙ্ক" : "Join Room Link"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
