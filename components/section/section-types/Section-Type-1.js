import {
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { Avatar, Box, Container } from "@mui/material";
import React from "react";

const SectionType1 = ({
  extraFunctionalities,
  isfocused,
  componentSelectionHandler,
  styles,
}) => {
  const { blockStyles, headingStyles, paragraphStyles, imageStyles } = styles;
  const { textFunctionalities, imageFunctionalities } = extraFunctionalities;
  const { headingText, paragraphText } = textFunctionalities;
  const { image, imageRedirectLink, imageAltText } = imageFunctionalities;

  return (
    <Container
      onClick={componentSelectionHandler}
      isfocused={isfocused}
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
        {headingText && (
          <Box>
            <ResponsiveText variant="header">{headingText}</ResponsiveText>
          </Box>
        )}
        {paragraphText && (
          <Box>
            <ResponsiveText variant="body">{paragraphText}</ResponsiveText>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledLink href={imageRedirectLink}>
          <Avatar
            src={image}
            alt={imageAltText}
            sx={{
              height: "90%",
              width: "50%",
            }}
          />
        </StyledLink>
      </Box>
    </Container>
  );
};

export default SectionType1;
