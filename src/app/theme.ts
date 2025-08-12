"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4400",
    },
  },
  typography: {
    fontFamily: "ISX, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #F79327 0%, #FF4400 100%)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          right: "auto",
          left: 8,
        },
        select: {
          paddingLeft: 38,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
