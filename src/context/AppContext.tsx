"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Ebook, UserProgress } from "@/types";
import { COURSES } from "@/data/mockData";

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  isLoggedIn: boolean;
}

interface AppContextType {
  // Cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartTotal: number;

  // Enrolled Courses
  enrolledCourseIds: string[];
  enrollInCourse: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;

  // Course Progress & Notes
  progress: Record<string, UserProgress>;
  toggleLessonComplete: (courseId: string, lessonId: string) => void;
  saveLessonNote: (courseId: string, lessonId: string, note: string) => void;
  getCourseProgress: (courseId: string) => number;

  // Wishlist
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;

  // Auth User
  user: UserProfile | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authModalMode: "login" | "signup";
  setAuthModalMode: (mode: "login" | "signup") => void;

  // Language & Theme
  language: "bn" | "en";
  setLanguage: (lang: "bn" | "en") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;

  // Workshop Registration
  registeredWorkshopIds: string[];
  registerWorkshop: (id: string) => void;
  isWorkshopRegistered: (id: string) => boolean;

  // Preview Modals
  readingEbook: Ebook | null;
  setReadingEbook: (ebook: Ebook | null) => void;
  previewVideo: { title: string; videoUrl: string } | null;
  setPreviewVideo: (data: { title: string; videoUrl: string } | null) => void;

  // Toast System
  toast: { message: string; type?: "success" | "info" } | null;
  showToast: (message: string, type?: "success" | "info") => void;
  hideToast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(["c-1"]);
  const [progress, setProgress] = useState<Record<string, UserProgress>>({});
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "signup">("login");
  const [language, setLanguageState] = useState<"bn" | "en">("bn");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [registeredWorkshopIds, setRegisteredWorkshopIds] = useState<string[]>([]);
  const [readingEbook, setReadingEbook] = useState<Ebook | null>(null);
  const [previewVideo, setPreviewVideo] = useState<{ title: string; videoUrl: string } | null>(null);
  const [toast, setToast] = useState<{ message: string; type?: "success" | "info" } | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const showToast = (message: string, type: "success" | "info" = "success") => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("sf_cart");
      if (storedCart) setCart(JSON.parse(storedCart));

      const storedEnrolled = localStorage.getItem("sf_enrolled");
      if (storedEnrolled) setEnrolledCourseIds(JSON.parse(storedEnrolled));

      const storedProgress = localStorage.getItem("sf_progress");
      if (storedProgress) setProgress(JSON.parse(storedProgress));

      const storedWishlist = localStorage.getItem("sf_wishlist");
      if (storedWishlist) setWishlistIds(JSON.parse(storedWishlist));

      const storedUser = localStorage.getItem("sf_user");
      if (storedUser) setUser(JSON.parse(storedUser));

      const storedLang = localStorage.getItem("sf_lang") as "bn" | "en" | null;
      if (storedLang) setLanguageState(storedLang);

