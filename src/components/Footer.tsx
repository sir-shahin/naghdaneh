import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { Link } from "./common";

export const Footer = () => {
  return (
    <Container component="footer">
      <Stack display={{ xs: "none", md: "flex" }} direction="row" py={1} justifyContent="space-between" fontSize={14}>
        <Stack direction={"row"} gap={4}>
          <Link color="black" underline="none" href={"#"}>
            درباره ما
          </Link>
          <Link color="black" underline="none" href={"#"}>
            ارتباط با ما
          </Link>
        </Stack>
        <Stack direction={"row"} gap={4}>
          <Link color="black" underline="none" href={"#"}>
            حریم خصوصی
          </Link>
          <Link color="black" underline="none" href={"#"}>
            قوانین و مقررات
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};
