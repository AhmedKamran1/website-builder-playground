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
import MenuIcon from "@mui/icons-material/Menu";
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
            src="/static/images/avatar/2.jpg"
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
            {extraFunctionalities?.links[0]?.innerText}
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
              {extraFunctionalities.links.slice(1).map(
                (link, index) =>
                  link?.innerText && (
                    // <StyledLink href={link?.redirectLink}>
                    <NestedMenuItem
                      key={index}
                      label={link?.innerText}
                      parentMenuOpen={Boolean(anchorElNav)}
                      rightIcon={<KeyboardArrowRight />}
                      LinkComponent={StyledLink}
                    >
                      {link.dropDown.map((sublink, subindex) => (
                        <StyledLink
                          href={sublink?.dropDownRedirectLink}
                          key={subindex}
                        >
                          <IconMenuItem
                            // leftIcon={<NewIcon />}
                            // rightIcon={<SaveIcon />}
                            label={sublink?.dropDownInnerText}
                          />
                        </StyledLink>
                      ))}
                    </NestedMenuItem>
                    // </StyledLink>
                  )
              )}
            </Menu>
          </Box>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
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
            {extraFunctionalities?.links[0]?.innerText}
          </ResponsiveText>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 7 }}>
            <StyledLink href={extraFunctionalities.links[1]?.redirectLink}>
              <StyledButton
                sx={{ my: 2 }}
                endIcon={<KeyboardArrowDown />}
                onClick={(event) =>
                  handleOpenNavMenu(event, setFirstLinkDropDown)
                }
                {...styles}
              >
                {extraFunctionalities.links[1]?.innerText}
              </StyledButton>
            </StyledLink>
            <Menu
              anchorEl={firstLinkDropDown}
              open={Boolean(firstLinkDropDown)}
              onClose={(event) =>
                handleCloseNavMenu(event, setFirstLinkDropDown)
              }
            >
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setFirstLinkDropDown)
                }
              >
                {extraFunctionalities.links[1].dropDown[0].dropDownInnerText}
              </MenuItem>
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setFirstLinkDropDown)
                }
              >
                {extraFunctionalities.links[1].dropDown[1].dropDownInnerText}
              </MenuItem>
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setFirstLinkDropDown)
                }
              >
                {extraFunctionalities.links[1].dropDown[2].dropDownInnerText}
              </MenuItem>
            </Menu>
            <StyledLink href={extraFunctionalities.links[2]?.redirectLink}>
              <StyledButton
                sx={{ my: 2 }}
                endIcon={<KeyboardArrowDown />}
                onClick={(event) =>
                  handleOpenNavMenu(event, setSecondLinkDropDown)
                }
                {...styles}
              >
                {extraFunctionalities.links[2]?.innerText}
              </StyledButton>
            </StyledLink>
            <Menu
              anchorEl={secondLinkDropDown}
              open={Boolean(secondLinkDropDown)}
              onClose={(event) =>
                handleCloseNavMenu(event, setSecondLinkDropDown)
              }
            >
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setSecondLinkDropDown)
                }
              >
                {extraFunctionalities.links[2].dropDown[0].dropDownInnerText}
              </MenuItem>
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setSecondLinkDropDown)
                }
              >
                {extraFunctionalities.links[2].dropDown[1].dropDownInnerText}
              </MenuItem>
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setSecondLinkDropDown)
                }
              >
                {extraFunctionalities.links[2].dropDown[2].dropDownInnerText}
              </MenuItem>
            </Menu>
            <StyledLink href={extraFunctionalities.links[3]?.redirectLink}>
              <StyledButton
                sx={{ my: 2 }}
                endIcon={<KeyboardArrowDown />}
                onClick={(event) =>
                  handleOpenNavMenu(event, setThirdLinkDropDown)
                }
                {...styles}
              >
                {extraFunctionalities.links[3]?.innerText}
              </StyledButton>
            </StyledLink>
            <Menu
              anchorEl={thirdLinkDropDown}
              open={Boolean(thirdLinkDropDown)}
              onClose={(event) =>
                handleCloseNavMenu(event, setThirdLinkDropDown)
              }
            >
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setThirdLinkDropDown)
                }
              >
                {extraFunctionalities.links[3].dropDown[0].dropDownInnerText}
              </MenuItem>
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setThirdLinkDropDown)
                }
              >
                {extraFunctionalities.links[3].dropDown[1].dropDownInnerText}
              </MenuItem>
              <MenuItem
                onClick={(event) =>
                  handleCloseNavMenu(event, setThirdLinkDropDown)
                }
              >
                {extraFunctionalities.links[3].dropDown[2].dropDownInnerText}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </NavigationBar>
  );
};

export default NavbarType1;
