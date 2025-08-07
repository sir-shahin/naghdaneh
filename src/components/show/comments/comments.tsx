"use client";

import React, { useState } from "react";

import QuoteIcon from "@mui/icons-material/FormatQuote";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { SVGPeople } from "@/assets/images/people";
import { SVGUserOct } from "@/assets/images/user-oct";

import { CreateComment } from "./createComment";

export const Comments = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActivator = (index: number) => {
    setActiveTab(index);
  };
  return (
    <Box component={"section"} bgcolor="white" py={5}>
      <Container>
        <Stack direction={"row"} maxWidth={680} mx={"auto"} gap={1} mb={5}>
          <Button
            fullWidth
            disableElevation
            sx={{ fontWeight: activeTab === 0 ? "400" : "bold", py: 1 }}
            onClick={() => handleActivator(0)}
            variant={activeTab === 0 ? "contained" : "outlined"}
            startIcon={<SVGUserOct sx={{ ml: 1 }} />}
          >
            نظر نقدانه
          </Button>
          <Button
            fullWidth
            disableElevation
            sx={{ fontWeight: activeTab === 1 ? "400" : "bold", py: 1 }}
            onClick={() => handleActivator(1)}
            variant={activeTab === 1 ? "contained" : "outlined"}
            startIcon={<SVGUserOct sx={{ ml: 1 }} />}
          >
            نظر کارشناسان
          </Button>
          <Button
            fullWidth
            disableElevation
            sx={{ fontWeight: activeTab === 2 ? "400" : "bold", py: 1 }}
            onClick={() => handleActivator(2)}
            variant={activeTab === 2 ? "contained" : "outlined"}
            startIcon={<SVGPeople sx={{ ml: 1 }} />}
          >
            نظر کاربران
          </Button>
        </Stack>

        {/* todo: we sould have three components here */}
        <Container maxWidth="md">
          <Box bgcolor="#00000010" borderRadius={5} textAlign={"center"} p={5}>
            <QuoteIcon sx={{ transform: "rotate(180deg)", fill: "#00000030" }} fontSize="large" />
            <Typography color="#00000040">جایگاه اولین نقد برای توست</Typography>
          </Box>
        </Container>

        {/* Add comment */}
        <CreateComment />
      </Container>
    </Box>
  );
};
