import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router";

export default function Results(props) {
  const { citykey } = useParams();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h2">Hello {citykey}</Typography>
    </Box>
  );
}
