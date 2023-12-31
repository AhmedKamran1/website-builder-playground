import React from "react";


import { Avatar, Box, Container, Grid } from "@mui/material";
import {
  GridItem3,
  SectionContainer3,
  SectionItemContainer3,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-3-styles";
import { formatText } from "@/util/format-text";

import { ResponsiveText, StyledButton, StyledLink } from "@/styles/pre-defined-components/common-styled-components/common-components";

const SectionType3 = ({
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
    imageStyles,
  } = styles;
  const { gridItemsFunctionalities, buttonFunctionalities } =
    extraFunctionalities;
  const { buttonText, buttonRedirectLink, showButton } = buttonFunctionalities;

  return (
    <SectionContainer3
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      maxWidth="false"
      backgroundColor={blockStyles.backgroundColor}
    >
      <Container maxWidth="md">
        <Grid
          justifyContent="space-evenly"
          container
          spacing={2}
          columns={{ xs: 1, sm: 6, md: 12 }}
        >
          {gridItemsFunctionalities.map(
            ({ textFunctionalities, imageFunctionalities }, index) => (
              <Grid item xs={1} sm={3} md={4} key={index}>
                <SectionItemContainer3>
                  <Box sx={{ height: "200px", width: "100%" }}>
                    <StyledLink href={imageFunctionalities.imageRedirectLink}>
                      <Avatar
                        src={imageFunctionalities.image}
                        sx={{
                          height: "100%",
                          width: "100%",
                          borderRadius: `${imageStyles.borderRadius}px`,
                        }}
                      />
                    </StyledLink>
                  </Box>
                  <Box textAlign={headingStyles.textAlign}>
                    <ResponsiveText
                      variant="subHeader"
                      colorHex={headingStyles.colorHex}
                      fontStyle={headingStyles.fontStyle}
                      fontWeight={headingStyles.fontWeight}
                    >
                      {formatText(textFunctionalities.headingText)}
                    </ResponsiveText>
                  </Box>
                  <Box textAlign={paragraphStyles.textAlign}>
                    <ResponsiveText
                      variant="mainBody"
                      colorHex={paragraphStyles.colorHex}
                      fontStyle={paragraphStyles.fontStyle}
                      fontWeight={paragraphStyles.fontWeight}
                    >
                      {formatText(textFunctionalities.paragraphText)}
                    </ResponsiveText>
                  </Box>
                </SectionItemContainer3>
              </Grid>
            )
          )}
        </Grid>
      </Container>
      {showButton && (
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            {/* <StyledLink href={buttonRedirectLink}> */}
            <StyledButton variant="contained" {...buttonStyles}>
              <ResponsiveText variant="helper">{buttonText}</ResponsiveText>
            </StyledButton>
            {/* </StyledLink> */}
          </Box>
        </Container>
      )}
    </SectionContainer3>
  );
};

export default SectionType3;
