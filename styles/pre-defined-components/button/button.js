import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button, {
  shouldForwardProp: (props) =>
    props !== "colorHex" &&
    props !== "backgroundColor" &&
    props !== "fontSize" &&
    props !== "fontFamily" &&
    props !== "fontWeight" &&
    props !== "hoverColor"&&
    props !== "fontStyle" 
})(
  ({
    colorHex,
    backgroundColor,
    fontSize,
    theme,
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
