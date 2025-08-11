import React from "react";

import Box from "@mui/material/Box";

import { SVGStar } from "@/assets/images/star";

type Props = {
  rating: number;
  setRating: (r: number) => void;
};
export const Stars = ({ rating, setRating }: Props) => {
  const [animateStar, setAnimateStar] = React.useState<number | null>(null);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            display: "inline-block",
            transition: "transform 0.3s",
            transform: animateStar === star ? "scale(1.3) rotate(-10deg)  rotate(10deg)" : "scale(1)",
          }}
          onAnimationEnd={() => setAnimateStar(null)}
          title={star.toString()}
        >
          <SVGStar
            color="primary"
            fill={star <= rating ? "#FFD700" : "transparent"}
            onClick={() => {
              setRating(star);
              setAnimateStar(star);
              setTimeout(() => setAnimateStar(null), 300);
            }}
            fontSize="large"
            sx={{ cursor: "pointer", mx: 0.5 }}
          />
        </span>
      ))}
    </Box>
  );
};
