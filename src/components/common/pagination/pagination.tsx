"use client";

import React from "react";

import ArrowBack from "@mui/icons-material/ChevronLeft";
import ArrowForward from "@mui/icons-material/ChevronRight";
import { default as MuiPagination, PaginationProps } from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export const Pagination = (props: PaginationProps) => (
  <MuiPagination
    {...props}
    renderItem={(item) => {
      if (item.type === "previous") {
        return <PaginationItem {...item} slots={{ previous: ArrowForward }} />;
      }
      if (item.type === "next") {
        return <PaginationItem {...item} slots={{ next: ArrowBack }} />;
      }
      return <PaginationItem {...item} />;
    }}
  />
);
