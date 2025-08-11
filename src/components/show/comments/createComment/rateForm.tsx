"use client";

import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { CodeField } from "@/components/panel";

import { Stars } from "./stars";

type Props = {
  onClose: () => void;
  setRating: (r: number) => void;
  rating: number;
};
export const RateForm = ({ onClose, rating, setRating }: Props) => {
  return (
    <Container maxWidth="xs">
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography fontWeight={"bold"} color="primary.light" mb={1}>
          نظرت چیه؟
        </Typography>
        <IconButton title="بستن" onClick={() => onClose()}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>

      <TextField fullWidth multiline minRows={5} margin="normal" placeholder="برامون بنویس..." />

      <Stack direction={"row"}>
        <Typography color="textDisabled" gutterBottom>
          چند ستاره میدی؟
        </Typography>
        {!!rating && (
          <Typography px={1} fontSize={10}>
            ({rating})
          </Typography>
        )}
      </Stack>
      <Stars rating={rating} setRating={setRating} />

      {/* Check auth */}
      <TextField size="small" fullWidth margin="normal" placeholder="نام و نام خانوادگی" />

      <TextField
        size="small"
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 11 }}
        placeholder="شماره موبایل"
        type="tel"
        sx={{ "& input::placeholder": { textAlign: "right" } }}
      />
      <Typography color="textDisabled" fontSize={11} mb={2}>
        *شماره شما محرمانه میمونه
      </Typography>
      {/* End check auth */}
      <Button color="primary" variant="contained" fullWidth sx={{ py: 1.5 }}>
        بزن بریم
      </Button>

      {/* <CodeField phone="" setSteps={() => {}} codes={["", "", "", ""]} setCodes={() => {}} /> */}
    </Container>
  );
};
