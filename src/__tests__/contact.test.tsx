import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";


describe("ContactPage", () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  it("renders the hero section", () => {
    expect(screen.getByText("Get Your Free Estimate")).toBeInTheDocument();
  });

  it("renders the phone number", () => {
    const phones = screen.getAllByText("1 (800) 354-9165");
    expect(phones.length).toBeGreaterThan(0);
  });

  it("renders the address", () => {
    expect(screen.getByText(/6302 Illinois Rd/)).toBeInTheDocument();
    expect(screen.getByText(/Fort Wayne, IN 46804/)).toBeInTheDocument();
  });

  it("renders business hours", () => {
    expect(screen.getByText("Monday - Friday")).toBeInTheDocument();
    expect(screen.getByText("8:00am - 5:00pm")).toBeInTheDocument();
  });

  it("renders the estimate form", () => {
    expect(
      screen.getByText("Request a Free Estimate")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("First Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("Email *")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone *")).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    expect(
      screen.getByRole("button", { name: /Submit Request/i })
    ).toBeInTheDocument();
  });

  it("renders service select options", () => {
    const select = screen.getByLabelText("Service Needed");
    expect(select).toBeInTheDocument();
  });
});
