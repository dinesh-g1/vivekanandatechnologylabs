"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import SectionHeading from "@/components/ui/SectionHeading";
import { coreValues } from "@/lib/data";
import { bharat } from "@/theme/theme";

export default function CoreValuesSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: bharat.warmWhite,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          label="Our Foundation"
          title="Guided by Timeless Principles"
          sanskrit="धर्मो रक्षति रक्षितः"
          subtitle="Our core values are drawn from Bharat's eternal wisdom — principles that have guided this civilization for millennia and will guide our technology for generations to come."
        />

        <Grid container spacing={3}>
          {coreValues.map((value, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  p: 1,
                  backgroundColor: bharat.cream.light,
                  borderColor: bharat.cream.dark,
                }}
                elevation={0}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ fontSize: "2.5rem", mb: 2 }}>
                    {value.icon}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ mb: 1, fontFamily: "var(--font-poppins)", fontWeight: 700 }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                      fontSize: "0.85rem",
                      color: bharat.saffron.main,
                      mb: 2,
                    }}
                  >
                    {value.sanskrit}
                  </Typography>
                  <Typography variant="body2" sx={{ color: bharat.brown.light }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
