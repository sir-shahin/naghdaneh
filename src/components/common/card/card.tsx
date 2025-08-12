import React from "react";
import Image from "next/image";

import InfoOutlinedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import img80 from "@/assets/images/000/80.jpg";
import { SVGStar } from "@/assets/images/star";

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
            cursor: "pointer",
            "&:hover .card-overlay": {
              opacity: 0.5,
            },
          }}
        >
          <Image src={img80} alt="Info Image" fill style={{ objectFit: "cover" }} />
          <Box
            className="card-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#000",
              opacity: 0,
              transition: "opacity 0.3s",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InfoOutlinedIcon sx={{ color: "white", fontSize: 48 }} />
          </Box>

          <Stack bgcolor={"#00000010"} direction={"row"} position={"absolute"} bottom={8} left={8}>
            <Typography>4.3</Typography>
            <SVGStar />
          </Stack>
        </Box>
        <Typography variant="body1" textAlign={"center"} my={2} color="black">
          سری جدید فیلم جان ویک 2024
        </Typography>
      </Link>
    </Box>
  );
};
