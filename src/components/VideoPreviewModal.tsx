"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { X, PlayCircle } from "lucide-react";

export default function VideoPreviewModal() {
  const { previewVideo, setPreviewVideo, language } = useApp();
  const isBn = language === "bn";

  if (!previewVideo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <PlayCircle className="w-5 h-5 text-brand-orange" />
            <h3 className="text-sm sm:text-base font-bold line-clamp-1">
              {previewVideo.title}
            </h3>
          </div>
          <button
            onClick={() => setPreviewVideo(null)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            src={previewVideo.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Your browser does not support HTML5 video streaming.
          </video>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{isBn ? "লাইভ সেশন প্রিভিউ ডেমো" : "Free Session Preview Demo"}</span>
          <button
            onClick={() => setPreviewVideo(null)}
            className="px-4 py-1.5 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-orangeHover"
          >
            {isBn ? "বন্ধ করুন" : "Close"}
          </button>
        </div>

      </div>
    </div>
  );
}
