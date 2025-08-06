import React from "react";

import Stack from "@mui/material/Stack";

import MainContainer from "@/components/mainContainers";
import { Comments, Info } from "@/components/show";
import bg from "@/assets/images/mountain.jpg";

export default function Show() {
  return (
    <MainContainer
      sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "top center" }}
    >
      <Stack flex={1}>
        <Info />
        <Comments />
      </Stack>
    </MainContainer>
  );
}
