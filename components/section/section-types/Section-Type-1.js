import {
  ResponsiveText,
  StyledButton,
  StyledLink,
} from "@/styles/pre-defined-components/common-styled-components/common-components";

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
  const {
    buttonStyles,
    blockStyles,
    headingStyles,
    paragraphStyles,
    subHeadingStyles,
    imageStyles,
  } = styles;
  const { textFunctionalities, imageFunctionalities, buttonFunctionalities } =
    extraFunctionalities;
  const { headingText, paragraphText, subHeadingText } = textFunctionalities;
  const { image, imageRedirectLink, imageAltText } = imageFunctionalities;
  const { buttonText, buttonRedirectLink, showButton } = buttonFunctionalities;

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
              {subHeadingText && (
                <Box textAlign={subHeadingStyles.textAlign}>
                  <ResponsiveText
                    variant="subHeader"
                    colorHex={subHeadingStyles.colorHex}
                    fontStyle={subHeadingStyles.fontStyle}
                    fontWeight={subHeadingStyles.fontWeight}
                  >
                    {formatText(subHeadingText)}
                  </ResponsiveText>
                </Box>
              )}
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
              {showButton && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: headingStyles.textAlign,
                  }}
                >
                  {/* <StyledLink href={buttonRedirectLink}> */}
                  <StyledButton variant="contained" {...buttonStyles}>
                    <ResponsiveText variant="helper">
                      {buttonText}
                    </ResponsiveText>
                  </StyledButton>
                  {/* </StyledLink> */}
                </Box>
              )}
            </SectionTextBox1>
          </Grid>
          <Grid item xs={12} lg={6} margin="auto">
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