      const storedTheme = localStorage.getItem("sf_theme") as "light" | "dark" | null;
      if (storedTheme) {
        setTheme(storedTheme);
        if (storedTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }

      const storedWorkshops = localStorage.getItem("sf_workshops");
      if (storedWorkshops) setRegisteredWorkshopIds(JSON.parse(storedWorkshops));
    } catch {
      // LocalStorage access fails in some restricted environments
    }
    setIsHydrated(true);
  }, []);

  // Save Cart to LocalStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("sf_cart", JSON.stringify(cart));
    } catch {}
  }, [cart, isHydrated]);

  // Save Enrolled Courses to LocalStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("sf_enrolled", JSON.stringify(enrolledCourseIds));
    } catch {}
  }, [enrolledCourseIds, isHydrated]);

  // Save Progress to LocalStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("sf_progress", JSON.stringify(progress));
    } catch {}
  }, [progress, isHydrated]);

  // Save Wishlist to LocalStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("sf_wishlist", JSON.stringify(wishlistIds));
    } catch {}
  }, [wishlistIds, isHydrated]);

  // Save User to LocalStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      if (user) {
        localStorage.setItem("sf_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("sf_user");
      }
    } catch {}
  }, [user, isHydrated]);

  // Save Language to LocalStorage
  const setLanguage = (lang: "bn" | "en") => {
    setLanguageState(lang);
    try {
      localStorage.setItem("sf_lang", lang);
    } catch {}
  };

  // Toggle Theme
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("sf_theme", nextTheme);
    } catch {}
  };

  // Cart operations
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        showToast(language === "bn" ? "আইটেমটি ইতোমধ্যেই কার্টে রয়েছে।" : "Item is already in your cart.", "info");
        return prev;
      }
      showToast(language === "bn" ? `কার্টে যুক্ত হয়েছে: ${item.titleBn || item.title}` : `Added to cart: ${item.title}`, "success");
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast(language === "bn" ? "কার্ট থেকে সরানো হয়েছে।" : "Item removed from cart.", "info");
  };
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  // Enrollment operations
  const enrollInCourse = (courseId: string) => {
    setEnrolledCourseIds((prev) => {
      if (prev.includes(courseId)) return prev;
      return [...prev, courseId];
    });
  };

  const isEnrolled = (courseId: string) => enrolledCourseIds.includes(courseId);

  // Course Progress & Notes
  const toggleLessonComplete = (courseId: string, lessonId: string) => {
    setProgress((prev) => {
      const courseProg = prev[courseId] || {
        courseId,
        completedLessonIds: [],
        progressPercent: 0,
        enrolledAt: new Date().toISOString(),
        notes: {},
      };

      const isCompleted = courseProg.completedLessonIds.includes(lessonId);
      const updatedLessons = isCompleted
        ? courseProg.completedLessonIds.filter((id) => id !== lessonId)
        : [...courseProg.completedLessonIds, lessonId];

      // Calculate total lessons in course
      const course = COURSES.find((c) => c.id === courseId);
      const totalLessons = course ? course.syllabus.reduce((acc, s) => acc + s.lessons.length, 0) : 1;
      const progressPercent = Math.min(100, Math.round((updatedLessons.length / totalLessons) * 100));

      return {
        ...prev,
        [courseId]: {
          ...courseProg,
          completedLessonIds: updatedLessons,
          progressPercent,
          lastLessonId: lessonId,
        },
      };
    });
  };

  const saveLessonNote = (courseId: string, lessonId: string, note: string) => {
    setProgress((prev) => {
      const courseProg = prev[courseId] || {
        courseId,
        completedLessonIds: [],
        progressPercent: 0,
        enrolledAt: new Date().toISOString(),
        notes: {},
      };
      return {
        ...prev,
        [courseId]: {
          ...courseProg,
          notes: {
            ...courseProg.notes,
            [lessonId]: note,
          },
        },
      };
    });
  };

  const getCourseProgress = (courseId: string) => {
    return progress[courseId]?.progressPercent || 0;
  };

  // Wishlist operations
  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isInWishlist = (id: string) => wishlistIds.includes(id);

  // Workshop Registration
  const registerWorkshop = (id: string) => {
    setRegisteredWorkshopIds((prev) => {
      const updated = prev.includes(id) ? prev : [...prev, id];
      try {
        localStorage.setItem("sf_workshops", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const isWorkshopRegistered = (id: string) => registeredWorkshopIds.includes(id);

  // Auth operations
  const login = (name: string, email: string) => {
    const newUser: UserProfile = {
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=0000F2,FA5A00`,
      isLoggedIn: true,
    };
    setUser(newUser);
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        enrolledCourseIds,
        enrollInCourse,
        isEnrolled,
        progress,
        toggleLessonComplete,
        saveLessonNote,
        getCourseProgress,
        wishlistIds,
        toggleWishlist,
        isInWishlist,
        user,
        login,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        language,
        setLanguage,
        theme,
        toggleTheme,
        registeredWorkshopIds,
        registerWorkshop,
        isWorkshopRegistered,
        readingEbook,
        setReadingEbook,
        previewVideo,
        setPreviewVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
