import React, { useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

import { ResponsiveBox } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-1-styles";
import { StyledLink } from "@/styles/pre-defined-components/navbar/navbar-common-styles";

import NavbarSubMenu1 from "./Navbar-Type-1-SubMenu";

const NavbarResponsiveBox1 = ({ links }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <ResponsiveBox>
      <IconButton
        size="large"
        onClick={(event) => setAnchorElNav(event.currentTarget)}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={(event) => setAnchorElNav(null)}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {links.map((link, index) => (
          <StyledLink href={link?.redirectLink} key={index}>
            <NavbarSubMenu1
              title={link.innerText}
              showDropDown={link.showDropDown}
            >
              {link.dropDown.map(
                (sublink, subindex) =>
                  sublink?.dropDownInnerText && (
                    <StyledLink
                      href={sublink?.dropDownRedirectLink}
                      key={subindex}
                    >
                      <MenuItem>{sublink?.dropDownInnerText}</MenuItem>
                    </StyledLink>
                  )
              )}
            </NavbarSubMenu1>
          </StyledLink>
        ))}
      </Menu>
    </ResponsiveBox>
  );
};

export default NavbarResponsiveBox1;
