import React from "react";

import { Avatar, Toolbar } from "@mui/material";

import { ResponsiveTitleText } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-1-styles";
import { StyledButton } from "@/styles/pre-defined-components/button/button";
import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";

import NavbarResponsiveBox1 from "./Navbar-Type-1-RespBox";
import NavbarFullViewBox1 from "./Navbar-Type-1-FullViewBox";

const NavbarComponents1 = ({
  navLinkStyles,
  loginButtonStyles,
  extraFunctionalities,
}) => {
  return (
    <Toolbar disableGutters>
      <NavbarResponsiveBox1 links={extraFunctionalities.links} />
      <Avatar
        alt="Remy Sharp"
        src={extraFunctionalities?.logo}
        sx={{
          mr: 1,
          height: "55px",
          width: "55px",
        }}
      />
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