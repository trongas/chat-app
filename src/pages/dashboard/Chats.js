import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import styled from "@emotion/styled";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const imageUrl = faker.image.avatar();
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFF"
            : theme.palette.background.default,
      }}
      p={1.4}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={isValidUrl(imageUrl) ? imageUrl : "./logo512.png"} />
            </StyledBadge>
          ) : (
            <Avatar src={isValidUrl(imageUrl) ? imageUrl : "./logo512.png"} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread} />
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const Chats = () => {
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack sx={{ height: "100%" }}>
          <Stack
            p={2}
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">Chats</Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>

          <Stack sx={{ width: "100%" }} p={2}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction="row" alignItems={"center"} spacing={1.5} px={2}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack
            spacing={2}
            sx={{
              flexGrow: 1,
              overflowY: "hidden", // Start with hidden
              height: "100%",
              "&:hover": {
                overflowY: "auto", // Show on hover
              },
              // Optional custom scrollbar styling
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
            }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack>
              <Stack p={2} spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el) => (
                  <ChatElement key={el.id} {...el} />
                ))}
              </Stack>
              <Stack p={2} spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  All Chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => (
                  <ChatElement key={el.id} {...el} />
                ))}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Chats;
