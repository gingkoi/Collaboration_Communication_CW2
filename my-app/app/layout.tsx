import Navbar from "@/components/Header/Navbar";
import "./globals.css";
import Banner from "@/components/Header/Banner";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Overtime Fitness Gym",
  description: "Overtime Fitness Gym website concept for CW2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppin scroll-smooth">
        <Banner />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
