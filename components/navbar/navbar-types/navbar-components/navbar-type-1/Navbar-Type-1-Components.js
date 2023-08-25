import React from "react";

import { Avatar, Toolbar } from "@mui/material";

import { ResponsiveTitleText } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-1-styles";

import {
  NavbarLogo,
 
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";

import NavbarResponsiveBox1 from "./Navbar-Type-1-RespBox";
import NavbarFullViewBox1 from "./Navbar-Type-1-FullViewBox";
import Image from "next/image";

import tempPhoto from "../../../../../assets/bgpic.jpg";
import { ResponsiveText, StyledButton } from "@/styles/pre-defined-components/common-styled-components/common-components";

const NavbarComponents1 = ({
  navLinkStyles,
  loginButtonStyles,
  extraFunctionalities,
}) => {
  return (
    <Toolbar disableGutters>
      <NavbarResponsiveBox1 links={extraFunctionalities.links} />
      <NavbarLogo>
        <Image
          src={extraFunctionalities?.logo || tempPhoto}
          alt="some text"
          fill
          sizes="50px"
        />
      </NavbarLogo>
      <ResponsiveTitleText
        variant="subHeader"
        noWrap
        href="/"
        colorHex={navLinkStyles.colorHex}
      >
        {extraFunctionalities.title}
      </ResponsiveTitleText>
      <NavbarFullViewBox1
        links={extraFunctionalities.links}
        navLinkStyles={navLinkStyles}
      />
      <StyledButton
        variant="contained"
        sx={{ my: 1.5, ml: "auto" }}
        {...loginButtonStyles}
      >
        <ResponsiveText variant="helper">Login</ResponsiveText>
      </StyledButton>
    </Toolbar>
  );
};

export default NavbarComponents1;
