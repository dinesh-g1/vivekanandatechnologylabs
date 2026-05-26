"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import SectionHeading from "@/components/ui/SectionHeading";
import { bharat } from "@/theme/theme";

const stats = [
  { value: "1", label: "Active Venture", suffix: "" },
  { value: "8", label: "Industries Targeted", suffix: "" },
  { value: "2", label: "Founders", suffix: "" },
  { value: "∞", label: "Ambition", suffix: "" },
];

export default function StatsSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: bharat.cream.light,
        borderTop: `1px solid ${bharat.cream.dark}`,
        borderBottom: `1px solid ${bharat.cream.dark}`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, i) => (
            <Grid key={i} size={{ xs: 6, md: 3 }} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 800,
                  fontFamily: "var(--font-playfair)",
                  color: bharat.saffron.main,
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                {stat.value}
                {stat.suffix}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: bharat.brown.light,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: "0.8rem",
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
