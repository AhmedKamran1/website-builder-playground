import { Box, Container } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";

export const SectionContainer3 = styledWithoutProps(
  Container,
  ({ backgroundColor }) => ({
    padding: "2rem",
    backgroundColor: backgroundColor,
  })
);

export const GridItem3 = styledWithoutProps(Box, ({  }) => ({
  minHeight: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
