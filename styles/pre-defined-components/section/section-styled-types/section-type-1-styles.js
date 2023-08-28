import { Box, Container, Grid } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";

export const SectionContainer1 = styledWithoutProps(
  Container,
  ({ backgroundColor, isfocused, theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    backgroundColor: backgroundColor,
    border: isfocused ? "1px solid blue" : "1px solid transparent",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 0",
    },
  })
);

export const SectionImageBox1 = styledWithoutProps(Box, ({ theme }) => ({
  display: "flex",
  height: "200px",
  justifyContent: "center",
}));

export const SectionTextBox1 = styledWithoutProps(Box, ({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  minHeight: "200px",
  flexDirection: "column",
  gap: "15px",
}));
