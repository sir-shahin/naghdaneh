import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { Link } from "./common";

export const Footer = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction={"row"} gap={2}>
          <Link color="black" underline="none" href={"#"}>
            درباره ما
          </Link>
          <Link color="black" underline="none" href={"#"}>
            درباره ما
          </Link>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Link color="black" underline="none" href={"#"}>
            درباره ما
          </Link>
          <Link color="black" underline="none" href={"#"}>
            درباره ما
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};
