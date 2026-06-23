import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectDetail from "./ProjectDetail";
import { getProject } from "@/content/building";

describe("ProjectDetail", () => {
  it("renders the project name, tagline, and repo link", () => {
    render(<ProjectDetail slug="contextos" />);
    const project = getProject("contextos")!;

    expect(screen.getByRole("heading", { name: project.name })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: /view repo/i }).getAttribute("href"),
    ).toBe(project.repoUrl);
    // Every feature renders.
    for (const f of project.features) {
      expect(screen.getByText(f.title)).toBeTruthy();
    }
  });
});
