import {
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/common-styled-components/common-components";

import {
  SectionButtonContainer5,
  SectionCardContainer5,
  SectionContainer5,
  SectionPriceContainer5,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-5-styles";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const SectionType5 = ({
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
    pricingStyles,
  } = styles;
  const { gridItemsFunctionalities } = extraFunctionalities;

  return (
    <SectionContainer5
      onClick={componentSelectionHandler}
      isfocused={isfocused}
      maxWidth="false"
      backgroundColor={blockStyles.backgroundColor}
      sx={{ padding: "2rem" }}
    >
      <Container maxWidth="md">
        <Grid
          justifyContent="space-evenly"
          container
          spacing={1.5}
          columns={{ xs: 1, sm: 6, md: 12 }}
        >
          {gridItemsFunctionalities.map(
            (
              {
                textFunctionalities,
                buttonFunctionalities,
                pricingFunctionalities,
              },
              index
            ) => (
              <Grid item xs={1} sm={3} md={4} key={index}>
                <SectionCardContainer5
                  backgroundColor={cardStyles.backgroundColor}
                  borderRadius={`${cardStyles.borderRadius}px`}
                >
                  <SectionPriceContainer5>
                    <ResponsiveText
                      variant="subHeader"
                      colorHex={pricingStyles.colorHex}
                    >
                      {pricingFunctionalities.pricingText}
                      {pricingFunctionalities.currencyType}
                    </ResponsiveText>
                  </SectionPriceContainer5>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                      }}
                    >
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
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      {/* <StyledLink
                        href={buttonFunctionalities.buttonRedirectLink}
                      > */}
                      <SectionButtonContainer5
                        variant="contained"
                        {...buttonStyles}
                      >
                        <ResponsiveText variant="helper">
                          {buttonFunctionalities.buttonText}
                        </ResponsiveText>
                      </SectionButtonContainer5>
                      {/* </StyledLink> */}
                    </Box>
                  </Box>
                </SectionCardContainer5>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </SectionContainer5>
  );
};

export default SectionType5;
