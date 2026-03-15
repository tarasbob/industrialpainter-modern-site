"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Get Free Estimate",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  overlay = true,
}: HeroSectionProps) {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background pattern */}
      {overlay && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(249,115,22,0.3) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Orange accent glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            {subtitle}
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded text-lg transition-colors"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center border-2 border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-4 rounded text-lg transition-colors"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom orange accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" />
    </section>
  );
}
