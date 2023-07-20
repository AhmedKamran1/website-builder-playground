import React, { useState } from "react";

import {
  NavigationBar,
  StyledListItemText,
  TabItem,
} from "@/styles/pre-defined-components/navbar/navbar";
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Tabs,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarType2 = ({
  styles,
  extraFunctionalities,
  componentSelectionHandler,
  isfocused,
}) => {
  const [showNav, setShowNav] = useState(false);

  const [tabValue, setTabValue] = useState(0);

  const handleNavMenu = () => {
    setShowNav((prevState) => !prevState);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <NavigationBar
      {...styles}
      onClick={componentSelectionHandler}
      isfocused={isfocused}
    >
      {/* <Box sx={{ display: "flex" }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/2.jpg"
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 1,
            height: "50px",
            width: "50px",
          }}
        />
      </Box> */}
      <Container
        maxWidth="md"
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ width: "80%" }}>
          <Tabs
            value={tabValue}
            textColor="inherit"
            variant="fullWidth"
            TabIndicatorProps={{
              style: { backgroundColor: styles.colorhex },
            }}
            onChange={handleTabChange}
            sx={{ width: "100%" }}
          >
            <TabItem
              label={extraFunctionalities.innerText1}
              sx={{ fontWeight: "600" }}
              {...styles}
            />
            <TabItem
              label={extraFunctionalities.innerText2}
              sx={{ fontWeight: "600" }}
              {...styles}
            />
            <TabItem
              label={extraFunctionalities.innerText3}
              sx={{ fontWeight: "600" }}
              {...styles}
            />
            <TabItem
              label={extraFunctionalities.innerText4}
              sx={{ fontWeight: "600" }}
              {...styles}
            />
          </Tabs>
        </Toolbar>
      </Container>
      <Container sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton size="large" onClick={handleNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
      </Container>
      <Drawer
        anchor="left"
        open={showNav}
        onClose={handleNavMenu}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "45vw",
            height: "100vh",
          },
        }}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <List sx={{ width: "80%" }}>
            <ListItem disablePadding divider>
              <ListItemButton sx={{ textAlign: "center" }}>
                <StyledListItemText
                  primary={extraFunctionalities.innerText1}
                  {...styles}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding divider>
              <ListItemButton sx={{ textAlign: "center" }}>
                <StyledListItemText
                  primary={extraFunctionalities.innerText2}
                  {...styles}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding divider>
              <ListItemButton sx={{ textAlign: "center" }}>
                <StyledListItemText
                  primary={extraFunctionalities.innerText3}
                  {...styles}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding divider>
              <ListItemButton sx={{ textAlign: "center" }}>
                <StyledListItemText
                  primary={extraFunctionalities.innerText4}
                  {...styles}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Container>
      </Drawer>
    </NavigationBar>
  );
};

export default NavbarType2;
