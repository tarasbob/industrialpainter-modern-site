import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Industrial Painter | Nationwide Industrial & Commercial Painting Contractor Since 1972",
    template: "%s | Industrial Painter",
  },
  description:
    "Industrial Painter is a nationwide industrial and commercial painting contractor since 1972. Surface preparation, protective coatings, lead abatement, and more across all 50 states.",
  keywords: [
    "industrial painting",
    "commercial painting",
    "painting contractor",
    "surface preparation",
    "protective coatings",
    "lead abatement",
    "sandblasting",
    "nationwide painter",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Industrial Painter",
    title:
      "Industrial Painter | Nationwide Industrial & Commercial Painting Since 1972",
    description:
      "Nationwide industrial and commercial painting contractor. Surface preparation specialists and experienced protective coating applicators serving all 50 states.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
