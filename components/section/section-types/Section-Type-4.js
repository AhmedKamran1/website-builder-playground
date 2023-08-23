import { imageFunctionalities } from "@/helpers/pre-defined-components-styles/section-styles";
import { StyledButton } from "@/styles/pre-defined-components/button/button";
import {
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import {
  SectionButtonContainer4,
  SectionContainer4,
  SectionImageContainer4,
  SectionTextContainer4,
  SectionTextWrapperContainer4,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-4-styles";
import { Avatar, Box, Container, Grid } from "@mui/material";
import React from "react";

const SectionType4 = ({
  extraFunctionalities,
  isfocused,
  componentSelectionHandler,
  styles,
}) => {
  const {
    buttonStyles,
    cardStyles,
    blockStyles,
    headingStyles,
    paragraphStyles,
    imageStyles,
  } = styles;
  const { textFunctionalities, buttonFunctionalities } = extraFunctionalities;
  const { headingText, paragraphText } = textFunctionalities;
  const { buttonText, buttonRedirectLink } = buttonFunctionalities;

  return (
    <SectionContainer4
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      maxWidth="false"
      backgroundColor={blockStyles.backgroundColor}
    >
      <Grid container>
        <SectionImageContainer4
          item
          xs={12}
          md={6}
          borderRadius={`${cardStyles.borderRadius}%`}
        >
          <Avatar
            src={imageFunctionalities.image}
            sx={{ height: "100%", width: "100%", borderRadius: 0 }}
          />
        </SectionImageContainer4>
        <SectionTextWrapperContainer4
          item
          xs={12}
          md={6}
          backgroundColor={cardStyles.backgroundColor}
          borderRadius={`${cardStyles.borderRadius}%`}
        >
          <SectionTextContainer4>
            <Box textAlign={headingStyles.textAlign}>
              <ResponsiveText
                variant="header"
                colorHex={headingStyles.colorHex}
                fontStyle={headingStyles.fontStyle}
                fontWeight={headingStyles.fontWeight}
              >
                {headingText}
              </ResponsiveText>
            </Box>
            <Box textAlign={paragraphStyles.textAlign}>
              <ResponsiveText
                variant="mainBody"
                colorHex={paragraphStyles.colorHex}
                fontStyle={paragraphStyles.fontStyle}
                fontWeight={paragraphStyles.fontWeight}
              >
                {paragraphText}
              </ResponsiveText>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: headingStyles.textAlign }}
            >
              {/* <StyledLink href={buttonRedirectLink}> */}
                <SectionButtonContainer4 variant="contained" {...buttonStyles}>
                  <ResponsiveText variant="helper">{buttonText}</ResponsiveText>
                </SectionButtonContainer4>
              {/* </StyledLink> */}
            </Box>
          </SectionTextContainer4>
        </SectionTextWrapperContainer4>
      </Grid>
    </SectionContainer4>
  );
};

export default SectionType4;
