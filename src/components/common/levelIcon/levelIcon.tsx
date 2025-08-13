import React from "react";

import MedalIcon from "@mui/icons-material/MilitaryTech";
import Box from "@mui/material/Box";

export const LevelIcon = () => {
  return (
    <Box
      title="طرح طلایی"
      sx={{
        position: "relative",
        display: "flex",
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        mb: -1.5,
        overflow: "visible",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -4,
          left: -4,
          width: 38,
          height: 38,
          borderRadius: 7,
          zIndex: 0,
          background: "conic-gradient(#F79327 1%, #FF4400 100%)",
          animation: "rotateBorder 2s linear infinite",
          mask: "radial-gradient(circle 23px at center, transparent 70%, black 72%)",
          WebkitMask: "radial-gradient(circle 23px at center, transparent 70%, black 72%)",
        },
        "@keyframes rotateBorder": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      }}
    >
      <MedalIcon sx={{ color: "gold", zIndex: 1 }} />
    </Box>
  );
};
