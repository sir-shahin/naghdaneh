import React from "react";

import Stack from "@mui/material/Stack";

import { CategoryLink } from "./categoryLink";

export const Categories = () => {
  return (
    <Stack
      flexWrap={"wrap"}
      justifyContent={"center"}
      columnGap={{ xs: 1, md: 3 }}
      rowGap={{ xs: 1, md: 1.5 }}
      mb={2}
      direction={"row"}
      maxWidth={500}
    >
      <CategoryLink />
      <CategoryLink />
      <CategoryLink />
      <CategoryLink />
      <CategoryLink />
      <CategoryLink />
      <CategoryLink />
    </Stack>
  );
};
