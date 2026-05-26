"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { bharat } from "@/theme/theme";
import { Business } from "@/lib/types";
import Link from "next/link";

interface Props {
  business: Business;
}

export default function BusinessDetailContent({ business }: Props) {
  const statusLabel =
    business.status === "in-progress"
      ? "In Progress"
      : business.status === "live"
        ? "Live"
        : "Planned";

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
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Button
            component={Link}
            href="/businesses"
            startIcon={<ArrowBackIcon />}
            sx={{ color: bharat.brown.light, mb: 4 }}
          >
            All Businesses
          </Button>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ md: "center" }}
            sx={{ mb: 3 }}
          >
            <Box
              sx={{
                width: 96,
                height: 96,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${bharat.saffron.main}, ${bharat.maroon.main})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: bharat.warmWhite,
                fontSize: "2.2rem",
                fontWeight: 800,
                flexShrink: 0,
                fontFamily: "var(--font-playfair)",
              }}
            >
              {business.name.slice(0, 2).toUpperCase()}
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1, flexWrap: "wrap" }}>
                <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                  {business.name}
                </Typography>
                <Chip
                  label={statusLabel}
                  size="small"
                  sx={{
                    backgroundColor:
                      business.status === "live"
                        ? "#2E7D3220"
                        : bharat.saffron.light + "20",
                    color:
                      business.status === "live"
                        ? "#2E7D32"
                        : bharat.saffron.main,
                    fontWeight: 600,
                  }}
                />
              </Box>
              <Typography variant="h5" sx={{ color: bharat.brown.light, fontWeight: 400 }}>
                {business.tagline}
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* ── Description ───────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: bharat.warmWhite }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h3" sx={{ fontFamily: "var(--font-playfair)", mb: 3 }}>
                About {business.name}
              </Typography>
              {business.longDescription.split("\n\n").map((p, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{ color: bharat.brown.light, lineHeight: 1.9, mb: 2 }}
                >
                  {p}
                </Typography>
              ))}

              <Divider sx={{ my: 4 }} />

              <Typography variant="h4" sx={{ fontFamily: "var(--font-playfair)", mb: 3 }}>
                All Features
              </Typography>
              <Grid container spacing={1} sx={{ mb: 4 }}>
                {business.features.map((feature, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        "&::before": {
                          content: '"▸ "',
                          color: bharat.saffron.main,
                          fontWeight: 700,
                        },
                        mb: 0.5,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ backgroundColor: bharat.cream.light, position: "sticky", top: 24 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                    Quick Info
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" sx={{ color: bharat.brown.light }}>
                      Status
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {statusLabel}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" sx={{ color: bharat.brown.light }}>
                      Industry
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      IT & Software
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" sx={{ color: bharat.brown.light }}>
                      Tech Stack
                    </Typography>
                    <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
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
                  </Box>

                  <Stack spacing={1}>
                    {business.links.website && (
                      <Button
                        component="a"
                        href={business.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        fullWidth
                        endIcon={<OpenInNewIcon />}
                      >
                        Visit Website
                      </Button>
                    )}
                    {business.links.github && (
                      <Button
                        component="a"
                        href={business.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        fullWidth
                        endIcon={<OpenInNewIcon />}
                        sx={{ borderColor: bharat.cream.deep, color: bharat.brown.main }}
                      >
                        View on GitHub
                      </Button>
                    )}
                    {business.links.docs && (
                      <Button
                        component="a"
                        href={business.links.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        fullWidth
                        endIcon={<OpenInNewIcon />}
                        sx={{ borderColor: bharat.cream.deep, color: bharat.brown.main }}
                      >
                        Documentation
                      </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <Box sx={{ py: 8, backgroundColor: bharat.cream.main, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ fontFamily: "var(--font-playfair)", mb: 2 }}>
            Interested in {business.name}?
          </Typography>
          <Typography variant="body1" sx={{ color: bharat.brown.light, mb: 3 }}>
            Whether you are a potential user, contributor, or partner — we would love to hear
            from you.
          </Typography>
          <Button component={Link} href="/contact" variant="contained" color="primary" size="large">
            Get In Touch
          </Button>
        </Container>
      </Box>
    </>
  );
}
