import React from "react";

import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { Box, Container } from "@mui/material";

const SectionType2 = ({
  extraFunctionalities,
  isfocused,
  componentSelectionHandler,
  styles,
}) => {
  const { headingStyles, paragraphStyles } = styles;
  const { textFunctionalities } = extraFunctionalities;
  const { headingText, paragraphText } = textFunctionalities;

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "400px",
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Box maxWidth="600px" textAlign="center" fontSize="2.5rem">
        <ResponsiveText variant="header">{headingText}</ResponsiveText>
      </Box>
      <Box maxWidth="800px" textAlign="center">
        <ResponsiveText variant="body">{paragraphText}</ResponsiveText>
      </Box>
    </Container>
  );
};

export default SectionType2;
