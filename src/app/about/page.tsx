import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Our Vision, Mission & Heritage",
  description:
    "Discover the story behind Vivekananda Technology Labs — our mission to carry forward Bharat's 5,000-year legacy of scientific excellence and spiritual wisdom into the next technological revolution.",
  openGraph: {
    title: "About Vivekananda Technology Labs | Our Vision & Heritage",
    description:
      "Learn about our mission to advance Bharat's technological renaissance, inspired by India's ancient civilization and Swami Vivekananda's vision.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
