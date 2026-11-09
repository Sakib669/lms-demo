"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { COURSES } from "@/data/mockData";
import {
  Star,
  CheckCircle2,
  Clock,
  BookOpen,
  Award,
  Globe,
  PlayCircle,
  ShoppingCart,
  Check,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;

  const { language, addToCart, cart, enrolledCourseIds, enrollInCourse, setPreviewVideo } = useApp();
  const isBn = language === "bn";

  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];
  const isEnrolled = enrolledCourseIds.includes(course.id);
  const isInCart = cart.some((i) => i.id === course.id);

  const [openSectionIndex, setOpenSectionIndex] = useState<number>(0);

  const handleEnrollNow = () => {
    enrollInCourse(course.id);
    router.push(`/learn/${course.id}`);
  };

  return (
    <div className="py-10 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {isBn ? "হোম" : "Home"}
          </Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {isBn ? "কোর্স" : "Courses"}
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-medium truncate max-w-xs">
            {isBn ? course.titleBn : course.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (8 cols): Course Info & Syllabus */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header info */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] border border-blue-200/50 text-xs font-bold uppercase tracking-wider">
                {isBn ? course.categoryBn : course.category}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-snug">
                {isBn ? course.titleBn : course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {isBn ? course.descriptionBn : course.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 pt-3 border-t border-slate-200/70 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-mono font-bold text-slate-950 dark:text-white tabular-nums">{course.rating}</span>
                  <span className="tabular-nums">({course.reviewsCount} {isBn ? "রিভিউ" : "reviews"})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>{course.lessonsCount} {isBn ? "টি লেকচার" : "lessons"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF]" />
                  <span>{isBn ? "সনদপত্র অন্তর্ভুক্ত" : "Accredited Certificate"}</span>
                </div>
              </div>
            </div>

            {/* Instructor Bio Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 flex items-center gap-4 shadow-subtle">
              <div className="w-13 h-13 rounded-xl bg-slate-950 text-white font-mono font-bold text-base flex items-center justify-center shrink-0">
                {course.instructor.charAt(0)}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  {isBn ? "কোর্স প্রশিক্ষক" : "Course Instructor"}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                  {course.instructor}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                  {course.instructorRole}
                </p>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 shadow-subtle space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                {isBn ? "এই কারিকুলাম থেকে আপনি কী অর্জন করবেন?" : "Core Competencies Mastered"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-normal text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>{isBn ? "বাস্তব জীবনের যাবতীয় আইনি ও নীতিগত অধিকার" : "Real-world legal rights and civic protections"}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>{isBn ? "দলিল, চুক্তি ও ব্যাংক ডকুমেন্টেশন চেকলিস্ট" : "Deed verification and commercial contract checklists"}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>{isBn ? "প্রতারণা ও বাণিজ্যিক বিরোধ এড়ানোর বাস্তব কৌশল" : "Mitigating financial, estate and contract fraud"}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>{isBn ? "ভেরিফায়েড সার্টিফিকেট ও আজীবন ভিডিও অ্যাক্সেস" : "Verified credential & perpetual syllabus updates"}</span>
                </div>
              </div>
            </div>

            {/* Curriculum / Syllabus Accordion */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                  {isBn ? "কোর্স কারিকুলাম ও লেকচার সূচি" : "Curriculum Modules"}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {course.lessonsCount} {isBn ? "টি লেকচার" : "Lectures"}
                </span>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((section, idx) => {
                  const isOpen = openSectionIndex === idx;

                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0B0F19] overflow-hidden shadow-subtle"
                    >
                      <button
                        onClick={() => setOpenSectionIndex(isOpen ? -1 : idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {section.title}
                          </h4>
                          <span className="text-xs font-mono text-slate-400">
                            {section.lessons.length} {isBn ? "টি লেকচার" : "lessons"} • {section.duration}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? "rotate-180 text-[#0000F2] dark:text-[#00D2FF]" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-slate-100 dark:border-slate-800/80 p-2 divide-y divide-slate-100 dark:divide-slate-800/80">
                          {section.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="p-3 flex items-center justify-between rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <PlayCircle className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF] shrink-0" />
                                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                {lesson.freePreview && (
                                  <button
                                    onClick={() =>
                                      setPreviewVideo({
                                        title: lesson.title,
                                        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                                      })
                                    }
                                    className="px-2 py-0.5 rounded text-[10px] font-bold text-[#0000F2] dark:text-[#00D2FF] bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100"
                                  >
                                    {isBn ? "প্রিভিউ" : "Preview"}
                                  </button>
                                )}
                                <span className="text-xs text-slate-400 font-mono tabular-nums">
                                  {lesson.duration}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Checkout & Video Card */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/80 dark:border-slate-800 p-5 shadow-posh space-y-5">
              
              {/* Video Preview Box */}
              <div
                onClick={() =>
                  setPreviewVideo({
                    title: isBn ? course.titleBn : course.title,
                    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                  })
                }
                className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 group cursor-pointer shadow-md"
              >
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 backdrop-blur-sm text-[10px] font-bold text-white rounded">
                  {isBn ? "কোর্স প্রিভিউ দেখুন" : "Preview Teaser"}
                </div>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-950 dark:text-white tabular-nums">৳ {course.price}</span>
                  <span className="text-xs font-mono text-slate-400 line-through tabular-nums">৳ {course.originalPrice}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 text-xs font-mono font-bold">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% {isBn ? "ছাড়" : "OFF"}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                {isEnrolled ? (
                  <Link
                    href={`/learn/${course.id}`}
                    className="w-full posh-button-cobalt !py-3.5 !rounded-xl !text-sm flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>{isBn ? "ক্লাসরুমে প্রবেশ করুন" : "Open Classroom"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={handleEnrollNow}
                      className="w-full posh-button-primary !py-3.5 !rounded-xl !text-sm flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>{isBn ? "এখনই ভর্তি হন" : "Enroll Directly"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() =>
                        addToCart({
                          id: course.id,
                          type: "course",
                          title: course.title,
                          titleBn: course.titleBn,
                          price: course.price,
                          originalPrice: course.originalPrice,
                          thumbnail: course.thumbnail,
                        })
                      }
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition-all ${
                        isInCart
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-600"
                          : "posh-button-secondary"
                      }`}
                    >
                      {isInCart ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>{isBn ? "কার্টে যুক্ত রয়েছে" : "Item in Cart"}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>{isBn ? "কার্টে যোগ করুন" : "Add to Cart"}</span>
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>

              {/* Guarantees */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-500 font-normal">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>{isBn ? "৭ দিনের মানি-ব্যাক গ্যারান্টি" : "7-Day Quality Guarantee"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0000F2] dark:text-[#00D2FF]" />
                  <span>{isBn ? "যেকোনো ডিভাইস থেকে আজীবন অ্যাক্সেস" : "Perpetual Multi-Device Access"}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
