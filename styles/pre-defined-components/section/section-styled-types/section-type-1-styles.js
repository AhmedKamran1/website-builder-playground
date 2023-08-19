import { Box, Container } from "@mui/material";

import { styledWithoutProps } from "../../ignoredProps";

export const SectionContainer1 = styledWithoutProps(
  Container,
  ({ flexDirection, backgroundColor, theme }) => ({
    minHeight: "350px",
    // border: "1px solid red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    padding:"2rem",
    flexDirection: flexDirection,
    backgroundColor: backgroundColor,
    [theme.breakpoints.down("md")]: {
      flexDirection: flexDirection === "row" ? "column" : "column-reverse",
      gap:"10px"
    },
  })
);

export const SectionImageBox1 = styledWithoutProps(Box, ({ theme }) => ({
  width:"100%",
  maxWidth: "350px",
  display: "flex",
  justifyContent: "center",
}));

export const SectionTextBox1 = styledWithoutProps(SectionImageBox1, ({}) => ({
  flexDirection: "column",
  gap:"15px"
}));
