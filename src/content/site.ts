// Site-wide identity & contact. Single source for name/role/contact/social.
// Mirrors docs/profile/personal.md + docs/profile/contact.md.
// Display name is "Nikhil" only (surname intentionally omitted in the UI).
export const site = {
  name: "Nikhil",
  role: "Senior Full Stack Engineer",
  // Used in the footer strapline.
  tagline: "Senior Full Stack Engineer · AI · DevOps · Cloud",
  url: "https://nikhilmeshram.dev",
  resume: "/resume.pdf",
  email: "mnikks01@gmail.com",
  location: "Nagpur, Maharashtra",
  social: {
    github: {
      url: "https://github.com/MNikks01",
      handle: "@MNikks01",
    },
    linkedin: {
      url: "https://linkedin.com/in/nikhil-shakya-5b7318a1",
      handle: "nikhil-shakya",
    },
  },
} as const;
