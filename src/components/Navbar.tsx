"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  Search,
  ShoppingCart,
  User,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  GraduationCap,
  Layers,
  Sparkles,
  Command,
} from "lucide-react";
import { CATEGORIES } from "@/data/mockData";

export default function Navbar() {
  const pathname = usePathname();
  const {
    cart,
    setIsCartOpen,
    user,
    logout,
    setIsAuthModalOpen,
    setAuthModalMode,
    language,
    setLanguage,
    theme,
    toggleTheme,
    enrolledCourseIds,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isBn = language === "bn";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#060814]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]"
            : "bg-white/95 dark:bg-[#060814]/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            
            {/* Enterprise Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0000F2] via-[#1D4ED8] to-[#00D2FF] p-[1.5px] shadow-sm shadow-[#0000F2]/20 group-hover:shadow-md group-hover:shadow-[#0000F2]/30 transition-all">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                  <span className="font-mono text-base font-black tracking-tighter bg-gradient-to-r from-white via-slate-100 to-[#00D2FF] bg-clip-text text-transparent">
                    SF
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                    SkillForge
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] border border-blue-200/60 dark:border-blue-900/60 uppercase tracking-wider">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
                  {isBn ? "বাস্তব জ্ঞান • পেশাদার দক্ষতা" : "Executive Life Skills & Law"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                  pathname === "/"
                    ? "bg-slate-100 dark:bg-slate-800/80 text-slate-950 dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                {isBn ? "হোম" : "Home"}
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                  pathname === "/about"
                    ? "bg-slate-100 dark:bg-slate-800/80 text-slate-950 dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                {isBn ? "আমাদের লক্ষ্য" : "About"}
              </Link>

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <Link
                  href="/courses"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                    pathname.startsWith("/courses")
                      ? "bg-slate-100 dark:bg-slate-800/80 text-slate-950 dark:text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
                  }`}
                >
                  <span>{isBn ? "কোর্স সমূহ" : "Courses"}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </Link>

                {coursesDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white dark:bg-[#0B0F19] rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1.5">
                      {isBn ? "নির্বাচিত ক্যাটাগরি" : "Curated Disciplines"}
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/courses?category=${cat.id}`}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800 transition-colors"
                        onClick={() => setCoursesDropdownOpen(false)}
                      >
                        <span>{isBn ? cat.nameBn : cat.name}</span>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                          {cat.courseCount}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>
                    <Link
                      href="/courses"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-[#0000F2] dark:text-[#00D2FF] hover:bg-blue-50/60 dark:hover:bg-blue-950/30 transition-colors"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      {isBn ? "সকল কোর্স এক্সপ্লোর করুন" : "Browse All Curriculums"}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/books"
                className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                  pathname.startsWith("/books")
                    ? "bg-slate-100 dark:bg-slate-800/80 text-slate-950 dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                {isBn ? "ডিজিটাল বুকস" : "Publications"}
              </Link>

              <Link
                href="/bundles"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                  pathname === "/bundles"
                    ? "bg-slate-100 dark:bg-slate-800/80 text-slate-950 dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0000F2] dark:bg-[#00D2FF]"></span>
                <span>{isBn ? "মেগা বান্ডল" : "Master Bundle"}</span>
              </Link>

              <Link
                href="/workshops"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                  pathname.startsWith("/workshops")
                    ? "bg-slate-100 dark:bg-slate-800/80 text-slate-950 dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 rounded-md">
                  LIVE
                </span>
                <span>{isBn ? "লাইভ সেশন" : "Executive Live"}</span>
              </Link>

              <Link
                href="/blog"
                className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${
                  pathname.startsWith("/blog")
                    ? "bg-slate-100 dark:bg-slate-800/80 text-slate-950 dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                {isBn ? "জার্নাল" : "Journal"}
              </Link>
            </nav>

            {/* Right Action Suite */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Search Toggle with Command Shortcut */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/70 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px] font-medium">Search...</span>
                <span className="hidden md:inline-flex items-center text-[10px] font-mono px-1 py-0.2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-400">
                  ⌘K
                </span>
              </button>

              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(isBn ? "en" : "bn")}
                title="Switch Language"
                className="px-2.5 py-1.5 text-[11px] font-bold rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
              >
                {isBn ? "BN | EN" : "EN | BN"}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                title="Toggle Theme"
                aria-label="Toggle Theme"
                className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
                className="relative w-8 h-8 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0000F2] text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center shadow-sm">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Enrolled Courses Dashboard Shortcut */}
              {enrolledCourseIds.length > 0 && (
                <Link
                  href="/dashboard"
                  title="My Learning Dashboard"
                  className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] border border-blue-200/60 dark:border-blue-900/60 hover:bg-blue-100/60 transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{isBn ? "ড্যাশবোর্ড" : "Portal"}</span>
                  <span className="w-4 h-4 bg-[#0000F2] text-white rounded-full flex items-center justify-center text-[10px] font-mono font-bold">
                    {enrolledCourseIds.length}
                  </span>
                </Link>
              )}

              {/* Auth Buttons */}
              {user?.isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold flex items-center justify-center">
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 hidden sm:inline">
                      {user.name}
                    </span>
                  </Link>
                  <button
                    onClick={logout}
                    title="Logout"
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => {
                      setAuthModalMode("login");
                      setIsAuthModalOpen(true);
                    }}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    {isBn ? "লগইন" : "Sign In"}
                  </button>
                  <button
                    onClick={() => {
                      setAuthModalMode("signup");
                      setIsAuthModalOpen(true);
                    }}
                    className="posh-button-primary !py-1.5 !px-3.5 !text-xs !rounded-xl"
                  >
                    {isBn ? "শুরু করুন" : "Get Started"}
                  </button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-8 h-8 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Quick Search Drawer */}
          {searchOpen && (
            <div className="pb-4 pt-1 animate-in fade-in duration-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="relative max-w-xl mx-auto"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isBn
                      ? "কী বিষয়ে পারদর্শী হতে চান? যেমন: চুক্তি আইন, আয়কর, ডাটাবেস..."
                      : "Search skills, legal rights, nutrition, finance..."
                  }
                  className="w-full pl-11 pr-24 py-2.5 bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0000F2]/20 focus:border-[#0000F2] text-slate-900 dark:text-white placeholder:text-slate-400"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold rounded-xl transition-all"
                >
                  {isBn ? "খুঁজুন" : "Search"}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#060814]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5 animate-in slide-in-from-top-2 duration-150">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "হোম" : "Home"}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "আমাদের লক্ষ্য" : "About"}
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "কোর্স সমূহ" : "Courses"}
            </Link>
            <Link
              href="/books"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "ডিজিটাল বুকস" : "Publications"}
            </Link>
            <Link
              href="/bundles"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "মেগা অফার বান্ডল" : "Master Bundle"}
            </Link>
            <Link
              href="/workshops"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "লাইভ ওয়ার্কশপ" : "Executive Live"}
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "জার্নাল" : "Journal"}
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#0000F2] dark:text-[#00D2FF] bg-blue-50/70 dark:bg-blue-950/40"
            >
              {isBn ? "আমার শিক্ষা পোর্টাল" : "Student Dashboard"}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
