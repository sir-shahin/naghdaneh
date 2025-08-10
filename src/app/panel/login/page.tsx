"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import MainContainer from "@/components/mainContainers";
import { MobileField } from "@/components/panel";
import { Code, CodeField } from "@/components/panel/codeField";

import { ROUTES } from "@/routes";

export default function Login() {
  const [codes, setCodes] = useState<Code>(["", "", "", ""]);
  const [steps, setSteps] = useState(0);
  const [phone, setPhone] = useState("");
  const router = useRouter();

  React.useEffect(() => {
    if (phone.length === 11) {
      setSteps(1);
    }
  }, [phone]);

  React.useEffect(() => {
    if (codes.filter((c) => c != "").length === 4) {
      // todo: login
      router.push(ROUTES.INDEX);
    }
  }, [codes]);

  return (
    <MainContainer>
      <Box display={"flex"} flex={1} justifyContent={"center"} alignItems={"center"} pb={5}>
        <Container maxWidth="xs">
          <Typography mb={2} textAlign={"center"} fontSize={55} color="primary" fontWeight={"bold"}>
            نقدانه
          </Typography>

          {steps === 0 ? (
            <MobileField setSteps={setSteps} phone={phone} setPhone={setPhone} />
          ) : (
            <CodeField codes={codes} setCodes={setCodes} phone={phone} setSteps={setSteps} />
          )}
        </Container>
      </Box>
    </MainContainer>
  );
}
