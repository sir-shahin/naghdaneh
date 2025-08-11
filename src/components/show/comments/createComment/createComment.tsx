import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { CommentFormModal } from "./modal";

export const CreateComment = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ my: 3 }}>
        <Box border="1px solid #00000010" borderRadius={5} textAlign={"center"} p={3}>
          <CommentFormModal />

          <Typography variant="body2" my={1}>
            به جمع نقدکنندگان بپیوندید و دیدگاهتان را ثبت کنید.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
