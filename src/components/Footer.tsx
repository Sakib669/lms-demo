"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  Phone,
  Mail,
  Globe,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Send,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function Footer() {
  const { language } = useApp();
  const isBn = language === "bn";

  return (
    <footer className="bg-slate-950 text-white pt-14 pb-8 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Methodology (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0000F2] flex items-center justify-center text-white font-mono font-black text-sm">
                SF
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                SkillForge<span className="text-[#00D2FF]">.com</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 font-medium">
              {isBn ? "বাস্তব জ্ঞান • পেশাদার দক্ষতা • ক্যারিয়ার অগ্রগতি" : "Practical Life Skills, Law & Executive Fluency"}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-1">
              {isBn
                ? "বাস্তবসম্মত জ্ঞান ও পেশাদার দক্ষতা অর্জনের জন্য নির্ভরযোগ্য ডিজিটাল এডটেক প্ল্যাটফর্ম।"
                : "The dependable digital platform for real-world life skills, legal compliance, and executive mastery."}
            </p>

            {/* Operational Status Badge */}
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational • 24ms</span>
            </div>
          </div>

          {/* Col 2: Institutional Affiliation (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              {isBn ? "প্রাতিষ্ঠানিক পরিচয়" : "Affiliation"}
            </h4>
            <div className="text-xs text-slate-400 leading-relaxed space-y-1.5">
              <p className="flex items-center gap-1.5 font-bold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                <span>Hermes Global EdTech Ltd.</span>
              </p>
              <p>
                {isBn
                  ? "বাস্তব জ্ঞান ও আইনগত সচেতনতা বিস্তার প্রকল্পের একটি স্বাধীন ডিজিটাল উদ্যোগ।"
                  : "An initiative for executive empowerment, legal clarity, and career advancement."}
              </p>
            </div>
          </div>

          {/* Col 3: Direct Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              {isBn ? "যোগাযোগ ও সহায়তা" : "Direct Inquiries"}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span className="font-mono">+880 1711-000000</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span className="font-mono">support@skillforge.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span className="font-mono">https://skillforge.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Channels & Community (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              {isBn ? "সোশ্যাল চ্যানেল" : "Network"}
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 SkillForge.com. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Privacy Shield
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
