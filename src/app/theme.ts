"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "ISX, Arial, sans-serif",
  },
  components: {
    MuiButton: {},
  },
});

export default theme;
