"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Years in Business" },
  { value: "50", label: "States Covered" },
  { value: "100%", label: "Safety Committed" },
  { value: "24/7", label: "Emergency Response" },
];

export default function StatsBar() {
  return (
    <section className="bg-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
