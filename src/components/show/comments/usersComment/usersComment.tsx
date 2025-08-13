import React from "react";

import HeartIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { RateBadge, ShowRate } from "@/components/common";
import { getRandomColor } from "@/utils";
import userimage0 from "@/assets/images/000/user.jpg";
import { SVGMessageTick } from "@/assets/images/message-tick";
import { SVGStar } from "@/assets/images/star";
import userimage from "@/assets/images/user.svg";

export const UsersComment = () => {
  return (
    <Fade in timeout={1000} unmountOnExit>
      <Box bgcolor={"white"} borderRadius={5} p={{ xs: 2, md: 5 }} mb={3}>
        <Box display={"flex"} justifyContent={"space-between"} mb={4}>
          <Stack direction={"row"}>
            <SVGMessageTick />
            <Typography variant="h6" fontWeight={600} px={1}>
              نظرات کاربران
            </Typography>
          </Stack>
          <ShowRate title="مجموع امتیازات" rate={5} />
        </Box>

        {[1, 2, 3].map((comment, index) => (
          <Box key={index} border={"1px solid #00000010"} borderRadius={3} p={3} mb={2.5}>
            <Grid container>
              <Grid size={{ md: 3 }}>
                <Avatar
                  alt="کاربر"
                  src={userimage.src}
                  sx={{ width: 100, height: 100, bgcolor: getRandomColor(comment * 190), m: "auto" }}
                />
              </Grid>
              <Grid size={{ md: 9 }}>
                <Stack direction={"row"} mb={2} p={1}>
                  <Typography fontWeight="bold">علی علیزاده</Typography>
                  <Typography color="gray" px={2} fontSize={12}>
                    دیروز
                  </Typography>
                </Stack>

                <Typography variant="body2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است.
                </Typography>

                <Box display={"flex"} justifyContent={"space-between"}>
                  <Stack direction={"row"} color={"gray"} alignItems="center">
                    <HeartIcon fontSize="small" />
                    <Typography fontSize={12} px={1}>
                      24 نفر پسندیدند
                    </Typography>
                  </Stack>
                  <RateBadge small rate={2} icon={<SVGStar />} bgColor="#eeeeee90" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Fade>
  );
};
