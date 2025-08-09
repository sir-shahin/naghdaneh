import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SVGStar } from "@/assets/images/star";

type Props = {
  title: string;
  rate: number;
};
export const ShowRate = ({ title, rate }: Props) => {
  return (
    <Box display={"flex"} gap={1} py={1} px={1.8} bgcolor="#FF44000D" borderRadius={2}>
      <SVGStar color="primary" />
      <Typography fontWeight={"bold"}>{title}:</Typography>
      <Typography fontWeight={"bold"}>{rate}/10</Typography>
    </Box>
  );
};
