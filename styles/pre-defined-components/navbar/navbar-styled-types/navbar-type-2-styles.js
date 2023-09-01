import {
  styled,
  Toolbar,
  Container,
  ListItemText,
  Tab,
  ListItemButton,
  Avatar,
} from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";
import { NavbarLogo } from "../navbar-common-styles";
import { ResponsiveText } from "../../common-styled-components/common-components";

export const NavToolBar = styled(Toolbar)(({ theme }) => ({
  width: "60%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    width: "70%",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const FullViewContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
  },
}));

export const ResponsiveContainer = styled(Container)(({}) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const StyledListItemButton = styledWithoutProps(
  ListItemButton,
  ({ theme }) => ({
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0.2em",
    },
  })
);

export const StyledListItemText = styledWithoutProps(
  ListItemText,
  ({ colorHex }) => ({
    color: colorHex,
  })
);

export const ResponsiveTitleText2 = styled(ResponsiveText)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: ".2rem",
  textDecoration: "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavbarLogo2 = styledWithoutProps(NavbarLogo, ({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
  },
}));
