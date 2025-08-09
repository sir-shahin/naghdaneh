import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { RateBadge } from "@/components/common";
import img80 from "@/assets/images/000/80.jpg";
import { SVGPeople } from "@/assets/images/people";
import { SVGUserOct } from "@/assets/images/user-oct";
import { SVGUserProfile } from "@/assets/images/user-profile";

export const Info = () => {
  return (
    <Container component={"section"}>
      <Grid container py={5}>
        <Grid size={{ xs: 12, md: 4 }} display="flex" px={5}>
          <Box position="relative" flex={1} height="inherit" minHeight={360}>
            <Box
              sx={{
                borderRadius: 5,
                boxShadow: 15,
                overflow: "hidden",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Image src={img80} alt="Info Image" fill style={{ objectFit: "cover" }} />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} py={5}>
          <Typography variant="h4" component="h1" gutterBottom>
            John Wick: Chapter 3 - Parabellum 2019
          </Typography>

          <Stack direction={"row"} gap={4} mb={3}>
            <Stack direction={"row"}>
              <Typography>دسته‌بندی:</Typography>
              <Typography px={1} color="primary">
                فیلم
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" mb={3} gap={4}>
            <Stack direction={"row"}>
              <Typography fontSize={13}>ژانرها:</Typography>
              <Typography px={1} fontSize={13}>
                اکشن ، تخیلی
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              <Typography fontSize={13}>IMDB:</Typography>
              <Typography px={1} fontSize={13}>
                5/10
              </Typography>
            </Stack>
          </Stack>

          <Typography mb={3} pl={{ md: 5 }}>
            جان ویک 3 یا جان ویک: بخش ۳ - پارابلوم، فیلمی اکشن مهیج و نئو-نوآر، به نویسندگی دریک کولستاد و کارگردانی چاد
            استاهلسکی است. این فیلم سومین قسمت از سری فیلم های جان ویک است. کیانو ریوز، هلی بری، ایان مک‌شین و لارنس
            فیشبرن به ایفای نقش می‌پردازند. آدمکش افسانه‌ای “جان ویک”؛ بعد از آنکه برای سرش جایزه ۱۴ میلیون دلاری
            گذاشته‌اند...
          </Typography>

          <Stack direction={"row"} flexWrap={"wrap"} justifyContent={{ xs: "center", md: "start" }} gap={3}>
            <RateBadge title="کارشناسان" rate={7} icon={<SVGUserProfile />} />
            <RateBadge title="کاربران" rate={6} icon={<SVGPeople />} />
            <RateBadge title="نقدانه" rate={3} icon={<SVGUserOct />} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
