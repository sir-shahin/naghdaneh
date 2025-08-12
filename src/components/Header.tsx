"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import UserIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MedalIcon from "@mui/icons-material/MilitaryTech";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { ROUTES } from "@/routes";

import { Link, SidebarMenu } from "./common";

export default function TopAppBar() {
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [isTop, setIsTop] = useState(true);
  const path = usePathname();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        sx={{
          bgcolor: isTop ? "transparent" : "white",
          transition: "background-color 0.3s",
        }}
        elevation={0}
      >
        <Toolbar component={Container}>
          <Typography textAlign="right" fontWeight="bold" variant="h5" sx={{ flexGrow: 1 }} color="black">
            <Link href={ROUTES.INDEX} underline="none" color="inherit">
              نقدانه
            </Link>
          </Typography>

          <Box sx={{ display: { md: "none" } }}>
            <IconButton onClick={toggleDrawer(true)} size="large" edge="start" aria-label="menu" sx={{ ml: 1 }}>
              <MenuIcon />
            </IconButton>
          </Box>

          {path !== ROUTES.LOGIN && (
            <Stack direction={"row"} sx={{ display: { xs: "none", md: "flex" } }}>
              <Button endIcon={<UserIcon sx={{ color: "black", mr: 1.5 }} />} LinkComponent={Link} href={ROUTES.LOGIN}>
                <Typography color="black" fontWeight={500}>
                  ورود | عضویت
                </Typography>
              </Button>
              {/* <Button size="large" endIcon={<MedalIcon sx={{ mr: 1 }} />} color="primary">
                <Typography fontWeight={500}>خرید اشتراک</Typography>
              </Button> */}
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <SidebarMenu />
      </SwipeableDrawer>
    </>
  );
}
