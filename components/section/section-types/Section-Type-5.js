import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
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
  const { blockStyles, headingStyles, paragraphStyles, imageStyles } = styles;
  const { imageGridFunctionalities } = extraFunctionalities;

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
          {imageGridFunctionalities.map(({ textFunctionalities }, index) => (
            <Grid item xs={1} sm={3} md={4} key={index}>
              <SectionCardContainer5>
                <SectionPriceContainer5>
                  <ResponsiveText variant="subHeader">
                    {textFunctionalities.pricingText}
                  </ResponsiveText>
                </SectionPriceContainer5>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
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
                        variant="header"
                        colorHex={headingStyles.colorHex}
                      >
                        {textFunctionalities.headingText}
                      </ResponsiveText>
                    </Box>
                    <Box textAlign={paragraphStyles.textAlign}>
                      <ResponsiveText
                        variant="mainBody"
                        colorHex={paragraphStyles.colorHex}
                      >
                        {textFunctionalities.paragraphText}
                      </ResponsiveText>
                    </Box>
                  </Box>
                  <SectionButtonContainer5>Button</SectionButtonContainer5>
                </Box>
              </SectionCardContainer5>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer5>
  );
};

export default SectionType5;
