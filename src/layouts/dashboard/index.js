import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import useSettings from "../../hooks/useSettings";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <Stack direction="row">
      {/* Sidebar */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          width: 100,
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "100%", py: 2 }}
          spacing={3}
        >
          <Stack alignItems="center" spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
                mb: 4,
                display: 'flex', // Center the logo
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={Logo} alt="Chat App Logo" />
            </Box>

            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
              spacing={3}
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box
                    key={el.index}
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      onClick={() => setSelected(el.index)}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    key={el.index}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    onClick={() => setSelected(el.index)}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "80%" }} />
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  onClick={() => setSelected(3)}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack sx={{ mt: 3 }}>
            <AntSwitch
              defaultChecked
              onChange={() => {
                onToggleMode();
              }}
            />
            <Avatar sx={{ mt: 5 }} src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>

      {/* Main Content */}
      <Stack sx={{ flexGrow: 1}}>
        <Box>
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
};

export default DashboardLayout;
