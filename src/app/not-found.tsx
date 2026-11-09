import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 bg-[#FAFAFD] dark:bg-[#060814] min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#0000F2] dark:text-[#00D2FF] border border-blue-200/50 flex items-center justify-center mx-auto shadow-subtle">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          404 - পেজটি খুঁজে পাওয়া যায়নি
        </h1>
        <p className="text-xs text-slate-500 font-normal">
          আপনি যে পেজটি খুঁজছেন তা স্থানান্তরিত করা হয়েছে অথবা লিঙ্কটি সঠিক নয়।
        </p>
        <Link
          href="/"
          className="posh-button-primary inline-flex !py-3 !px-6 !text-xs !rounded-xl"
        >
          <span>হোম পেজে ফিরে যান</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
