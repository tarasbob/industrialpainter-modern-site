import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import {
  Shield,
  FileText,
  Car,
  Umbrella,
  HardHat,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Industrial Painter maintains comprehensive safety programs, full insurance coverage, and strict hazardous communication protocols for every job site.",
  keywords: [
    "painting safety policy",
    "industrial painting insurance",
    "painting contractor safety",
    "OSHA compliant painter",
  ],
  openGraph: {
    title: "Safety & Insurance | Industrial Painter",
    description:
      "Comprehensive safety programs and full insurance coverage for every project.",
  },
};

const insuranceTypes = [
  {
    icon: Shield,
    title: "General Liability",
    description:
      "Comprehensive general liability insurance protecting clients and property on every job site.",
  },
  {
    icon: Car,
    title: "Automobile Liability",
    description:
      "Full automobile liability coverage for all vehicles and equipment used in operations.",
  },
  {
    icon: Umbrella,
    title: "Excess Liability",
    description:
      "Additional excess liability coverage providing extended protection beyond standard policies.",
  },
  {
    icon: HardHat,
    title: "Workers Compensation",
    description:
      "Complete workers compensation insurance for all crew members on every project.",
  },
];

const safetyPrograms = [
  {
    icon: FileText,
    title: "Comprehensive Safety Handbooks",
    description:
      "Detailed safety handbooks covering all procedures, protocols, and best practices for every type of project.",
  },
  {
    icon: Shield,
    title: "Safety Policy",
    description:
      "Rigorous safety policies that meet or exceed OSHA standards and industry best practices.",
  },
  {
    icon: CheckCircle,
    title: "Safety Performance",
    description:
      "Continuous monitoring and improvement of safety performance metrics across all job sites.",
  },
  {
    icon: FileText,
    title: "Safety Statement",
    description:
      "Clear safety statements communicated to all workers and clients before project commencement.",
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Communication Program",
    description:
      "Full hazardous communication program ensuring proper handling and labeling of all materials and chemicals.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <HeroSection
        title="Safety Is Our Top Priority"
        subtitle="100% Safety Committed"
        description="Industrial Painter maintains rigorous safety standards, comprehensive insurance coverage, and strict compliance protocols on every job site."
      />

      {/* Insurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Insurance"
            title="Fully Insured for Your Protection"
            description="We carry comprehensive insurance coverage to protect our clients, their property, and our workers on every project."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceTypes.map((ins) => (
              <div
                key={ins.title}
                className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ins.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{ins.title}</h3>
                <p className="text-sm text-slate-600">{ins.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Safety Programs"
            title="Comprehensive Safety Protocols"
            description="Our safety programs are designed to protect everyone on the job site while ensuring efficient project completion."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyPrograms.map((prog) => (
              <div
                key={prog.title}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center shrink-0">
                    <prog.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-slate-800">{prog.title}</h3>
                </div>
                <p className="text-sm text-slate-600">{prog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Questions About Our Safety Standards?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            We&apos;re happy to provide proof of insurance and safety
            documentation for any project. Contact us today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded text-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
