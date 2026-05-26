import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BusinessesContent from "./BusinessesContent";

export const metadata: Metadata = {
  title: "Businesses — Our Ventures",
  description:
    "Explore the companies and ventures built under Vivekananda Technology Labs — from FeatureSignals to future innovations across every industry.",
};

export default function BusinessesPage() {
  return (
    <>
      <Header />
      <main>
        <BusinessesContent />
      </main>
      <Footer />
    </>
  );
}
