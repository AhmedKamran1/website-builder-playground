import React from "react";

import { ResponsiveText } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { Avatar, Box, Container, Grid } from "@mui/material";

const SectionType3 = ({
  extraFunctionalities,
  isfocused,
  componentSelectionHandler,
  styles,
}) => {
  const { blockStyles, headingStyles, paragraphStyles, imageStyles } = styles;
  const { gridItems } = extraFunctionalities;

  return (
    <Container maxWidth="false" sx={{ border: "1px solid red" }}>
      <Container maxWidth="md">
        <Grid container spacing={2} columns={{ xs: 1, sm: 6, md: 12 }}>
          {gridItems.map(
            ({ textFunctionalities, imageFunctionalities }, index) => (
              <Grid item xs={1} sm={3} md={4} key={index}>
                <Box
                  sx={{
                    minHeight: "250px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Box sx={{ height: "200px", width: "100%" }}>
                    <Avatar
                      sx={{ height: "100%", width: "100%", borderRadius: "2%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <ResponsiveText variant="header">
                      This is heading
                    </ResponsiveText>
                  </Box>
                  <Box textAlign="center">
                    <ResponsiveText variant="body">
                      This is paragraphThis is paragraphThis is paragraphThis is
                      paragraphThis is paragraphThis is paragraphThis is
                      paragraphThis is paragraphThis is paragraphThis is
                    </ResponsiveText>
                  </Box>
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Container>
  );
};

export default SectionType3;
