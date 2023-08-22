import { imageFunctionalities } from "@/helpers/pre-defined-components-styles/section-styles";
import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
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
  const { blockStyles, headingStyles, paragraphStyles, imageStyles } = styles;
  const { textFunctionalities } = extraFunctionalities;
  const { headingText, paragraphText } = textFunctionalities;

  return (
    <SectionContainer4
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      maxWidth="false"
      backgroundColor={blockStyles.backgroundColor}
    >
      <Grid container>
        <SectionImageContainer4 item xs={12} md={6}>
          <Avatar
            src={imageFunctionalities.image}
            sx={{ height: "100%", width: "100%", borderRadius: 0 }}
          />
        </SectionImageContainer4>
        <SectionTextWrapperContainer4 item xs={12} md={6}>
          <SectionTextContainer4>
            <Box textAlign={headingStyles.textAlign}>
              <ResponsiveText
                variant="header"
                colorHex={headingStyles.colorHex}
              >
                {headingText}
              </ResponsiveText>
            </Box>
            <Box textAlign={paragraphStyles.textAlign}>
              <ResponsiveText
                variant="mainBody"
                colorHex={paragraphStyles.colorHex}
              >
                {paragraphText}
              </ResponsiveText>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "left" }}>
              <SectionButtonContainer4>Button</SectionButtonContainer4>
            </Box>
          </SectionTextContainer4>
        </SectionTextWrapperContainer4>
      </Grid>
    </SectionContainer4>
  );
};

export default SectionType4;
