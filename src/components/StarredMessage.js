import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../redux/slices/app";
import Message from "./Conversation/Message";

const StarredMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "350px", height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.default,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Message</Typography>
          </Stack>
        </Box>

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
            p: 3,
            spacing: 3,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
            "&:hover": {
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "4px",
              },
            },
          }}
        >
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessage;
