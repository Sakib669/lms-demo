"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { COURSES } from "@/data/mockData";
import {
  PlayCircle,
  CheckCircle2,
  Circle,
  Award,
  BookOpen,
  FileText,
  ChevronLeft,
  ChevronRight,
  Download,
  Save,
  Check,
  Sparkles,
} from "lucide-react";

export default function CourseLearningPage() {
  const params = useParams();
  const courseId = params.id as string;

  const {
    language,
    progress,
    toggleLessonComplete,
    saveLessonNote,
    getCourseProgress,
    enrollInCourse,
    isEnrolled,
  } = useApp();

  const isBn = language === "bn";
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  // Auto enroll if visiting player
  useEffect(() => {
    if (!isEnrolled(course.id)) {
      enrollInCourse(course.id);
    }
  }, [course.id, isEnrolled, enrollInCourse]);

  // First lesson as default active
  const firstLesson = course.syllabus[0]?.lessons[0];
  const [activeLessonId, setActiveLessonId] = useState<string>(firstLesson?.id || "c1-l1");
  const [activeTab, setActiveTab] = useState<"overview" | "notes" | "resources">("overview");
  const [noteText, setNoteText] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const courseProgressData = progress[course.id] || {
    courseId: course.id,
    completedLessonIds: [],
    progressPercent: 0,
    enrolledAt: new Date().toISOString(),
    notes: {},
  };

  // Find active lesson object
  let activeLesson = firstLesson;
  for (const section of course.syllabus) {
    const found = section.lessons.find((l) => l.id === activeLessonId);
    if (found) {
      activeLesson = found;
      break;
    }
  }

  // Load note for active lesson
  useEffect(() => {
    const savedNote = courseProgressData.notes?.[activeLessonId] || "";
    setNoteText(savedNote);
  }, [activeLessonId, courseProgressData.notes]);

  const handleSaveNote = () => {
    saveLessonNote(course.id, activeLessonId, noteText);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 1500);
  };

  const isCompleted = courseProgressData.completedLessonIds.includes(activeLessonId);
  const progressPercent = getCourseProgress(course.id);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      
      {/* Top Learning Bar */}
      <div className="h-14 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{isBn ? "কোর্স পেজে ফিরুন" : "Back to Course"}</span>
          </Link>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <h2 className="text-xs sm:text-sm font-bold text-slate-200 truncate max-w-sm hidden sm:block">
            {isBn ? course.titleBn : course.title}
          </h2>
        </div>

        {/* Progress Display */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[11px] font-bold text-slate-400 block">
              {progressPercent}% {isBn ? "সম্পন্ন" : "Completed"}
            </span>
          </div>
          <div className="w-24 sm:w-36 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-orange to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          {progressPercent === 100 && (
            <button
              onClick={() => setShowCertificate(true)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[10px] font-bold animate-bounce shadow-sm"
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isBn ? "সার্টিফিকেট" : "Certificate"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Video Player on Left, Syllabus Sidebar on Right */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* Left Column (8 cols): Video Player & Notes */}
        <div className="lg:col-span-8 flex flex-col overflow-y-auto">
          
          {/* HTML5 Video Player Container */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            <video
              key={activeLessonId}
              src={activeLesson?.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support HTML5 video.
            </video>
          </div>

          {/* Action Row Under Video */}
          <div className="p-4 sm:p-6 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                {isBn ? "বর্তমান লেকচার" : "Current Lesson"}
              </span>
              <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                {activeLesson?.title}
              </h3>
            </div>

            <button
              onClick={() => toggleLessonComplete(course.id, activeLessonId)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md ${
                isCompleted
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isBn ? "লেকচারটি সম্পন্ন হয়েছে" : "Completed"}</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-slate-400" />
                  <span>{isBn ? "সম্পন্ন হিসেবে চিহ্নিত করুন" : "Mark as Complete"}</span>
                </>
              )}
            </button>
          </div>

          {/* Tabs: Overview, Notes, Resources */}
          <div className="p-4 sm:p-6 flex-1 bg-slate-950 space-y-4">
            <div className="flex border-b border-slate-800 gap-4 text-sm font-bold">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === "overview" ? "border-brand-orange text-brand-orange" : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {isBn ? "লেকচার বিবরণ" : "Overview"}
              </button>
              <button
                onClick={() => setActiveTab("notes")}
                className={`pb-2 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === "notes" ? "border-brand-orange text-brand-orange" : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <span>{isBn ? "আমার নোটস (অটোসেভ)" : "My Notes"}</span>
                {noteText && <span className="w-2 h-2 rounded-full bg-brand-orange"></span>}
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === "resources" ? "border-brand-orange text-brand-orange" : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {isBn ? "রিসোর্স ও শিট" : "Resources"}
              </button>
            </div>

            {/* Tab: Overview */}
            {activeTab === "overview" && (
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
                <p>
                  {isBn
                    ? "এই লেকচারে আলোচিত মূল বিষয়বস্তু মনোযোগ দিয়ে শুনুন এবং প্রতিটি ধাপ বাস্তবায়ন করুন। কোনো প্রশ্ন বা অস্পষ্টতা থাকলে আমাদের লাইভ ডাউট সেশন বা ডিসকর্ড কমিউনিটিতে যুক্ত হতে পারেন।"
                    : "Pay careful attention to the operational steps outlined in this module. For in-depth clarification, bring your questions to our upcoming Live Workshop."}
                </p>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                  <span className="font-bold text-white block mb-1">
                    {isBn ? "প্রশিক্ষকের পরামর্শ:" : "Instructor Tip:"}
                  </span>
                  {isBn
                    ? "আইনি দলিল যাচাই করার পূর্বে অবশ্যই ভূমি রেকর্ড ও নামজারি খতিয়ানের সিল-স্বাক্ষর ভালোভাবে মিলিয়ে নিন।"
                    : "Always cross-verify mutation serial records and sub-registry stamps before executing any property conveyance."}
                </div>
              </div>
            )}

            {/* Tab: Personal Notes (LocalStorage) */}
            {activeTab === "notes" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{isBn ? "এই লেকচারের জন্য আপনার নিজস্ব নোট:" : "Your personal notes for this lesson:"}</span>
                  {noteSaved && (
                    <span className="text-emerald-400 flex items-center gap-1 font-bold">
                      <Check className="w-3.5 h-3.5" />
                      {isBn ? "সেভ হয়েছে!" : "Saved in LocalStorage"}
                    </span>
                  )}
                </div>
                <textarea
                  rows={5}
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder={isBn ? "লেকচার শুনতে শুনতে প্রয়োজনীয় পয়েন্টগুলো লিখে রাখুন (অটোমেটিক লোকাল স্টোরেজে জমা হবে)..." : "Type your notes here..."}
                  className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
                <button
                  onClick={handleSaveNote}
                  className="flex items-center gap-1.5 px-4 py-2 bg-brand-orange text-white text-xs font-bold rounded-xl hover:bg-brand-orangeHover shadow-sm"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isBn ? "নোট সেভ করুন" : "Save Note"}</span>
                </button>
              </div>
            )}

            {/* Tab: Resources */}
            {activeTab === "resources" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-orange" />
                    <span>{isBn ? "লেকচার হ্যান্ডআউট ও চেকলিস্ট (PDF)" : "Lecture Handout & Checklist (PDF)"}</span>
                  </div>
                  <button
                    onClick={() => alert(isBn ? "ডাউনলোড শুরু হচ্ছে..." : "Downloading handout...")}
                    className="flex items-center gap-1 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold"
                  >
                    <Download className="w-3 h-3" />
                    <span>{isBn ? "ডাউনলোড" : "Download"}</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Right Column (4 cols): Course Syllabus Checklist Sidebar */}
        <div className="lg:col-span-4 bg-slate-900 border-l border-slate-800 flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-slate-800 font-bold text-sm text-white flex items-center justify-between">
            <span>{isBn ? "কারিকুলাম সূচিপত্র" : "Course Content"}</span>
            <span className="text-xs text-slate-400">
              {courseProgressData.completedLessonIds.length} /{" "}
              {course.syllabus.reduce((acc, s) => acc + s.lessons.length, 0)}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {course.syllabus.map((section, sIdx) => (
              <div key={sIdx} className="space-y-1.5">
                <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLessonId;
                    const lessonCompleted = courseProgressData.completedLessonIds.includes(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                          isActive
                            ? "bg-brand-orange text-white shadow-sm"
                            : "hover:bg-slate-800/80 text-slate-300"
                        }`}
                        onClick={() => setActiveLessonId(lesson.id)}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLessonComplete(course.id, lesson.id);
                            }}
                            className="shrink-0"
                          >
                            {lessonCompleted ? (
                              <CheckCircle2 className={`w-4 h-4 ${isActive ? "text-white" : "text-emerald-400"}`} />
                            ) : (
                              <Circle className={`w-4 h-4 ${isActive ? "text-white/60" : "text-slate-600"}`} />
                            )}
                          </button>
                          <span className="truncate">{lesson.title}</span>
                        </div>
                        <span className={`text-[10px] font-mono shrink-0 ml-2 ${isActive ? "text-white/80" : "text-slate-500"}`}>
                          {lesson.duration}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Verified Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl p-8 border-4 border-amber-400 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                Certificate of Achievement
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                ভেরিফায়েড প্রফেশনাল সার্টিফিকেট
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                SkillForge.com • Certificate ID: SF-2026-{(Math.random() * 100000).toFixed(0)}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-lg mx-auto text-xs text-slate-700 leading-relaxed">
              সফলভাবে সম্পন্ন করার জন্য অভিনন্দন! আপনি <strong>{course.titleBn}</strong> কোর্সের সকল লেকচার ও প্র্যাকটিক্যাল গাইডলাইন ১০০% সম্পন্ন করেছেন।
            </div>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  alert(isBn ? "সার্টিফিকেট ডাউনলোড হচ্ছে..." : "Downloading PDF certificate...");
                  setShowCertificate(false);
                }}
                className="px-6 py-2.5 bg-brand-orange text-white font-bold text-xs rounded-xl shadow-md"
              >
                {isBn ? "ডাউনলোড করুন (PDF)" : "Download Certificate"}
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className="px-4 py-2.5 bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
              >
                {isBn ? "বন্ধ করুন" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
