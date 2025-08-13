import React from "react";

import SmsIcon from "@mui/icons-material/SmsOutlined";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { WideCard } from "@/components/common";

export default function Account() {
  return (
    <Box py={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} gap={1.5}>
          <SmsIcon fontSize="large" />
          <Typography variant="h6">نقدهای من</Typography>
        </Stack>

        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography>دسته‌بندی:</Typography>
          <TextField select value={1} size="small">
            <MenuItem value="1">همه دسته‌ها</MenuItem>
            <MenuItem value="4">سینما</MenuItem>
            <MenuItem value="2">سفر</MenuItem>
            <MenuItem value="3">تفریح</MenuItem>
          </TextField>
        </Box>
      </Stack>

      <Box py={2}>
        {/* <WideCard /> */}
        {/* empty */}
        <Box borderRadius={4} border={"1px solid #ddd"} bgcolor={"#eee"} py={8} textAlign={"center"}>
          <SmsIcon fontSize="large" color="disabled" />
          <Typography color="#aaa"> هنوز نظر ارزشمندت رو نگفتی!</Typography>
        </Box>
      </Box>
    </Box>
  );
}
