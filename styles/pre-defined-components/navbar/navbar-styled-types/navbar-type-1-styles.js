import { styled, Box } from "@mui/material";
import { ResponsiveText } from "../navbar-common-styles";

export const ResponsiveBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {
    display: "flex",
  },
}));

export const ResponsiveTitleText = styled(ResponsiveText)(({ theme }) => ({
  marginRight: 2,
  fontWeight: 700,
  letterSpacing: ".2rem",
  textDecoration: "none",
  [theme.breakpoints.down("md")]: {
    flexGrow: 1,
  },
}));

export const FullViewBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  gap: "10px",
  marginLeft: "30px",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "10px",
    gap: 0,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
