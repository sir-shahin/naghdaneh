import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { PanelMenu } from "@/components/panel";
import bg from "@/assets/images/mountain.jpg";

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack
      component="main"
      pt="64px"
      display="flex"
      flex={1}
      sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "top" }}
    >
      <Box bgcolor={"white"} mt={"12em"} minHeight={"100vh"}>
        <Grid container component={Container} top={"-10em"} position={"relative"}>
          <Grid size={3} pl={3} display={{ xs: "none", md: "block" }}>
            <PanelMenu />
          </Grid>
          <Grid size={{ md: 9 }}>{children}</Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
