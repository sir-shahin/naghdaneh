import React from "react";

import BookIcon from "@mui/icons-material/MenuBookOutlined";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link } from "@/components/common";

export const CategoryLink = () => {
  return (
    <ButtonBase
      component={Link}
      href="#"
      underline="none"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
        border: "2px solid #FF4400",
        transition: "background 0.2s",
        "&:hover": {
          background: "#FF4400",
          "& .MuiTypography-root": { color: "#fff" },
          "& .MuiSvgIcon-root": { color: "#fff" },
        },
      }}
    >
      <Stack>
        <BookIcon sx={{ mx: "auto", color: "#FF4400" }} />
        <Typography color="#FF4400">کتاب</Typography>
      </Stack>
    </ButtonBase>
  );
};
