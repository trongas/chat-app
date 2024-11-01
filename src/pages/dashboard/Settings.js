import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import React, { useState } from "react";
import Shortcuts from "../../sections/settings/Shortcuts";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };
  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };
  const List = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: () => {},

      // onclick: handOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left Panel */}
        <Box
          sx={{
            overflowY: "hidden", // Initial hidden scrollbar
            "&:hover": {
              overflowY: "scroll", // Scrollbar visible on hover
            },
            // Custom scrollbar styling
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.default,
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft onClick={() => navigate('/')} size={24} color="#4B4B4B"  />
              </IconButton>
              <Typography variant="h6">Settings</Typography>
            </Stack>
            {/* Profile */}
            <Stack direction={"row"} spacing={3}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={faker.image.animals()}
                alt={faker.name.fullName()}
              />
              <Stack spacing={0.5}>
                <Typography variant="subtitle2">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="subtitle2">
                  {faker.random.words()}
                </Typography>
              </Stack>
            </Stack>
            {/* List of option */}
            <Stack spacing={2.8}>
              {List.map(({ key, icon, title, onclick }) => (
                <Stack spacing={2} sx={{ cursor: "pointer" }} onClick={onclick}>
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    {icon}
                    <Typography variant="body2">{title}</Typography>
                  </Stack>
                  {key !== 7 && <Divider />}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* Right Panel (Future Expansion) */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          {/* Right Panel Content */}
        </Box>
      </Stack>
      {openShortcuts && (
        <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />
      )}
    </>
  );
};

export default Setting;
