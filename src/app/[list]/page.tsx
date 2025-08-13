import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ListSearch, Show } from "@/components/list";
import MainContainer from "@/components/mainContainers";
import { SVGFilm } from "@/assets/images/categories/film";
import bg from "@/assets/images/mountain.jpg";

export default function List() {
  return (
    <MainContainer sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <Box flex={1}>
        <Container maxWidth="sm" sx={{ justifyContent: "center", py: { xs: 3.5, md: 7 } }}>
          <Stack direction={"row"} color={"primary.main"} justifyContent={"center"} mb={3}>
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

        <Show />
      </Box>
    </MainContainer>
  );
}
