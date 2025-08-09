import React from "react";

import Stack from "@mui/material/Stack";

import { CategoryLink } from "./categoryLink";

export const Categories = () => {
  return (
    <Stack flexWrap={"wrap"} justifyContent={"center"} gap={{ xs: 1, md: 2.8 }} mb={2} direction={"row"} maxWidth={500}>
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
