import Link from "next/link";

import { baseFontSizes } from "@/helpers/font-sizes/font-sizes";
import { Button, Typography, styled } from "@mui/material";
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

export const StyledLink = styled(Link)(() => ({
  all: "unset",
}));

export const StyledButton = styledWithoutProps(
  Button,
  ({
    colorHex,
    backgroundColor,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    hoverColor,
    borderRadius,
    isfocused,
  }) => ({
    backgroundColor: backgroundColor,
    color: colorHex,
    fontSize: fontSize,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    borderRadius: `${borderRadius}%`,
    border: isfocused ? "1px solid blue" : "none",
    margin: "0.25rem",
    "&:hover": {
      backgroundColor: hoverColor,
    },
  })
);
