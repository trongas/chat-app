import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3} >
      <Stack spacing={3}
            height="100%" 

            sx={{
        overflowY: "auto", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between"
      }}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} key={el.id} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // Handle image message
                  return <div key={el.id}><MediaMsg el={el}/></div>;
                case "doc":
                  // Handle document message
                  return <div key={el.id}><DocMsg el={el}/></div>;
                case "link":
                  // Handle link message
                  return <div key={el.id}><LinkMsg el={el}/></div>;
                case "reply":
                  // Handle reply message
                  return <div key={el.id}><ReplyMsg el={el}/></div>;
                default:
                  // Default text message
                  return <div key={el.id}><TextMsg el={el}/></div>;
              }

            default:
              return null; // Ensure something is returned
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
