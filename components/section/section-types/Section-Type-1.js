import { StyledButton } from "@/styles/pre-defined-components/button/button";
import {
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import {
  SectionContainer1,
  SectionImageBox1,
  SectionItemContainer1,
  SectionTextBox1,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-1-styles";
import { formatText } from "@/util/format-text";
import { Avatar, Box, Container, Grid } from "@mui/material";
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
    <SectionContainer1
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      maxWidth={false}
      backgroundColor={blockStyles.backgroundColor}
    >
      <Container maxWidth="md">
        <Grid
          container
          justifyContent="center"
          spacing={2.5}
          flexDirection={blockStyles.flexDirection}
        >
          <Grid item xs={8} lg={6}>
            <SectionTextBox1>
              {headingText && (
                <Box textAlign={headingStyles.textAlign}>
                  <ResponsiveText
                    variant="header"
                    colorHex={headingStyles.colorHex}
                    fontStyle={headingStyles.fontStyle}
                    fontWeight={headingStyles.fontWeight}
                  >
                    {formatText(headingText)}
                  </ResponsiveText>
                </Box>
              )}
              {paragraphText && (
                <Box textAlign={paragraphStyles.textAlign}>
                  <ResponsiveText
                    variant="mainBody"
                    colorHex={paragraphStyles.colorHex}
                    fontStyle={paragraphStyles.fontStyle}
                    fontWeight={paragraphStyles.fontWeight}
                  >
                    {formatText(paragraphText)}
                  </ResponsiveText>
                </Box>
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledButton variant="contained">efewqfewf</StyledButton>
              </Box>
            </SectionTextBox1>
          </Grid>
          <Grid item xs={12} lg={6}>
            <SectionImageBox1>
              <StyledLink href={imageRedirectLink} style={{ width: "70%" }}>
                <Avatar
                  src={image}
                  alt={imageAltText}
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: `${imageStyles.borderRadius}%`,
                  }}
                />
              </StyledLink>
            </SectionImageBox1>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer1>
  );
};

export default SectionType1;
