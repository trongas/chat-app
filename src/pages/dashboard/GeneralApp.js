import React from "react";
import Chats from "./chats";
import { Stack, Box } from "@mui/material";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  return (
    <>
      <Stack direction="row" sx={{width: "100%"}}>
        <Chats />

        <Box
          sx={{
            height: "100vh",
            width: "calc(100vw - 420px)",
            backgroundColor: "#fff",
          }}
        >
          <Conversation/>
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
