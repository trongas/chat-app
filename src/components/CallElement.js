import { faker } from "@faker-js/faker";
import { Avatar, Box, IconButton, Stack, Typography, styled, useTheme } from "@mui/material";
import React from "react";
import StyledBadge from "./StyledBadge";
import { ArrowDownLeft, ArrowDownRight, Phone } from "phosphor-react";

const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.action.hover,
  },
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.background.paper,
  transition: "background-color 0.3s ease",
}));

const CallLogElement = ({ online, incoming, missed }) => {
  const theme = useTheme();

  return (
    <StyledChatBox sx={{width: "100%"}} >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.animals()} alt={faker.name.fullName()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.animals()} alt={faker.name.fullName()} />
          )}
          <Stack spacing={0.5}>
            <Typography variant="subtitle1" fontWeight={600}>
              {faker.name.fullName()}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              {incoming ? (
                <ArrowDownLeft size={16} color={missed ? theme.palette.error.main : theme.palette.success.main} />
              ) : (
                <ArrowDownRight size={16} color={missed ? theme.palette.error.main : theme.palette.success.main} />
              )}
              <Typography variant="caption" color="textSecondary">
                Yesterday 21:24
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <IconButton size="small" sx={{ color: theme.palette.success.main }}>
          <Phone size={20} />
        </IconButton>
      </Stack>
    </StyledChatBox>
  );
};

const CallElement = () => {};

export { CallLogElement, CallElement };
