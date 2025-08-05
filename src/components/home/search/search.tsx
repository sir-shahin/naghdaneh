import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const Search = () => {
  return (
    <Stack direction={{ xs: "column-reverse", md: "row" }} gap={1}>
      <Button variant="contained" color="primary" sx={{ flex: 0.25, px: 4, py: 1.2 }}>
        جست و جو
      </Button>
      <Box
        display={"flex"}
        flex={0.75}
        border={"1.5px solid #CACACA"}
        borderRadius={3}
        justifyContent={"space-between"}
      >
        <TextField
          size="small"
          select
          sx={{
            direction: "rtl",
            flex: 0.4,
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiOutlinedInput-root": { boxShadow: "none" },
            "& .MuiInputBase-root": { boxShadow: "none" },
          }}
          value={0}
        >
          <MenuItem disabled value="0">
            دسته بندی
          </MenuItem>
          <MenuItem value={10}>فیلم و سینما</MenuItem>
          <MenuItem value={10}>کافه و رستوران</MenuItem>
        </TextField>

        <TextField
          size="small"
          sx={{
            direction: "rtl",
            flex: 0.6,
            minWidth: 240,
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiOutlinedInput-root": { boxShadow: "none" },
            "& .MuiInputBase-root": { boxShadow: "none" },
          }}
          placeholder="عنوان فیلم، کتاب، آهنگ یا..."
        />
      </Box>
    </Stack>
  );
};
