import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import {
  CheckCircle,
  Users,
  Award,
  Target,
  Heart,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 1972, Industrial Painter has been a nationwide industrial and commercial painting contractor delivering zero defect performance and on-time completions.",
  keywords: [
    "about industrial painter",
    "painting contractor since 1972",
    "nationwide painting company",
    "commercial painting history",
  ],
  openGraph: {
    title: "About Us | Industrial Painter",
    description:
      "Nationwide industrial and commercial painting contractor since 1972.",
  },
};

const values = [
  {
    icon: Target,
    title: "Zero Defect Performance",
    description:
      "We are pledged to provide the most efficient and highest quality services available — perfection.",
  },
  {
    icon: Clock,
    title: "On-Time Completions",
    description:
      "We strive to provide on-time completions for any industrial painting or commercial painting project.",
  },
  {
    icon: Users,
    title: "Single Source Provider",
    description:
      "One company responsible for painting, sandblasting, water blasting, deep cleaning, and lead abatement.",
  },
  {
    icon: Heart,
    title: "Free Consulting & Quotes",
    description:
      "We provide free consulting and competitive quotes with no obligation on-site inspections.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "The very best paint manufacturers represent the backbone of expertise in our product engineering section.",
  },
  {
    icon: CheckCircle,
    title: "Friendly, Prompt, Reliable",
    description:
      "Our approach is friendly, prompt, reliable, and affordable — delivering results you can count on.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Industrial Painter",
  url: "https://industrialpainter.com",
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
  description:
    "Nationwide industrial and commercial painting contractor since 1972.",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        title="Trusted Since 1972"
        subtitle="Over 50 Years of Excellence"
        description="Industrial Painter is a nationwide industrial painting and commercial painting contractor, comprised of surface preparation specialists and experienced protective coating applicators."
      />

      <StatsBar />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Story"
            title="Decades of Industrial Painting Excellence"
          />
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p>
              Since 1972, Industrial Painter has been a nationwide industrial
              painting and commercial painting contractor, comprised of surface
              preparation specialists and experienced protective coating
              applicators. The management and production crews collectively
              provide over hundreds of years in the painting business.
            </p>
            <p>
              Our commercial painters are pledged to provide the most efficient
              and highest quality services available, known as{" "}
              <strong className="text-slate-800">perfection</strong>.
            </p>
            <p>
              Industrial Painters strives to provide customers zero defect
              performance and on-time completions, for any industrial painting
              or commercial painting project. The very best paint manufacturers
              represent the backbone of expertise in our product engineering
              section.
            </p>
            <p>
              We can take on any worst case scenarios with confidence and
              produce perfection. Commercial Painter is a single source painting
              company responsible for industrial painting and commercial
              painting, sandblasting, water blasting, deep cleaning and lead
              abatement projects.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us Every Day"
            description="These core commitments guide everything we do, from the smallest repair to the largest industrial project."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Work With the Best?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Over 50 years of experience. All 50 states. One call.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded text-lg transition-colors"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:18003549165"
              className="inline-flex items-center justify-center border-2 border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-4 rounded text-lg transition-colors"
            >
              Call 1 (800) 354-9165
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
