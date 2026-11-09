"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  BookOpen,
  Phone,
  Mail,
  Globe,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const { language } = useApp();
  const isBn = language === "bn";

  return (
    <footer className="bg-[#071527] text-white pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid matching screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center text-white shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                SkillForge<span className="text-brand-orange">.com</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 font-semibold tracking-wider">
              {isBn ? "জানুন • শিখুন • এগিয়ে যান" : "Know • Learn • Grow"}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-1">
              {isBn
                ? "বাস্তবসম্মত জ্ঞান ও পেশাদার দক্ষতা অর্জনের নির্ভরযোগ্য ডিজিটাল প্ল্যাটফর্ম।"
                : "The dependable digital platform for real-world life skills, legal fluency, and executive mastery."}
            </p>
          </div>

          {/* Col 2: Company Affiliation (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {isBn ? "প্রতিষ্ঠান পরিচিতি" : "Affiliation"}
            </h4>
            <div className="text-xs text-slate-400 leading-relaxed space-y-1.5">
              <p className="flex items-center gap-1.5 font-bold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Hermes Global EdTech Ltd.</span>
              </p>
              <p>{isBn ? "আইনগত পরামর্শ ও ডিজিটাল জ্ঞান বিস্তার প্রকল্পের একটি উদ্যোগ।" : "An initiative for legal empowerment & practical skill dissemination."}</p>
            </div>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {isBn ? "যোগাযোগের মাধ্যম" : "Contact Us"}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>+880 1711-000000</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-orange" />
                <span>support@skillforge.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-3.5 h-3.5 text-brand-orange" />
                <span>www.skillforge.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Social Icons (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {isBn ? "আমাদের সাথে থাকুন" : "Follow Us"}
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-blue-700/20 text-blue-400 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 SkillForge.com. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
