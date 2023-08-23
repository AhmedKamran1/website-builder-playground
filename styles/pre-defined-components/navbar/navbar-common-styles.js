import Link from "next/link";

import { AppBar, Avatar, Typography, styled } from "@mui/material";

import { baseFontSizes } from "@/helpers/font-sizes/font-sizes";

import { styledWithoutProps } from "../ignoredProps";

export const ResponsiveText = styledWithoutProps(
  Typography,
  ({ variant, colorHex, fontStyle, fontWeight, theme }) => ({
    fontSize: baseFontSizes[variant].default,
    color: colorHex,
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    [theme.breakpoints.down("sm")]: {
      fontSize: baseFontSizes[variant].small,
    },
  })
);

export const NavigationBar = styledWithoutProps(
  AppBar,
  ({ backgroundColor, isfocused }) => ({
    position: "static",
    backgroundColor: backgroundColor,
    border: isfocused ? "1px solid blue" : "none",
  })
);

export const StyledLink = styled(Link)(() => ({
  all: "unset",
}));

export const NavbarLogo = styledWithoutProps(Avatar, ({ theme }) => ({
  height: "55px",
  width: "55px",
  backgroundColor: "transparent",
  marginRight: "15px",
}));
