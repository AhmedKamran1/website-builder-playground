import { Box, Container, Grid } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";
import { StyledButton } from "../../button/button";

export const SectionContainer6 = styledWithoutProps(
  Container,
  ({ backgroundColor }) => ({
    border: "1px solid red",
    padding: "2rem",
    backgroundColor: backgroundColor,
  })
);

export const SectionTextWrapperContainer6 = styledWithoutProps(
  Box,
  ({ backgroundColor, theme }) => ({
    width: "55%",
    border: "1px solid red",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "20px",
    backgroundColor: backgroundColor,
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      padding: "1rem",
    },
  })
);

export const SectionTextContainer6 = styledWithoutProps(Box, ({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

export const SectionImageContainer6 = styledWithoutProps(Box, ({ theme }) => ({
  height: "220px",
  width: "45%",
  [theme.breakpoints.down("lg")]: {
    height: "200px",
    width: "100%",
  },
}));

export const SectionButtonContainer6 = styledWithoutProps(
  StyledButton,
  ({}) => ({
    height: "35px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const SectionCardContainer6 = styledWithoutProps(
  Box,
  ({ borderRadius, theme }) => ({
    display: "flex",
    flexDirection: "row",
    minHeight: "220px",
    borderRadius: borderRadius,
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  })
);
