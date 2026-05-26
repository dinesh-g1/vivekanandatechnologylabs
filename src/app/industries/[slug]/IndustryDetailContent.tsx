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
  Stack,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { bharat } from "@/theme/theme";
import { Industry } from "@/lib/types";
import Link from "next/link";

interface Props {
  industry: Industry;
}

export default function IndustryDetailContent({ industry }: Props) {
  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: bharat.cream.dark,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography sx={{ fontSize: "3.5rem", mb: 2 }}>{industry.icon}</Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: bharat.saffron.main, mb: 1, letterSpacing: "0.06em" }}
          >
            {industry.status === "active" ? "Active Industry" : "Coming Soon"}
          </Typography>
          <Typography variant="h1" sx={{ mb: 1 }}>
            {industry.name}
          </Typography>
          {industry.nameSanskrit && (
            <Typography
              sx={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "1.2rem",
                color: bharat.saffron.main,
                mb: 3,
              }}
            >
              {industry.nameSanskrit}
            </Typography>
          )}
          <Typography variant="body1" sx={{ color: bharat.brown.light, fontSize: "1.1rem" }}>
            {industry.description}
          </Typography>
        </Container>
      </Box>

      {/* ── Businesses ─────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: bharat.warmWhite }}>
        <Container maxWidth="xl">
          {industry.businesses.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "var(--font-playfair)", mb: 2, color: bharat.brown.light }}
              >
                Ventures Coming Soon
              </Typography>
              <Typography variant="body1" sx={{ color: bharat.brown.light, mb: 4 }}>
                We are actively planning our first ventures in {industry.name}. Stay tuned for
                exciting announcements.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                color="primary"
              >
                Get Involved
              </Button>
            </Box>
          ) : (
            <Grid container spacing={4} justifyContent="center">
              {industry.businesses.map((business) => (
                <Grid key={business.slug} size={{ xs: 12, md: 8 }}>
                  <Card sx={{ backgroundColor: bharat.cream.light }}>
                    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={3}
                        alignItems={{ md: "center" }}
                        sx={{ mb: 3 }}
                      >
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${bharat.saffron.main}, ${bharat.maroon.main})`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: bharat.warmWhite,
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            flexShrink: 0,
                            fontFamily: "var(--font-playfair)",
                          }}
                        >
                          {business.name.slice(0, 2).toUpperCase()}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5, flexWrap: "wrap" }}>
                            <Typography variant="h4" sx={{ fontFamily: "var(--font-playfair)" }}>
                              {business.name}
                            </Typography>
                            <Chip
                              label={business.status === "in-progress" ? "In Progress" : business.status}
                              size="small"
                              sx={{
                                backgroundColor: bharat.saffron.light + "20",
                                color: bharat.saffron.main,
                                fontWeight: 500,
                              }}
                            />
                          </Box>
                          <Typography variant="subtitle1" sx={{ color: bharat.brown.light }}>
                            {business.tagline}
                          </Typography>
                        </Box>
                      </Stack>

                      <Typography variant="body1" sx={{ color: bharat.brown.light, mb: 3, lineHeight: 1.8 }}>
                        {business.description}
                      </Typography>

                      <Typography variant="subtitle2" sx={{ mb: 1.5, color: bharat.saffron.main }}>
                        Key Features
                      </Typography>
                      <Grid container spacing={1} sx={{ mb: 3 }}>
                        {business.features.slice(0, 6).map((feature, i) => (
                          <Grid key={i} size={{ xs: 12, sm: 6 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                "&::before": { content: '"▸ "', color: bharat.saffron.main, fontWeight: 700 },
                              }}
                            >
                              {feature}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>

                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                        {business.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: bharat.cream.dark,
                              color: bharat.brown.light,
                              fontWeight: 500,
                              fontSize: "0.75rem",
                              mb: 0.5,
                            }}
                          />
                        ))}
                      </Stack>

                      <Stack direction="row" spacing={2}>
                        {business.links.website && (
                          <Typography
                            component="a"
                            href={business.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: bharat.saffron.main,
                              fontWeight: 600,
                              fontSize: "0.9rem",
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            Visit Website <OpenInNewIcon sx={{ fontSize: "0.9rem" }} />
                          </Typography>
                        )}
                        <Button
                          component={Link}
                          href={`/businesses/${business.slug}`}
                          size="small"
                          variant="text"
                          sx={{ color: bharat.brown.light }}
                        >
                          Full Details →
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}
