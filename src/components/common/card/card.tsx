import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import img80 from "@/assets/images/000/80.jpg";

import { ROUTES } from "@/routes";

import { Link } from "../link";

export const Card = () => {
  return (
    <Box>
      <Link href={ROUTES.SHOW("film", 1234)} underline="none">
        <Box
          sx={{
            borderRadius: 5,
            overflow: "hidden",
            width: "100%",
            height: "100%",
            position: "relative",
            minHeight: { xs: 180, md: 280 },
          }}
        >
          <Image src={img80} alt="Info Image" fill style={{ objectFit: "cover" }} />
        </Box>
        <Typography variant="body1" textAlign={"center"} my={2} color="black">
          سری جدید فیلم جان ویک 2024
        </Typography>
      </Link>
    </Box>
  );
};
