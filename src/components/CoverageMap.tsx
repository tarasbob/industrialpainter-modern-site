"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Northeast",
    states: [
      "Connecticut", "Delaware", "Maine", "Maryland", "Massachusetts",
      "New Hampshire", "New Jersey", "New York", "Pennsylvania",
      "Rhode Island", "Vermont",
    ],
  },
  {
    name: "Southeast",
    states: [
      "Alabama", "Arkansas", "Florida", "Georgia", "Kentucky",
      "Louisiana", "Mississippi", "North Carolina", "South Carolina",
      "Tennessee", "Virginia", "West Virginia",
    ],
  },
  {
    name: "Midwest",
    states: [
      "Illinois", "Indiana", "Iowa", "Kansas", "Michigan",
      "Minnesota", "Missouri", "Nebraska", "North Dakota",
      "Ohio", "South Dakota", "Wisconsin",
    ],
  },
  {
    name: "Southwest",
    states: ["Arizona", "New Mexico", "Oklahoma", "Texas"],
  },
  {
    name: "Western",
    states: [
      "California", "Colorado", "Idaho", "Montana", "Nevada",
      "Oregon", "Utah", "Washington", "Wyoming",
    ],
  },
  {
    name: "Pacific & Territories",
    states: ["Alaska", "Hawaii", "Puerto Rico", "Virgin Islands"],
  },
];

export default function CoverageMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {regions.map((region, i) => (
        <motion.div
          key={region.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-orange-500" />
            <h3 className="font-bold text-slate-800 text-lg">{region.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {region.states.map((state) => (
              <span
                key={state}
                className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full"
              >
                {state}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
