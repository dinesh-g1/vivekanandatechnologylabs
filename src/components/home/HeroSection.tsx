"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { bharat } from "@/theme/theme";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "90vh", md: "85vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: bharat.cream.dark,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 80% at 50% 0%, ${bharat.saffron.light}08 0%, transparent 70%),
            radial-gradient(ellipse 60% 60% at 20% 80%, ${bharat.gold.light}10 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 60%, ${bharat.maroon.light}08 0%, transparent 60%)
          `,
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              ${bharat.cream.light}30 1px,
              transparent 2px
            )
          `,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 60%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 60%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            textAlign: "center",
            py: { xs: 8, md: 12 },
          }}
        >
          {/* ॐ Symbol */}
          <Typography
            sx={{
              fontSize: { xs: "3rem", md: "4.5rem" },
              color: bharat.saffron.main,
              mb: 2,
              lineHeight: 1,
              opacity: 0.8,
              fontFamily: "var(--font-playfair)",
            }}
          >
            ॐ
          </Typography>

          {/* Sanskrit Quote */}
          <Typography
            sx={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: bharat.saffron.main,
              mb: 4,
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              background: `linear-gradient(135deg, ${bharat.brown.main} 0%, ${bharat.brown.light} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Bharat&apos;s Technological Renaissance
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              color: bharat.brown.light,
              mb: 3,
              maxWidth: 620,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Carrying forward a 5,000-year legacy of scientific excellence and
            spiritual wisdom into the age of AI, quantum computing, and beyond.
          </Typography>

          {/* Vivekananda Quote */}
          <Typography
            sx={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              color: bharat.gold.main,
              fontSize: "1rem",
              mb: 5,
              fontWeight: 500,
            }}
          >
            &ldquo;Arise, awake, and stop not till the goal is reached.&rdquo;
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={Link}
              href="/about"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5, fontSize: "1.05rem" }}
            >
              Explore Our Vision
            </Button>
            <Button
              component={Link}
              href="/businesses"
              variant="outlined"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5, fontSize: "1.05rem" }}
            >
              Our Ventures
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
