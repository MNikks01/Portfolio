// "Business + Engineering = Product" cards. Mirrors docs/portfolio/about-section.md.
import { Briefcase, Cpu, Boxes } from "lucide-react";

export type MindsetCard = {
  icon: typeof Briefcase;
  label: string;
  color: string;
  points: string[];
};

export const cards: MindsetCard[] = [
  {
    icon: Briefcase,
    label: "Business Thinking",
    color: "#EC4899",
    points: [
      "Talk to customers, not just stakeholders",
      "Validate before building",
      "Translate value for non-technical buyers",
      "Revenue, retention, and ROI awareness",
    ],
  },
  {
    icon: Cpu,
    label: "Engineering Thinking",
    color: "#00D4FF",
    points: [
      "Architect for scale and reliability",
      "Clean, maintainable, tested systems",
      "Automate and ship continuously",
      "Leverage AI to move faster",
    ],
  },
  {
    icon: Boxes,
    label: "Product Thinking",
    color: "#8B5CF6",
    points: [
      "Build what customers actually need",
      "End-to-end ownership, 0 → 1",
      "Trade-offs that balance speed & quality",
      "Outcomes over output",
    ],
  },
];
