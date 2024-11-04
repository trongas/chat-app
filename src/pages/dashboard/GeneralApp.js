import React from "react";
import { Stack, Box, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import StarredMessage from "../../components/StarredMessage";
import Chats from "./chats";

const GeneralApp = () => {
  const theme = useTheme();
  const sidebar = useSelector((state) => state.app.sidebar);

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats />

      <Box
        sx={{
          height: "100vh",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 385px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>

      {/* Render additional sidebar content conditionally */}
      {sidebar.open && (
        <>
          {sidebar.type === "CONTACT" && <Contact />}
          {sidebar.type === "SHARED" && <SharedMessage />}
          {sidebar.type === "STARRED" && <StarredMessage />}
        </>
      )}
    </Stack>
  );
};

export default GeneralApp;
