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
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllBusinesses } from "@/lib/data";
import { bharat } from "@/theme/theme";
import Link from "next/link";

export default function OurBusinesses() {
  const businesses = getAllBusinesses();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: bharat.warmWhite,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          label="Our Ventures"
          title="Companies We Are Building"
          sanskrit="कर्मण्येवाधिकारस्ते"
          subtitle="Each venture is a step towards fulfilling our mission — building technology that serves humanity while advancing Bharat's position in the global order."
        />

        {businesses.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h5" sx={{ mb: 2, color: bharat.brown.light }}>
              Our first ventures are being built right now.
            </Typography>
            <Typography variant="body1" sx={{ color: bharat.brown.light }}>
              Stay tuned for exciting announcements in the coming months.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {businesses.map((business) => (
              <Grid key={business.slug} size={{ xs: 12, md: 8 }}>
                <Card
                  sx={{
                    backgroundColor: bharat.cream.light,
                    overflow: "visible",
                  }}
                >
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
                        FS
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            mb: 0.5,
                            flexWrap: "wrap",
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {business.name}
                          </Typography>
                          <Chip
                            label={
                              business.status === "in-progress"
                                ? "In Progress"
                                : business.status === "live"
                                  ? "Live"
                                  : "Planned"
                            }
                            size="small"
                            sx={{
                              backgroundColor: bharat.saffron.light + "20",
                              color: bharat.saffron.main,
                              fontWeight: 500,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: bharat.brown.light, mb: 2 }}
                        >
                          {business.tagline}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography
                      variant="body1"
                      sx={{ color: bharat.brown.light, mb: 3, lineHeight: 1.8 }}
                    >
                      {business.description}
                    </Typography>

                    {/* Features */}
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1.5, color: bharat.saffron.main }}
                    >
                      Key Features
                    </Typography>
                    <Grid container spacing={1} sx={{ mb: 3 }}>
                      {business.features.slice(0, 6).map((feature, i) => (
                        <Grid key={i} size={{ xs: 12, sm: 6 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              "&::before": {
                                content: '"▸ "',
                                color: bharat.saffron.main,
                                fontWeight: 700,
                              },
                            }}
                          >
                            {feature}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>

                    {/* Tech Stack */}
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                      sx={{ mb: 3 }}
                    >
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

                    {/* Links */}
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
                      {business.links.github && (
                        <Typography
                          component="a"
                          href={business.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: bharat.brown.light,
                            fontWeight: 500,
                            fontSize: "0.9rem",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          GitHub <OpenInNewIcon sx={{ fontSize: "0.9rem" }} />
                        </Typography>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
