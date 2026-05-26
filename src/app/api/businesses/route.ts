import { NextResponse } from "next/server";
import { industries } from "@/lib/data";

export async function GET() {
  const businesses = industries.flatMap((industry) =>
    industry.businesses.map((b) => ({
      ...b,
      industryName: industry.name,
      industrySlug: industry.slug,
    }))
  );

  return NextResponse.json({
    success: true,
    data: businesses,
    total: businesses.length,
  });
}
