import HeroSection from "@/components/HeroSection";
import CategoryBar from "@/components/CategoryBar";
import CoursesSection from "@/components/CoursesSection";
import EbooksSection from "@/components/EbooksSection";
import MegaBundleBanner from "@/components/MegaBundleBanner";
import WorkshopSection from "@/components/WorkshopSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section with Headline, CTAs, and Floating Stat Pills */}
      <HeroSection />

      {/* 2. Interactive Category Navigation Bar */}
      <CategoryBar />

      {/* 3. Popular Courses 5-Column Grid */}
      <CoursesSection />

      {/* 4. Popular E-Books 5-Column Grid */}
      <EbooksSection />

      {/* 5. Special Mega Offer Bundle Banner */}
      <MegaBundleBanner />

      {/* 6. Midnight Live Workshop & Upcoming Session */}
      <WorkshopSection />

      {/* 7. Student Testimonials / Reviews */}
      <TestimonialsSection />

      {/* 8. Recent Blog Articles */}
      <BlogSection />

      {/* 9. Interactive FAQ Section */}
      <FaqSection />
    </div>
  );
}
