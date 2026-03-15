import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";


describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("renders the hero headline", () => {
    expect(
      screen.getByText(
        "America's Trusted Industrial & Commercial Painting Contractor"
      )
    ).toBeInTheDocument();
  });

  it("renders the since 1972 subtitle", () => {
    expect(
      screen.getByText("Since 1972 — Nationwide Coverage")
    ).toBeInTheDocument();
  });

  it("renders key stats", () => {
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("Years in Business")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("States Covered")).toBeInTheDocument();
  });

  it("renders services section", () => {
    expect(screen.getAllByText("Surface Preparation").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Lead Paint Services").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Protective Coatings").length).toBeGreaterThan(0);
  });

  it("renders Get Free Estimate CTA", () => {
    const ctas = screen.getAllByText("Get Free Estimate");
    expect(ctas.length).toBeGreaterThan(0);
  });

  it("renders phone number", () => {
    expect(screen.getByText("1 (800) 354-9165")).toBeInTheDocument();
  });

  it("renders project types", () => {
    expect(screen.getByText("Residential")).toBeInTheDocument();
    expect(screen.getByText("Commercial")).toBeInTheDocument();
    expect(screen.getByText("Industrial")).toBeInTheDocument();
    expect(screen.getByText("Government")).toBeInTheDocument();
  });
});
