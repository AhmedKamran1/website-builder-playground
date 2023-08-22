import { Box, Container, Grid } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";

// export const SectionContainer4 = styledWithoutProps(
//   Container,
//   ({ backgroundColor }) => ({
//     border: "1px solid red",
//     minHeight: "500px",
//     padding: "2rem",
//     backgroundColor: backgroundColor,
//   })
// );

export const SectionCardContainer5 = styledWithoutProps(Box, ({}) => ({
  border: "1px solid black",
  minHeight: "250px",
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
}));

export const SectionPriceContainer5 = styledWithoutProps(Box, ({}) => ({
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  bottom: "1rem",
}));

export const SectionButtonContainer5 = styledWithoutProps(Box, ({}) => ({
    height: "35px",
    width: "50%",
    border: "1px solid red",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  