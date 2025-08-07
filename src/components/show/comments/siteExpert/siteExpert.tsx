import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ShowRate } from "@/components/common";
import { SVGMessageTick } from "@/assets/images/message-tick";

export const SiteExpert = () => {
  return (
    <Box bgcolor={"white"} borderRadius={5} p={5} mb={3}>
      <Box display={"flex"} justifyContent={"space-between"} mb={4}>
        <Stack direction={"row"}>
          <SVGMessageTick />
          <Typography variant="h6" fontWeight={600} px={1}>
            نظر کارشناس نقدانه
          </Typography>
        </Stack>
        <ShowRate title="امتیاز" rate={5} />
      </Box>

      <Typography variant="body2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
        روزنامه و مجله در ستون و سطرآنچنان که لازم است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
        است.
      </Typography>
    </Box>
  );
};
