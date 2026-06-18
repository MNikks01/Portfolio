import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeading from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders the eyebrow, title and description", () => {
    render(
      <SectionHeading
        eyebrow="Stack"
        title={<>A polyglot engineering stack</>}
        description="From pixels to pods."
      />,
    );
    expect(screen.getByText("Stack")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /polyglot engineering stack/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("From pixels to pods.")).toBeInTheDocument();
  });

  it("omits the description when not provided", () => {
    render(<SectionHeading eyebrow="About" title="Title only" />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Title only" }),
    ).toBeInTheDocument();
  });
});
