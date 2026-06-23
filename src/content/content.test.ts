import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { categories } from "./skills";
import { site } from "./site";
import { projects } from "./projects";
import { projects as buildingProjects } from "./building";

const read = (p: string) => readFileSync(resolve(process.cwd(), p), "utf8");

// Guards against TD-003's residual risk: the content layer is hand-synced with
// docs/, so assert the two cannot silently drift. If a skill/project/contact
// detail exists in src/content/* it must also appear in the matching docs file.
describe("content ↔ docs parity", () => {
  // content category id -> docs/skills/<file>.md
  const categoryToDoc: Record<string, string> = {
    frontend: "frontend",
    backend: "backend",
    data: "databases",
    devops: "devops",
    ai: "ai",
    mobile: "mobile",
    tools: "tools",
  };

  describe("skills", () => {
    for (const category of categories) {
      const docFile = categoryToDoc[category.id];
      it(`every "${category.label}" skill is documented in docs/skills/${docFile}.md`, () => {
        const doc = read(`docs/skills/${docFile}.md`);
        for (const skill of category.skills) {
          expect(doc, `missing "${skill.name}"`).toContain(skill.name);
        }
      });
    }
  });

  it("each project name appears in the project index", () => {
    const index = read("docs/projects/project-index.md");
    for (const project of projects) {
      // The index lists "ConnectEdApp", "Revize Accessibility Platform", "Ignix UI".
      const key = project.name.split(" ")[0]; // first word is enough to anchor
      expect(index).toContain(key);
    }
  });

  it("every Building project has a docs file and an index entry", () => {
    const index = read("docs/projects/project-index.md");
    for (const p of buildingProjects) {
      // Each slug must have a backing doc...
      expect(() => read(`docs/projects/${p.slug}.md`)).not.toThrow();
      // ...and the project name must appear in the index.
      expect(index, `missing "${p.name}" in project-index`).toContain(p.name);
    }
  });

  it("site contact details match docs/profile/contact.md", () => {
    const contact = read("docs/profile/contact.md");
    expect(contact).toContain(site.email);
    expect(contact).toContain(site.phone);
    expect(contact).toContain(site.location);
    expect(contact).toContain(site.social.github.url);
    expect(contact).toContain(site.social.linkedin.url);
  });
});
