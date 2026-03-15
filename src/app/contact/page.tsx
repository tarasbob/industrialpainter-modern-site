import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import EstimateForm from "@/components/EstimateForm";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Industrial Painter for a free estimate on your industrial or commercial painting project. Call 1 (800) 354-9165 or request a quote online.",
  keywords: [
    "contact industrial painter",
    "free painting estimate",
    "painting quote",
    "industrial painting contact",
  ],
  openGraph: {
    title: "Contact Us | Industrial Painter",
    description:
      "Request a free estimate for your painting project. Call 1 (800) 354-9165.",
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get Your Free Estimate"
        subtitle="No Obligation"
        description="Contact our team for a free consultation and competitive quote. We provide no-obligation on-site inspections for projects of any size."
        ctaText="Call 1 (800) 354-9165"
        ctaHref="tel:18003549165"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeading
                subtitle="Contact Information"
                title="Let's Discuss Your Project"
                description="Reach out by phone, email, or fill out the form. Our team responds within one business day."
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Toll-Free Phone</h3>
                    <a
                      href="tel:18003549165"
                      className="text-orange-500 font-semibold text-lg hover:text-orange-600"
                    >
                      1 (800) 354-9165
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Call for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Office Address</h3>
                    <p className="text-slate-600">
                      6302 Illinois Rd #112
                      <br />
                      Fort Wayne, IN 46804
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday</p>
                    <p className="text-slate-600">8:00am - 5:00pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Online Estimate</h3>
                    <p className="text-slate-600">
                      Fill out the form for a free quote. No obligation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimate form */}
            <EstimateForm />
          </div>
        </div>
      </section>
    </>
  );
}
