export interface Course {
  id: string;
  title: string;
  titleBn: string;
  instructor: string;
  instructorRole: string;
  category: string;
  categoryBn: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  originalPrice: number;
  badge?: "Popular" | "New" | "Bestseller" | "Trending";
  badgeBn?: string;
  thumbnail: string;
  description: string;
  descriptionBn: string;
  duration: string;
  lessonsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  syllabus: {
    title: string;
    duration: string;
    lessons: {
      id: string;
      title: string;
      duration: string;
      videoUrl?: string;
      freePreview?: boolean;
    }[];
  }[];
}

export interface Ebook {
  id: string;
  title: string;
  titleBn: string;
  author: string;
  category: string;
  categoryBn: string;
  rating: number;
  price: number;
  originalPrice: number;
  coverImage: string;
  formats: string[]; // e.g. ["PDF", "Audio", "Video"]
  formatsBn: string;
  badge?: "Best Seller" | "Must Read" | "New Release";
  badgeBn?: string;
  pages: number;
  description: string;
  descriptionBn: string;
  sampleChapter: {
    title: string;
    content: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  nameBn: string;
  iconName: string;
  color: string;
  courseCount: number;
}

export interface Workshop {
  id: string;
  title: string;
  titleBn: string;
  instructor: string;
  instructorRole: string;
  instructorAvatar: string;
  date: string;
  dateBn: string;
  time: string;
  timeBn: string;
  price: number;
  originalPrice: number;
  duration: string;
  isLive?: boolean;
  videoPreviewUrl: string;
  features: string[];
  featuresBn: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  quoteBn: string;
  rating: number;
  courseTitle: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  date: string;
  dateBn: string;
  category: string;
  categoryBn: string;
  readTime: string;
  thumbnail: string;
  summary: string;
  summaryBn: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: string;
}

export interface CartItem {
  id: string;
  type: "course" | "ebook" | "bundle";
  title: string;
  titleBn: string;
  price: number;
  originalPrice: number;
  thumbnail: string;
}

export interface UserProgress {
  courseId: string;
  completedLessonIds: string[];
  lastLessonId?: string;
  progressPercent: number;
  enrolledAt: string;
  notes: Record<string, string>; // lessonId -> note text
}
