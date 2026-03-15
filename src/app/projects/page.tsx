import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectSectors from "@/components/ProjectSectors";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Industrial Painter handles painting projects across every sector: residential, commercial, institutional, industrial, government, transportation, utility, and more.",
  keywords: [
    "industrial painting projects",
    "commercial painting projects",
    "government painting",
    "residential painting",
    "institutional painting",
  ],
  openGraph: {
    title: "Project Types | Industrial Painter",
    description:
      "Painting projects across every sector — residential, commercial, industrial, government, and more.",
  },
};

const structures = [
  "Airports",
  "Aircraft Hangars",
  "Arenas",
  "Stadiums",
  "Banks",
  "Casinos",
  "Colleges",
  "Convention Centers",
  "Courthouses",
  "Factories",
  "Fire Stations",
  "Government Buildings",
  "High Rise Buildings",
  "Hospitals",
  "Hotels",
  "Jails",
  "Libraries",
  "Malls",
  "Military Buildings",
  "Museums",
  "Office Buildings",
  "Parking Garages",
  "Power Plants",
  "Schools",
  "Universities",
  "Warehouses",
  "Water Treatment Plants",
];

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        title="Projects Across Every Sector"
        subtitle="12 Industry Sectors"
        description="From residential homes to power plants, our experienced crews deliver professional painting results for any structure, any scale."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="By Sector"
            title="Project Categories"
            description="We serve every major industry sector with specialized painting crews and equipment."
            center
          />
          <ProjectSectors />
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Specific Structures"
            title="Types of Facilities We Paint"
            description="Our portfolio includes virtually every type of structure and facility."
            center
          />
          <div className="flex flex-wrap justify-center gap-3">
            {structures.map((s) => (
              <span
                key={s}
                className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full hover:border-orange-300 hover:text-orange-600 transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Don&apos;t See Your Project Type?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            We handle projects of every scale and complexity. Contact us to
            discuss your specific requirements.
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
