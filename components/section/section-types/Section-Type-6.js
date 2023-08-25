
import { ResponsiveText, StyledLink } from "@/styles/pre-defined-components/common-styled-components/common-components";

import {
  SectionButtonContainer6,
  SectionButtonWrapperContainer6,
  SectionCardContainer6,
  SectionContainer6,
  SectionImageContainer6,
  SectionTextContainer6,
  SectionTextWrapperContainer6,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-6-styles";
import { Avatar, Box, Container, Grid } from "@mui/material";
import React from "react";

const SectionType6 = ({
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
  const { imageGridFunctionalities } = extraFunctionalities;

  return (
    <SectionContainer6
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      maxWidth="false"
      backgroundColor={blockStyles.backgroundColor}
    >
      <Container maxWidth="lg">
        <Grid
          justifyContent="space-evenly"
          container
          spacing={2}
          columns={{ xs: 1, sm: 4, md: 6, lg: 12 }}
        >
          {imageGridFunctionalities.map(
            (
              {
                textFunctionalities,
                imageFunctionalities,
                buttonFunctionalities,
              },
              index
            ) => (
              <Grid item xs={1} sm={2} md={2} lg={6} key={index}>
                <SectionCardContainer6
                  borderRadius={`${cardStyles.borderRadius}%`}
                >
                  <SectionImageContainer6>
                    <StyledLink href={imageFunctionalities.imageRedirectLink}>
                      <Avatar
                        src={imageFunctionalities.image}
                        sx={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 0,
                        }}
                      />
                    </StyledLink>
                  </SectionImageContainer6>
                  <SectionTextWrapperContainer6
                    backgroundColor={cardStyles.backgroundColor}
                  >
                    <SectionTextContainer6>
                      <Box textAlign={headingStyles.textAlign}>
                        <ResponsiveText
                          variant="subHeader"
                          colorHex={headingStyles.colorHex}
                          fontStyle={headingStyles.fontStyle}
                          fontWeight={headingStyles.fontWeight}
                        >
                          {textFunctionalities.headingText}
                        </ResponsiveText>
                      </Box>
                      <Box textAlign={paragraphStyles.textAlign}>
                        <ResponsiveText
                          variant="mainBody"
                          colorHex={paragraphStyles.colorHex}
                          fontStyle={paragraphStyles.fontStyle}
                          fontWeight={paragraphStyles.fontWeight}
                        >
                          {textFunctionalities.paragraphText}
                        </ResponsiveText>
                      </Box>
                    </SectionTextContainer6>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {/* <StyledLink
                        href={buttonFunctionalities.buttonRedirectLink}
                      > */}
                      <SectionButtonContainer6
                        variant="contained"
                        {...buttonStyles}
                      >
                        <ResponsiveText variant="helper">
                          {buttonFunctionalities.buttonText}
                        </ResponsiveText>
                      </SectionButtonContainer6>
                      {/* </StyledLink> */}
                      <Box>
                        <ResponsiveText variant="subHeader">
                          {textFunctionalities.pricingText}
                        </ResponsiveText>
                      </Box>
                    </Box>
                  </SectionTextWrapperContainer6>
                </SectionCardContainer6>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </SectionContainer6>
  );
};

export default SectionType6;
