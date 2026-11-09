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
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Tag,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, enrollInCourse, language } = useApp();
  const isBn = language === "bn";

  const [paymentMethod, setPaymentMethod] = useState<"bkash" | "nagad" | "card">("bkash");
  const [phoneNumber, setPhoneNumber] = useState("01711000000");
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  const finalTotal = Math.round(cartTotal * (1 - discountPercent / 100));

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "HERMES50") {
      setDiscountPercent(50);
    } else {
      alert(isBn ? "ভুল প্রোমোকোড! 'HERMES50' ট্রাই করুন।" : "Invalid promo! Try 'HERMES50'.");
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

      // Trigger Confetti explosion
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FA5A00", "#0000F2", "#10B981", "#F59E0B"],
      });

      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="py-20 bg-slate-50/60 dark:bg-[#060814] min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
              Payment Successful
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isBn ? "অভিনন্দন! আপনার ভর্তি সম্পন্ন হয়েছে" : "Enrollment Confirmed!"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              {isBn
                ? "আপনার কেনা সকল কোর্স এবং ই-বুক এখন আপনার ড্যাশবোর্ডে সক্রিয় করা হয়েছে।"
                : "All enrolled items are now activated in your student dashboard and ready to consume."}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300 space-y-1 text-left">
            <div className="flex justify-between">
              <span>{isBn ? "অর্ডার আইডি:" : "Order ID:"}</span>
              <span className="font-mono font-bold">#SF-{(Math.random() * 100000).toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span>{isBn ? "পেমেন্ট মাধ্যম:" : "Payment Method:"}</span>
              <span className="font-bold uppercase">{paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span>{isBn ? "পরিশোধিত মূল্য:" : "Total Paid:"}</span>
              <span className="font-bold text-brand-orange">৳ {finalTotal}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/dashboard"
              className="flex-1 py-3.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/25"
            >
              <span>{isBn ? "আমার ড্যাশবোর্ডে যান" : "Go to Dashboard"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="py-3.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm hover:bg-slate-100"
            >
              {isBn ? "হোম পেজে ফিরুন" : "Home"}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50/60 dark:bg-[#060814] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          {isBn ? "সুরক্ষিত চেকআউট" : "Secure Checkout"}
        </h1>

        {cart.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              {isBn ? "আপনার কার্ট বর্তমানে খালি আছে।" : "Your cart is currently empty."}
            </h3>
            <Link
              href="/courses"
              className="inline-block px-5 py-2.5 bg-brand-orange text-white font-bold text-xs rounded-xl shadow-md"
            >
              {isBn ? "কোর্স ব্রাউজ করুন" : "Browse Courses"}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 cols): Payment Method */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Payment selector */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  {isBn ? "১. পেমেন্ট মেথড নির্বাচন করুন" : "1. Select Payment Method"}
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bkash")}
                    className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === "bkash"
                        ? "border-pink-500 bg-pink-50/50 dark:bg-pink-950/20 text-pink-600 font-bold shadow-sm"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-sm font-black">bKash</span>
                    <span className="text-[10px] text-slate-400">বিকাশ পেমেন্ট</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("nagad")}
                    className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === "nagad"
                        ? "border-orange-500 bg-orange-50/50 dark:bg-orange-950/20 text-orange-600 font-bold shadow-sm"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-sm font-black">Nagad</span>
                    <span className="text-[10px] text-slate-400">নগদ পেমেন্ট</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === "card"
                        ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 font-bold shadow-sm"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="text-[10px] text-slate-400">Cards</span>
                  </button>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {paymentMethod === "card" ? "Cardholder Mobile" : "Mobile Account Number"}
                  </label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    {isBn
                      ? "পেমেন্ট গেটওয়ের মাধ্যমে এনক্রিপ্টেড পিন যাচাইকরণ সম্পন্ন হবে।"
                      : "Secure OTP authentication will be routed directly via gateway."}
                  </p>
                </div>
              </div>

              {/* Promo code */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  {isBn ? "২. ডিসকাউন্ট কুপন কোড" : "2. Discount Coupon"}
                </h3>
                <form onSubmit={applyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Use 'HERMES50' for 50% OFF"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-mono uppercase font-bold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs rounded-xl"
                  >
                    {isBn ? "প্রয়োগ" : "Apply"}
                  </button>
                </form>
                {discountPercent > 0 && (
                  <div className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg">
                    {isBn ? "অভিনন্দন! ৫০% ডিসকাউন্ট যোগ করা হয়েছে।" : "50% Discount Applied Successfully!"}
                  </div>
                )}
              </div>

            </div>

            {/* Right Column (5 cols): Order Summary */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {isBn ? "অর্ডার সারাংশ" : "Order Summary"}
              </h3>

              <div className="divide-y divide-slate-100 dark:divide-slate-800 space-y-3 pt-1">
                {cart.map((item) => (
                  <div key={item.id} className="pt-3 flex items-center justify-between text-xs">
                    <div className="pr-2">
                      <span className="font-bold text-slate-900 dark:text-white block truncate max-w-[200px]">
                        {isBn ? item.titleBn : item.title}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase">{item.type}</span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white">৳ {item.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>{isBn ? "উপমোট" : "Subtotal"}</span>
                  <span>৳ {cartTotal}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>{isBn ? "ডিসকাউন্ট" : "Discount"} ({discountPercent}%)</span>
                    <span>- ৳ {Math.round(cartTotal * (discountPercent / 100))}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span>{isBn ? "সর্বমোট প্রদেয়" : "Total Payable"}</span>
                  <span className="text-brand-orange">৳ {finalTotal}</span>
                </div>
              </div>

              <button
                disabled={isProcessing}
                onClick={handleCompleteOrder}
                className="w-full py-4 bg-brand-orange hover:bg-brand-orangeHover disabled:opacity-70 text-white font-black text-sm rounded-2xl shadow-xl shadow-brand-orange/25 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>
                  {isProcessing
                    ? isBn
                      ? "পেমেন্ট প্রক্রিয়াধীন..."
                      : "Processing Payment..."
                    : isBn
                    ? `৳ ${finalTotal} পরিশোধ করুন`
                    : `Complete Order (৳ ${finalTotal})`}
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>256-Bit SSL Encrypted & Bank Authenticated</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
