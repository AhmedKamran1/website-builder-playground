import { styled, Toolbar, Container, ListItemText, Tab, ListItemButton } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";

export const NavToolBar = styled(Toolbar)(({ theme }) => ({
  width: "60%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const FullViewContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
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

export const TabItem = styledWithoutProps(
  Tab,
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
