import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(
  ({
    colorhex,
    height,
    width,
    backgroundcolor,
    fontsize,
    theme,
    fontfamily,
    fontweight,
    fontstyle,
    hovercolor,
    isfocused,
    mdwidth,
  }) => ({
    backgroundColor: backgroundcolor,
    width: width,
    color: colorhex,
    height: height,
    fontSize: fontsize,
    fontFamily: fontfamily,
    fontWeight: fontweight,
    fontStyle: fontstyle,
    border: isfocused ? "1px solid blue" : "none",
    margin: "0.25rem",
    [theme.breakpoints.down("md")]: {
      width: mdwidth,
    },

    "&:hover": {
      backgroundColor: hovercolor,
    },
  })
);