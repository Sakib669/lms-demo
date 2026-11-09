"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  Search,
  ShoppingCart,
  User,
  LogOut,
  BookOpen,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  GraduationCap,
  Package,
  Layers,
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

  const isBn = language === "bn";

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#071324]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center text-white shadow-md shadow-brand-orange/25 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    SkillForge<span className="text-brand-orange">.com</span>
                  </span>
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                  {isBn ? "জানুন • শিখুন • এগিয়ে যান" : "Know • Learn • Grow"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/"
                    ? "text-brand-orange font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange"
                }`}
              >
                {isBn ? "হোম" : "Home"}
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/about"
                    ? "text-brand-orange font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange"
                }`}
              >
                {isBn ? "আমাদের সম্পর্কে" : "About Us"}
              </Link>

              {/* Courses with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <Link
                  href="/courses"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    pathname.startsWith("/courses")
                      ? "text-brand-orange font-bold"
                      : "text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange"
                  }`}
                >
                  {isBn ? "কোর্স সমূহ" : "Courses"}
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                {coursesDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                      {isBn ? "ক্যাটাগরি" : "Categories"}
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/courses?category=${cat.id}`}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        onClick={() => setCoursesDropdownOpen(false)}
                      >
                        <span>{isBn ? cat.nameBn : cat.name}</span>
                        <span className="text-xs text-slate-400">{cat.courseCount}</span>
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>
                    <Link
                      href="/courses"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-brand-orange hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      {isBn ? "সকল কোর্স এক্সপ্লোর করুন" : "Explore All Courses"}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/books"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/books")
                    ? "text-brand-orange font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange"
                }`}
              >
                {isBn ? "ই-বুক" : "Books"}
              </Link>

              <Link
                href="/bundles"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/bundles"
                    ? "text-brand-orange font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                {isBn ? "বান্ডল" : "Bundle"}
              </Link>

              <Link
                href="/blog"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/blog")
                    ? "text-brand-orange font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange"
                }`}
              >
                {isBn ? "ব্লগ" : "Blog"}
              </Link>

              <Link
                href="/workshops"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/workshops")
                    ? "text-brand-orange font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange"
                }`}
              >
                <span className="px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-red-500 text-white rounded">
                  Live
                </span>
                {isBn ? "ওয়ার্কশপ/লাইভ" : "Workshop"}
              </Link>
            </nav>

            {/* Right Action Icons & Auth */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(isBn ? "en" : "bn")}
                title="Switch Language"
                className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {isBn ? "বাং | EN" : "EN | বাং"}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                title="Toggle Theme"
                aria-label="Toggle Theme"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
                className="relative w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-sm">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Enrolled Courses Dashboard Shortcut */}
              {enrolledCourseIds.length > 0 && (
                <Link
                  href="/dashboard"
                  title="My Learning"
                  className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{isBn ? "আমার শিক্ষা" : "My Learning"}</span>
                  <span className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px]">
                    {enrolledCourseIds.length}
                  </span>
                </Link>
              )}

              {/* Auth Buttons */}
              {user?.isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 hidden sm:inline">
                      {user.name}
                    </span>
                  </Link>
                  <button
                    onClick={logout}
                    title="Logout"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setAuthModalMode("login");
                      setIsAuthModalOpen(true);
                    }}
                    className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-brand-orange border border-slate-200 dark:border-slate-700 hover:border-brand-orange transition-colors"
                  >
                    {isBn ? "লগইন" : "Login"}
                  </button>
                  <button
                    onClick={() => {
                      setAuthModalMode("signup");
                      setIsAuthModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-orange hover:bg-brand-orangeHover shadow-sm shadow-brand-orange/25 active:translate-y-0.5 transition-all"
                  >
                    {isBn ? "সাইন আপ" : "Sign Up"}
                  </button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Quick Search Dropdown */}
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
                  placeholder={isBn ? "কী বিষয়ে শিখতে চান? অনুসন্ধান করুন..." : "What do you want to learn? Search..."}
                  className="w-full pl-11 pr-24 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange text-slate-800 dark:text-white"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-brand-orange text-white text-xs font-bold rounded-xl hover:bg-brand-orangeHover"
                >
                  {isBn ? "খুঁজুন" : "Search"}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071324] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "হোম" : "Home"}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "আমাদের সম্পর্কে" : "About Us"}
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "কোর্স সমূহ" : "Courses"}
            </Link>
            <Link
              href="/books"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "ই-বুক" : "Books"}
            </Link>
            <Link
              href="/bundles"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "মেগা অফার বান্ডল" : "Mega Bundle"}
            </Link>
            <Link
              href="/workshops"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "ওয়ার্কশপ ও লাইভ সেশন" : "Workshops & Live"}
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isBn ? "ব্লগ" : "Blog"}
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40"
            >
              {isBn ? "আমার শিক্ষা ড্যাশবোর্ড" : "My Learning Dashboard"}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
