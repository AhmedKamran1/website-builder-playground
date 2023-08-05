import React from "react";

import { NavigationBar } from "@/styles/pre-defined-components/navbar/navbar-common-styles";

import Container from "@mui/material/Container";

import NavbarComponents1 from "./navbar-components/navbar-type-1/Navbar-Type-1-Components";

const NavbarType1 = ({
  styles,
  extraFunctionalities,
  componentSelectionHandler,
  isfocused,
}) => {
  const { navLinkStyles } = styles;
  const { loginButtonStyles } = styles;

  return (
    <NavigationBar
      backgroundColor={navLinkStyles.backgroundColor}
      onClick={componentSelectionHandler}
      isfocused={isfocused}
    >
      <Container maxWidth="xl">
        <NavbarComponents1
          extraFunctionalities={extraFunctionalities}
          loginButtonStyles={loginButtonStyles}
          navLinkStyles={navLinkStyles}
        />
      </Container>
    </NavigationBar>
  );
};

export default NavbarType1;
