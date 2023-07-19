import React, { useState } from "react";

import {
  NavigationBar,
  ToolbarContainer,
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/navbar/navbar";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { StyledButton } from "@/styles/pre-defined-components/button/button";
import Link from "next/link";
import { Toolbar } from "@mui/material";

const NavbarType1 = ({
  styles,
  extraFunctionalities,
  componentSelectionHandler,
  isfocused,
}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
          <StyledLink href={extraFunctionalities?.redirectLink1}>
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
              {extraFunctionalities?.innerText1}
            </ResponsiveText>
          </StyledLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLink href={extraFunctionalities?.redirectLink2}>
                  <ResponsiveText variant="body" textAlign="center" {...styles}>
                    {extraFunctionalities?.innerText2}
                  </ResponsiveText>
                </StyledLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLink href={extraFunctionalities?.redirectLink3}>
                  <ResponsiveText variant="body" textAlign="center" {...styles}>
                    {extraFunctionalities?.innerText3}
                  </ResponsiveText>
                </StyledLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <StyledLink href={extraFunctionalities?.redirectLink4}>
                  <ResponsiveText variant="body" textAlign="center" {...styles}>
                    {extraFunctionalities?.innerText4}
                  </ResponsiveText>
                </StyledLink>
              </MenuItem>
              {/* {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))} */}
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
            {extraFunctionalities?.innerText1}
          </ResponsiveText>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 7 }}>
            <StyledLink href={extraFunctionalities?.redirectLink2}>
              <StyledButton sx={{ my: 2, display: "block" }} {...styles}>
                {extraFunctionalities?.innerText2}
              </StyledButton>
            </StyledLink>
            <StyledLink href={extraFunctionalities?.redirectLink3}>
              <StyledButton sx={{ my: 2, display: "block" }} {...styles}>
                {extraFunctionalities?.innerText3}
              </StyledButton>
            </StyledLink>
            <StyledLink href={extraFunctionalities?.redirectLink4}>
              <StyledButton sx={{ my: 2, display: "block" }} {...styles}>
                {extraFunctionalities?.innerText4}
              </StyledButton>
            </StyledLink>
          </Box>
        </Toolbar>
      </Container>
    </NavigationBar>
  );
};

export default NavbarType1;
