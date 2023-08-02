import { styled, Box, Toolbar, Container } from "@mui/material";

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
  flexDirection:"column"
}));
