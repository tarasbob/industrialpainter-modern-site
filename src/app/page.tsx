import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SectionHeading from "@/components/SectionHeading";
import HomeServices from "@/components/HomeServices";
import HomeProjects from "@/components/HomeProjects";
import HomeWhyUs from "@/components/HomeWhyUs";
import EstimateForm from "@/components/EstimateForm";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Industrial Painter",
  url: "https://industrialpainter.com",
  logo: "https://industrialpainter.com/logo.png",
  description:
    "Nationwide industrial and commercial painting contractor since 1972.",
  telephone: "+1-800-354-9165",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6302 Illinois Rd #112",
    addressLocality: "Fort Wayne",
    addressRegion: "IN",
    postalCode: "46804",
    addressCountry: "US",
  },
  foundingDate: "1972",
  areaServed: "US",
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroSection
        title="America's Trusted Industrial & Commercial Painting Contractor"
        subtitle="Since 1972 — Nationwide Coverage"
        description="Surface preparation specialists and experienced protective coating applicators delivering zero defect performance and on-time completions across all 50 states."
        ctaText="Get Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaHref="/services"
      />

      {/* Stats */}
      <StatsBar />

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Do"
            title="Comprehensive Industrial Painting Services"
            description="From surface preparation to protective coatings, we deliver professional-grade results for projects of every scale."
            center
          />
          <HomeServices />
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Project Types"
            title="Serving Every Sector"
            description="Our experienced crews handle painting projects across residential, commercial, industrial, government, and specialty sectors."
            center
          />
          <HomeProjects />
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              Explore All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Nationwide coverage band */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            subtitle="Coverage Area"
            title="Nationwide Service — All 50 States"
            description="From Alaska to Florida, coast to coast, including Hawaii, Puerto Rico, and the Virgin Islands. No project is too far."
            center
            light
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Northeast",
              "Southeast",
              "Midwest",
              "Southwest",
              "Northwest",
              "Western",
              "Eastern",
              "Alaska",
              "Hawaii",
              "Puerto Rico",
              "Virgin Islands",
            ].map((region) => (
              <span
                key={region}
                className="bg-slate-800 text-slate-300 text-sm px-4 py-2 rounded-full border border-slate-700"
              >
                {region}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/coverage"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded transition-colors"
            >
              View Full Coverage Map
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Why Industrial Painter"
            title="Built on Decades of Excellence"
            description="Since 1972, we have been the trusted choice for industrial and commercial painting projects across America."
            center
          />
          <HomeWhyUs />
        </div>
      </section>

      {/* CTA / Estimate Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                subtitle="Get Started"
                title="Request Your Free Estimate Today"
                description="Contact our team for a no-obligation consultation. We provide free on-site inspections and competitive quotes for projects of any size."
              />
              <div className="space-y-4 text-slate-600">
                <p className="font-medium">
                  Friendly &bull; Prompt &bull; Reliable &bull; Affordable
                </p>
                <p>
                  Call us toll-free at{" "}
                  <a
                    href="tel:18003549165"
                    className="text-orange-500 font-bold hover:text-orange-600"
                  >
                    1 (800) 354-9165
                  </a>
                </p>
                <p className="text-sm">
                  Monday - Friday, 8:00am - 5:00pm
                </p>
              </div>
            </div>
            <EstimateForm />
          </div>
        </div>
      </section>
    </>
  );
}
