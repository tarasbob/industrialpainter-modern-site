import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";


describe("Header Navigation", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the company name", () => {
    expect(screen.getByText("Industrial Painter")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    const navLinks = [
      "Home",
      "Services",
      "Projects",
      "Industries",
      "Coverage",
      "Safety",
      "About",
      "Contact",
    ];

    navLinks.forEach((link) => {
      expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
    });
  });

  it("renders the Get Free Estimate button", () => {
    expect(
      screen.getByRole("link", { name: "Get Free Estimate" })
    ).toBeInTheDocument();
  });

  it("renders the phone number", () => {
    expect(screen.getByText("1 (800) 354-9165")).toBeInTheDocument();
  });

  it("renders Since 1972 tagline", () => {
    expect(screen.getByText("Since 1972")).toBeInTheDocument();
  });
});
