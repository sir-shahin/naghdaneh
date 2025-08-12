import React from "react";

import ManageAccountsIcon from "@mui/icons-material/ManageAccountsOutlined";
import MedalIcon from "@mui/icons-material/MilitaryTechOutlined";
import ReceiptionIcon from "@mui/icons-material/ReceiptLongRounded";
import SmsIcon from "@mui/icons-material/SmsOutlined";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import { ROUTES } from "@/routes";

import { NavItem } from "./nav-item";

export const PanelMenu = () => {
  return (
    <Box component="aside" bgcolor={"white"} borderRadius={5} p={2} border={"1px solid #ddd"}>
      <Typography textAlign={"center"} fontWeight={"bold"}>
        علی علیزاده
      </Typography>
      <List>
        <NavItem title="نقدهای من" icon={SmsIcon} href={ROUTES.PANEL} />
        <NavItem title="تنظیمات" icon={ManageAccountsIcon} href="#" />
        <NavItem title="خرید اشتراک" icon={MedalIcon} href="#" />
        <NavItem title="مالی" icon={ReceiptionIcon} href="#" />
      </List>
    </Box>
  );
};
