import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import MainContainer from "@/components/mainContainers";

export default function Login() {
  return (
    <MainContainer>
      <Box display={"flex"} flex={1} justifyContent={"center"} alignItems={"center"} pb={5}>
        <Container maxWidth="xs">
          <Typography mb={2} textAlign={"center"} fontSize={55} color="primary" fontWeight={"bold"}>
            نقدانه
          </Typography>

          <Typography gutterBottom>شمارهٔ موبایل خود را وارد کنید</Typography>
          <Typography mb={3.5} color="textDisabled" variant="subtitle2">
            کد تأیید به این شماره پیامک خواهد شد.با ورود شرایط استفاده از خدمات و حریم خصوصی نقدانه را می‌پذیرم.
          </Typography>

          {/* <MobileField /> */}

          <CodeField />
        </Container>
      </Box>
    </MainContainer>
  );
}

const MobileField = () => (
  <TextField fullWidth placeholder="شماره موبایل" type="tel" sx={{ "& input::placeholder": { textAlign: "right" } }} />
);

const CodeField = () => {
  return <></>;
};
