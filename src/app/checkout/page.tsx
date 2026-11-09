"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import confetti from "canvas-confetti";
import {
  CreditCard,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Tag,
  AlertCircle,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, enrollInCourse, language } = useApp();
  const isBn = language === "bn";

  const [paymentMethod, setPaymentMethod] = useState<"bkash" | "nagad" | "card">("bkash");
  const [phoneNumber, setPhoneNumber] = useState("01711000000");
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  const finalTotal = Math.round(cartTotal * (1 - discountPercent / 100));

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    const cleaned = promoCode.trim().toUpperCase();
    if (cleaned === "HERMES50") {
      setDiscountPercent(50);
    } else {
      setPromoError(isBn ? "ভুল কুপন! 'HERMES50' কোডটি ট্রাই করুন।" : "Invalid coupon! Use 'HERMES50' for 50% off.");
    }
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);

    setTimeout(() => {
      // Enroll user in all courses in cart
      cart.forEach((item) => {
        if (item.type === "course" || item.type === "bundle") {
          enrollInCourse(item.id);
        }
      });

      // Clear cart
      clearCart();

      // Trigger Confetti explosion with enterprise colors
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0000F2", "#00D2FF", "#10B981", "#3B82F6"],
      });

      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="py-20 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white dark:bg-[#0B0F19] rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block">
              Payment Confirmed
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              {isBn ? "এনরোলমেন্ট সফলভাবে সম্পন্ন হয়েছে" : "Enrollment Confirmed!"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">
              {isBn
                ? "আপনার কোর্স এবং ই-বুকসমূহ আপনার স্টুডেন্ট পোর্টালে সক্রিয় করা হয়েছে।"
                : "All selected masterclasses and publications are now accessible in your learning portal."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-600 dark:text-slate-300 space-y-1.5 text-left font-mono">
            <div className="flex justify-between">
              <span>{isBn ? "অর্ডার আইডি:" : "Order ID:"}</span>
              <span className="font-bold">#SF-{(Math.random() * 100000).toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span>{isBn ? "পেমেন্ট মাধ্যম:" : "Gateway:"}</span>
              <span className="font-bold uppercase">{paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span>{isBn ? "পরিশোধিত মূল্য:" : "Total Paid:"}</span>
              <span className="font-bold text-slate-950 dark:text-white tabular-nums">৳ {finalTotal}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/dashboard"
              className="posh-button-primary flex-1 !py-3 !rounded-xl flex items-center justify-center gap-2"
            >
              <span>{isBn ? "ড্যাশবোর্ডে প্রবেশ করুন" : "Open Student Portal"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="posh-button-secondary !py-3 !rounded-xl"
            >
              {isBn ? "হোম পেজ" : "Home"}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FAFAFD] dark:bg-[#060814] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div>
          <div className="text-[11px] font-mono font-bold uppercase text-[#0000F2] dark:text-[#00D2FF] mb-1">
            Secure Transaction
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {isBn ? "নিরাপদ চেকআউট ও এনরোলমেন্ট" : "Executive Checkout"}
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-[#0B0F19] rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {isBn ? "আপনার কার্ট বর্তমানে খালি আছে।" : "Your cart is currently empty."}
            </h3>
            <Link
              href="/courses"
              className="posh-button-primary inline-flex !py-2.5 !px-5 !rounded-xl text-xs"
            >
              {isBn ? "কোর্স ক্যাটালগ দেখুন" : "Explore Curriculums"}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 cols): Payment Method */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Payment selector */}
              <div className="bg-white dark:bg-[#0B0F19] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-subtle space-y-4">
                <h3 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                  {isBn ? "১. পেমেন্ট মেথড নির্বাচন করুন" : "1. Select Payment Method"}
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bkash")}
                    className={`p-3.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === "bkash"
                        ? "border-[#0000F2] bg-blue-50/60 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] font-bold shadow-sm"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span className="text-sm font-black font-mono">bKash</span>
                    <span className="text-[10px] text-slate-400">বিকাশ ওয়ালেট</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("nagad")}
                    className={`p-3.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === "nagad"
                        ? "border-[#0000F2] bg-blue-50/60 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] font-bold shadow-sm"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span className="text-sm font-black font-mono">Nagad</span>
                    <span className="text-[10px] text-slate-400">নগদ ওয়ালেট</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === "card"
                        ? "border-[#0000F2] bg-blue-50/60 dark:bg-blue-950/40 text-[#0000F2] dark:text-[#00D2FF] font-bold shadow-sm"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="text-[10px] text-slate-400">Cards / Wire</span>
                  </button>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {paymentMethod === "card" ? "Cardholder Mobile" : "Account Verification Mobile Number"}
                  </label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0000F2]/30 focus:border-[#0000F2]"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    {isBn
                      ? "পেমেন্ট গেটওয়ের মাধ্যমে এনক্রিপ্টেড পিন যাচাইকরণ সম্পন্ন হবে।"
                      : "Secure OTP authentication will be routed directly via payment provider."}
                  </p>
                </div>
              </div>

              {/* Promo code */}
              <div className="bg-white dark:bg-[#0B0F19] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-subtle space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                  {isBn ? "২. ডিসকাউন্ট কুপন কোড" : "2. Promotional Voucher"}
                </h3>
                <form onSubmit={applyPromo} className="space-y-1.5">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => {
                          setPromoCode(e.target.value);
                          setPromoError("");
                        }}
                        placeholder="Try 'HERMES50' for 50% OFF"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm font-mono uppercase font-bold"
                      />
                    </div>
                    <button
                      type="submit"
                      className="posh-button-secondary !py-2.5 !px-5 !rounded-xl !text-xs font-bold"
                    >
                      {isBn ? "প্রয়োগ" : "Apply"}
                    </button>
                  </div>

                  {promoError && (
                    <div className="flex items-center gap-1.5 text-[11px] text-red-500 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{promoError}</span>
                    </div>
                  )}
                </form>

                {discountPercent > 0 && (
                  <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-900">
                    {isBn ? "অভিনন্দন! ৫০% ডিসকাউন্ট যোগ করা হয়েছে।" : "50% Institutional Discount Applied!"}
                  </div>
                )}
              </div>

            </div>

            {/* Right Column (5 cols): Order Summary */}
            <div className="lg:col-span-5 bg-white dark:bg-[#0B0F19] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-subtle space-y-5">
              <h3 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white">
                {isBn ? "অর্ডার সারাংশ" : "Order Summary"}
              </h3>

              <div className="divide-y divide-slate-100 dark:divide-slate-800/80 space-y-3 pt-1">
                {cart.map((item) => (
                  <div key={item.id} className="pt-3 flex items-center justify-between text-xs">
                    <div className="pr-2">
                      <span className="font-bold text-slate-950 dark:text-white block truncate max-w-[200px]">
                        {isBn ? item.titleBn : item.title}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#0000F2] dark:text-[#00D2FF]">{item.type}</span>
                    </div>
                    <span className="font-mono font-bold text-slate-950 dark:text-white tabular-nums">৳ {item.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-500 font-mono">
                  <span>{isBn ? "উপমোট" : "Subtotal"}</span>
                  <span className="tabular-nums">৳ {cartTotal}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-600 font-mono font-semibold">
                    <span>{isBn ? "ডিসকাউন্ট" : "Discount"} ({discountPercent}%)</span>
                    <span className="tabular-nums">- ৳ {Math.round(cartTotal * (discountPercent / 100))}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-slate-950 dark:text-white pt-2 border-t border-slate-200/80 dark:border-slate-800 font-mono">
                  <span>{isBn ? "সর্বমোট প্রদেয়" : "Total Due"}</span>
                  <span className="tabular-nums">৳ {finalTotal}</span>
                </div>
              </div>

              <button
                disabled={isProcessing}
                onClick={handleCompleteOrder}
                className="w-full py-3.5 posh-button-primary !rounded-xl !text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 disabled:opacity-70"
              >
                <Lock className="w-4 h-4" />
                <span>
                  {isProcessing
                    ? isBn
                      ? "পেমেন্ট প্রক্রিয়াধীন..."
                      : "Processing Payment..."
                    : isBn
                    ? `৳ ${finalTotal} পরিশোধ নিশ্চিত করুন`
                    : `Confirm & Pay ৳ ${finalTotal}`}
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>256-Bit SSL Encrypted • Instant Portal Access</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
