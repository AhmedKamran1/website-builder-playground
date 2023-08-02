import React, { useState } from "react";

import {
  NavigationBar,
  StyledLink,
  StyledListItemButton,
  StyledListItemText,
  TabItem,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import {
  Box,
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Tabs,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { KeyboardArrowDown } from "@mui/icons-material";
import { StyledButton } from "@/styles/pre-defined-components/button/button";
import {
  FullViewContainer,
  NavToolBar,
  ResponsiveContainer,
} from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";

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

  const { navLinkStyles } = styles;
  const { loginButtonStyles } = styles;

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
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      backgroundColor={navLinkStyles.backgroundColor}
    >
      <FullViewContainer maxWidth="xl">
        <IconButton
          size="large"
          onClick={handleNavMenu}
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <NavToolBar>
          <Tabs
            value={tabValue}
            textColor="inherit"
            variant="fullWidth"
            TabIndicatorProps={{
              style: { backgroundColor: navLinkStyles.colorHex },
            }}
            onChange={handleTabChange}
            sx={{ width: "100%" }}
          >
            {extraFunctionalities.links.map((link, index) => (
              <TabItem
                key={index}
                LinkComponent={StyledLink}
                icon={link.showDropDown ? <KeyboardArrowDown /> : ""}
                iconPosition={link.showDropDown ? "end" : "start"}
                href={link?.redirectLink}
                label={link?.innerText}
                sx={{ padding: 0 }}
                onClick={(event) =>
                  link.showDropDown &&
                  (index === 0
                    ? handleOpenTabDropDown(event, setTabFirstLinkDropDown)
                    : index === 1
                    ? handleOpenTabDropDown(event, setTabSecondLinkDropDown)
                    : index === 2
                    ? handleOpenTabDropDown(event, setTabThirdLinkDropDown)
                    : handleOpenTabDropDown(event, setTabFourthLinkDropDown))
                }
                {...navLinkStyles}
              />
            ))}
          </Tabs>
          <StyledButton variant="contained" {...loginButtonStyles}>
            Login
          </StyledButton>
        </NavToolBar>
        {extraFunctionalities.links.map(
          (link, index) =>
            link.showDropDown && (
              <CustomTabPanel value={tabValue} index={index} key={index}>
                <Menu
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
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
                    (sublink, sublinkIndex) =>
                      sublink?.dropDownInnerText && (
                        <StyledLink
                          href={sublink?.dropDownRedirectLink}
                          key={sublinkIndex}
                        >
                          <MenuItem
                            onClick={(event) =>
                              index === 0
                                ? handleCloseTabDropDown(
                                    event,
                                    setTabFirstLinkDropDown
                                  )
                                : index === 1
                                ? handleCloseTabDropDown(
                                    event,
                                    setTabSecondLinkDropDown
                                  )
                                : index === 2
                                ? handleCloseTabDropDown(
                                    event,
                                    setTabThirdLinkDropDown
                                  )
                                : handleCloseTabDropDown(
                                    event,
                                    setTabFourthLinkDropDown
                                  )
                            }
                          >
                            {sublink?.dropDownInnerText}
                          </MenuItem>
                        </StyledLink>
                      )
                  )}
                </Menu>
              </CustomTabPanel>
            )
        )}
      </FullViewContainer>
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={handleNavMenu}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "45vw",
          },
        }}
      >
        <ResponsiveContainer>
          <List sx={{ width: "90%" }}>
            {extraFunctionalities.links.map((link, index) => (
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
                      <StyledListItemText primary={link?.innerText} />
                      <ListItemIcon sx={{ minWidth: "15px" }}>
                        {link.showDropDown && <KeyboardArrowDown />}
                      </ListItemIcon>
                    </StyledListItemButton>
                  </ListItem>
                </StyledLink>
                {link.showDropDown && (
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
                            <StyledLink
                              href={sublink?.dropDownRedirectLink}
                              key={subindex}
                            >
                              <StyledListItemButton>
                                <StyledListItemText
                                  sx={{ ml: -1.5 }}
                                  primary={sublink?.dropDownInnerText}
                                />
                              </StyledListItemButton>
                            </StyledLink>
                          )
                      )}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
          <StyledButton variant="contained" sx={{ ml: -1.5 }} {...loginButtonStyles}>
            Login
          </StyledButton>
        </ResponsiveContainer>
      </Drawer>
    </NavigationBar>
  );
};

export default NavbarType2;
