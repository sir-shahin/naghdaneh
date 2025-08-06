import React from "react";

import PlusIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const CreateComment = () => {
  return (
    <Container maxWidth="md" sx={{ my: 3 }}>
      <Box border="1px solid #00000010" borderRadius={5} textAlign={"center"} p={3}>
        <Stack direction={"row"} component={Button} onClick={() => {}} justifyContent={"center"} px={5} mx={"auto"}>
          <Box
            sx={{
              border: "2px solid #FF4400",
              borderRadius: "10px 10px 10px 0",
              display: "flex",
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PlusIcon />
          </Box>
          <Typography fontWeight={"bold"} pr={2}>
            نظر خود را ثبت کنید
          </Typography>
        </Stack>
        <Typography variant="body2" my={1}>
          به جمع نقدکنندگان بپیوندید و دیدگاهتان را ثبت کنید.
        </Typography>
      </Box>
    </Container>
  );
};
