"use client";

import { Box, Typography } from "@mui/material";
import { bharat } from "@/theme/theme";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  sanskrit?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  sanskrit,
}: SectionHeadingProps) {
  const textColor = light ? "#FFFFFF" : bharat.brown.main;
  const subColor = light ? "rgba(255,255,255,0.7)" : bharat.brown.light;
  const labelColor = light ? bharat.gold.light : bharat.saffron.main;

  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: 720,
        mx: align === "center" ? "auto" : 0,
        mb: 6,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: labelColor,
          mb: 1.5,
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: textColor,
          mb: sanskrit ? 0.5 : 2,
          fontFamily: "var(--font-playfair)",
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
      {sanskrit && (
        <Typography
          sx={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            color: light ? bharat.gold.light : bharat.saffron.main,
            fontSize: "1.1rem",
            mb: 2,
            fontWeight: 500,
          }}
        >
          {sanskrit}
        </Typography>
      )}
      {subtitle && (
        <Typography
          variant="body1"
          sx={{ color: subColor, maxWidth: 560, mx: "auto" }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
