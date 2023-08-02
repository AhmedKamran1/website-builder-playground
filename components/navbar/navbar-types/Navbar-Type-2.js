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

  const [firstLinkDropDown, setFirstLinkDropDown] = useState(null);
  const [secondLinkDropDown, setSecondLinkDropDown] = useState(null);
  const [thirdLinkDropDown, setThirdLinkDropDown] = useState(null);
  const [fourthLinkDropDown, setFourthLinkDropDown] = useState(null);

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

  const handleNavDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getSetLinkDropDown = (index) => {
    switch (index) {
      case 0:
        return setFirstLinkDropDown;

      case 1:
        return setSecondLinkDropDown;

      case 2:
        return setThirdLinkDropDown;

      case 3:
        return setFourthLinkDropDown;
    }
  };
  const getSetResponsiveLinkDropDown = (index) => {
    switch (index) {
      case 0:
        return setResponsiveFirstLinkDropDown;

      case 1:
        return setResponsiveSecondLinkDropDown;

      case 2:
        return setResponsiveThirdLinkDropDown;

      case 3:
        return setResponsiveFourthLinkDropDown;
    }
  };

  const getLinkDropDown = (index) => {
    switch (index) {
      case 0:
        return firstLinkDropDown;

      case 1:
        return secondLinkDropDown;

      case 2:
        return thirdLinkDropDown;

      case 3:
        return fourthLinkDropDown;
    }
  };

  const getResponsiveLinkDropDown = (index) => {
    switch (index) {
      case 0:
        return responsiveFirstLinkDropDown;

      case 1:
        return responsiveSecondLinkDropDown;

      case 2:
        return responsiveThirdLinkDropDown;

      case 3:
        return responsiveFourthLinkDropDown;
    }
  };

  const handleOpenNavMenu = (event, index) => {
    const setLinkDropDown = getSetLinkDropDown(index);
    setLinkDropDown(event.currentTarget);
  };

  const handleCloseNavMenu = (event, index) => {
    const setLinkDropDown = getSetLinkDropDown(index);
    setLinkDropDown(null);
  };

  const handleCollapseList = (event, index) => {
    const setLinkDropDown = getSetResponsiveLinkDropDown(index);
    setLinkDropDown((prevState) => !prevState);
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
          onClick={handleNavDrawer}
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
                  link.showDropDown && handleOpenNavMenu(event, index)
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
                  anchorEl={getLinkDropDown(index)}
                  open={Boolean(getLinkDropDown(index))}
                  onClose={(event) => handleCloseNavMenu(event, index)}
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
                              handleCloseNavMenu(event, index)
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
        onClose={handleNavDrawer}
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
                      onClick={(event) => handleCollapseList(event, index)}
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
                    in={getResponsiveLinkDropDown(index)}
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
          <StyledButton
            variant="contained"
            sx={{ ml: -1.5 }}
            {...loginButtonStyles}
          >
            Login
          </StyledButton>
        </ResponsiveContainer>
      </Drawer>
    </NavigationBar>
  );
};

export default NavbarType2;
