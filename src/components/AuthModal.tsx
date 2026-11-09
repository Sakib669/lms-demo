"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { X, Lock, Mail, User as UserIcon, Sparkles } from "lucide-react";

export default function AuthModal() {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    authModalMode,
    setAuthModalMode,
    login,
    language,
  } = useApp();

  const isBn = language === "bn";
  const [name, setName] = useState("Sakib Al Hasan");
  const [email, setEmail] = useState("sakib@example.com");
  const [password, setPassword] = useState("password123");

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name || "Student", email);
  };

  const handleDemoLogin = () => {
    login("Tanvir Rahman", "tanvir.student@skillforge.com");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white dark:bg-[#0B0F19] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Tab Headers */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6">
          <button
            onClick={() => setAuthModalMode("login")}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
              authModalMode === "login"
                ? "border-[#0000F2] text-[#0000F2] dark:border-[#00D2FF] dark:text-[#00D2FF]"
                : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            {isBn ? "লগইন" : "Sign In"}
          </button>
          <button
            onClick={() => setAuthModalMode("signup")}
            className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-colors ${
              authModalMode === "signup"
                ? "border-[#0000F2] text-[#0000F2] dark:border-[#00D2FF] dark:text-[#00D2FF]"
                : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            {isBn ? "নতুন অ্যাকাউন্ট" : "Create Account"}
          </button>
        </div>

        {/* 1-Click Instant Demo Login Banner */}
        <div className="mb-6 p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 flex items-center justify-between gap-3">
          <div className="text-xs">
            <span className="font-bold text-slate-900 dark:text-white block">
              {isBn ? "দ্রুত টেস্ট করতে চান?" : "Instant Review Access"}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-[11px]">
              {isBn ? "১-ক্লিকে ডেমো স্টুডেন্ট হিসেবে প্রবেশ করুন" : "Preloaded demo account with enrolled courses"}
            </span>
          </div>
          <button
            type="button"
            onClick={handleDemoLogin}
            className="posh-button-cobalt !py-1.5 !px-3 !text-xs !rounded-xl shrink-0 flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isBn ? "ডেমো লগইন" : "Demo Access"}</span>
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authModalMode === "signup" && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isBn ? "আপনার পুরো নাম" : "Full Name"}
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tanvir Ahmed"
                  required
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30 focus:border-[#0000F2] text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              {isBn ? "ইমেইল অ্যাড্রেস" : "Email Address"}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30 focus:border-[#0000F2] text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              {isBn ? "পাসওয়ার্ড" : "Password"}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30 focus:border-[#0000F2] text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full posh-button-primary !py-3 !text-xs sm:!text-sm !rounded-xl mt-2"
          >
            {authModalMode === "login"
              ? isBn
                ? "লগইন করুন"
                : "Sign In"
              : isBn
              ? "অ্যাকাউন্ট তৈরি করুন"
              : "Create Account"}
          </button>
        </form>

        <p className="text-center text-[11px] text-slate-400 mt-4">
          {isBn
            ? "চালিয়ে যাওয়ার মাধ্যমে আপনি আমাদের শর্তাবলীতে সম্মতি জানাচ্ছেন।"
            : "Protected by enterprise encryption & privacy standards."}
        </p>

      </div>
    </div>
  );
}
