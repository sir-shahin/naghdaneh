import React from "react";

import Stack from "@mui/material/Stack";

import { CategoryLink } from "./categoryLink";

const tempCats = ["#292772", "#BC3908", "#8338EC", "#FF4400", "#EE964B", "#00CCAD", "#20A4F3"];
export const Categories = () => {
  return (
    <Stack flexWrap={"wrap"} justifyContent={"center"} gap={{ xs: 1, md: 2.8 }} mb={2} direction={"row"} maxWidth={500}>
      {tempCats.map((category, index) => (
        <CategoryLink key={index} color={category} />
      ))}
    </Stack>
  );
};
