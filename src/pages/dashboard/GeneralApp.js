import React from "react";
import Chats from "./chats";
import { Stack, Box, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar} = useSelector((store) => store.app);
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats />

        <Box
          sx={{
            height: "100vh",
            width: sidebar.open ? "calc(100vw - 740px)": "calc(100vw - 385px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.paper,
          }}
        >
          <Conversation />
        </Box>
        {/* Contact */}
        {sidebar.open && <Contact />}
      </Stack>
    </>
  );
};

export default GeneralApp;
