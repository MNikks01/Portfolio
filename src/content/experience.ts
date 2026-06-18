// Work experience. Mirrors docs/career/work-experience.md.

export type Job = {
  company: string;
  role: string;
  period: string;
  color: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const jobs: Job[] = [
  {
    company: "Mindfire Solutions",
    role: "Senior Software Engineer",
    period: "2023 — Present",
    color: "#8B5CF6",
    location: "India · Remote",
    summary:
      "Architecting distributed systems, accessibility platforms, and AI-native developer tooling — engineering grounded in product impact.",
    highlights: [
      "Designed a monorepo + microservices architecture (TurboRepo + Docker), cutting CI/CD lead time and unblocking parallel team delivery.",
      "Built a distributed accessibility scanning platform with Puppeteer + RabbitMQ queues — processing 10k+ pages/day with horizontal worker scaling.",
      "Integrated MCP into internal tooling for AI-assisted code review and ticket grooming — measurable developer-velocity gains.",
      "Created Ignix UI, an AI-native component registry driven by MCP workflows.",
      "Owned DevOps: Dockerized services, GitHub Actions pipelines, and Prometheus/Grafana monitoring.",
      "Mentored engineers; introduced trunk-based development and feature-flagged releases.",
    ],
    tech: [
      "TurboRepo",
      "Microservices",
      "RabbitMQ",
      "Puppeteer",
      "Docker",
      "MCP",
      "AWS",
      "Grafana",
    ],
  },
  {
    company: "Softronix",
    role: "MERN Stack Engineer",
    period: "2021 — 2023",
    color: "#00D4FF",
    location: "India",
    summary:
      "Shipped real-time products and SaaS dashboards end-to-end, owning delivery from sprint planning to production.",
    highlights: [
      "Built real-time collaboration features with Socket.IO supporting 5k concurrent users.",
      "Designed authentication & authorization systems — OAuth + JWT with shared SSO and role-based access.",
      "Migrated a monolithic Express app to GraphQL, consolidating queries 3x and improving performance.",
      "Optimized APIs and database access, cutting key endpoint latency and improving UX.",
      "Owned end-to-end delivery: requirements, build, review, and production rollouts.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "GraphQL",
      "JWT",
      "OAuth",
      "Socket.IO",
      "MongoDB",
    ],
  },
  {
    company: "ConnectEdApp",
    role: "Founder & Full Stack Engineer",
    period: "2020 — 2022",
    color: "#10B981",
    location: "India · Founder",
    summary:
      "Founded, built, launched, and sold an education platform — running product, engineering, sales, and customer success single-handedly.",
    highlights: [
      "Built the full product solo: React Native app + React dashboard + Node/GraphQL backend, launched on the Google Play Store.",
      "Validated the idea by talking directly to school administrators before building.",
      "Presented and demoed the product to 100+ school administrators.",
      "Visited 50+ schools for customer discovery and folded feedback into the roadmap.",
      "Owned the full loop: idea → validation → design → engineering → launch → sales → iteration.",
    ],
    tech: [
      "React",
      "React Native",
      "Node.js",
      "GraphQL",
      "Firebase",
      "Socket.IO",
      "Cloudinary",
    ],
  },
  {
    company: "RevoltCreations",
    role: "Business Development Manager",
    period: "2019 — 2021",
    color: "#EC4899",
    location: "India",
    summary:
      "Where it started — business, sales, and customers. The foundation that makes me an engineer who understands the buyer.",
    highlights: [
      "Grew the client portfolio 3x in 18 months through outbound and partnerships.",
      "Owned client communication, onboarding, and requirements gathering.",
      "Drove a 40% lift in retention via a structured customer feedback loop.",
      "Learned how businesses buy, what they value, and how to sell — skills most engineers never build.",
    ],
    tech: [
      "Revenue Growth",
      "Sales",
      "Client Management",
      "Customer Communication",
      "Business Strategy",
    ],
  },
];
