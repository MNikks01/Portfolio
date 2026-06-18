import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
import { categories } from "@/content/skills";

describe("Skills", () => {
  it("renders every category selector", () => {
    render(<Skills />);
    for (const category of categories) {
      expect(screen.getAllByText(category.label).length).toBeGreaterThan(0);
    }
  });

  it("shows the default (frontend) category's skills", () => {
    render(<Skills />);
    const frontend = categories.find((c) => c.id === "frontend")!;
    // The first signature skills render in the grid for the active category.
    expect(screen.getAllByText(frontend.skills[0].name).length).toBeGreaterThan(
      0,
    );
  });
});
