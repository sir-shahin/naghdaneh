import React from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type Props = {
  setSteps: (n: number) => void;
  phone: string;
  setPhone: (n: string) => void;
};

export const MobileField = ({ setSteps, phone, setPhone }: Props) => {
  return (
    <Fade in timeout={500}>
      <Box>
        <Typography gutterBottom>شمارهٔ موبایل خود را وارد کنید</Typography>
        <Typography mb={3.5} color="textDisabled" variant="subtitle2">
          کد تأیید به این شماره پیامک خواهد شد.با ورود شرایط استفاده از خدمات و حریم خصوصی نقدانه را می‌پذیرم.
        </Typography>
        <TextField
          autoFocus
          value={phone}
          onChange={(e) => {
            const value = e.target.value.slice(0, 11);
            setPhone(value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && phone.length === 11) {
              setSteps(1);
            }
          }}
          inputProps={{ maxLength: 11 }}
          fullWidth
          placeholder="شماره موبایل"
          type="tel"
          sx={{ "& input::placeholder": { textAlign: "right" } }}
        />
      </Box>
    </Fade>
  );
};
