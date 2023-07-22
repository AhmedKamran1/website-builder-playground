import React, { useState } from "react";

import {
  NavigationBar,
  StyledLink,
  StyledListItemButton,
  StyledListItemText,
  TabItem,
} from "@/styles/pre-defined-components/navbar/navbar";
import {
  Box,
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Tabs,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return <>{value === index && <>{children}</>}</>;
}

const NavbarType2 = ({
  styles,
  extraFunctionalities,
  componentSelectionHandler,
  isfocused,
}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const [tabFirstLinkDropDown, setTabFirstLinkDropDown] = useState(null);
  const [tabSecondLinkDropDown, setTabSecondLinkDropDown] = useState(null);
  const [tabThirdLinkDropDown, setTabThirdLinkDropDown] = useState(null);
  const [tabFourthLinkDropDown, setTabFourthLinkDropDown] = useState(null);

  const [responsiveFirstLinkDropDown, setResponsiveFirstLinkDropDown] =
    useState(null);
  const [responsiveSecondLinkDropDown, setResponsiveSecondLinkDropDown] =
    useState(null);
  const [responsiveThirdLinkDropDown, setResponsiveThirdLinkDropDown] =
    useState(null);
  const [responsiveFourthLinkDropDown, setResponsiveFourthLinkDropDown] =
    useState(null);

  const handleNavMenu = () => {
    setShowDrawer((prevState) => !prevState);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenTabDropDown = (event, setState) => {
    setState(event.currentTarget);
  };

  const handleCloseTabDropDown = (event, setState) => {
    setState(null);
  };

  return (
    <NavigationBar
      {...styles}
      onClick={componentSelectionHandler}
      isfocused={isfocused}
    >
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
            {/* {extraFunctionalities.links.map(
              (link, index) =>
                link?.innerText && (
                  <TabItem
                    key={index}
                    LinkComponent={StyledLink}
                    href={link?.redirectLink}
                    label={link?.innerText}
                    sx={{ fontWeight: "600" }}
                    {...styles}
                  />
                )
            )} */}
            <TabItem
              LinkComponent={StyledLink}
              href={extraFunctionalities.links[0]?.redirectLink}
              label={extraFunctionalities.links[0]?.innerText}
              sx={{ fontWeight: "600" }}
              onClick={(event) =>
                handleOpenTabDropDown(event, setTabFirstLinkDropDown)
              }
              {...styles}
            />
            <TabItem
              LinkComponent={StyledLink}
              href={extraFunctionalities.links[1]?.redirectLink}
              label={extraFunctionalities.links[1]?.innerText}
              sx={{ fontWeight: "600" }}
              onClick={(event) =>
                handleOpenTabDropDown(event, setTabSecondLinkDropDown)
              }
              {...styles}
            />
            <TabItem
              LinkComponent={StyledLink}
              href={extraFunctionalities.links[2]?.redirectLink}
              label={extraFunctionalities.links[2]?.innerText}
              sx={{ fontWeight: "600" }}
              onClick={(event) =>
                handleOpenTabDropDown(event, setTabThirdLinkDropDown)
              }
              {...styles}
            />
            <TabItem
              LinkComponent={StyledLink}
              href={extraFunctionalities.links[3]?.redirectLink}
              label={extraFunctionalities.links[3]?.innerText}
              sx={{ fontWeight: "600" }}
              onClick={(event) =>
                handleOpenTabDropDown(event, setTabFourthLinkDropDown)
              }
              {...styles}
            />
          </Tabs>
        </Toolbar>
        <CustomTabPanel value={tabValue} index={0}>
          <Menu
            anchorEl={tabFirstLinkDropDown}
            open={Boolean(tabFirstLinkDropDown)}
            onClose={(event) =>
              handleCloseTabDropDown(event, setTabFirstLinkDropDown)
            }
          >
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabFirstLinkDropDown)
              }
            >
              {extraFunctionalities.links[0].dropDown[0].dropDownInnerText}
            </MenuItem>
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabFirstLinkDropDown)
              }
            >
              {extraFunctionalities.links[0].dropDown[1].dropDownInnerText}
            </MenuItem>
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabFirstLinkDropDown)
              }
            >
              {extraFunctionalities.links[0].dropDown[2].dropDownInnerText}
            </MenuItem>
          </Menu>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <Menu
            anchorEl={tabSecondLinkDropDown}
            open={Boolean(tabSecondLinkDropDown)}
            onClose={(event) =>
              handleCloseTabDropDown(event, setTabSecondLinkDropDown)
            }
          >
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabSecondLinkDropDown)
              }
            >
              {extraFunctionalities.links[1].dropDown[0].dropDownInnerText}
            </MenuItem>
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabSecondLinkDropDown)
              }
            >
              {extraFunctionalities.links[1].dropDown[1].dropDownInnerText}
            </MenuItem>
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabSecondLinkDropDown)
              }
            >
              {extraFunctionalities.links[1].dropDown[2].dropDownInnerText}
            </MenuItem>
          </Menu>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          <Menu
            anchorEl={tabThirdLinkDropDown}
            open={Boolean(tabThirdLinkDropDown)}
            onClose={(event) =>
              handleCloseTabDropDown(event, setTabThirdLinkDropDown)
            }
          >
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabThirdLinkDropDown)
              }
            >
              {extraFunctionalities.links[2].dropDown[0].dropDownInnerText}
            </MenuItem>
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabThirdLinkDropDown)
              }
            >
              {extraFunctionalities.links[2].dropDown[1].dropDownInnerText}
            </MenuItem>
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabThirdLinkDropDown)
              }
            >
              {extraFunctionalities.links[2].dropDown[2].dropDownInnerText}
            </MenuItem>
          </Menu>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={3}>
          <Menu
            anchorEl={tabFourthLinkDropDown}
            open={Boolean(tabFourthLinkDropDown)}
            onClose={(event) =>
              handleCloseTabDropDown(event, setTabFourthLinkDropDown)
            }
          >
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabFourthLinkDropDown)
              }
            >
              {extraFunctionalities.links[3].dropDown[0].dropDownInnerText}
            </MenuItem>
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabFourthLinkDropDown)
              }
            >
              {extraFunctionalities.links[3].dropDown[1].dropDownInnerText}
            </MenuItem>
            <MenuItem
              onClick={(event) =>
                handleCloseTabDropDown(event, setTabFourthLinkDropDown)
              }
            >
              {extraFunctionalities.links[3].dropDown[2].dropDownInnerText}
            </MenuItem>
          </Menu>
        </CustomTabPanel>
      </Container>
      <Container sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton size="large" onClick={handleNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
      </Container>
      <Drawer
        anchor="left"
        open={showDrawer}
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
          <List sx={{ width: "85%" }}>
            {/* {extraFunctionalities.links.map(
              (link, index) =>
                link?.innerText && (
                  <StyledLink href={link?.redirectLink}>
                  <ListItem disablePadding divider key={index}>
                    <StyledListItemButton sx={{ textAlign: "center" }}>
                      <StyledListItemText
                        primary={link?.innerText}
                        {...styles}
                      />
                    </StyledListItemButton>
                  </ListItem>
                  </StyledLink>
                )
            )} */}
            <StyledLink href={extraFunctionalities.links[0]?.redirectLink}>
              <ListItem disablePadding divider>
                <StyledListItemButton
                  onClick={() =>
                    setResponsiveFirstLinkDropDown((prevState) => !prevState)
                  }
                >
                  {/* <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
                  <StyledListItemText
                    primary={extraFunctionalities.links[0]?.innerText}
                    {...styles}
                  />
                </StyledListItemButton>
              </ListItem>
            </StyledLink>
            <Collapse
              in={responsiveFirstLinkDropDown}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[0].dropDown[0]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[0].dropDown[1]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[0].dropDown[2]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
              </List>
            </Collapse>

            <StyledLink href={extraFunctionalities.links[1]?.redirectLink}>
              <ListItem disablePadding divider>
                <StyledListItemButton
                  onClick={() =>
                    setResponsiveSecondLinkDropDown((prevState) => !prevState)
                  }
                >
                  {/* <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
                  <StyledListItemText
                    primary={extraFunctionalities.links[1]?.innerText}
                    {...styles}
                  />
                </StyledListItemButton>
              </ListItem>
            </StyledLink>
            <Collapse
              in={responsiveSecondLinkDropDown}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[1].dropDown[0]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[1].dropDown[1]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[1].dropDown[2]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
              </List>
            </Collapse>
            <StyledLink href={extraFunctionalities.links[2]?.redirectLink}>
              <ListItem disablePadding divider>
                <StyledListItemButton
                  onClick={() =>
                    setResponsiveThirdLinkDropDown((prevState) => !prevState)
                  }
                >
                  {/* <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
                  <StyledListItemText
                    primary={extraFunctionalities.links[2]?.innerText}
                    {...styles}
                  />
                </StyledListItemButton>
              </ListItem>
            </StyledLink>
            <Collapse
              in={responsiveThirdLinkDropDown}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[2].dropDown[0]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[2].dropDown[1]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[2].dropDown[2]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
              </List>
            </Collapse>
            <StyledLink href={extraFunctionalities.links[3]?.redirectLink}>
              <ListItem disablePadding divider>
                <StyledListItemButton
                  onClick={() =>
                    setResponsiveFourthLinkDropDown((prevState) => !prevState)
                  }
                >
                  {/* <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
                  <StyledListItemText
                    primary={extraFunctionalities.links[3]?.innerText}
                    {...styles}
                  />
                </StyledListItemButton>
              </ListItem>
            </StyledLink>
            <Collapse
              in={responsiveFourthLinkDropDown}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[3].dropDown[0]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[3].dropDown[1]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
                <StyledListItemButton>
                  <StyledListItemText
                    primary={
                      extraFunctionalities.links[3].dropDown[2]
                        .dropDownInnerText
                    }
                  />
                </StyledListItemButton>
              </List>
            </Collapse>
          </List>
        </Container>
      </Drawer>
    </NavigationBar>
  );
};

export default NavbarType2;
