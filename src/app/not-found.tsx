import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 bg-slate-50 dark:bg-[#060814] min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-orange-100 text-brand-orange flex items-center justify-center mx-auto">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          404 - পেজটি খুঁজে পাওয়া যায়নি
        </h1>
        <p className="text-xs text-slate-500">
          আপনি যে পেজটি খুঁজছেন তা স্থানান্তরিত বা মুছে ফেলা হয়েছে।
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-md"
        >
          <span>হোম পেজে ফিরে যান</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
