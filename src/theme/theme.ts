"use client";

import { createTheme } from "@mui/material/styles";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// ── Bharat-Inspired Color Palette ──────────────────────────────────────────
// Deep Saffron — courage, sacrifice, spiritual fire
// Royal Gold — prosperity, wisdom, divine light
// Earth Maroon — strength, rootedness, mother earth
// Warm Cream — purity, peace, sacred ground
// Deep Brown — groundedness, ancient knowledge

const bharat = {
  saffron: {
    light: "#E07B39",
    main: "#C75B1A",
    dark: "#A0401A",
    deep: "#7A2E0E",
  },
  gold: {
    light: "#E8C96A",
    main: "#B8860B",
    dark: "#8B6914",
    deep: "#6B4F12",
  },
  maroon: {
    light: "#C44B4B",
    main: "#8B1A1A",
    dark: "#6B1212",
    deep: "#4A0A0A",
  },
  cream: {
    light: "#FFFDF9",
    main: "#FDF8F0",
    dark: "#F5EDE0",
    deep: "#E8DCC8",
  },
  brown: {
    light: "#5C3D2E",
    main: "#2C1810",
    dark: "#1A0E08",
    deep: "#0D0704",
  },
  warmWhite: "#FFFBF5",
  pureWhite: "#FFFFFF",
};

const theme = createTheme({
  typography: {
    fontFamily: `${poppins.style.fontFamily}, ${playfair.style.fontFamily}, serif`,
    h1: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 800,
      fontSize: "4rem",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: bharat.brown.main,
      "@media (max-width:900px)": { fontSize: "3rem" },
      "@media (max-width:600px)": { fontSize: "2.25rem" },
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
      fontSize: "2.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: bharat.brown.main,
      "@media (max-width:900px)": { fontSize: "2.25rem" },
      "@media (max-width:600px)": { fontSize: "1.75rem" },
    },
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: 1.3,
      color: bharat.brown.main,
      "@media (max-width:600px)": { fontSize: "1.5rem" },
    },
    h4: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.35,
      color: bharat.brown.main,
      "@media (max-width:600px)": { fontSize: "1.25rem" },
    },
    h5: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
      color: bharat.brown.main,
    },
    h6: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.1rem",
      lineHeight: 1.5,
      color: bharat.brown.main,
    },
    body1: {
      fontFamily: poppins.style.fontFamily,
      fontSize: "1.05rem",
      lineHeight: 1.75,
      color: bharat.brown.light,
    },
    body2: {
      fontFamily: poppins.style.fontFamily,
      fontSize: "0.95rem",
      lineHeight: 1.7,
      color: bharat.brown.light,
    },
    subtitle1: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
      fontSize: "1.15rem",
      lineHeight: 1.6,
      color: bharat.brown.main,
    },
    subtitle2: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
      fontSize: "0.9rem",
      lineHeight: 1.6,
      letterSpacing: "0.05em",
      textTransform: "uppercase" as const,
      color: bharat.saffron.main,
    },
    caption: {
      fontFamily: poppins.style.fontFamily,
      fontSize: "0.8rem",
      lineHeight: 1.5,
      color: bharat.brown.light,
    },
  },
  palette: {
    primary: {
      light: bharat.saffron.light,
      main: bharat.saffron.main,
      dark: bharat.saffron.dark,
      contrastText: bharat.warmWhite,
    },
    secondary: {
      light: bharat.gold.light,
      main: bharat.gold.main,
      dark: bharat.gold.dark,
      contrastText: bharat.brown.main,
    },
    error: {
      light: bharat.maroon.light,
      main: bharat.maroon.main,
      dark: bharat.maroon.dark,
    },
    background: {
      default: bharat.cream.main,
      paper: bharat.warmWhite,
    },
    text: {
      primary: bharat.brown.main,
      secondary: bharat.brown.light,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: bharat.cream.main,
          color: bharat.brown.main,
          scrollBehavior: "smooth",
        },
        "::selection": {
          backgroundColor: bharat.saffron.light,
          color: bharat.warmWhite,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none" as const,
          fontWeight: 600,
          borderRadius: 8,
          padding: "10px 28px",
          fontSize: "1rem",
          letterSpacing: "0.01em",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${bharat.saffron.main} 0%, ${bharat.saffron.dark} 100%)`,
          boxShadow: `0 4px 15px rgba(199, 91, 26, 0.3)`,
          "&:hover": {
            background: `linear-gradient(135deg, ${bharat.saffron.light} 0%, ${bharat.saffron.main} 100%)`,
            boxShadow: `0 6px 20px rgba(199, 91, 26, 0.4)`,
            transform: "translateY(-1px)",
          },
        },
        outlinedPrimary: {
          borderColor: bharat.saffron.main,
          color: bharat.saffron.main,
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
            backgroundColor: "rgba(199, 91, 26, 0.06)",
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${bharat.gold.main} 0%, ${bharat.gold.dark} 100%)`,
          color: bharat.warmWhite,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
          border: `1px solid ${bharat.cream.dark}`,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 1200px)": {
            maxWidth: "1200px",
          },
        },
      },
    },
  },
});

export { theme, bharat, poppins, playfair };
