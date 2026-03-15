"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Factory,
  Landmark,
  Building2,
  TreePine,
} from "lucide-react";

const reasons = [
  {
    icon: TreePine,
    title: "50+ Years Experience",
    desc: "Hundreds of years of collective expertise in our management and production crews.",
  },
  {
    icon: Shield,
    title: "Zero Defect Performance",
    desc: "Our commercial painters are pledged to provide the highest quality services — perfection.",
  },
  {
    icon: Zap,
    title: "On-Time Completion",
    desc: "We strive for on-time completions on every industrial and commercial painting project.",
  },
  {
    icon: Factory,
    title: "Single Source Provider",
    desc: "One company for painting, sandblasting, water blasting, deep cleaning, and lead abatement.",
  },
  {
    icon: Landmark,
    title: "Free Consulting & Quotes",
    desc: "No obligation on-site inspection with free consulting and competitive quotes.",
  },
  {
    icon: Building2,
    title: "Any Scale, Any Scenario",
    desc: "We take on worst-case scenarios with confidence and produce perfection.",
  },
];

export default function HomeWhyUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reasons.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm">{item.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
