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
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data";
import { bharat } from "@/theme/theme";
import Link from "next/link";

export default function IndustriesContent() {
  const active = industries.filter((i) => i.status === "active");
  const upcoming = industries.filter((i) => i.status === "upcoming");

  return (
    <>
      {/* ── Page Header ──────────────────────────────────────────── */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: bharat.cream.dark,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 60% at 50% 30%, ${bharat.gold.main}10 0%, transparent 70%)`,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography variant="subtitle2" sx={{ color: bharat.saffron.main, mb: 2 }}>
            Industries
          </Typography>
          <Typography variant="h1" sx={{ mb: 3 }}>
            Building Across Every Sector
          </Typography>
          <Typography variant="body1" sx={{ color: bharat.brown.light, fontSize: "1.1rem" }}>
            From the digital backbone of IT & Software to the frontiers of Space & Defence — our
            ventures span every industry critical to Bharat&apos;s future.
          </Typography>
        </Container>
      </Box>

      {/* ── Active Industries ─────────────────────────────────────── */}
      {active.length > 0 && (
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: bharat.warmWhite }}>
          <Container maxWidth="xl">
            <SectionHeading
              label="Active"
              title="Where We Are Building Today"
              align="left"
            />
            <Grid container spacing={3}>
              {active.map((industry) => (
                <Grid key={industry.slug} size={{ xs: 12, md: 6 }}>
                  <Card sx={{ backgroundColor: bharat.cream.light }}>
                    <CardActionArea
                      component={Link}
                      href={`/industries/${industry.slug}`}
                      sx={{ p: 0 }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                          <Typography sx={{ fontSize: "2.5rem" }}>{industry.icon}</Typography>
                          <Box>
                            <Typography variant="h4" sx={{ fontFamily: "var(--font-playfair)" }}>
                              {industry.name}
                            </Typography>
                            {industry.nameSanskrit && (
                              <Typography
                                sx={{
                                  fontFamily: "var(--font-playfair)",
                                  fontStyle: "italic",
                                  color: bharat.saffron.main,
                                  fontSize: "0.85rem",
                                }}
                              >
                                {industry.nameSanskrit}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                        <Typography variant="body1" sx={{ color: bharat.brown.light, mb: 3 }}>
                          {industry.description}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                          {industry.businesses.map((b) => (
                            <Chip
                              key={b.slug}
                              label={b.name}
                              size="small"
                              sx={{
                                backgroundColor: bharat.saffron.light + "20",
                                color: bharat.saffron.main,
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Box>
                        <Typography
                          sx={{
                            color: bharat.saffron.main,
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          View Details <ArrowForwardIcon sx={{ fontSize: "0.9rem" }} />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* ── Upcoming Industries ───────────────────────────────────── */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: active.length > 0 ? bharat.cream.main : bharat.warmWhite,
        }}
      >
        <Container maxWidth="xl">
          <SectionHeading
            label="Coming Soon"
            title="Future Industries"
            sanskrit="भविष्यत्"
            subtitle="These are the sectors where we will establish our presence in the coming years. Each one represents a critical pillar of Bharat's technological sovereignty."
          />
          <Grid container spacing={3}>
            {upcoming.map((industry) => (
              <Grid key={industry.slug} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: bharat.warmWhite,
                    opacity: 0.8,
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography sx={{ fontSize: "2.2rem", mb: 2 }}>
                      {industry.icon}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
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
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {industry.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
