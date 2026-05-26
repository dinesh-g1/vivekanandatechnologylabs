"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import SectionHeading from "@/components/ui/SectionHeading";
import { founders, siteConfig } from "@/lib/data";
import { bharat } from "@/theme/theme";
import { useState, FormEvent } from "react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSnackbar({
          open: true,
          message:
            "Thank you for your message! We will get back to you soon. 🙏",
          severity: "success",
        });
        setFormData({
          name: "",
          email: "",
          organization: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setSnackbar({
        open: true,
        message:
          "Something went wrong. Please email us directly at hello@vivekanandatechnologylabs.com",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

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
          <Typography variant="subtitle2" sx={{ color: bharat.saffron.main, mb: 2 }}>
            Get In Touch
          </Typography>
          <Typography variant="h1" sx={{ mb: 3 }}>
            Let&apos;s Build the Future Together
          </Typography>
          <Typography variant="body1" sx={{ color: bharat.brown.light, fontSize: "1.1rem" }}>
            Whether you want to collaborate, invest, partner, or simply learn more about our
            mission — we would love to hear from you.
          </Typography>
        </Container>
      </Box>

      {/* ── Contact Form + Info ────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: bharat.warmWhite }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h3" sx={{ fontFamily: "var(--font-playfair)", mb: 4 }}>
                Send Us a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: bharat.cream.light,
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: bharat.cream.light,
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Organization (optional)"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: bharat.cream.light,
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: bharat.cream.light,
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      required
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: bharat.cream.light,
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={submitting}
                      endIcon={<SendIcon />}
                      sx={{ px: 4, py: 1.5 }}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Info Sidebar */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" sx={{ fontFamily: "var(--font-playfair)", mb: 4 }}>
                Other Ways to Connect
              </Typography>

              <Stack spacing={3}>
                <Card sx={{ backgroundColor: bharat.cream.light }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          backgroundColor: bharat.saffron.light + "20",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: bharat.saffron.main,
                        }}
                      >
                        <EmailIcon />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: bharat.brown.light }}>
                          Email
                        </Typography>
                        <Typography
                          component="a"
                          href={`mailto:${siteConfig.links.email}`}
                          sx={{
                            color: bharat.saffron.main,
                            fontWeight: 500,
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {siteConfig.links.email}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: bharat.cream.light }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Connect With Our Founders
                    </Typography>
                    {founders.map((founder) => (
                      <Box key={founder.name} sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {founder.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: bharat.brown.light, display: "block", mb: 0.5 }}
                        >
                          {founder.role}
                        </Typography>
                        <Button
                          component="a"
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<LinkedInIcon />}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: bharat.cream.deep,
                            color: bharat.brown.light,
                            fontSize: "0.8rem",
                          }}
                        >
                          LinkedIn
                        </Button>
                      </Box>
                    ))}
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: bharat.cream.light }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      GitHub
                    </Typography>
                    <Typography variant="body2" sx={{ color: bharat.brown.light, mb: 2 }}>
                      Explore our open-source projects and contributions.
                    </Typography>
                    <Button
                      component="a"
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: bharat.cream.deep,
                        color: bharat.brown.main,
                      }}
                    >
                      Visit GitHub
                    </Button>
                  </CardContent>
                </Card>

                {/* Quote */}
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: bharat.brown.main,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                      color: bharat.gold.light,
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    &ldquo;Take up one idea. Make that one idea your life — think of it, dream of
                    it, live on that idea.&rdquo;
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      mt: 1,
                      fontSize: "0.8rem",
                    }}
                  >
                    — Swami Vivekananda
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%", borderRadius: 2 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
