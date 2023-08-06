import { Button } from "@mui/material";

import { styledWithoutProps } from "../ignoredProps";

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
    isfocused,
  }) => ({
    backgroundColor: backgroundColor,
    color: colorHex,
    fontSize: fontSize,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    border: isfocused ? "1px solid blue" : "none",
    margin: "0.25rem",
    "&:hover": {
      backgroundColor: hoverColor,
    },
  })
);
