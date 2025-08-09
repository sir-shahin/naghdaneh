import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Card } from "@/components/common";

export const Show = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Box bgcolor={"white"}>
        <Container sx={{ top: -100, position: "relative" }}>
          <Box justifyContent={"space-between"} alignItems={"center"} display={{ md: "flex" }} mb={{ xs: 5, md: 2 }}>
            <Typography variant="caption">نتایج جست‌وجو: ۳۴ مورد</Typography>
            <Stack direction={"row"} gap={3} alignItems={"center"} justifyContent={{ xs: "space-between" }}>
              <Typography>ترتیب نمایش:</Typography>
              <TextField select size="small" sx={{ fontSize: 10 }} value={0}>
                <MenuItem value="0">بیشترین امتیاز</MenuItem>
                <MenuItem value="1">جدیدترین</MenuItem>
              </TextField>
            </Stack>
          </Box>

          <Grid container mx={{ xs: -1, md: -2 }}>
            {[1, 1, 1, 1, 11, 1, 1, 1].map((item, index) => (
              <Grid key={index} size={{ xs: 4, md: 2.4 }} px={{ xs: 0.5, md: 2 }} pb={3}>
                <Card />
              </Grid>
            ))}
          </Grid>

          <Box display={"flex"} justifyContent={"center"}>
            <Pagination count={10} color="primary" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
