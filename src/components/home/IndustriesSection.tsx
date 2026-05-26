"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data";
import { bharat } from "@/theme/theme";
import Link from "next/link";

export default function IndustriesSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: bharat.cream.main,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          label="Industries"
          title="Building Across Every Sector"
          sanskrit="सर्वे भवन्तु सुखिनः"
          subtitle="From software to space, healthcare to agriculture — we are building ventures across every industry that shapes the future of Bharat and the world."
        />

        <Grid container spacing={3}>
          {industries.map((industry) => (
            <Grid key={industry.slug} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: bharat.warmWhite,
                  opacity: industry.status === "upcoming" ? 0.75 : 1,
                }}
              >
                <CardActionArea
                  component={Link}
                  href={`/industries/${industry.slug}`}
                  sx={{ height: "100%", p: 0 }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography sx={{ fontSize: "2.2rem" }}>
                        {industry.icon}
                      </Typography>
                      <Chip
                        label={industry.status === "active" ? "Active" : "Coming Soon"}
                        size="small"
                        sx={{
                          backgroundColor:
                            industry.status === "active"
                              ? bharat.saffron.light + "20"
                              : bharat.cream.dark,
                          color:
                            industry.status === "active"
                              ? bharat.saffron.main
                              : bharat.brown.light,
                          fontWeight: 500,
                          fontSize: "0.7rem",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 0.5,
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 600,
                      }}
                    >
                      {industry.name}
                    </Typography>
                    {industry.nameSanskrit && (
                      <Typography
                        sx={{
                          fontFamily: "var(--font-playfair)",
                          fontStyle: "italic",
                          fontSize: "0.78rem",
                          color: bharat.saffron.main,
                          mb: 1.5,
                        }}
                      >
                        {industry.nameSanskrit}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        color: bharat.brown.light,
                        mb: 2,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {industry.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: bharat.saffron.main,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        Explore
                      </Typography>
                      <ArrowForwardIcon sx={{ fontSize: "0.9rem" }} />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
