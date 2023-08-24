import { Box, Container } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";

export const SectionContainer2 = styledWithoutProps(Container, ({backgroundColor}) => ({
  // minHeight: "250px",
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  padding:"2rem",
  backgroundColor: backgroundColor
}));

export const SectionTextBox2 = styledWithoutProps(Box, ({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width:"100%",
  maxWidth: "750px",
  // border: "1px solid yellow",
}));
