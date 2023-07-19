import React, { useState } from "react";

import {
  FlexContainer,
  NavigationBar,
  OptionsContainer,
  Options,
  ToolbarContainer,
  TabsContainer,
  TabItem,
  ResponsiveText,
} from "@/styles/pre-defined-components/navbar/navbar";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { StyledButton } from "@/styles/pre-defined-components/button/button";
import Link from "next/link";
import NavbarType1 from "./navbar-types/Navbar-Type-1";
import NavbarType2 from "./navbar-types/Navbar-Type-2";
import { initialNavbarComponentStyles } from "@/styles/pre-defined-components-styles/navbar-styles";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
