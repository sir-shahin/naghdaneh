import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  icon: ReactNode;
  title: string;
  rate: number;
};
export const RateBadge = ({ icon, title, rate }: Props) => {
  return (
    <Box display={"flex"} gap={1} py={1} px={1.8} bgcolor={"white"} borderRadius={2}>
      {icon}
      <Typography>امتیاز {title}:</Typography>
      <Typography>{rate}/10</Typography>
    </Box>
  );
};
