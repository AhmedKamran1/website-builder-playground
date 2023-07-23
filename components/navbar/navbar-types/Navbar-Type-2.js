import React, { useState } from "react";

import {
  NavigationBar,
  StyledLink,
  StyledListItemButton,
  StyledListItemText,
  TabItem,
} from "@/styles/pre-defined-components/navbar/navbar";
import {
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
            {extraFunctionalities.links.map(
              (link, index) =>
                link?.innerText && (
                  <TabItem
                    key={index}
                    LinkComponent={StyledLink}
                    href={link?.redirectLink}
                    label={link?.innerText}
                    sx={{ fontWeight: "600" }}
                    onClick={(event) =>
                      index === 0
                        ? handleOpenTabDropDown(event, setTabFirstLinkDropDown)
                        : index === 1
                        ? handleOpenTabDropDown(event, setTabSecondLinkDropDown)
                        : index === 2
                        ? handleOpenTabDropDown(event, setTabThirdLinkDropDown)
                        : handleOpenTabDropDown(event, setTabFourthLinkDropDown)
                    }
                    {...styles}
                  />
                )
            )}
          </Tabs>
        </Toolbar>
        {extraFunctionalities.links.map(
          (link, index) =>
            link?.innerText && (
              <CustomTabPanel value={tabValue} index={index} key={index}>
                <Menu
                  anchorEl={
                    index === 0
                      ? tabFirstLinkDropDown
                      : index === 1
                      ? tabSecondLinkDropDown
                      : index === 2
                      ? tabThirdLinkDropDown
                      : tabFourthLinkDropDown
                  }
                  open={Boolean(
                    index === 0
                      ? tabFirstLinkDropDown
                      : index === 1
                      ? tabSecondLinkDropDown
                      : index === 2
                      ? tabThirdLinkDropDown
                      : tabFourthLinkDropDown
                  )}
                  onClose={(event) =>
                    index === 0
                      ? handleCloseTabDropDown(event, setTabFirstLinkDropDown)
                      : index === 1
                      ? handleCloseTabDropDown(event, setTabSecondLinkDropDown)
                      : index === 2
                      ? handleCloseTabDropDown(event, setTabThirdLinkDropDown)
                      : handleCloseTabDropDown(event, setTabFourthLinkDropDown)
                  }
                >
                  {link.dropDown.map(
                    (sublink, subindex) =>
                      sublink?.dropDownInnerText && (
                        <MenuItem
                          key={subindex}
                          onClick={(event) =>
                            subindex === 0
                              ? handleCloseTabDropDown(
                                  event,
                                  setTabFirstLinkDropDown
                                )
                              : subindex === 1
                              ? handleCloseTabDropDown(
                                  event,
                                  setTabSecondLinkDropDown
                                )
                              : handleCloseTabDropDown(
                                  event,
                                  setTabThirdLinkDropDown
                                )
                          }
                        >
                          {sublink?.dropDownInnerText}
                        </MenuItem>
                      )
                  )}
                </Menu>
              </CustomTabPanel>
            )
        )}
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
            {extraFunctionalities.links.map(
              (link, index) =>
                link?.innerText && (
                  <React.Fragment key={index}>
                    <StyledLink href={link?.redirectLink}>
                      <ListItem disablePadding divider>
                        <StyledListItemButton
                          onClick={() =>
                            index === 0
                              ? setResponsiveFirstLinkDropDown(
                                  (prevState) => !prevState
                                )
                              : index === 1
                              ? setResponsiveSecondLinkDropDown(
                                  (prevState) => !prevState
                                )
                              : index === 2
                              ? setResponsiveThirdLinkDropDown(
                                  (prevState) => !prevState
                                )
                              : setResponsiveFourthLinkDropDown(
                                  (prevState) => !prevState
                                )
                          }
                        >
                          <StyledListItemText
                            primary={link?.innerText}
                            {...styles}
                          />
                        </StyledListItemButton>
                      </ListItem>
                    </StyledLink>
                    <Collapse
                      in={
                        index === 0
                          ? responsiveFirstLinkDropDown
                          : index === 1
                          ? responsiveSecondLinkDropDown
                          : index === 2
                          ? responsiveThirdLinkDropDown
                          : responsiveFourthLinkDropDown
                      }
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {link.dropDown.map(
                          (sublink, subindex) =>
                            sublink?.dropDownInnerText && (
                              <StyledListItemButton key={subindex}>
                                <StyledListItemText
                                  primary={sublink?.dropDownInnerText}
                                />
                              </StyledListItemButton>
                            )
                        )}
                      </List>
                    </Collapse>
                  </React.Fragment>
                )
            )}
          </List>
        </Container>
      </Drawer>
    </NavigationBar>
  );
};

export default NavbarType2;
