import { Box, Container, Grid } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";

export const SectionContainer6 = styledWithoutProps(
  Container,
  ({ backgroundColor }) => ({
    border: "1px solid red",
    padding: "2rem",
    backgroundColor: backgroundColor,
  })
);

export const SectionTextWrapperContainer6 = styledWithoutProps(Box, ({theme}) => ({
  width: "55%",
  border: "1px solid red",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    padding:"1rem"
  },
}));

export const SectionTextContainer6 = styledWithoutProps(Box, ({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

export const SectionImageContainer6 = styledWithoutProps(Box, ({ theme }) => ({
  width: "45%",
  [theme.breakpoints.down("lg")]: {
    height: "200px",
    width: "100%",
  },
}));

export const SectionButtonWrapperContainer6 = styledWithoutProps(Box, ({}) => ({
  height: "35px",
  width: "100px",
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SectionCardContainer6 = styledWithoutProps(Box, ({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  minHeight: "220px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
