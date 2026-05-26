import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BusinessDetailContent from "./BusinessDetailContent";
import { getBusinessBySlug, getAllBusinesses } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBusinesses().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) return { title: "Business Not Found" };

  return {
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    openGraph: {
      title: `${business.name} | Vivekananda Technology Labs`,
      description: business.tagline,
    },
  };
}

export default async function BusinessDetailPage({ params }: Props) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) notFound();

  return (
    <>
      <Header />
      <main>
        <BusinessDetailContent business={business} />
      </main>
      <Footer />
    </>
  );
}
