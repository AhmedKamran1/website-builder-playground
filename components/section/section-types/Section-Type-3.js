import React from "react";

import {
  ResponsiveText,
  StyledLink,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { Avatar, Box, Container, Grid } from "@mui/material";
import {
  GridItem3,
  SectionContainer3,
  SectionItemContainer3,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-3-styles";
import { formatText } from "@/util/format-text";
import { StyledButton } from "@/styles/pre-defined-components/button/button";

const SectionType3 = ({
  extraFunctionalities,
  isfocused,
  componentSelectionHandler,
  styles,
}) => {
  const { blockStyles, headingStyles, paragraphStyles, imageStyles } = styles;
  const { imageGridFunctionalities } = extraFunctionalities;

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
          {imageGridFunctionalities.map(
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
                          borderRadius: `${imageStyles.borderRadius}%`,
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
      <Container maxWidth="md">
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <StyledButton variant="contained">Button</StyledButton>
        </Box>
      </Container>
    </SectionContainer3>
  );
};

export default SectionType3;
