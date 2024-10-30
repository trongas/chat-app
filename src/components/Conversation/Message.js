import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack
        spacing={3}
        height="100%"
        sx={{
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {Chat_History.map((el, index) => {
          const uniqueKey = `${el.id}-${index}`; // Generate a unique key

          switch (el.type) {
            case "divider":
              return <Timeline el={el} key={uniqueKey} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  return <div key={uniqueKey}><MediaMsg el={el} /></div>;
                case "doc":
                  return <div key={uniqueKey}><DocMsg el={el} /></div>;
                case "link":
                  return <div key={uniqueKey}><LinkMsg el={el} /></div>;
                case "reply":
                  return <div key={uniqueKey}><ReplyMsg el={el} /></div>;
                default:
                  return <div key={uniqueKey}><TextMsg el={el} /></div>;
              }

            default:
              return null; // Optional: Add a unique key here if needed
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
