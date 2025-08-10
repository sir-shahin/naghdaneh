"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import UserIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { ROUTES } from "@/routes";

import { Link } from "./common";

export default function TopAppBar() {
  const [isTop, setIsTop] = useState(true);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          <IconButton size="large" edge="start" aria-label="menu" sx={{ ml: 1 }}>
            <MenuIcon />
          </IconButton>
        </Box>

        {path !== "/auth/login" && (
          <Button LinkComponent={Link} href={ROUTES.LOGIN} sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography color="black" fontWeight={500}>
              ورود | عضویت
            </Typography>
            <UserIcon sx={{ color: "black", mr: 1.5 }} />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
