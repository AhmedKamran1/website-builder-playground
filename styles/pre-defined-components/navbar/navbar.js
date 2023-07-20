import {
  AppBar,
  ListItemText,
  Tab,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";

const baseFontSizes = {
  header: {
    default: "2rem",
    small: "1.5rem",
  },
  subHeader: {
    default: "1.5rem",
    small: "1.25rem",
  },
  mainBody: {
    default: "1.125rem",
    small: "1rem",
  },
  body: {
    default: "1rem",
    small: "0.875rem",
  },
  helper: {
    default: "0.875rem",
    small: "0.75rem",
  },
};

export const ResponsiveText = styled(Typography)(
  ({ variant, colorhex, theme }) => ({
    fontSize: baseFontSizes[variant].default,
    [theme.breakpoints.down("sm")]: {
      fontSize: baseFontSizes[variant].small || baseFontSizes[variant].default,
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
  textDecoration: "none",
}));

export const StyledListItemText = styled(ListItemText)(({ colorhex }) => ({
  color: colorhex,
}));