"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  index?: number;
  id?: string;
}

export default function ServiceCard({
  title,
  description,
  items,
  icon: Icon,
  index = 0,
  id,
}: ServiceCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
        <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="text-orange-500 mt-1 font-bold text-xs">&#9654;</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
