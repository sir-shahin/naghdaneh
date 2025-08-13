import React from "react";

import SmsIcon from "@mui/icons-material/SmsOutlined";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Pagination, WideCard } from "@/components/common";

const filterCategory = [
  {
    key: "سینما",
    value: 10,
  },
  {
    key: "سفر",
    value: 2,
  },
];
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
            <MenuItem value={1}>همه دسته‌ها</MenuItem>
            {filterCategory.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.key}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Stack>

      <Box py={2}>
        <WideCard />
        <Box display={"flex"} justifyContent={"center"}>
          <Pagination count={10} color="primary" />
        </Box>
        {/* empty */}
        {/* <Box borderRadius={4} border={"1px solid #ddd"} bgcolor={"#eee"} py={8} textAlign={"center"}>
          <SVGMessages fontSize="large" color="disabled" />
          <Typography color="#aaa"> هنوز نظر ارزشمندت رو نگفتی!</Typography>
        </Box> */}
      </Box>
    </Box>
  );
}
