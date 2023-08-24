import React from "react";

import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { Box } from "@mui/material";
import {
  SectionContainer2,
  SectionTextBox2,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-2-styles";
import { formatText } from "@/util/format-text";
import { StyledButton } from "@/styles/pre-defined-components/button/button";

const SectionType2 = ({
  extraFunctionalities,
  isfocused,
  componentSelectionHandler,
  styles,
}) => {
  const { headingStyles, paragraphStyles, blockStyles } = styles;
  const { textFunctionalities } = extraFunctionalities;
  const { headingText, paragraphText } = textFunctionalities;

  return (
    <SectionContainer2
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      maxWidth={false}
      backgroundColor={blockStyles.backgroundColor}
    >
      <SectionTextBox2>
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
          <StyledButton variant="contained">Hello</StyledButton>
        </Box>
      </SectionTextBox2>
    </SectionContainer2>
  );
};

export default SectionType2;
