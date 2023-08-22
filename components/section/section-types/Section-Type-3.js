import React from "react";

import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { Avatar, Box, Container, Grid } from "@mui/material";
import {
  GridItem3,
  SectionContainer3,
} from "@/styles/pre-defined-components/section/section-styled-types/section-type-3-styles";
import { formatText } from "@/util/format-text";

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
                <GridItem3>
                  <Box sx={{ height: "200px", width: "100%" }}>
                    <Avatar
                      src={imageFunctionalities.image}
                      sx={{
                        height: "100%",
                        width: "100%",
                        borderRadius: `${imageStyles.borderRadius}%`,
                      }}
                    />
                  </Box>
                  <Box textAlign={headingStyles.textAlign}>
                    <ResponsiveText
                      variant="subHeader"
                      colorHex={headingStyles.colorHex}
                    >
                      {formatText(textFunctionalities.headingText)}
                    </ResponsiveText>
                  </Box>
                  <Box textAlign={paragraphStyles.textAlign}>
                    <ResponsiveText
                      variant="mainBody"
                      colorHex={paragraphStyles.colorHex}
                    >
                      {formatText(textFunctionalities.paragraphText)}
                    </ResponsiveText>
                  </Box>
                </GridItem3>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </SectionContainer3>
  );
};

export default SectionType3;
