import React from "react";

import { NavigationBar } from "@/styles/pre-defined-components/navbar/navbar-common-styles";

import NavbarComponents2 from "./navbar-components/navbar-type-2/Navbar-Type-2-Components";

const NavbarType2 = ({
  styles,
  extraFunctionalities,
  componentSelectionHandler,
  isfocused,
}) => {
  const { navLinkStyles } = styles;
  const { loginButtonStyles } = styles;

  return (
    <NavigationBar
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      backgroundColor={navLinkStyles.backgroundColor}
    >
      <NavbarComponents2
        navLinkStyles={navLinkStyles}
        loginButtonStyles={loginButtonStyles}
        links={extraFunctionalities.links}
      />
    </NavigationBar>
  );
};

export default NavbarType2;
