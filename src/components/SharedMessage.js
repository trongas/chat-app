import {
    Box,
    Grid,
    IconButton,
    Stack,
    Tab,
    Tabs,
    Typography,
    useTheme,
  } from "@mui/material";
  import { CaretLeft } from "phosphor-react";
  import React from "react";
  import { useDispatch } from "react-redux";
  import { updateSidebarType } from "../redux/slices/app";
  import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINK } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
  
  const SharedMessage = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
  
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const renderContent = () => {
      switch (value) {
        case 0:
          return (
            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
                <Grid item xs={4} key={el}>
                  <img
                    src={faker.image.animals()}
                    alt={faker.name.firstName()}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
              ))}
            </Grid>
          );
        case 1:
          // Render content for Links
          return SHARED_LINK.map((el) => <LinkMsg el={el}/>)
        case 2:
          // Render content for Docs
          return SHARED_DOCS.map((el) => <DocMsg el={el}/>)
        default:
          return null;
      }
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
              <Typography variant="subtitle2">Shared Message</Typography>
            </Stack>
          </Box>
          <Tabs sx={{ px: 2 }} value={value} onChange={handleChange} centered>
            <Tab label="Media" />
            <Tab label="Link" />
            <Tab label="Docs" />
          </Tabs>
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
            {renderContent()}
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export default SharedMessage;
  