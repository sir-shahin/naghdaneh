import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { Footer } from "./Footer";

export default function MainContainer({ ...props }) {
  return (
    <Stack pt="64px" display="flex" flex={1} {...props}>
      <Box component="main" display="flex" minHeight={"calc(100vh - 64px)"}>
        {props.children}
      </Box>
      <Footer />
    </Stack>
  );
}
