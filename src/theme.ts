// src/theme.ts
import { createTheme } from "@mui/material/styles";

const GOOGLE_BLUE = "#1A73E8";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: GOOGLE_BLUE },
    background: {
      default: "#F6F9FE",
      paper: "rgba(255,255,255,0.72)",
    },
    text: {
      primary: "#1F2937",
      secondary: "#4B5563",
    },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(26,115,232,0.12)",
          boxShadow: "0 10px 30px rgba(60,64,67,0.12)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          background: "rgba(26,115,232,0.08)",
          border: "1px solid rgba(26,115,232,0.18)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(26,115,232,0.12)",
        },
      },
    },
  },
});
