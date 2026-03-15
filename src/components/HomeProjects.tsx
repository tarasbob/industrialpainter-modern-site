"use client";

import ProjectTypeGrid from "@/components/ProjectTypeGrid";
import {
  Home as HomeIcon,
  Building2,
  Factory,
  Landmark,
  Truck,
  Zap,
} from "lucide-react";

const projectTypes = [
  {
    title: "Residential",
    description: "Single, two, and multi-family housing projects",
    icon: HomeIcon,
  },
  {
    title: "Commercial",
    description: "Retail, wholesale, services, and hospitality",
    icon: Building2,
  },
  {
    title: "Industrial",
    description: "Light, medium, heavy industry and warehouses",
    icon: Factory,
  },
  {
    title: "Government",
    description: "Postal, military, aerospace, and international",
    icon: Landmark,
  },
  {
    title: "Transportation",
    description: "Rail, road, air, and marine infrastructure",
    icon: Truck,
  },
  {
    title: "Utility",
    description: "Electric, gas, water/wastewater, and solid waste",
    icon: Zap,
  },
];

export default function HomeProjects() {
  return <ProjectTypeGrid projects={projectTypes} columns={3} />;
}
