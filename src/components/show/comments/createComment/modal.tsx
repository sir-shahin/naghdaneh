import React from "react";

import PlusIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";

import { RateForm } from "./rateForm";

export const CommentFormModal = () => {
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR;
  const [open, setOpen] = React.useState(false);
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [rating, setRating] = React.useState(0);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Stack
        onClick={toggleDrawer(true)}
        direction={"row"}
        component={Button}
        justifyContent={"center"}
        px={5}
        mx={"auto"}
      >
        <Box
          sx={{
            border: `2px solid ${primaryColor}`,
            borderRadius: "10px 10px 10px 0",
            display: "flex",
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlusIcon />
        </Box>
        <Typography fontWeight={"bold"} pr={2}>
          نظر خود را ثبت کنید
        </Typography>
      </Stack>

      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="bottom"
        onOpen={toggleDrawer(true)}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box minHeight={{ xs: "50vh", md: "100vh" }} py={3}>
          <RateForm onClose={toggleDrawer(false)} rating={rating} setRating={setRating} />
        </Box>
      </SwipeableDrawer>
    </>
  );
};
