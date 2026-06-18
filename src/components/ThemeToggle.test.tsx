import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("light");
    localStorage.clear();
  });

  it("renders a labelled toggle button", () => {
    render(<ThemeToggle />);
    expect(
      screen.getByRole("button", { name: /switch to (light|dark) theme/i }),
    ).toBeInTheDocument();
  });

  it("toggles the `light` class and persists the choice", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("light");

    fireEvent.click(button);
    expect(document.documentElement.classList.contains("light")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
