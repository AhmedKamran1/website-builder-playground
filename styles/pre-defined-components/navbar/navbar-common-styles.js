import Link from "next/link";

import {
  AppBar,
  ListItemButton,
  ListItemText,
  Tab,
  Typography,
  styled,
} from "@mui/material";

import { baseFontSizes } from "@/helpers/font-sizes/font-sizes";

export const ResponsiveText = styled(Typography, {
  shouldForwardProp: (props) => props !== "colorHex",
})(({ variant, colorHex, theme }) => ({
  fontSize: baseFontSizes[variant].default,
  color: colorHex,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[variant].small,
  },
}));

export const NavigationBar = styled(AppBar, {
  shouldForwardProp: (props) => props !== "backgroundColor",
})(({ backgroundColor, isfocused }) => ({
  position: "static",
  backgroundColor: backgroundColor,
  border: isfocused ? "1px solid blue" : "none",
}));

export const TabItem = styled(Tab, {
  shouldForwardProp: (props) =>
    props !== "colorHex" &&
    props !== "backgroundColor" &&
    props !== "fontSize" &&
    props !== "fontFamily" &&
    props !== "fontWeight" &&
    props !== "hoverColor" &&
    props !== "fontStyle",
})(
  ({
    colorHex,
    backgroundColor,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    hoverColor,
  }) => ({
    backgroundColor: backgroundColor,
    color: colorHex,
    fontSize: fontSize,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    transition: "0.25s all",
    "&:hover": {
      backgroundColor: hoverColor,
    },
  })
);

export const StyledLink = styled(Link)(() => ({
  all: "unset",
}));

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (props) => props !== "colorHex",
})(({ colorHex }) => ({
  color: colorHex,
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "0.2em",
  },
}));
