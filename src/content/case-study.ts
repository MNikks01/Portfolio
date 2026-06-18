// ConnectEdApp flagship case study. Mirrors docs/projects/connectedapp.md.
import {
  Target,
  Search,
  PenTool,
  Code2,
  Rocket,
  Presentation,
  Users,
  Lightbulb,
} from "lucide-react";

export const roles = [
  "Founder",
  "Product Manager",
  "Full Stack Engineer",
  "Sales",
  "Customer Success",
];

export type Metric = { value: string; label: string; color: string };

export const metrics: Metric[] = [
  { value: "100+", label: "School demos", color: "#EC4899" },
  { value: "50+", label: "Schools engaged", color: "#00D4FF" },
  { value: "Play Store", label: "Launched live", color: "#10B981" },
  { value: "0→1", label: "Built from scratch", color: "#8B5CF6" },
];

export const tech = [
  "React",
  "React Native",
  "Node.js",
  "Express",
  "GraphQL",
  "Firebase",
  "Cloudinary",
  "Socket.IO",
];

export type Phase = {
  icon: typeof Target;
  title: string;
  color: string;
  body: string;
};

export const phases: Phase[] = [
  {
    icon: Target,
    title: "The Problem",
    color: "#EC4899",
    body: "Schools, parents, and students were stuck with fragmented, offline communication — circulars on paper, scattered WhatsApp groups, no single source of truth for attendance, announcements, fees, and academics. Coordination was slow and information got lost.",
  },
  {
    icon: Search,
    title: "Idea Validation",
    color: "#00D4FF",
    body: "Instead of assuming, I went to the source. I spoke directly with school administrators and teachers to confirm the pain was real, urgent, and worth paying for — validating demand before writing serious code.",
  },
  {
    icon: PenTool,
    title: "Product Design",
    color: "#22D3EE",
    body: "I designed a mobile-first platform connecting schools, teachers, parents, and students — real-time announcements, academic updates, and media sharing — shaped around the workflows administrators described, not what was easiest to build.",
  },
  {
    icon: Code2,
    title: "Engineering",
    color: "#8B5CF6",
    body: "I built the entire stack solo: a React Native mobile app and React web dashboard, a Node.js + Express + GraphQL backend, Firebase for auth and notifications, Cloudinary for media, and Socket.IO for real-time messaging.",
  },
  {
    icon: Rocket,
    title: "Launch",
    color: "#10B981",
    body: "I shipped it to the real world — published the app on the Google Play Store and got it into the hands of actual schools, not just a demo on my laptop.",
  },
  {
    icon: Presentation,
    title: "Sales",
    color: "#F59E0B",
    body: "I personally presented the product to 100+ school administrators — running live demos, handling objections, and translating technical capability into business value for non-technical buyers.",
  },
  {
    icon: Users,
    title: "Customer Discovery",
    color: "#00D4FF",
    body: "I visited schools in person, watched how staff actually worked, and collected feedback directly from users — then folded those insights back into the product to make it fit how schools really operate.",
  },
  {
    icon: Lightbulb,
    title: "Lessons Learned",
    color: "#EC4899",
    body: "Building is the easy part — distribution, trust, and understanding the buyer are what make a product real. I learned to validate before building, to sell what I build, and that proximity to the customer is an unfair advantage for an engineer.",
  },
];
