import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { links } from "@/content/navigation";
import { site } from "@/content/site";

describe("Navigation", () => {
  it("renders the brand name and all nav links", () => {
    render(<Navigation />);
    expect(screen.getAllByText(site.name).length).toBeGreaterThan(0);
    for (const link of links) {
      // Links appear in both the desktop bar and the mobile menu.
      expect(screen.getAllByText(link.label).length).toBeGreaterThan(0);
    }
  });

  it("links the social icons to the configured URLs", () => {
    render(<Navigation />);
    expect(
      screen.getByRole("link", { name: /github/i }).getAttribute("href"),
    ).toBe(site.social.github.url);
    expect(
      screen.getByRole("link", { name: /linkedin/i }).getAttribute("href"),
    ).toBe(site.social.linkedin.url);
  });
});
