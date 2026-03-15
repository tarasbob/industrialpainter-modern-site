import { render, screen } from "@testing-library/react";
import ServicesPage from "@/app/services/page";


describe("ServicesPage", () => {
  beforeEach(() => {
    render(<ServicesPage />);
  });

  it("renders the hero section", () => {
    expect(
      screen.getByText("Comprehensive Industrial Painting Services")
    ).toBeInTheDocument();
  });

  it("renders all service categories", () => {
    const categories = [
      "Surface Preparation",
      "Lead Paint Services",
      "Paint Application",
      "Specialty Services",
      "Restoration Services",
      "Shutdown & Off-Hours Services",
      "Aerial / Height Work",
      "Corrosion Services",
      "Protective Coatings",
      "Additional Specialties",
    ];

    categories.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  it("renders specific services", () => {
    expect(screen.getByText("Abrasive Blasting")).toBeInTheDocument();
    expect(screen.getByText("Lead Paint Abatement")).toBeInTheDocument();
    expect(screen.getByText("Electrostatic Painting")).toBeInTheDocument();
    expect(screen.getByText("Fireproofing")).toBeInTheDocument();
    expect(screen.getByText("Mold Remediation")).toBeInTheDocument();
    expect(screen.getByText("Abseiling")).toBeInTheDocument();
  });

  it("renders the CTA section", () => {
    expect(
      screen.getByText("Need a Painting Service Not Listed?")
    ).toBeInTheDocument();
  });
});
