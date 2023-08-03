import React from "react";

import { Menu, MenuItem } from "@mui/material";

import { StyledLink } from "@/styles/pre-defined-components/navbar/navbar-common-styles";

const NavbarMenu = ({ getLinkDropDown, handleCloseNavMenu, link, index }) => {
  return (
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
            <StyledLink href={sublink?.dropDownRedirectLink} key={sublinkIndex}>
              <MenuItem onClick={(event) => handleCloseNavMenu(event, index)}>
                {sublink?.dropDownInnerText}
              </MenuItem>
            </StyledLink>
          )
      )}
    </Menu>
  );
};

export default NavbarMenu;
