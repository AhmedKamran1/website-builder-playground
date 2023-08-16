import React, { useState } from "react";

import {
  FullViewContainer,
  NavbarLogo2,
} from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavbarToolbar2 from "./Navbar-Type-2-Toolbar";
import NavbarDrawer2 from "./Navbar-Type-2-Drawer";
import Image from "next/image";

import tempPhoto from "../../../../../assets/bgpic.jpg"

const NavbarComponents2 = ({
  navLinkStyles,
  loginButtonStyles,
  links,
  logo,
}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleNavDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <>
      <FullViewContainer maxWidth={false}>
        <IconButton
          size="large"
          onClick={handleNavDrawer}
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <NavbarLogo2 alt="Remy Sharp">
          <Image src={logo || tempPhoto} alt="some text" fill sizes="50px" />
        </NavbarLogo2>
        <NavbarToolbar2
          navLinkStyles={navLinkStyles}
          loginButtonStyles={loginButtonStyles}
          links={links}
        />
      </FullViewContainer>
      <NavbarDrawer2
        showDrawer={showDrawer}
        handleNavDrawer={handleNavDrawer}
        links={links}
        loginButtonStyles={loginButtonStyles}
      />
    </>
  );
};

export default NavbarComponents2;
