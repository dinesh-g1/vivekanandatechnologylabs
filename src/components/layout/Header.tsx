"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { bharat } from "@/theme/theme";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Businesses", href: "/businesses" },
  { label: "Contact", href: "/contact" },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({ threshold: 100 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "rgba(255, 251, 245, 0.88)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${bharat.cream.dark}`,
          }}
          elevation={0}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
              {/* Logo */}
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${bharat.saffron.main}, ${bharat.saffron.dark})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: bharat.warmWhite,
                    fontSize: "1.3rem",
                    fontWeight: 800,
                  }}
                >
                  ॐ
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: bharat.brown.main,
                      lineHeight: 1.2,
                    }}
                  >
                    Vivekananda
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 500,
                      fontSize: "0.7rem",
                      color: bharat.saffron.main,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Technology Labs
                  </Typography>
                </Box>
              </Link>

              {/* Desktop Nav */}
              <Box
                sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        color: isActive(link.href)
                          ? bharat.saffron.main
                          : bharat.brown.light,
                        fontWeight: isActive(link.href) ? 600 : 500,
                        fontSize: "0.9rem",
                        px: 2,
                        py: 1,
                        borderRadius: 8,
                        position: "relative",
                        "&:hover": {
                          color: bharat.saffron.main,
                          backgroundColor: "rgba(199, 91, 26, 0.05)",
                        },
                        ...(isActive(link.href) && {
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 4,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: bharat.saffron.main,
                          },
                        }),
                      }}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </Box>

              {/* Mobile menu button */}
              <IconButton
                sx={{ display: { md: "none" }, color: bharat.brown.main }}
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: bharat.warmWhite,
            width: 280,
          },
        }}
      >
        <Box sx={{ pt: 4, px: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${bharat.saffron.main}, ${bharat.saffron.dark})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: bharat.warmWhite,
                fontSize: "1.2rem",
                fontWeight: 800,
              }}
            >
              ॐ
            </Box>
            <Typography
              sx={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                color: bharat.brown.main,
              }}
            >
              {siteConfig.shortName}
            </Typography>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    color: isActive(link.href)
                      ? bharat.saffron.main
                      : bharat.brown.main,
                    backgroundColor: isActive(link.href)
                      ? "rgba(199, 91, 26, 0.08)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(199, 91, 26, 0.05)",
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: isActive(link.href) ? 600 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Spacer for fixed header */}
      <Toolbar />
    </>
  );
}
