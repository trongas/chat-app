import { Dialog, useTheme } from "@mui/material";
import React from "react";
import { DialogContent, DialogTitle, Stack } from "@mui/material";

import { CallElement } from "../../components/CallElement";
import { CallList } from "../../data";

const StartCall = ({ open, handleClose }) => {
  const theme = useTheme();
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        keepMounted
        onClose={handleClose}
        sx={{ p: 4 }}
      >
        <DialogTitle>{"Start New Conversation"}</DialogTitle>

        <DialogContent
          sx={{
            maxHeight: "400px", // Giới hạn chiều cao để tránh dialog quá lớn
            overflow: "hidden", // Ẩn thanh cuộn hoàn toàn
            p: 1,
          }}
        >
          <Stack p={1} sx={{ width: "100%" }}>
            {/* <Search>
          <SearchIconWrapper>
            <MagnifyingGlass color="#709CE6" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
          </Stack>
        </DialogContent>
        <Stack
          sx={{
            height: "100%",
            overflowY: "hidden", // Start with hidden
            "&:hover": {
              overflowY: "auto", // Show on hover
            },
            // Optional custom scrollbar styling
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.grey[400],
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: theme.palette.grey[600],
            },
            p: 1,
          }}
        >
          <Stack spacing={2.4}>
            {CallList.map((el, index) => (
              <CallElement key={index} {...el} />
            ))}
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default StartCall;
