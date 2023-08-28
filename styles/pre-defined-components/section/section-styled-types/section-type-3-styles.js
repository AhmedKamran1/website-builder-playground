import { Box, Container } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";

export const SectionContainer3 = styledWithoutProps(
  Container,
  ({ isfocused, backgroundColor }) => ({
    padding: "2rem",
    backgroundColor: backgroundColor,
    border: isfocused ? "1px solid blue" : "1px solid transparent",
  })
);

export const SectionItemContainer3 = styledWithoutProps(Box, ({}) => ({
  minHeight: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
