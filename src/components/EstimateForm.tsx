"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg border border-slate-200 p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Thank You!
        </h3>
        <p className="text-slate-600">
          We&apos;ve received your request. Our team will contact you within one
          business day with a free estimate.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8"
    >
      <h3 className="text-2xl font-bold text-slate-800 mb-6">
        Request a Free Estimate
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
        >
          <option value="">Select a service...</option>
          <option value="surface-prep">Surface Preparation</option>
          <option value="lead-paint">Lead Paint Services</option>
          <option value="paint-application">Paint Application</option>
          <option value="specialty">Specialty Services</option>
          <option value="restoration">Restoration Services</option>
          <option value="coatings">Protective Coatings</option>
          <option value="corrosion">Corrosion Services</option>
          <option value="aerial">Aerial/Height Work</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded text-lg transition-colors flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        Submit Request
      </button>

      <p className="text-xs text-slate-500 mt-3 text-center">
        No obligation. Free on-site inspection available.
      </p>
    </motion.form>
  );
}
