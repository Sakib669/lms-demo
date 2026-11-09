"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Check, AlertCircle } from "lucide-react";

export default function CartDrawer() {
  const { cart, removeFromCart, clearCart, isCartOpen, setIsCartOpen, cartTotal, language } = useApp();
  const isBn = language === "bn";

  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    const cleaned = promoCode.trim().toUpperCase();
    if (cleaned === "HERMES50" || cleaned === "SKILL20") {
      setDiscountPercent(cleaned === "HERMES50" ? 50 : 20);
      setPromoApplied(true);
    } else {
      setPromoError(isBn ? "ভুল প্রোমোকোড! 'HERMES50' কোডটি ব্যবহার করুন।" : "Invalid promo code! Try 'HERMES50'.");
    }
  };

  const finalTotal = Math.round(cartTotal * (1 - discountPercent / 100));

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#0B0F19] shadow-2xl flex flex-col justify-between border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-200">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-950 dark:text-white">
                {isBn ? "আপনার কার্ট" : "Executive Cart"} ({cart.length})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
            {cart.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-slate-400 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {isBn ? "কার্ট খালি রয়েছে" : "Your cart is empty"}
                </h4>
                <p className="text-xs text-slate-400 max-w-xs font-normal">
                  {isBn ? "কোর্স বা ই-বুক ক্যাটালগ ব্রাউজ করে পছন্দের আইটেম যোগ করুন।" : "Explore our curated masterclasses and publications to begin."}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 posh-button-primary !py-2 !px-4 !text-xs !rounded-xl"
                >
                  {isBn ? "ক্যাটালগ দেখুন" : "Explore Curriculums"}
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-[#FAFAFD] dark:bg-slate-900/60"
                >
                  <div className="relative w-16 h-14 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0000F2] dark:text-[#00D2FF]">
                      {item.type}
                    </span>
                    <h5 className="text-xs font-bold text-slate-950 dark:text-white truncate">
                      {isBn ? item.titleBn : item.title}
                    </h5>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xs font-mono font-bold text-slate-950 dark:text-white tabular-nums">
                        ৳ {item.price}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="text-[10px] font-mono text-slate-400 line-through tabular-nums">
                          ৳ {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200/80 dark:border-slate-800 bg-[#FAFAFD] dark:bg-slate-900/40 space-y-4">
              
              {/* Promo Code Input */}
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
                      placeholder="Promo: HERMES50"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-700 rounded-xl uppercase font-mono font-bold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="posh-button-secondary !py-2 !px-3.5 !text-xs !rounded-xl"
                  >
                    {isBn ? "প্রয়োগ" : "Apply"}
                  </button>
                </div>

                {promoError && (
                  <div className="flex items-center gap-1.5 text-[11px] text-red-500 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{promoError}</span>
                  </div>
                )}
              </form>

              {promoApplied && (
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-900">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{promoCode} ({discountPercent}% discount)</span>
                  </span>
                  <span className="font-mono tabular-nums">- ৳ {Math.round(cartTotal * (discountPercent / 100))}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>{isBn ? "সাবটোটাল" : "Subtotal"}</span>
                  <span className="font-mono tabular-nums">৳ {cartTotal}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>{isBn ? "ডিসকাউন্ট" : "Discount"}</span>
                    <span className="font-mono tabular-nums">- ৳ {cartTotal - finalTotal}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-extrabold text-slate-950 dark:text-white pt-2 border-t border-slate-200/80 dark:border-slate-800">
                  <span>{isBn ? "সর্বমোট প্রদেয়" : "Total Due"}</span>
                  <span className="text-base font-mono font-black text-slate-950 dark:text-white tabular-nums">
                    ৳ {finalTotal}
                  </span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full posh-button-primary !py-3.5 !rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>{isBn ? "নিরাপদ চেকআউট" : "Proceed to Checkout"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={clearCart}
                className="w-full text-center text-[11px] font-semibold text-slate-400 hover:text-red-500 transition-colors"
              >
                {isBn ? "কার্ট খালি করুন" : "Empty Cart"}
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
