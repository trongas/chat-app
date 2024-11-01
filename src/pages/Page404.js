import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Page404 = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      backgroundColor = {theme.palette.background}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ fontWeight: "medium", fontSize: "1rem", color: theme.palette.action === "light" ? theme.palette.background : "#fff"}}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default Page404;
