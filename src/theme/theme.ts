"use client";

import { createTheme, MantineColorsTuple } from "@mantine/core";
import { siteConfig } from "@/config/site";

const teal: MantineColorsTuple = [
  "#e6f7f1",
  "#cceee3",
  "#99ddc7",
  "#66ccab",
  "#33bb8f",
  siteConfig.colors.teal,
  siteConfig.colors.tealLight,
  "#189666",
  "#147d55",
  "#106444",
];

export const diligiaTheme = createTheme({
  primaryColor: "teal",
  colors: {
    teal,
    navy: [
      siteConfig.colors.navy,
      siteConfig.colors.navy,
      siteConfig.colors.navy,
      siteConfig.colors.navy,
      siteConfig.colors.navy,
      siteConfig.colors.navy,
      siteConfig.colors.navy,
      siteConfig.colors.navy,
      siteConfig.colors.navy,
      siteConfig.colors.navy,
    ],
  },
  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
  headings: {
    fontFamily: "var(--font-playfair), Playfair Display, serif",
    fontWeight: "700",
  },
  defaultRadius: "4px",
  components: {
    Button: {
      defaultProps: {
        radius: "4px",
      },
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: "rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.1)",
          color: "#ffffff",
          "&::placeholder": {
            color: "rgba(255,255,255,0.2)",
          },
          "&:focus": {
            borderColor: "rgba(29,158,117,0.5)",
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        },
        label: {
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        },
      },
    },
    Textarea: {
      styles: {
        input: {
          backgroundColor: "rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.1)",
          color: "#ffffff",
          "&::placeholder": {
            color: "rgba(255,255,255,0.2)",
          },
          "&:focus": {
            borderColor: "rgba(29,158,117,0.5)",
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        },
        label: {
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        },
      },
    },
    NativeSelect: {
      styles: {
        input: {
          backgroundColor: "rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.1)",
          color: "#ffffff",
          "&:focus": {
            borderColor: "rgba(29,158,117,0.5)",
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        },
        label: {
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        },
      },
    },
  },
});
