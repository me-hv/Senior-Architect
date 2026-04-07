import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";
import { PageTransition } from "@/components/layout/PageTransition";
import { AnimatePresence } from "framer-motion";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Harry Verma | UI/UX & Full-Stack Developer",
  description: "A high-performance portfolio highlighting dual expertise as a UI/UX Designer and Full-Stack Developer, featuring Spatial UI and Liquid Glass aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark overflow-x-hidden`} style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className="antialiased min-h-screen selection:bg-[#7c3aed] selection:text-white overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <Logo />
          <Navbar />
          <PageTransition>
            <AnimatePresence mode="wait">
              {children}
            </AnimatePresence>
          </PageTransition>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
