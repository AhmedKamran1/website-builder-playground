import { Box, Container, Grid } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";
import { StyledButton } from "../../common-styled-components/common-components";

export const SectionContainer4 = styledWithoutProps(
  Container,
  ({ backgroundColor }) => ({
    border: "1px solid red",
    minHeight: "500px",
    padding: "2rem",
    backgroundColor: backgroundColor,
  })
);

export const SectionImageContainer4 = styledWithoutProps(
  Grid,
  ({ borderRadius, theme }) => ({
    border: "1px solid purple",
    height: "300px",
    marginBottom: "55px",
    position: "relative",
    left: "5%",
    borderRadius: borderRadius,
    [theme.breakpoints.down("md")]: {
      height: "200px",
      marginBottom: "0",
      position: "static",
      left: "0",
    },
  })
);

export const SectionTextWrapperContainer4 = styledWithoutProps(
  Grid,
  ({ borderRadius, backgroundColor, theme }) => ({
    border: "1px solid yellow",
    minHeight: "300px",
    marginTop: "55px",
    position: "relative",
    left: "-5%",
    padding: "2rem",
    zIndex: 1,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    [theme.breakpoints.down("md")]: {
      minHeight: "200px",
      marginTop: "0",
      position: "static",
      left: "0",
      zIndex: 0,
    },
  })
);

export const SectionTextContainer4 = styledWithoutProps(Grid, ({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "10%",
  height: "100%",
  width: "65%",
  gap: "40px",

  [theme.breakpoints.down("md")]: {
    gap: "15px",
    width: "80%",
  },
}));

export const SectionButtonContainer4 = styledWithoutProps(
  StyledButton,
  ({}) => ({
    height: "40px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);
