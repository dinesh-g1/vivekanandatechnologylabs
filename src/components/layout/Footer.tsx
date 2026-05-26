"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import { bharat } from "@/theme/theme";
import {
  siteConfig,
  industries,
  founders,
} from "@/lib/data";

const footerLinks = {
  Foundation: [
    { label: "About Us", href: "/about" },
    { label: "Our Vision", href: "/about#vision" },
    { label: "Core Values", href: "/about#values" },
    { label: "Contact", href: "/contact" },
  ],
  Industries: industries.slice(0, 4).map((ind) => ({
    label: ind.name,
    href: `/industries/${ind.slug}`,
  })),
  Businesses: [
    { label: "FeatureSignals", href: "/businesses/featuresignals" },
    { label: "All Businesses", href: "/businesses" },
  ],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: bharat.brown.main,
        color: bharat.cream.light,
        pt: { xs: 8, md: 10 },
        pb: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${bharat.saffron.light}, ${bharat.saffron.main})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: bharat.warmWhite,
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                ॐ
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: bharat.warmWhite,
                  }}
                >
                  {siteConfig.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: bharat.gold.light,
                    letterSpacing: "0.06em",
                  }}
                >
                  {siteConfig.tagline}
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                color: bharat.cream.dark,
                fontSize: "0.9rem",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              A foundation dedicated to taking Bharat to the forefront of the
              global technological revolution — rooted in dharma, driven by
              innovation, and inspired by India&apos;s timeless wisdom.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: bharat.cream.dark, "&:hover": { color: bharat.gold.light } }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href={`mailto:${siteConfig.links.email}`}
                sx={{ color: bharat.cream.dark, "&:hover": { color: bharat.gold.light } }}
              >
                <EmailIcon />
              </IconButton>
              {founders.map((f) => (
                <IconButton
                  key={f.name}
                  component="a"
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: bharat.cream.dark, "&:hover": { color: bharat.gold.light } }}
                >
                  <LinkedInIcon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid key={title} size={{ xs: 6, sm: 4, md: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: bharat.gold.light,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 2.5,
                }}
              >
                {title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: bharat.cream.dark,
                        fontSize: "0.9rem",
                        transition: "color 0.2s",
                        "&:hover": { color: bharat.warmWhite },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: 1,
          }}
        >
          <Typography
            sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}
          >
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.4)",
              fontStyle: "italic",
              fontFamily: "var(--font-playfair)",
            }}
          >
            &ldquo;Arise, awake, and stop not till the goal is reached.&rdquo;
            — Swami Vivekananda
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
