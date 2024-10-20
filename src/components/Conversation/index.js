import {  Box, Stack } from "@mui/material";
import React from "react";
import ChatHeader from "../Chat/Header";
import Footer from "../Chat/Footer";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      {/* <Box sx={{ height: 100, width: "100%", backgroundColor: "#F8FAFF" ,boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
        <Stack alignItems={"center"} direction="row" justifyContent="space-between" sx={{width: "100$", height: "100%"}}>
            <Stack direction={"row"} spacing={2}>
                <Box>

                </Box>
                <StyledBadge>
                    <Avatar alt={faker}/>
                </StyledBadge>
            </Stack>
        </Stack>
      </Box> */}
      <ChatHeader/>
      {/* Msg */}
      <Box width={"100%"} sx={{flexGrow: 1.4}}>

      </Box>
      {/* Chat Footer */}
      <Box sx={{ height: 100, width: "100%", backgroundColor: "#F8FAFF", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}       >
        <Footer/>
      </Box>
    </Stack>
  );
};

export default Conversation;
