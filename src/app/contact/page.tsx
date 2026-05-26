import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Get In Touch",
  description:
    "Reach out to Vivekananda Technology Labs — whether you want to collaborate, invest, partner, or simply learn more about our mission.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
