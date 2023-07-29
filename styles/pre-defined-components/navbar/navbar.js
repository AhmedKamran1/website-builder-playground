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

export const ResponsiveText = styled(Typography)(
  ({ variant, colorhex, theme }) => ({
    fontSize: baseFontSizes[variant].default,
    [theme.breakpoints.down("sm")]: {
      fontSize: baseFontSizes[variant].small,
    },
    color: colorhex,
  })
);

export const NavigationBar = styled(AppBar)(
  ({ backgroundcolor, isfocused }) => ({
    position: "static",
    backgroundColor: backgroundcolor,
    border: isfocused ? "1px solid blue" : "none",
  })
);

export const TabItem = styled(Tab)(({ colorhex }) => ({
  color: colorhex,
}));

export const StyledLink = styled(Link)(() => ({
  // textDecoration: "none",
  all:"unset"
}));

export const StyledListItemText = styled(ListItemText)(({ colorhex }) => ({
  color: colorhex,
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "0.2em",
  },
}));
