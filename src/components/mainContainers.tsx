import React from "react";

import Box from "@mui/material/Box";

export default function MainContainer({ ...props }) {
  return (
    <Box component="main" mt="64px" display="flex" flex={1} {...props}>
      {props.children}
    </Box>
  );
}
