import React from "react";

import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link } from "@/components/common";
import { SVGFilm } from "@/assets/images/categories/film";

import { ROUTES } from "@/routes";

export const CategoryLink = ({ color }: { color: string }) => {
  return (
    <ButtonBase
      component={Link}
      href={ROUTES.FILTER("film")}
      underline="none"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
        border: `2px solid ${color}`,
        transition: "background 0.2s",
        "&:hover": {
          background: color,
          "& .MuiTypography-root": { color: "#fff" },
          "& .MuiSvgIcon-root": { color: "#fff" },
        },
      }}
    >
      <Stack>
        <SVGFilm sx={{ mx: "auto", color: color }} />
        <Typography color={color}>فیلم</Typography>
      </Stack>
    </ButtonBase>
  );
};
