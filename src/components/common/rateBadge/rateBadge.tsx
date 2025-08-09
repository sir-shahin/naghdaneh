import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  icon?: ReactNode;
  title?: string;
  rate: number;
  bgColor?: string;
  small?: boolean;
};

export const RateBadge = ({ icon, title, rate, small, bgColor = "white" }: Props) => {
  return (
    <Box
      display={"flex"}
      gap={1}
      py={1}
      px={1.8}
      bgcolor={bgColor}
      borderRadius={2}
      sx={{ transform: small ? "scale(0.8)" : "scale(1)" }}
    >
      {icon}
      <Typography>امتیاز {title}:</Typography>
      <Typography>{rate}/10</Typography>
    </Box>
  );
};
