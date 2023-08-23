import { Box, Container, Grid } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";
import { StyledButton } from "../../button/button";

export const SectionContainer5 = styledWithoutProps(
  Container,
  ({ backgroundColor }) => ({
    padding: "2rem",
    backgroundColor: backgroundColor,
  })
);

export const SectionCardContainer5 = styledWithoutProps(
  Box,
  ({ borderRadius, backgroundColor,theme }) => ({
    border: "1px solid black",
    minHeight: "250px",
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
  })
);

export const SectionPriceContainer5 = styledWithoutProps(Box, ({}) => ({
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  bottom: "1rem",
}));

export const SectionButtonContainer5 = styledWithoutProps(
  StyledButton,
  ({}) => ({
    height: "35px",
    width: "50%",
    // margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);
