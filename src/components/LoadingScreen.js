import React from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh" }}
      spacing={2}
    >
      <CircularProgress />
      <Typography variant="h6">Loading...</Typography>
    </Stack>
  );
};

export default LoadingScreen;
