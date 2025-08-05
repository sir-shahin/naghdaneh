import React from "react";

import BookIcon from "@mui/icons-material/MenuBookOutlined";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link } from "@/components/common";

export const CategoryLink = () => {
  return (
    <Box
      component={Link}
      href="#"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      width={100}
      height={100}
      borderRadius={50}
      border={"2px solid red"}
      underline="none"
    >
      <Stack>
        <BookIcon sx={{ mx: "auto", color: "red" }} />
        <Typography color="red">کتاب</Typography>
      </Stack>
    </Box>
  );
};
