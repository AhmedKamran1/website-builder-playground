import React from "react";

import NavbarType1 from "./navbar-types/Navbar-Type-1";
import NavbarType2 from "./navbar-types/Navbar-Type-2";
import { initialNavbarComponentStyles } from "@/helpers/pre-defined-components-styles/navbar-styles";

const Navbar = ({
  navbarId,
  styles,
  extraFunctionalities,
  componentSelectionHandler,
  isfocused,
}) => {
  return (
    <>
      {navbarId === initialNavbarComponentStyles[0].navId && (
        <NavbarType1
          extraFunctionalities={extraFunctionalities}
          isfocused={isfocused}
          componentSelectionHandler={componentSelectionHandler}
          styles={styles}
        />
      )}
      {navbarId === initialNavbarComponentStyles[1].navId && (
        <NavbarType2
          extraFunctionalities={extraFunctionalities}
          isfocused={isfocused}
          componentSelectionHandler={componentSelectionHandler}
          styles={styles}
        />
      )}
    </>
  );
};

export default Navbar;
