import React from "react";
import Image from "next/image";

import InfoIcon from "@mui/icons-material/InfoOutline";
import LocalPoliceIcon from "@mui/icons-material/LocalPoliceOutlined";
import LoginIcon from "@mui/icons-material/Login";
import ManageAccountsIcon from "@mui/icons-material/ManageAccountsOutlined";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import OutputIcon from "@mui/icons-material/Output";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import userimage0 from "@/assets/images/000/user.jpg";

export const SidebarMenu = () => {
  return (
    <Box width="80vw" maxWidth={400}>
      <Box
        sx={{ background: "linear-gradient(90deg, #F79327 0%, #FF4400 100%)" }}
        p={2.5}
        justifyContent={"center"}
        display={"flex"}
        mb={4}
      >
        <Box
          sx={{
            borderRadius: 50,
            overflow: "hidden",
            width: 80,
            height: 80,
            mb: -5,
            boxShadow: 4,
            border: "3px solid white",
          }}
        >
          <Image src={userimage0.src} alt="user profile" width={80} height={80} />
        </Box>
      </Box>

      <Typography textAlign={"center"}>علی علیزاده</Typography>
      <Typography fontSize={10} fontWeight={100} color="gray" textAlign={"center"}>
        09111234567
      </Typography>

      <List sx={{ py: 5 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LoginIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"ورود | عضویت"} sx={{ direction: "rtl", textAlign: "right" }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ManageAccountsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"حساب کاربری"} sx={{ direction: "rtl", textAlign: "right" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MilitaryTechIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"خرید اشتراک"} sx={{ direction: "rtl", textAlign: "right" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalPoliceIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"قوانین ما"} sx={{ direction: "rtl", textAlign: "right" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"درباره ما"} sx={{ direction: "rtl", textAlign: "right" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <OutputIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"خروج"} sx={{ direction: "rtl", textAlign: "right" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
