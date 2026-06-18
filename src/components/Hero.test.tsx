import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { badges } from "@/content/hero";
import { site } from "@/content/site";

describe("Hero", () => {
  it("renders the role, primary CTAs, and badges", () => {
    render(<Hero />);
    expect(screen.getByText(/Senior Full Stack Engineer/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view projects/i }),
    ).toBeInTheDocument();
    for (const badge of badges) {
      // Some badge labels (Node.js, AWS, Docker) also appear as floating
      // tech labels, so assert presence rather than uniqueness.
      expect(screen.getAllByText(badge).length).toBeGreaterThan(0);
    }
  });

  it("points the resume link at the configured file", () => {
    render(<Hero />);
    expect(
      screen
        .getByRole("link", { name: /download resume/i })
        .getAttribute("href"),
    ).toBe(site.resume);
  });
});
