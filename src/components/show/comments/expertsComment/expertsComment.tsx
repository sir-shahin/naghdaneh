import React from "react";

import QuoteIcon from "@mui/icons-material/FormatQuote";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ShowRate } from "@/components/common";
import { getRandomColor } from "@/utils";
import userimage from "@/assets/images/000/user.jpg";
import { SVGMessageTick } from "@/assets/images/message-tick";

export const ExpertsComment = () => {
  return (
    <Fade in timeout={1000} unmountOnExit>
      <Box bgcolor={"white"} borderRadius={5} p={{ xs: 1.5, md: 5 }} mb={3}>
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
            <Grid container flexDirection={{ xs: "column-reverse", md: "row" }}>
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
                <Avatar
                  alt="کاربر"
                  src={userimage.src}
                  sx={{ width: 130, height: 130, bgcolor: getRandomColor(1 * 190), m: "auto" }}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Fade>
  );
};
