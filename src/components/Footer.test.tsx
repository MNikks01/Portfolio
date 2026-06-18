import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the name", () => {
    render(<Footer />);
    expect(screen.getByText("Nikhil")).toBeInTheDocument();
  });

  it("renders a contact email link", () => {
    render(<Footer />);
    const email = screen.getByRole("link", { name: /mnikks01@gmail.com/i });
    expect(email).toHaveAttribute("href", "mailto:mnikks01@gmail.com");
  });

  it("renders the current year in the copyright", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
