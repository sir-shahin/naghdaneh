"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import ArrowIcon from "@mui/icons-material/ChevronLeft";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  icon: React.ComponentType<any>;
  title: string;
  href: string;
  target?: string;
  onClick?: () => void;
}

export const NavItem: React.FC<Props> = (props) => {
  const { icon: Icon, title, href, target, onClick } = props;
  const path = usePathname();

  return (
    // <ListItemButton
    //   sx={{
    //     my: 1,
    //     borderRadius: 3,
    //     ":hover": { bgcolor: "rgba(255, 255, 255, 0.10)" },
    //     "&.Mui-selected": { color: "primary.main" },
    //   }}
    //   component={NextLink}
    //   href={href}
    //   selected={path === props.href}
    //   target={target}
    //   onClick={onClick}
    // >
    //   <Icon sx={{ ml: 2 }} />
    //   <ListItemText primary={title} slotProps={{ primary: { textAlign: "right" } }} />
    // </ListItemButton>

    <ListItem disableGutters disablePadding>
      <ListItemButton
        sx={{
          my: 1,
          borderRadius: 3,
          "&.Mui-selected": { color: "primary.main", bgcolor: "transparent" },
        }}
        component={NextLink}
        href={href}
        selected={path === props.href}
        target={target}
        onClick={onClick}
      >
        <ListItemIcon sx={{ minWidth: 37, color: "inherit" }}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} slotProps={{ primary: { textAlign: "right" } }} />
        {path === props.href && <ArrowIcon sx={{ position: "absolute", left: 0, top: 13 }} />}
      </ListItemButton>
    </ListItem>
  );
};
