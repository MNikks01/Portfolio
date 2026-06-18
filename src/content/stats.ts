// Headline stats. Mirrors docs/profile/achievements.md.

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  color: string;
};

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years Experience", color: "#00D4FF" },
  { value: 100, suffix: "+", label: "School Demonstrations", color: "#EC4899" },
  { value: 50, suffix: "+", label: "Schools Engaged", color: "#10B981" },
  { value: 3, suffix: "", label: "Career Transformations", color: "#8B5CF6" },
  { value: 8, suffix: "+", label: "Products & Apps Built", color: "#F59E0B" },
  { value: 40, suffix: "+", label: "Technologies", color: "#22D3EE" },
  { value: 100, suffix: "K+", label: "Lines of Code", color: "#8B5CF6" },
  {
    value: 1000,
    suffix: "+",
    label: "Hours Building Products",
    color: "#00D4FF",
  },
];
