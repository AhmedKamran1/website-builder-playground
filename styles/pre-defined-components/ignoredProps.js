import { styled } from "@mui/material";

const createStyledWithForwarding =
  (excludedProps) =>
  (component, ...styles) =>
    styled(component, {
      shouldForwardProp: (prop) => !excludedProps.includes(prop),
    })(...styles);

export const styledWithoutProps = createStyledWithForwarding([
  "colorHex",
  "backgroundColor",
  "fontSize",
  "fontFamily",
  "fontWeight",
  "fontStyle",
  "hoverColor",
  "borderRadius",
  "textAlign",
  "flexDirection",
]);
