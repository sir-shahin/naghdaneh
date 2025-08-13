"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import ArrowIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  icon: React.ElementType;
  title: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export const NavItem: React.FC<Props> = (props) => {
  const { icon: Icon, title, href, target, onClick } = props;
  const path = usePathname();

  const isLink = Boolean(href);
  return (
    <ListItem disableGutters disablePadding>
      <ListItemButton
        sx={{
          my: 1,
          borderRadius: 3,
          "&.Mui-selected": { color: "primary.main", bgcolor: "transparent" },
        }}
        {...(isLink
          ? {
              component: NextLink,
              href,
              target,
            }
          : {
              component: "button",
              onClick,
            })}
        selected={isLink && path === href}
      >
        <ListItemIcon sx={{ minWidth: 37, color: "inherit" }}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} slotProps={{ primary: { textAlign: "right" } }} />
        {isLink && path === href && <ArrowIcon sx={{ position: "absolute", left: 0, top: 13 }} />}
      </ListItemButton>
    </ListItem>
  );
};
