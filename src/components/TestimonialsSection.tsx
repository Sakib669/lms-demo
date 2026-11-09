"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { TESTIMONIALS } from "@/data/mockData";
import { Testimonial } from "@/types";
import { Star, ArrowRight, MessageSquarePlus, X, Check, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  const { language, user } = useApp();
  const isBn = language === "bn";

  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [newQuote, setNewQuote] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newLocation, setNewLocation] = useState("Dhaka");
  const [submitted, setSubmitted] = useState(false);

  // Load custom reviews from LocalStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sf_custom_reviews");
      if (stored) {
        const parsed = JSON.parse(stored);
        setReviews([...parsed, ...TESTIMONIALS]);
      }
    } catch {}
  }, []);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuote.trim()) return;

    const authorName = user?.name || "Verified Student";
    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      name: authorName,
      role: "SkillForge Professional",
      location: newLocation,
      avatar: user?.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(authorName)}`,
      quote: newQuote,
      quoteBn: newQuote,
      rating: newRating,
      courseTitle: "Verified Feedback",
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    try {
      const existingStored = JSON.parse(localStorage.getItem("sf_custom_reviews") || "[]");
      localStorage.setItem("sf_custom_reviews", JSON.stringify([newRev, ...existingStored]));
    } catch {}

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setNewQuote("");
    }, 1200);
  };

  return (
    <section className="py-14 sm:py-16 bg-[#FAFAFD] dark:bg-[#060814] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9">
          <div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-[#0000F2] dark:text-[#00D2FF] mb-1">
              {isBn ? "প্র্যাকটিশনারদের মতামত" : "Executive Validation"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {isBn ? "শিক্ষার্থীদের বাস্তব মূল্যায়ন ও সাফল্য" : "Verified Learner Experiences"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal">
              {isBn ? "কর্পোরেট কর্মকর্তা, আইনজীবী ও উদ্যোক্তাদের বাস্তব অভিজ্ঞতা" : "Testimonials from corporate executives, attorneys, and founders"}
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="posh-button-secondary !py-2 !px-3.5 !text-xs !rounded-xl"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#0000F2]" />
              <span>{isBn ? "মতামত দিন" : "Submit Review"}</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("testimonials-grid");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors group"
            >
              <span>{isBn ? "সব রিভিউ" : "All Reviews"}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-subtle hover:shadow-posh hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote text */}
              <div className="mb-5">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  “{isBn ? item.quoteBn : item.quote}”
                </blockquote>
              </div>

              {/* Bottom user profile */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200/80 dark:border-slate-700 bg-slate-100">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-950 dark:text-white">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {item.role || item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Add Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-md bg-white dark:bg-[#0B0F19] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-1">
              {isBn ? "আপনার মতামত শেয়ার করুন" : "Share Your Feedback"}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {isBn ? "আপনার অভিজ্ঞতা অন্যান্য শিক্ষার্থীদের সঠিক সিদ্ধান্ত নিতে সহায়তা করবে।" : "Help other professionals evaluate curriculum depth and practical utility."}
            </p>

            {submitted ? (
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {isBn ? "ধন্যবাদ! আপনার রিভিউ সফলভাবে সংরক্ষিত হয়েছে।" : "Thank you! Review saved successfully."}
                </div>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {isBn ? "রেটিং" : "Rating"}
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= newRating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-200 dark:text-slate-800"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {isBn ? "আপনার শহর / কর্মক্ষেত্র" : "Location / Organization"}
                  </label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g. Dhaka, Legal Officer, Senior Developer"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30 focus:border-[#0000F2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {isBn ? "আপনার অভিজ্ঞতা" : "Your Review"}
                  </label>
                  <textarea
                    rows={3}
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    placeholder={isBn ? "কোর্স বা ই-বুকটি আপনার ক্যারিয়ার বা জীবনে কীভাবে সাহায্য করেছে লিখুন..." : "Describe the practical applicability..."}
                    required
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30 focus:border-[#0000F2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full posh-button-primary !py-2.5 !rounded-xl"
                >
                  {isBn ? "রিভিউ পোস্ট করুন" : "Publish Review"}
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
