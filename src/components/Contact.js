import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";
import { toggleSidebar, updateSidebarType } from "../redux/slices/app";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block this contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this Contact ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete this chat</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this Char ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
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
                : theme.palette.background.default, // Specify the background color property
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton onClick={() => dispatch(toggleSidebar())}>
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
            p: 3,
            spacing: 3,
            scrollbarWidth: "none", // Hide scrollbar on Firefox
            "&::-webkit-scrollbar": {
              width: "0px", // Hide scrollbar on WebKit browsers
            },
            "&:hover": {
              scrollbarWidth: "thin", // Show thin scrollbar on hover for Firefox
              "&::-webkit-scrollbar": {
                width: "8px", // Show scrollbar width on hover for WebKit browsers
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.3)", // Scrollbar thumb style
                borderRadius: "4px",
              },
            },
          }}
          p={3}
          spacing={3}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Avatar
              src={faker.image.animals()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="subtitle1" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                {"+84 317 2624"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="subtitle1" fontWeight={"600"}>
              About
            </Typography>
            <Typography variant="subtitle1">
              Imagination is the only limit
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>Media, Link & Docs</Typography>
            <Button
              onClick={() => {
                dispatch(updateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            {[1, 2, 3].map((el) => (
              <Box key={el}>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems={"center"} spacing={2}>
              <Star />
              <Typography variant="subtitle2">Starred Message</Typography>
            </Stack>
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems={"center"} spacing={2}>
              <Bell />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar src={faker.image.animals()} alt={faker.name.firstName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Coding Monk</Typography>
              <Typography variant="caption">
                Olw, Parrot, Rabbit, You
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Button
              onClick={() => {
                setOpenBlock(true);
              }}
              startIcon={<Prohibit />}
              fullWidth
              variant="outlined"
            >
              Block
            </Button>
            <Button
              onClick={() => {
                setOpenDelete(true);
              }}
              startIcon={<Trash />}
              fullWidth
              variant="outlined"
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && (
        <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
      )}
      {openDelete && (
        <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
      )}
    </Box>
  );
};

export default Contact;
