import React from "react";

import QuoteIcon from "@mui/icons-material/FormatQuote";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const EmptyComment = () => {
  return (
    <Box bgcolor="#00000010" borderRadius={5} textAlign={"center"} p={5}>
      <QuoteIcon sx={{ transform: "rotate(180deg)", fill: "#00000030" }} fontSize="large" />
      <Typography color="#00000040">جایگاه اولین نقد برای توست</Typography>
    </Box>
  );
};
