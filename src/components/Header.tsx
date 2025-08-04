import * as React from "react";

import UserIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TopAppBar() {
  return (
    <AppBar sx={{ bgcolor: "white" }} elevation={0}>
      <Toolbar component={Container}>
        <Box sx={{ display: { md: "none" } }}>
          <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Button sx={{ display: { xs: "none", md: "flex" } }}>
          <UserIcon sx={{ color: "black", mr: 1.5 }} />
          <Typography color="black" fontWeight={500}>
            ورود | عضویت
          </Typography>
        </Button>

        <Typography textAlign="right" fontWeight="bold" variant="h5" sx={{ flexGrow: 1 }} color="black">
          نقدانه
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
