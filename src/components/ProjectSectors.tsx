"use client";

import ProjectTypeGrid from "@/components/ProjectTypeGrid";
import {
  Home as HomeIcon,
  Building2,
  GraduationCap,
  Theater,
  Landmark,
  Building,
  Factory,
  Truck,
  Radio,
  Zap,
  Fuel,
  TreePine,
} from "lucide-react";

const sectors = [
  {
    title: "Residential",
    description: "Single, two, multi-family, and transient housing projects",
    icon: HomeIcon,
  },
  {
    title: "Commercial",
    description: "Retail, wholesale, services, and hotel facilities",
    icon: Building2,
  },
  {
    title: "Institutional",
    description:
      "Educational, medical, religious, and organizational facilities",
    icon: GraduationCap,
  },
  {
    title: "Public Assembly",
    description:
      "Cultural, entertainment, amusement, and recreational venues",
    icon: Theater,
  },
  {
    title: "Municipal",
    description:
      "Administrative, protection, correctional, and social service buildings",
    icon: Landmark,
  },
  {
    title: "Government",
    description: "Postal, military, aerospace, and international facilities",
    icon: Building,
  },
  {
    title: "Industrial",
    description: "Light, medium, heavy industry, and warehouse facilities",
    icon: Factory,
  },
  {
    title: "Transportation",
    description: "Rail, road, air, and marine infrastructure",
    icon: Truck,
  },
  {
    title: "Communication",
    description: "Radio, television, cable, and telecom facilities",
    icon: Radio,
  },
  {
    title: "Utility",
    description: "Electric, gas, water/wastewater, and solid waste facilities",
    icon: Zap,
  },
  {
    title: "Extraction",
    description:
      "Oil & gas, coal mining, metal ore, and nonmetallic mineral operations",
    icon: Fuel,
  },
  {
    title: "Agricultural",
    description: "Crop, animal, forestal, and fisheries operations",
    icon: TreePine,
  },
];

export default function ProjectSectors() {
  return <ProjectTypeGrid projects={sectors} columns={3} />;
}
