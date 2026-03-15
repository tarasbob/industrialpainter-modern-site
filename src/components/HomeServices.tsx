"use client";

import ServiceCard from "@/components/ServiceCard";
import {
  Paintbrush,
  Shield,
  Wrench,
  Flame,
  Droplets,
  Factory,
} from "lucide-react";

const servicesPreview = [
  {
    title: "Surface Preparation",
    description:
      "Complete surface preparation including abrasive blasting, chemical and high-pressure cleaning.",
    items: [
      "Abrasive Blasting",
      "Chemical Cleaning",
      "High Pressure Cleaning",
      "Steam Cleaning",
    ],
    icon: Wrench,
  },
  {
    title: "Lead Paint Services",
    description:
      "Certified lead paint abatement, assessment, containment, and encapsulation.",
    items: [
      "Lead Paint Abatement",
      "Lead Paint Assessment",
      "Lead Paint Containment",
      "Lead Paint Encapsulation",
    ],
    icon: Shield,
  },
  {
    title: "Paint Application",
    description:
      "Advanced spray painting technologies for any industrial or commercial project.",
    items: [
      "Air Spray Painting",
      "Airless Spray Painting",
      "Electrostatic Painting",
      "HVLP Spray Painting",
    ],
    icon: Paintbrush,
  },
  {
    title: "Protective Coatings",
    description:
      "High-performance coating systems for extreme environments and conditions.",
    items: [
      "High-Temperature Coating",
      "Immersion Coating",
      "Corrosion Coating",
    ],
    icon: Droplets,
  },
  {
    title: "Restoration Services",
    description:
      "Emergency response for fire, smoke, water, mold damage, and hurricane recovery.",
    items: [
      "Fire Damage Restoration",
      "Water Damage Restoration",
      "Mold Remediation",
      "Hurricane Recovery",
    ],
    icon: Flame,
  },
  {
    title: "Specialty Services",
    description:
      "Advanced industrial services including fireproofing, tank lining, and containment.",
    items: [
      "Fireproofing",
      "Secondary Containment",
      "Tank Lining",
      "Coating Failure Analysis",
    ],
    icon: Factory,
  },
];

export default function HomeServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesPreview.map((service, i) => (
        <ServiceCard key={service.title} {...service} index={i} />
      ))}
    </div>
  );
}
