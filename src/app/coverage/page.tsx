import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CoverageMap from "@/components/CoverageMap";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Coverage",
  description:
    "Industrial Painter provides nationwide coverage across all 50 states, Alaska, Hawaii, Puerto Rico, and the Virgin Islands. Industrial and commercial painting wherever you need us.",
  keywords: [
    "nationwide painting contractor",
    "painting all 50 states",
    "industrial painting coverage",
    "commercial painting nationwide",
  ],
  openGraph: {
    title: "Nationwide Coverage | Industrial Painter",
    description:
      "Serving all 50 states including Alaska, Hawaii, Puerto Rico, and the Virgin Islands.",
  },
};

const allStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

export default function CoveragePage() {
  return (
    <>
      <HeroSection
        title="Nationwide Coverage, Coast to Coast"
        subtitle="All 50 States & Territories"
        description="Industrial Painter provides professional industrial and commercial painting services across the entire United States, including Alaska, Hawaii, Puerto Rico, and the Virgin Islands."
      />

      <StatsBar />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Regions"
            title="Coverage by Region"
            description="Our crews are strategically positioned to serve every region of the country with rapid response times."
            center
          />
          <CoverageMap />
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="All 50 States"
            title="Complete State-by-State Coverage"
            description="We serve every state in the nation. No project is too far."
            center
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {allStates.map((state) => (
              <div
                key={state}
                className="bg-white border border-slate-200 rounded px-4 py-3 text-sm font-medium text-slate-700 text-center hover:border-orange-300 hover:text-orange-600 transition-colors"
              >
                {state}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Puerto Rico", "Virgin Islands"].map((territory) => (
              <div
                key={territory}
                className="bg-orange-50 border border-orange-200 rounded px-6 py-3 text-sm font-semibold text-orange-700 text-center"
              >
                {territory}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Wherever you are in the United States, our team is ready to provide
            a free estimate for your industrial or commercial painting project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded text-lg transition-colors"
          >
            Get Free Estimate
          </a>
        </div>
      </section>
    </>
  );
}
