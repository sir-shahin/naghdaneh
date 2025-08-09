"use client";

import React, { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";

import { SVGPeople } from "@/assets/images/people";
import { SVGUserOct } from "@/assets/images/user-oct";
import { SVGUserProfile } from "@/assets/images/user-profile";

import { CreateComment } from "./createComment";
import { ExpertsComment } from "./expertsComment";
import { SiteExpert } from "./siteExpert";
import { UsersComment } from "./usersComment";

export const Comments = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleActivator = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  return (
    <Box ref={sectionRef} component={"section"} bgcolor="#fdfcfa" py={5}>
      <Container disableGutters>
        <Stack
          position={"sticky"}
          top={{ xs: 56, md: 64 }}
          zIndex={1}
          bgcolor={"#fdfcfa"}
          direction={"row"}
          maxWidth={680}
          mx={"auto"}
          gap={{ md: 1 }}
          mb={5}
          borderRadius={3}
        >
          <Button
            fullWidth
            disableElevation
            sx={{ fontWeight: activeTab === 0 ? "400" : "bold", px: 0, py: 1, fontSize: { xs: 12, md: "unset" } }}
            onClick={() => handleActivator(0)}
            variant={activeTab === 0 ? "contained" : "outlined"}
            startIcon={<SVGUserOct sx={{ ml: 1 }} />}
          >
            نظر نقدانه
          </Button>
          <Button
            fullWidth
            disableElevation
            sx={{ fontWeight: activeTab === 1 ? "400" : "bold", px: 0, py: 1, fontSize: { xs: 12, md: "unset" } }}
            onClick={() => handleActivator(1)}
            variant={activeTab === 1 ? "contained" : "outlined"}
            startIcon={<SVGUserProfile sx={{ ml: 1 }} />}
          >
            نظر کارشناسان
          </Button>
          <Button
            fullWidth
            disableElevation
            sx={{ fontWeight: activeTab === 2 ? "400" : "bold", px: 0, py: 1, fontSize: { xs: 12, md: "unset" } }}
            onClick={() => handleActivator(2)}
            variant={activeTab === 2 ? "contained" : "outlined"}
            startIcon={<SVGPeople sx={{ ml: 1 }} />}
          >
            نظر کاربران
          </Button>
        </Stack>

        <Container maxWidth="md">
          {/* Fade effect for tab content */}
          <Fade in={activeTab === 0} timeout={1000} unmountOnExit>
            <div>{activeTab === 0 && <SiteExpert />}</div>
          </Fade>
          <Fade in={activeTab === 1} timeout={1000} unmountOnExit>
            <div>{activeTab === 1 && <ExpertsComment />}</div>
          </Fade>
          <Fade in={activeTab === 2} timeout={1000} unmountOnExit>
            <div>{activeTab === 2 && <UsersComment />}</div>
          </Fade>

          {/* No comment */}
          {/* <EmptyComment /> */}
        </Container>

        {/* Add comment */}
        <CreateComment />
      </Container>
    </Box>
  );
};
