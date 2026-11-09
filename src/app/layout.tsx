import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AuthModal from "@/components/AuthModal";
import BookReaderModal from "@/components/BookReaderModal";
import VideoPreviewModal from "@/components/VideoPreviewModal";

export const metadata: Metadata = {
  title: "SkillForge.com - জানুন • শিখুন • এগিয়ে যান | Practical Life Skills, Law & Tech",
  description: "বাস্তবসম্মত জ্ঞান ও পেশাদার দক্ষতা অর্জনের নির্ভরযোগ্য ডিজিটাল প্ল্যাটফর্ম। আইন, স্বাস্থ্য, ব্যবসা, কৃষি ও ক্যারিয়ার দক্ষতা শিখুন অভিজ্ঞ বিশেষজ্ঞদের সাথে।",
  keywords: ["online courses", "bangla lms", "legal rights", "skill development", "ebooks", "live workshops"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans">
        <AppProvider>
          <Navbar />
          <main className="flex-1 overflow-x-hidden w-full max-w-full">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <AuthModal />
          <BookReaderModal />
          <VideoPreviewModal />
        </AppProvider>
      </body>
    </html>
  );
}
