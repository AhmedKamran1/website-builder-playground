import React, { useState } from "react";
import Link from "next/link";

import {
  NavigationBar,
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";

import { StyledButton } from "@/styles/pre-defined-components/button/button";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Toolbar } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import { IconMenuItem, NestedMenuItem } from "mui-nested-menu";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";

import {
  FullViewBox,
  ResponsiveBox,
  ResponsiveTitleText,
} from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-1-styles";
import NavbarMenu from "./navbar-components/common-components/NavbarMenu";

const NavbarType1 = ({
  styles,
  extraFunctionalities,
  componentSelectionHandler,
  isfocused,
}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [firstLinkDropDown, setFirstLinkDropDown] = useState(null);
  const [secondLinkDropDown, setSecondLinkDropDown] = useState(null);
  const [thirdLinkDropDown, setThirdLinkDropDown] = useState(null);
  const [fourthLinkDropDown, setFourthLinkDropDown] = useState(null);

  const { navLinkStyles } = styles;
  const { loginButtonStyles } = styles;

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

  const handleOpenNavMenu = (event, index) => {
    const setLinkDropDown = getSetLinkDropDown(index);
    setLinkDropDown(event.currentTarget);
  };

  const handleCloseNavMenu = (event, index) => {
    const setLinkDropDown = getSetLinkDropDown(index);
    setLinkDropDown(null);
  };

  return (
    <NavigationBar
      backgroundColor={navLinkStyles.backgroundColor}
      onClick={componentSelectionHandler}
      isfocused={isfocused}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              {extraFunctionalities.links.map((link, index) => (
                <StyledLink href={link?.redirectLink} key={index}>
                  <NestedMenuItem
                    key={index}
                    label={link?.innerText}
                    parentMenuOpen={link.showDropDown && Boolean(anchorElNav)}
                    rightIcon={link.showDropDown && <KeyboardArrowRight />}
                    LinkComponent={StyledLink}
                  >
                    {link.dropDown.map(
                      (sublink, subindex) =>
                        sublink?.dropDownInnerText && (
                          <StyledLink
                            href={sublink?.dropDownRedirectLink}
                            key={subindex}
                          >
                            <IconMenuItem label={sublink?.dropDownInnerText} />
                          </StyledLink>
                        )
                    )}
                  </NestedMenuItem>
                </StyledLink>
              ))}
            </Menu>
          </ResponsiveBox>
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
            {extraFunctionalities?.title}
          </ResponsiveTitleText>
          <FullViewBox>
            {extraFunctionalities.links.map((link, index) => (
              <React.Fragment key={index}>
                <StyledLink href={link?.redirectLink}>
                  <StyledButton
                    sx={{ my: 2 }}
                    endIcon={link.showDropDown && <KeyboardArrowDown />}
                    onClick={(event) =>
                      link.showDropDown && handleOpenNavMenu(event, index)
                    }
                    {...navLinkStyles}
                  >
                    {link.innerText}
                  </StyledButton>
                </StyledLink>
                {link.showDropDown && (
                  <NavbarMenu
                    getLinkDropDown={getLinkDropDown}
                    handleCloseNavMenu={handleCloseNavMenu}
                    link={link}
                    index={index}
                  />
                )}
              </React.Fragment>
            ))}
          </FullViewBox>
          <StyledButton
            variant="contained"
            sx={{ my: 1.5, ml: "auto" }}
            {...loginButtonStyles}
          >
            <ResponsiveText variant="helper">Login</ResponsiveText>
          </StyledButton>
        </Toolbar>
      </Container>
    </NavigationBar>
  );
};

export default NavbarType1;
