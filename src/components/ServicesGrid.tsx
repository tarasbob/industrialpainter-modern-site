"use client";

import ServiceCard from "@/components/ServiceCard";
import {
  Wrench,
  Shield,
  Paintbrush,
  Flame,
  Droplets,
  Clock,
  ArrowUpFromDot,
  Bug,
  Sparkles,
  Settings,
} from "lucide-react";

const serviceCategories = [
  {
    id: "surface-prep",
    title: "Surface Preparation",
    description:
      "Professional surface preparation is the foundation of every quality paint job. Our specialists use industry-leading techniques.",
    items: [
      "Abrasive Blasting",
      "Chemical Cleaning",
      "High Pressure Cleaning",
      "Steam Cleaning",
    ],
    icon: Wrench,
  },
  {
    id: "lead-paint",
    title: "Lead Paint Services",
    description:
      "Certified lead paint handling including complete abatement, assessment, containment, and encapsulation services.",
    items: [
      "Lead Paint Abatement",
      "Lead Paint Assessment",
      "Lead Paint Containment",
      "Lead Paint Encapsulation",
    ],
    icon: Shield,
  },
  {
    id: "paint-application",
    title: "Paint Application",
    description:
      "Advanced spray painting technologies tailored to your project requirements for optimal coverage and finish.",
    items: [
      "Air Spray Painting",
      "Airless Spray Painting",
      "Electrostatic Painting",
      "HVLP Spray Painting",
    ],
    icon: Paintbrush,
  },
  {
    id: "specialty",
    title: "Specialty Services",
    description:
      "Comprehensive specialty services for complex industrial, commercial, institutional, and architectural requirements.",
    items: [
      "Industrial, Commercial, Institutional, Architectural Services",
      "Coating Failure Analysis, Implementation, Inspection",
      "Fireproofing",
      "Secondary Containment",
      "Tank Lining",
      "Water Proofing",
    ],
    icon: Settings,
  },
  {
    id: "restoration",
    title: "Restoration Services",
    description:
      "Emergency response and full restoration services for damage from fire, smoke, water, mold, and natural disasters.",
    items: [
      "Fire Damage Restoration",
      "Mold Remediation",
      "Smoke Damage Restoration",
      "Water Damage Restoration",
      "Hurricane Recovery",
    ],
    icon: Flame,
  },
  {
    id: "shutdown",
    title: "Shutdown & Off-Hours Services",
    description:
      "Flexible scheduling to minimize disruption to your operations — we work when you don't.",
    items: [
      "Holiday Shutdown Painting",
      "Off-Shift Painting",
      "Shutdown Maintenance Painting",
      "Week-End Painting",
    ],
    icon: Clock,
  },
  {
    id: "aerial",
    title: "Aerial / Height Work",
    description:
      "Experienced crews for high-access painting and coating work using specialized equipment and safety protocols.",
    items: ["Abseiling", "High Work", "Rigging", "Swing Stage Work"],
    icon: ArrowUpFromDot,
  },
  {
    id: "corrosion",
    title: "Corrosion Services",
    description:
      "Complete corrosion management from survey and assessment to removal and long-term protection.",
    items: [
      "Corrosion Control",
      "Corrosion Protection",
      "Corrosion Removal",
      "Corrosion Survey",
    ],
    icon: Bug,
  },
  {
    id: "coatings",
    title: "Protective Coatings",
    description:
      "High-performance coating systems designed for extreme temperatures, immersion environments, and corrosive conditions.",
    items: [
      "High-Temperature Coating",
      "Immersion Coating",
      "Corrosion Coating",
    ],
    icon: Droplets,
  },
  {
    id: "additional",
    title: "Additional Specialties",
    description:
      "Specialized painting and maintenance services for facilities, equipment, and infrastructure.",
    items: [
      "Ceiling Cleaning & Restoration",
      "Pipe Labeling & Color Coding",
      "Line Striping & Stenciling",
      "Machinery, Cranes, Sprinkler Systems, Storage Racks",
      "Bins, Silos, Structural Steel, Tanks",
    ],
    icon: Sparkles,
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceCategories.map((cat, i) => (
        <ServiceCard
          key={cat.id}
          id={cat.id}
          title={cat.title}
          description={cat.description}
          items={cat.items}
          icon={cat.icon}
          index={i}
        />
      ))}
    </div>
  );
}
