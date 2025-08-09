import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const ListSearch = () => {
  return (
    <Box display={"flex"} gap={2}>
      <Box flex={0.8}>
        <TextField size="small" fullWidth placeholder="عنوان فیلم را وارد کنید" />
      </Box>
      <Button color="primary" variant="contained" sx={{ flex: 0.2 }}>
        جست و جو
      </Button>
    </Box>
  );
};
