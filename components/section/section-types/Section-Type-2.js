import React from "react";

import { Box } from "@mui/material";
import {
  SectionContainer2,
  SectionTextBox2,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-2-styles";
import { formatText } from "@/util/format-text";

import {
  ResponsiveText,
  StyledButton,
  StyledLink,
} from "@/styles/pre-defined-components/common-styled-components/common-components";

const SectionType2 = ({
  extraFunctionalities,
  isfocused,
  componentSelectionHandler,
  styles,
}) => {
  const {
    buttonStyles,
    headingStyles,
    subHeadingStyles,
    paragraphStyles,
    blockStyles,
  } = styles;
  const { textFunctionalities, buttonFunctionalities } = extraFunctionalities;
  const { headingText, paragraphText, subHeadingText } = textFunctionalities;
  const { buttonText, buttonRedirectLink, showButton } = buttonFunctionalities;

  return (
    <SectionContainer2
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      maxWidth={false}
      backgroundColor={blockStyles.backgroundColor}
    >
      <SectionTextBox2>
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
              <ResponsiveText variant="helper">{buttonText}</ResponsiveText>
            </StyledButton>
            {/* </StyledLink> */}
          </Box>
        )}
      </SectionTextBox2>
    </SectionContainer2>
  );
};

export default SectionType2;
