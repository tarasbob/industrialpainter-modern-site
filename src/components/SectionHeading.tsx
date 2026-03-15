"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {subtitle && (
        <span
          className={`text-sm font-semibold uppercase tracking-wider ${
            light ? "text-orange-400" : "text-orange-500"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-black mt-2 mb-4 ${
          light ? "text-white" : "text-slate-800"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
