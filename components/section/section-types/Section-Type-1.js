import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { Avatar, Box, Container } from "@mui/material";
import React from "react";

const SectionType1 = ({
  extraFunctionalities,
  isfocused,
  componentSelectionHandler,
  styles,
}) => {
  const { sectionStyles, headingStyles, paragraphStyles, imageStyles } = styles;

  return (
    <Container
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      backgroundColor={sectionStyles.backgroundColor}
      sx={{
        minHeight: "400px",
        border: "1px solid red",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      maxWidth={false}
    >
      <Box
        sx={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <ResponsiveText variant="header">
            {extraFunctionalities?.headingText}
          </ResponsiveText>
        </Box>
        <Box>
          <ResponsiveText variant="body">
            {extraFunctionalities?.paragraphText}
          </ResponsiveText>
        </Box>
      </Box>
      <Box
        sx={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src={extraFunctionalities?.image}
          sx={{
            height: "90%",
            width: "50%",
          }}
        />
      </Box>
    </Container>
  );
};

export default SectionType1;
