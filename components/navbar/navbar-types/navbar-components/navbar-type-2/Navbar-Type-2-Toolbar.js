import React, { useState } from "react";

import { StyledButton } from "@/styles/pre-defined-components/button/button";
import { NavToolBar } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";

import NavbarButtons2 from "./Navbar-Type-2-Buttons";

const NavbarToolbar2 = ({ navLinkStyles, loginButtonStyles, links }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <NavToolBar>
        <NavbarButtons2
          tabValue={tabValue}
          navLinkStyles={navLinkStyles}
          handleTabChange={handleTabChange}
          links={links}
        />
        <StyledButton variant="contained" {...loginButtonStyles} sx={{ ml: 2 }}>
          Login
        </StyledButton>
      </NavToolBar>
    </>
  );
};

export default NavbarToolbar2;
