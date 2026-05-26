"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { bharat } from "@/theme/theme";
import Link from "next/link";

export default function CTASection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: bharat.brown.main,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 60% at 50% 30%, ${bharat.saffron.main}20 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 80% 80%, ${bharat.gold.main}15 0%, transparent 60%)
          `,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: bharat.gold.light,
            mb: 2,
            opacity: 0.6,
            fontFamily: "var(--font-playfair)",
          }}
        >
          ॐ
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: bharat.warmWhite,
            mb: 3,
            fontFamily: "var(--font-playfair)",
          }}
        >
          Join Us in Building Bharat&apos;s Future
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: bharat.cream.dark,
            mb: 5,
            maxWidth: 560,
            mx: "auto",
            fontSize: "1.1rem",
          }}
        >
          Whether you are a developer, designer, investor, or someone who
          believes in the power of technology to transform lives — there is a
          place for you in this mission.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.05rem",
              backgroundColor: bharat.saffron.main,
              "&:hover": { backgroundColor: bharat.saffron.light },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Get In Touch
          </Button>
          <Button
            component={Link}
            href="/about"
            variant="outlined"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.05rem",
              borderColor: bharat.gold.light,
              color: bharat.gold.light,
              "&:hover": {
                borderColor: bharat.gold.main,
                backgroundColor: "rgba(184, 134, 11, 0.1)",
              },
            }}
          >
            Learn More About Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
