import React from "react";
import Image from "next/image";

import QuoteIcon from "@mui/icons-material/FormatQuote";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { RateBadge, ShowRate } from "@/components/common";
import userimage from "@/assets/images/000/user.jpg";
import { SVGMessageTick } from "@/assets/images/message-tick";

export const ExpertsComment = () => {
  return (
    <Box bgcolor={"white"} borderRadius={5} p={5} mb={3}>
      <Box display={"flex"} justifyContent={"space-between"} mb={4}>
        <Stack direction={"row"}>
          <SVGMessageTick />
          <Typography variant="h6" fontWeight={600} px={1}>
            نظرات کارشناسان
          </Typography>
        </Stack>
        <ShowRate title="مجموع امتیازات" rate={5} />
      </Box>

      {[1, 1, 1].map((_, index) => (
        <Box bgcolor={"#fef5f0"} key={index} borderRadius={3} p={3} mb={2.5} position={"relative"}>
          <Typography
            position={"absolute"}
            top={30}
            right={10}
            color="primary"
            sx={{ opacity: 0.08 }}
            fontWeight={"bold"}
            fontSize={84}
          >
            کارشناس
          </Typography>
          <Grid container>
            <Grid size={{ md: 9 }}>
              <Stack direction={"row"} mb={2} justifyContent={"space-between"}>
                <Stack direction={"row"}>
                  <QuoteIcon
                    color="primary"
                    sx={{ opacity: 0.4, mt: -1.5, transform: "rotate(180deg)" }}
                    fontSize="large"
                  />
                  <Typography fontWeight="bold" color="primary">
                    علی علیزاده
                  </Typography>
                </Stack>

                <ShowRate title="امتیاز" rate={3} />
              </Stack>

              <Typography variant="body2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است.
              </Typography>
            </Grid>

            <Grid size={{ md: 3 }}>
              <Box borderRadius={50} overflow={"hidden"} width={100} height={100} mx={"auto"}>
                <Image src={userimage.src} alt="user profile" width={100} height={100} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
