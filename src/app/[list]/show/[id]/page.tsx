import React from "react";

import MainContainer from "@/components/mainContainers";
import { Info } from "@/components/show";
import bg from "@/assets/images/mountain.jpg";

export default function Show() {
  return (
    <MainContainer
      sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "top center" }}
    >
      <Info />
    </MainContainer>
  );
}
