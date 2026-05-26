"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SectionHeading from "@/components/ui/SectionHeading";
import { founders, milestones, coreValues } from "@/lib/data";
import { bharat } from "@/theme/theme";
import Link from "next/link";

export default function AboutContent() {
  return (
    <>
      {/* ── Page Header ──────────────────────────────────────────────── */}
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
            background: `radial-gradient(ellipse 60% 60% at 50% 30%, ${bharat.saffron.main}10 0%, transparent 70%)`,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: bharat.saffron.main, mb: 2, letterSpacing: "0.06em" }}
          >
            Our Story
          </Typography>
          <Typography variant="h1" sx={{ mb: 3, fontFamily: "var(--font-playfair)" }}>
            About Vivekananda Technology Labs
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.15rem", color: bharat.brown.light, maxWidth: 640, mx: "auto" }}
          >
            We are a foundation born from the realization that Bharat&apos;s next great contribution
            to the world will be technological — and it must be built on the timeless principles
            that have guided this civilization for millennia.
          </Typography>
        </Container>
      </Box>

      {/* ── Vision & Mission ─────────────────────────────────────────── */}
      <Box id="vision" sx={{ py: { xs: 8, md: 12 }, backgroundColor: bharat.warmWhite }}>
        <Container maxWidth="xl">
          <SectionHeading
            label="Vision & Mission"
            title="Taking Bharat to the Global Forefront"
            sanskrit="उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत"
            subtitle="Arise, awake, and stop not till the goal is reached — this call from Swami Vivekananda is the foundation of everything we do."
          />

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", backgroundColor: bharat.cream.light }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "var(--font-playfair)", mb: 2, color: bharat.saffron.main }}
                  >
                    Our Vision
                  </Typography>
                  <Typography variant="body1" sx={{ color: bharat.brown.light, lineHeight: 1.9 }}>
                    To establish Bharat as the undisputed leader of the global technological
                    revolution — not by imitating the West, but by forging a uniquely Indian path
                    to innovation, one that integrates our ancient scientific wisdom, spiritual
                    depth, and sustainable ethos into every layer of technology we build.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 3, color: bharat.brown.light, lineHeight: 1.9 }}
                  >
                    We envision a future where Indian technology companies set the global standard —
                    not just for engineering excellence, but for ethical innovation, environmental
                    sustainability, and human-centric design. A future where the world looks to
                    Bharat not just for IT services, but for the foundational technologies that
                    power the next century.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", backgroundColor: bharat.cream.light }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "var(--font-playfair)", mb: 2, color: bharat.maroon.main }}
                  >
                    Our Mission
                  </Typography>
                  <Typography variant="body1" sx={{ color: bharat.brown.light, lineHeight: 1.9 }}>
                    To build a family of world-class technology ventures across every sector that
                    matters — software, healthcare, agriculture, education, manufacturing, energy,
                    space, and finance — each one contributing to a self-reliant, technologically
                    sovereign Bharat.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 3, color: bharat.brown.light, lineHeight: 1.9 }}
                  >
                    We are creating the parent organization that nurtures, funds, and connects these
                    ventures — providing shared infrastructure, shared values, and a shared mission
                    that amplifies the impact of each individual company. Every venture under our
                    umbrella carries forward the same commitment: technology in service of dharma.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Our Heritage ─────────────────────────────────────────────── */}
      <Box id="heritage" sx={{ py: { xs: 8, md: 12 }, backgroundColor: bharat.brown.main }}>
        <Container maxWidth="md">
          <SectionHeading
            label="Our Inspiration"
            title="The Legacy of Bharat"
            sanskrit="वन्दे मातरम्"
            subtitle="Our work is inspired by the greatest civilization the world has ever known — a civilization that gave the world mathematics, astronomy, medicine, metallurgy, and philosophy while the rest of the world was still finding its feet."
            light
          />

          <Box sx={{ mt: 4 }}>
            <Typography
              variant="body1"
              sx={{ color: bharat.cream.dark, lineHeight: 2, mb: 3, fontSize: "1.05rem" }}
            >
              Long before Silicon Valley, there was Takshashila. Long before modern universities,
              there was Nalanda. Long before the scientific method was formalized in Europe, Indian
              scholars were calculating the speed of light, mapping the solar system, performing
              complex surgeries, and smelting rust-proof iron that still stands today.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: bharat.cream.dark, lineHeight: 2, mb: 3, fontSize: "1.05rem" }}
            >
              Bharat gave the world the concept of zero (shunya), the decimal system, algebra
              (bijaganita), trigonometry, and the Pythagorean theorem — centuries before
              Pythagoras. Our ancient texts contain detailed knowledge of astronomy, aeronautics,
              atomic theory, and consciousness studies that modern science is only beginning to
              validate.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: bharat.cream.dark, lineHeight: 2, mb: 3, fontSize: "1.05rem" }}
            >
              This is not about nostalgia — it is about recognizing that the spirit of inquiry,
              innovation, and excellence is encoded in our civilizational DNA. We do not need to
              look to the West for inspiration on how to build great technology. We need only to
              remember who we are, and carry that legacy forward in a form that serves the modern
              world.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: bharat.cream.dark, lineHeight: 2, fontSize: "1.05rem" }}
            >
              At Vivekananda Technology Labs, we are doing exactly that — building the next chapter
              of Bharat&apos;s scientific story, in our own way, for the generations to come.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 5,
              p: 4,
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                color: bharat.gold.light,
                fontSize: "1.2rem",
                lineHeight: 1.8,
              }}
            >
              &ldquo;We are what our thoughts have made us; so take care about what you think.
              Words are secondary. Thoughts live; they travel far.&rdquo;
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.5)", mt: 1, fontSize: "0.85rem" }}
            >
              — Swami Vivekananda
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Core Values ──────────────────────────────────────────────── */}
      <Box id="values" sx={{ py: { xs: 8, md: 12 }, backgroundColor: bharat.warmWhite }}>
        <Container maxWidth="xl">
          <SectionHeading
            label="Core Values"
            title="Six Principles That Guide Us"
            sanskrit="धर्मो रक्षति रक्षितः"
            subtitle="These principles are not marketing slogans. They are the philosophical foundation upon which every decision, every product, and every line of code is built."
          />

          <Grid container spacing={3}>
            {coreValues.map((value, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: "100%", backgroundColor: bharat.cream.light }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography sx={{ fontSize: "2.5rem", mb: 2 }}>{value.icon}</Typography>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
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

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: bharat.cream.main }}>
        <Container maxWidth="md">
          <SectionHeading
            label="Our Journey"
            title="From Vision to Reality"
            sanskrit="गते शोको न कर्तव्यः"
            subtitle="Every great journey begins with a single step. Here is ours so far."
          />

          <Box sx={{ position: "relative", pl: { xs: 4, md: 6 } }}>
            {/* Vertical line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 12, md: 24 },
                top: 0,
                bottom: 0,
                width: 3,
                backgroundColor: bharat.cream.deep,
                borderRadius: 2,
              }}
            />

            {milestones.map((m, i) => (
              <Box key={i} sx={{ position: "relative", mb: 6 }}>
                {/* Circle dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: -28, md: -40 },
                    top: 4,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: i === 0 ? bharat.saffron.main : bharat.gold.main,
                    border: `3px solid ${bharat.warmWhite}`,
                    boxShadow: `0 0 0 3px ${bharat.cream.deep}`,
                  }}
                />

                <Chip
                  label={m.year}
                  size="small"
                  sx={{
                    mb: 1,
                    backgroundColor:
                      i === 0 ? bharat.saffron.main : bharat.cream.deep,
                    color: i === 0 ? bharat.warmWhite : bharat.brown.light,
                    fontWeight: 700,
                  }}
                />
                <Typography variant="h4" sx={{ mb: 1, fontFamily: "var(--font-playfair)" }}>
                  {m.title}
                </Typography>
                <Typography variant="body1" sx={{ color: bharat.brown.light }}>
                  {m.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Founders ─────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: bharat.warmWhite }}>
        <Container maxWidth="xl">
          <SectionHeading
            label="Our Founders"
            title="The People Behind the Mission"
            sanskrit="यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः"
            subtitle="Two engineers who believe that Bharat's greatest technological achievements lie ahead — and are dedicating their lives to making it happen."
          />

          <Grid container spacing={4} justifyContent="center">
            {founders.map((founder) => (
              <Grid key={founder.name} size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: "100%", backgroundColor: bharat.cream.light }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${bharat.saffron.main}, ${bharat.maroon.main})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: bharat.warmWhite,
                        fontSize: "2rem",
                        fontWeight: 800,
                        mb: 3,
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      {founder.name.split(" ").map((n) => n[0]).join("")}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: "var(--font-playfair)", mb: 0.5 }}
                    >
                      {founder.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: bharat.saffron.main, mb: 2 }}
                    >
                      {founder.role}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: bharat.brown.light, lineHeight: 1.9, mb: 3 }}
                    >
                      {founder.bio}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Button
                        component="a"
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LinkedInIcon />}
                        variant="outlined"
                        size="small"
                        sx={{ borderColor: bharat.cream.deep, color: bharat.brown.light }}
                      >
                        LinkedIn
                      </Button>
                      {founder.github && (
                        <Button
                          component="a"
                          href={founder.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<GitHubIcon />}
                          variant="outlined"
                          size="small"
                          sx={{ borderColor: bharat.cream.deep, color: bharat.brown.light }}
                        >
                          GitHub
                        </Button>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: bharat.saffron.main, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{ color: bharat.warmWhite, mb: 3, fontFamily: "var(--font-playfair)" }}
          >
            Be Part of This Journey
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.85)", mb: 4, fontSize: "1.05rem" }}
          >
            We are just getting started. If our vision resonates with you, reach out — whether to
            collaborate, invest, or simply share your thoughts.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: bharat.warmWhite,
              color: bharat.saffron.main,
              "&:hover": { backgroundColor: bharat.cream.light },
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </>
  );
}
