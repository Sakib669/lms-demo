"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle2, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast() {
  const { toast, hideToast } = useApp();

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-950/90 dark:bg-white/95 text-white dark:text-slate-950 backdrop-blur-xl border border-white/10 dark:border-slate-800 shadow-2xl max-w-sm"
          >
            {toast.type === "info" ? (
              <Info className="w-4 h-4 text-[#00D2FF] shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
            )}

            <p className="text-xs font-semibold leading-snug line-clamp-2">
              {toast.message}
            </p>

            <button
              onClick={hideToast}
              className="ml-auto w-6 h-6 rounded-lg flex items-center justify-center text-slate-400 hover:text-white dark:hover:text-slate-900 shrink-0 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
