import React from "react";
import {
  Dialog,
  Slide,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  Grid,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  { key: 0, title: "Mark as unread", combination: ["Cmd", "Shift", "U"] },
  { key: 1, title: "Mute", combination: ["Cmd", "Shift", "M"] },
  { key: 2, title: "Archive Chat", combination: ["Cmd", "Shift", "E"] },
  { key: 3, title: "Delete Chat", combination: ["Cmd", "Shift", "D"] },
  { key: 4, title: "Pin Chat", combination: ["Cmd", "Shift", "P"] },
  { key: 5, title: "Search", combination: ["Cmd", "F"] },
  { key: 6, title: "Search Chat", combination: ["Cmd", "Shift", "F"] },
  { key: 7, title: "Next Chat", combination: ["Cmd", "N"] },
  { key: 8, title: "Next Step", combination: ["Ctrl", "Tab"] },
  { key: 9, title: "Previous Step", combination: ["Ctrl", "Shift", "Tab"] },
  { key: 10, title: "New Group", combination: ["Cmd", "Shift", "N"] },
  { key: 11, title: "Profile & About", combination: ["Cmd", "P"] },
  { key: 12, title: "Increase speed of voice message", combination: ["Shift", "."] },
  { key: 13, title: "Decrease speed of voice message", combination: ["Shift", ","] },
  { key: 14, title: "Settings", combination: ["Shift", "S"] },
  { key: 15, title: "Emoji Panel", combination: ["Cmd", "E"] },
  { key: 16, title: "Sticker Panel", combination: ["Cmd", "S"] },
];

const ShortcutDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 2 }}
    >
      <DialogTitle sx={{mb:4}}>{"Keyboard Shortcuts"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {list.map(({ key, title, combination }) => (
            <Grid item xs={6} key={key}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                  {title}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {combination.map((el, index) => (
                    <Button
                      key={index}
                      disabled
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "#212121",
                        fontSize: 11,
                        minWidth: "auto",
                        px: 1,
                      }}
                    >
                      {el}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShortcutDialog;
