import Link from "next/link";

import {
  AppBar,
  Typography,
  styled,
} from "@mui/material";

import { baseFontSizes } from "@/helpers/font-sizes/font-sizes";

import { styledWithoutProps } from "../ignoredProps";

export const ResponsiveText = styledWithoutProps(
  Typography,
  ({ variant, colorHex, theme }) => ({
    fontSize: baseFontSizes[variant].default,
    color: colorHex,
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