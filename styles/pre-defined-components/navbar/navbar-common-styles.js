import { AppBar, Avatar } from "@mui/material";

import { styledWithoutProps } from "../ignoredProps";

export const NavigationBar = styledWithoutProps(
  AppBar,
  ({ backgroundColor, isfocused }) => ({
    position: "static",
    backgroundColor: backgroundColor,
    border: isfocused ? "1px solid blue" : "1px solid transparent",
  })
);

export const NavbarLogo = styledWithoutProps(Avatar, ({ theme }) => ({
  height: "55px",
  width: "55px",
  backgroundColor: "transparent",
  marginRight: "15px",
}));
