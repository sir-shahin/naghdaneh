"use client";

import React, { useRef } from "react";

import ArrowBack from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export type Code = string[];

type Props = {
  codes: Code;
  setCodes: (c: Code) => void;
  phone: string;
  setSteps: (n: number) => void;
};
export const CodeField = ({ codes, setCodes, phone, setSteps }: Props) => {
  const inputsRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (idx: number, value: string) => {
    if (!/^[0-9]{0,1}$/.test(value)) return;
    const newCodes = [...codes];
    newCodes[idx] = value;
    setCodes(newCodes);
    if (value && idx < 3) {
      inputsRef[idx + 1].current?.focus();
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !codes[idx] && idx > 0) {
      inputsRef[idx - 1].current?.focus();
    }
  };

  const handleBack = () => {
    setSteps(0);
    setCodes(["", "", "", ""]);
  };

  return (
    <Fade in timeout={500}>
      <Box>
        <Typography gutterBottom>کد تأیید را وارد کنید</Typography>
        <Typography color="textDisabled" variant="subtitle2" mb={3}>
          کد پیامک‌شده به شمارۀ {phone} را وارد کنید.
        </Typography>

        <Box display="flex" justifyContent="center" gap={2} mb={3} flexDirection={"row-reverse"}>
          {codes.map((code, idx) => (
            <TextField
              key={idx}
              inputRef={inputsRef[idx]}
              value={code}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e as React.KeyboardEvent<HTMLInputElement>)}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center", fontSize: 24, width: 40 },
                inputMode: "numeric",
              }}
              sx={{ width: 60 }}
              autoFocus={idx === 0}
              type="text"
            />
          ))}
        </Box>
        <Box textAlign={"left"}>
          <Button onClick={handleBack} endIcon={<ArrowBack fontSize="small" sx={{ pr: 1 }} />}>
            تغییر شماره
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};
