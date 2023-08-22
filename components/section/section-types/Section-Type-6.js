import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import {
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
  const { blockStyles, headingStyles, paragraphStyles, imageStyles } = styles;
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
            ({ textFunctionalities, imageFunctionalities }, index) => (
              <Grid item xs={1} sm={2} md={2} lg={6} key={index}>
                <SectionCardContainer6>
                  <SectionImageContainer6>
                    <Avatar
                      src={imageFunctionalities.image}
                      sx={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 0,
                      }}
                    />
                  </SectionImageContainer6>
                  <SectionTextWrapperContainer6>
                    <SectionTextContainer6>
                      <Box textAlign={headingStyles.textAlign}>
                        <ResponsiveText
                          variant="subHeader"
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
                    </SectionTextContainer6>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <SectionButtonWrapperContainer6>
                        Button
                      </SectionButtonWrapperContainer6>
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
