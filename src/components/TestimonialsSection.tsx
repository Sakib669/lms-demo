"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { TESTIMONIALS } from "@/data/mockData";
import { Testimonial } from "@/types";
import { Star, ArrowRight, MessageSquarePlus, X, Check } from "lucide-react";

export default function TestimonialsSection() {
  const { language, user, setIsAuthModalOpen } = useApp();
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
      role: "SkillForge Learner",
      location: newLocation,
      avatar: user?.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(authorName)}`,
      quote: newQuote,
      quoteBn: newQuote,
      rating: newRating,
      courseTitle: "General Feedback",
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
    <section className="py-14 bg-slate-50/70 dark:bg-[#060e1a] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {isBn ? "আমাদের শিক্ষার্থীদের মতামত" : "Student Testimonials & Reviews"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {isBn ? "যারা শিখেছেন, উপকৃত হয়েছেন" : "Real feedback from real professionals"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>{isBn ? "মতামত দিন" : "Add Review"}</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("testimonials-grid");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange hover:text-brand-orangeHover transition-colors group"
            >
              <span>{isBn ? "সকল রিভিউ দেখুন" : "View All"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-card hover:shadow-card-hover transition-all"
            >
              {/* Quote text */}
              <div className="mb-4">
                <blockquote className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  “{isBn ? item.quoteBn : item.quote}”
                </blockquote>
              </div>

              {/* Bottom user profile & rating */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Add Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">
              {isBn ? "আপনার মতামত জানান" : "Share Your Experience"}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {isBn ? "আপনার মূল্যবান রিভিউ আমাদের অন্যদের অনুপ্রাণিত করবে।" : "Help other learners make informed decisions."}
            </p>

            {submitted ? (
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {isBn ? "ধন্যবাদ! আপনার রিভিউ সেভ হয়েছে।" : "Thank you! Review saved."}
                </div>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {isBn ? "রেটিং" : "Rating"}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300 dark:text-slate-700"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {isBn ? "আপনার শহর / লোকেশন" : "Location"}
                  </label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g. Dhaka, Chittagong, Sylhet"
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {isBn ? "আপনার অভিজ্ঞতা" : "Your Review"}
                  </label>
                  <textarea
                    rows={3}
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    placeholder={isBn ? "কোর্স বা ই-বুকটি আপনার কীভাবে সাহায্য করেছে লিখুন..." : "Write your thoughts..."}
                    required
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  {isBn ? "রিভিউ পোস্ট করুন" : "Post Review"}
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
