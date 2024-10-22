import { Box, Stack } from "@mui/material";
import React from "react";
import ChatHeader from "../Chat/Header";
import Footer from "../Chat/Footer";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} >
      {/* Chat header */}
      <ChatHeader />
      {/* Msg */}
      <Box width={"100%"} sx={{ flexGrow: 1.4 , height: "100%" , overflowY: "scroll"}}>
        <Message/>
      </Box>
      {/* Chat Footer */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Footer />
      </Box>
    </Stack>
  );
};

export default Conversation;
