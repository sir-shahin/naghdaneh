import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import img80 from "@/assets/images/000/80.jpg";
import { SVGMessages } from "@/assets/images/messages";

import { Link } from "../link";
import { RateBadge } from "../rateBadge";

export const WideCard = () => {
  return (
    <Box borderRadius={4} border={"1px solid #ddd"} bgcolor={"white"} p={3} mb={3}>
      <Grid container spacing={3}>
        <Grid size={3} display={"flex"}>
          <Box position="relative" flex={1} height="inherit" minHeight={247}>
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
        <Grid size={9}>
          <Link href={"#"} color="black" underline="none" variant="h6">
            John Wick: Chapter 3 - Parabellum 2019
          </Link>
          <Stack direction={"row"} mt={1} justifyContent={"space-between"}>
            <Typography fontSize={12}>دسته‌بندی فیلم</Typography>
            <RateBadge bgColor="#FFC6001A" title="من" rate={3} small />
          </Stack>

          <Stack direction={"row"} gap={1} mb={1}>
            <SVGMessages />
            <Typography>نظر من:</Typography>
          </Stack>
          <Typography className="clamp3">
            جان ویک یک سمفونی بی‌نظیر از اکشن خالصه. با اینکه داستانش ساده‌ست، اما جهان‌سازی جذاب، طراحی مبارزات
            خیره‌کننده و بازی کاریزماتیک کیانو ریوز، این فیلم رو به یک اثر هنری در ژانر اکشن تبدیل کرده. برای هر کسی که
            دنبال اکشن ناب و درجه یکه، تماشای این فیلم واجبه.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
