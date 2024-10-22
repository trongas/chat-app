import { Box, Stack } from "@mui/material";
import React from "react";

import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = () => {

  return (
    <Stack direction="row">
      {/* SideBar */}
    <SideBar/>
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
