import React from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ListSearch } from "@/components/list";
import MainContainer from "@/components/mainContainers";
import { SVGFilm } from "@/assets/images/categories/film";
import bg from "@/assets/images/mountain.jpg";

export default function List() {
  return (
    <MainContainer sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <Container maxWidth="sm" sx={{ justifyContent: "center", pt: 8 }}>
        <Stack direction={"row"} color={"primary.main"} justifyContent={"center"} mb={1.5}>
          <SVGFilm fontSize="large" />
          <Typography fontWeight={"bold"} variant="h5" pr={1.5}>
            دسته بندی
          </Typography>
          <Typography fontWeight={"bold"} variant="h5" px={1}>
            فیلم
          </Typography>
        </Stack>

        <ListSearch />
      </Container>
    </MainContainer>
  );
}
