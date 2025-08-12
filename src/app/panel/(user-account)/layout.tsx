import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import bg from "@/assets/images/mountain.jpg";

export default function RootLayout({
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
      <Box bgcolor={"white"} mt={15} minHeight={"100vh"}>
        <Grid container top={-70} position={"relative"}>
          <Grid size={3}></Grid>
          <Grid size={9}>{children}</Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
