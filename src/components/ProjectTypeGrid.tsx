"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface ProjectType {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProjectTypeGridProps {
  projects: ProjectType[];
  columns?: 2 | 3 | 4;
}

export default function ProjectTypeGrid({
  projects,
  columns = 3,
}: ProjectTypeGridProps) {
  const colClass =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${colClass} gap-6`}>
      {projects.map((project, i) => {
        const Icon = project.icon;
        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
              <Icon className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{project.title}</h3>
            <p className="text-sm text-slate-600">{project.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
