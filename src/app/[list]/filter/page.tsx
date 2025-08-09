"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import MainContainer from "@/components/mainContainers";
import { SVGFilm } from "@/assets/images/categories/film";
import bg from "@/assets/images/mountain.jpg";

import { ROUTES } from "@/routes";

export default function List() {
  const router = useRouter();
  const handleItemPress = () => {
    router.push(ROUTES.LIST("film"));
  };
  return (
    <MainContainer sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <Box display={"flex"} flex={1} justifyContent={"center"} alignItems={"center"}>
        <Box>
          <Stack direction={"row"} color={"primary.main"} justifyContent={"center"} mb={1.5}>
            <SVGFilm fontSize="large" />
            <Typography fontWeight={"bold"} variant="h4" pr={1.5}>
              دسته بندی
            </Typography>
            <Typography fontWeight={"bold"} variant="h4" px={1}>
              فیلم
            </Typography>
          </Stack>
          <Typography textAlign={"center"}>قدم به قدم تو رو به چیزی که میخوای نزدیک تر میکنیم...</Typography>

          <Box py={"6vh"}>
            <Typography textAlign={"center"} fontWeight={600} gutterBottom>
              کشور را انتخاب کنید:
            </Typography>

            <Container sx={{ justifyContent: "center", display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button sx={{ minWidth: 160 }} variant="outlined" onClick={() => handleItemPress()}>
                ایرانی
              </Button>
              <Button sx={{ minWidth: 160 }} variant="outlined" onClick={() => handleItemPress()}>
                خارجی
              </Button>
            </Container>
          </Box>
        </Box>
      </Box>
    </MainContainer>
  );
}
