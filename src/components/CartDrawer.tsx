"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Check } from "lucide-react";

export default function CartDrawer() {
  const { cart, removeFromCart, clearCart, isCartOpen, setIsCartOpen, cartTotal, language } = useApp();
  const isBn = language === "bn";

  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "HERMES50" || promoCode.trim().toUpperCase() === "SKILL20") {
      setDiscountPercent(promoCode.trim().toUpperCase() === "HERMES50" ? 50 : 20);
      setPromoApplied(true);
    } else {
      alert(isBn ? "ভুল প্রোমোকোড! 'HERMES50' ব্যবহার করুন।" : "Invalid promo! Try 'HERMES50'.");
    }
  };

  const finalTotal = Math.round(cartTotal * (1 - discountPercent / 100));

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col justify-between border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-200">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-orange" />
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {isBn ? "আপনার কার্ট" : "Your Shopping Cart"} ({cart.length})
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
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {isBn ? "কার্ট খালি রয়েছে" : "Your cart is empty"}
                </h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  {isBn ? "কোর্স বা ই-বুক ব্রাউজ করে পছন্দের আইটেম কার্টে যোগ করুন।" : "Explore our catalog and add courses or e-books to get started."}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-4 py-2 bg-brand-orange text-white text-xs font-bold rounded-xl"
                >
                  {isBn ? "ব্রাউজ করুন" : "Browse Courses"}
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40"
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                      {item.type}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {isBn ? item.titleBn : item.title}
                    </h5>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xs font-black text-slate-900 dark:text-white">
                        ৳ {item.price}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="text-[10px] text-slate-400 line-through">
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
            <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
              
              {/* Promo Code Input */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder={isBn ? "প্রোমোকোড (e.g. HERMES50)" : "Promo code (e.g. HERMES50)"}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl uppercase font-bold"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-slate-800 text-white dark:bg-slate-700 hover:bg-slate-900 text-xs font-bold rounded-xl"
                >
                  {isBn ? "প্রয়োগ" : "Apply"}
                </button>
              </form>

              {promoApplied && (
                <div className="flex items-center justify-between text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{promoCode} ({discountPercent}% ছাড়)</span>
                  </span>
                  <span>- ৳ {Math.round(cartTotal * (discountPercent / 100))}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>{isBn ? "মোট মূল্য" : "Subtotal"}</span>
                  <span>৳ {cartTotal}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>{isBn ? "ডিসকাউন্ট" : "Discount"}</span>
                    <span>- ৳ {cartTotal - finalTotal}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black text-slate-900 dark:text-white pt-1 border-t border-slate-200 dark:border-slate-800">
                  <span>{isBn ? "সর্বমোট" : "Total Amount"}</span>
                  <span className="text-base text-brand-orange">৳ {finalTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/25 active:translate-y-0.5 transition-all"
              >
                <span>{isBn ? "চেকআউট করুন" : "Proceed to Checkout"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={clearCart}
                className="w-full text-center text-[11px] font-bold text-slate-400 hover:text-red-500 transition-colors"
              >
                {isBn ? "কার্ট খালি করুন" : "Clear Cart"}
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
