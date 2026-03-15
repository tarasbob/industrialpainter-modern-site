import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete industrial and commercial painting services: surface preparation, lead paint abatement, protective coatings, restoration, aerial work, and more. Nationwide coverage.",
  keywords: [
    "industrial painting services",
    "surface preparation",
    "lead paint abatement",
    "protective coatings",
    "sandblasting",
    "commercial painting services",
  ],
  openGraph: {
    title: "Industrial Painting Services | Industrial Painter",
    description:
      "Full-service industrial and commercial painting. Surface prep, lead paint, coatings, restoration, and more.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "Industrial Painter",
  },
  serviceType: "Industrial and Commercial Painting",
  areaServed: "US",
  description:
    "Complete industrial and commercial painting services including surface preparation, lead paint abatement, protective coatings, restoration, aerial work, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        title="Comprehensive Industrial Painting Services"
        subtitle="Full-Service Solutions"
        description="From surface preparation to protective coatings, we provide the complete range of industrial and commercial painting services across all 50 states."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="Everything You Need, One Contractor"
            description="Industrial Painter is a single source painting company responsible for industrial painting, commercial painting, sandblasting, water blasting, deep cleaning, and lead abatement."
            center
          />
          <ServicesGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Need a Painting Service Not Listed?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            We can take on any worst-case scenario with confidence and produce
            perfection. Contact us to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded text-lg transition-colors"
          >
            Request Free Estimate
          </a>
        </div>
      </section>
    </>
  );
}
