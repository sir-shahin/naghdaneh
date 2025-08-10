"use client";

import React, { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
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
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY !== 0) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
          {activeTab === 0 && <SiteExpert />}
          {activeTab === 1 && <ExpertsComment />}
          {activeTab === 2 && <UsersComment />}

          {/* No comment */}
          {/* <EmptyComment /> */}
        </Container>

        {/* Add comment */}
        <CreateComment />
      </Container>
    </Box>
  );
};
