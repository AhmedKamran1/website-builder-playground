import React, { useState } from "react";

import { NavigationBar } from "@/styles/pre-defined-components/navbar/navbar-common-styles";

import {
  FullViewContainer,
  NavToolBar,
} from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";
import { StyledButton } from "@/styles/pre-defined-components/button/button";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavbarMenu from "./navbar-components/common-components/NavbarMenu";
import NavbarTabs2 from "./navbar-components/navbar-type-2/Navbar-Type-2-Tabs";
import NavbarDrawer2 from "./navbar-components/navbar-type-2/Navbar-Type-2-Drawer";

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
          <NavbarTabs2
            tabValue={tabValue}
            navLinkStyles={navLinkStyles}
            handleTabChange={handleTabChange}
            links={extraFunctionalities.links}
            handleOpenNavMenu={handleOpenNavMenu}
          />
          <StyledButton variant="contained" {...loginButtonStyles}>
            Login
          </StyledButton>
        </NavToolBar>
        {extraFunctionalities.links.map(
          (link, index) =>
            link.showDropDown && (
              <CustomTabPanel value={tabValue} index={index} key={index}>
                <NavbarMenu
                  getLinkDropDown={getLinkDropDown}
                  handleCloseNavMenu={handleCloseNavMenu}
                  link={link}
                  index={index}
                />
              </CustomTabPanel>
            )
        )}
      </FullViewContainer>
      <NavbarDrawer2
        showDrawer={showDrawer}
        handleNavDrawer={handleNavDrawer}
        links={extraFunctionalities.links}
        handleCollapseList={handleCollapseList}
        getResponsiveLinkDropDown={getResponsiveLinkDropDown}
        loginButtonStyles={loginButtonStyles}
      />
    </NavigationBar>
  );
};

export default NavbarType2;
