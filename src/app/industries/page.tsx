import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industrial Painter serves airports, hospitals, factories, power plants, schools, stadiums, warehouses, water treatment plants, and hundreds more facility types nationwide.",
  keywords: [
    "industrial painting industries",
    "factory painting",
    "hospital painting",
    "warehouse painting",
    "power plant painting",
    "airport painting",
  ],
  openGraph: {
    title: "Industries Served | Industrial Painter",
    description:
      "We paint airports, hospitals, factories, power plants, schools, stadiums, warehouses, and more.",
  },
};

const industryGroups = [
  {
    category: "Aviation & Transportation",
    items: [
      "Airports",
      "Aircraft Hangars",
      "Bridges",
      "Rail Yards",
      "Marine Ports",
      "Parking Garages",
    ],
  },
  {
    category: "Healthcare & Education",
    items: [
      "Hospitals",
      "Medical Centers",
      "Colleges",
      "Universities",
      "Schools",
      "Libraries",
    ],
  },
  {
    category: "Entertainment & Hospitality",
    items: [
      "Arenas",
      "Stadiums",
      "Casinos",
      "Convention Centers",
      "Hotels",
      "Museums",
    ],
  },
  {
    category: "Government & Public Safety",
    items: [
      "Courthouses",
      "Fire Stations",
      "Government Buildings",
      "Military Buildings",
      "Jails",
      "Post Offices",
    ],
  },
  {
    category: "Commercial & Retail",
    items: [
      "Banks",
      "High Rise Buildings",
      "Malls",
      "Office Buildings",
      "Retail Centers",
      "Shopping Complexes",
    ],
  },
  {
    category: "Industrial & Energy",
    items: [
      "Factories",
      "Power Plants",
      "Warehouses",
      "Water Treatment Plants",
      "Refineries",
      "Manufacturing Plants",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Bridges",
      "Dams",
      "Pipelines",
      "Storage Tanks",
      "Silos",
      "Structural Steel",
    ],
  },
  {
    category: "Specialty Structures",
    items: [
      "Cranes",
      "Sprinkler Systems",
      "Storage Racks",
      "Bins",
      "Machinery",
      "Communication Towers",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <HeroSection
        title="Industries We Serve"
        subtitle="Every Sector, Every Structure"
        description="From airports to water treatment plants, our experienced crews provide professional painting services for virtually every type of facility and structure."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Industries"
            title="Comprehensive Industry Coverage"
            description="We bring decades of specialized experience to every industry sector."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryGroups.map((group) => (
              <div
                key={group.category}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-slate-800 px-5 py-3">
                  <h3 className="text-white font-bold text-sm">
                    {group.category}
                  </h3>
                </div>
                <ul className="p-5 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Your Industry, Our Expertise
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            No matter your industry or facility type, Industrial Painter has the
            experience and equipment to deliver exceptional results.
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
