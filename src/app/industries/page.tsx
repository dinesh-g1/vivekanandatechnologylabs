import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = {
  title: "Industries — Sectors We Serve",
  description:
    "Explore the industries and sectors where Vivekananda Technology Labs is building the future — from IT & Software to Space & Defence, Healthcare, Agriculture, and beyond.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <IndustriesContent />
      </main>
      <Footer />
    </>
  );
}
