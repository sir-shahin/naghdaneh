"use client";

import React from "react";

import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccountsOutlined";
import MedalIcon from "@mui/icons-material/MilitaryTechOutlined";
import ReceiptionIcon from "@mui/icons-material/ReceiptLongRounded";
import SmsIcon from "@mui/icons-material/SmsOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import { LevelIcon } from "@/components/common";
import { getRandomColor } from "@/utils";
import userimage0 from "@/assets/images/000/user.jpg";
import userimage from "@/assets/images/user.svg";

import { ROUTES } from "@/routes";

import { NavItem } from "./nav-item";

export const PanelMenu = () => {
  return (
    <Box component="aside" bgcolor={"white"} borderRadius={5} p={2} border={"1px solid #ddd"}>
      <LevelIcon />
      <Avatar
        alt="کاربر"
        src={userimage0.src}
        sx={{ width: 80, height: 80, bgcolor: getRandomColor(1 * 190), m: "auto", boxShadow: 4 }}
      />
      <Typography textAlign={"center"} fontWeight={"bold"} mt={1.5}>
        علی علیزاده
      </Typography>
      <List>
        <NavItem title="نقدهای من" icon={SmsIcon} href={ROUTES.PANEL} />
        <NavItem title="تنظیمات" icon={ManageAccountsIcon} href="#" />
        <NavItem title="خرید اشتراک" icon={MedalIcon} href="#" />
        <NavItem title="مالی" icon={ReceiptionIcon} href="#" />
        <NavItem
          title="خروج"
          icon={LogoutIcon}
          onClick={() => {
            alert("logout");
          }}
        />
      </List>
    </Box>
  );
};
