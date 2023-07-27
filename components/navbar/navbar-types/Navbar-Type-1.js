import React, { useState } from "react";
import Link from "next/link";

import {
  NavigationBar,
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/navbar/navbar";

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

  const handleOpenNavMenu = (event, setState) => {
    setState(event.currentTarget);
  };

  const handleCloseNavMenu = (event, setState) => {
    setState(null);
  };

  return (
    <NavigationBar
      {...styles}
      onClick={componentSelectionHandler}
      isfocused={isfocused}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="Remy Sharp"
            src={extraFunctionalities?.logo}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              height: "50px",
              width: "50px",
            }}
          />
          {/* <StyledLink href={extraFunctionalities?.redirectLink1}> */}
          <ResponsiveText
            variant="subHeader"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
            {...styles}
          >
            {extraFunctionalities?.title}
          </ResponsiveText>
          {/* </StyledLink> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={(event) => handleOpenNavMenu(event, setAnchorElNav)}
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
              onClose={(event) => handleCloseNavMenu(event, setAnchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {extraFunctionalities.links.map(
                (link, index) =>
                  link?.showLink && (
                    <StyledLink href={link?.redirectLink} key={index}>
                      <NestedMenuItem
                        key={index}
                        label={link?.innerText}
                        parentMenuOpen={
                          link.showDropDown && Boolean(anchorElNav)
                        }
                        rightIcon={link.showDropDown && <KeyboardArrowRight />}
                        LinkComponent={StyledLink}
                      >
                        {link.dropDown.map(
                          (sublink, subindex) =>
                            sublink?.showDropDownLink &&
                            sublink?.dropDownInnerText && (
                              <StyledLink
                                href={sublink?.dropDownRedirectLink}
                                key={subindex}
                              >
                                <IconMenuItem
                                  label={sublink?.dropDownInnerText}
                                />
                              </StyledLink>
                            )
                        )}
                      </NestedMenuItem>
                    </StyledLink>
                  )
              )}
            </Menu>
          </Box>
          <Avatar
            alt="Remy Sharp"
            src={extraFunctionalities?.logo}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />

          <ResponsiveText
            variant="subHeader"
            noWrap
            // component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
            {...styles}
          >
            {extraFunctionalities?.title}
          </ResponsiveText>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: 10,
              gap: "20px",
            }}
          >
            {extraFunctionalities.links.map(
              (link, index) =>
                link?.showLink && (
                  <React.Fragment key={index}>
                    <StyledLink href={link?.redirectLink}>
                      <StyledButton
                        sx={{ my: 2 }}
                        endIcon={link.showDropDown && <KeyboardArrowDown />}
                        onClick={(event) =>
                          link.showDropDown &&
                          (index === 1
                            ? handleOpenNavMenu(event, setFirstLinkDropDown)
                            : index === 2
                            ? handleOpenNavMenu(event, setSecondLinkDropDown)
                            : handleOpenNavMenu(event, setThirdLinkDropDown))
                        }
                        {...styles}
                      >
                        {link.innerText}
                      </StyledButton>
                    </StyledLink>
                    {link.showDropDown && (
                      <Menu
                        anchorEl={
                          index === 1
                            ? firstLinkDropDown
                            : index === 2
                            ? secondLinkDropDown
                            : thirdLinkDropDown
                        }
                        open={Boolean(
                          index === 1
                            ? firstLinkDropDown
                            : index === 2
                            ? secondLinkDropDown
                            : thirdLinkDropDown
                        )}
                        onClose={(event) =>
                          index === 1
                            ? handleCloseNavMenu(event, setFirstLinkDropDown)
                            : index === 2
                            ? handleCloseNavMenu(event, setSecondLinkDropDown)
                            : handleCloseNavMenu(event, setThirdLinkDropDown)
                        }
                      >
                        {link.dropDown.map(
                          (sublink, subindex) =>
                            sublink?.showDropDownLink &&
                            sublink?.dropDownInnerText && (
                              <StyledLink
                                href={sublink?.dropDownRedirectLink}
                                key={subindex}
                              >
                                <MenuItem
                                  onClick={(event) =>
                                    index === 1
                                      ? handleCloseNavMenu(
                                          event,
                                          setFirstLinkDropDown
                                        )
                                      : index === 2
                                      ? handleCloseNavMenu(
                                          event,
                                          setSecondLinkDropDown
                                        )
                                      : handleCloseNavMenu(
                                          event,
                                          setThirdLinkDropDown
                                        )
                                  }
                                >
                                  {sublink?.dropDownInnerText}
                                </MenuItem>
                              </StyledLink>
                            )
                        )}
                      </Menu>
                    )}
                  </React.Fragment>
                )
            )}
          </Box>
        </Toolbar>
      </Container>
    </NavigationBar>
  );
};

export default NavbarType1;
