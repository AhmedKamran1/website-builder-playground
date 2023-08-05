import React, { useState } from "react";

import { StyledButton } from "@/styles/pre-defined-components/button/button";
import { NavToolBar } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";

import NavbarTabs2 from "./Navbar-Type-2-Tabs";
import NavbarMenu from "../common-components/NavbarMenu";

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return <>{value === index && <>{children}</>}</>;
}

const NavbarToolbar2 = ({ navLinkStyles, loginButtonStyles, links }) => {
  const [tabValue, setTabValue] = useState(0);

  const [firstLinkDropDown, setFirstLinkDropDown] = useState(null);
  const [secondLinkDropDown, setSecondLinkDropDown] = useState(null);
  const [thirdLinkDropDown, setThirdLinkDropDown] = useState(null);
  const [fourthLinkDropDown, setFourthLinkDropDown] = useState(null);

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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenNavMenu = (event, index) => {
    const setLinkDropDown = getSetLinkDropDown(index);
    setLinkDropDown(event.currentTarget);
  };

  const handleCloseNavMenu = (event, index) => {
    const setLinkDropDown = getSetLinkDropDown(index);
    setLinkDropDown(null);
  };

  return (
    <>
      <NavToolBar>
        <NavbarTabs2
          tabValue={tabValue}
          navLinkStyles={navLinkStyles}
          handleTabChange={handleTabChange}
          links={links}
          handleOpenNavMenu={handleOpenNavMenu}
        />
        <StyledButton variant="contained" {...loginButtonStyles}>
          Login
        </StyledButton>
      </NavToolBar>
      {links.map(
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
    </>
  );
};

export default NavbarToolbar2;
