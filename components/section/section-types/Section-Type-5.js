import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import {
  SectionButtonContainer5,
  SectionCardContainer5,
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
    <Container maxWidth="false" sx={{ padding: "2rem" }}>
      <Container maxWidth="md">
        <Grid
          justifyContent="space-evenly"
          container
          spacing={1.5}
          columns={{ xs: 1, sm: 6, md: 12 }}
        >
          {imageGridFunctionalities.map(
            ({ textFunctionalities, imageFunctionalities }, index) => (
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
                      <Box textAlign="center">
                        <ResponsiveText variant="header">
                          {textFunctionalities.headingText}
                        </ResponsiveText>
                      </Box>
                      <Box textAlign="center">
                        <ResponsiveText variant="mainBody">
                          {textFunctionalities.paragraphText}
                        </ResponsiveText>
                      </Box>
                    </Box>
                    <SectionButtonContainer5>Button</SectionButtonContainer5>
                  </Box>
                </SectionCardContainer5>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Container>
  );
};

export default SectionType5;
