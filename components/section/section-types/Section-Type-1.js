import {
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import {
  SectionContainer1,
  SectionImageBox1,
  SectionTextBox1,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-1-styles";
import { formatText } from "@/util/format-text";
import { Avatar, Box } from "@mui/material";
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
      flexDirection={blockStyles.flexDirection}
    >
      <SectionTextBox1>
        {headingText && (
          <Box textAlign={headingStyles.textAlign}>
            <ResponsiveText variant="header" colorHex={headingStyles.colorHex}>
              {formatText(headingText)}
            </ResponsiveText>
          </Box>
        )}
        {paragraphText && (
          <Box textAlign={paragraphStyles.textAlign}>
            <ResponsiveText
              variant="mainBody"
              colorHex={paragraphStyles.colorHex}
            >
              {formatText(paragraphText)}
            </ResponsiveText>
          </Box>
        )}
      </SectionTextBox1>
      <SectionImageBox1>
        <StyledLink href={imageRedirectLink}>
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
    </SectionContainer1>
  );
};

export default SectionType1;
