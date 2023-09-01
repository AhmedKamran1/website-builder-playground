import React from "react";

import { Box, Slider } from "@mui/material";
import {
  borderRadiusMaxRange,
  borderRadiusRange,
} from "@/helpers/slider-values/slider-values";

const BorderRadius = ({ state, dispatch, changeRadius, children }) => {
  return (
    <Box sx={{ width: "200px" }}>
      <p>{children}</p>
      <Slider
        value={state.borderRadius}
        marks={borderRadiusRange}
        max={borderRadiusMaxRange}
        onChange={(event) =>
          dispatch({
            type: changeRadius,
            payload: event.target.value,
          })
        }
      />
    </Box>
  );
};

export default BorderRadius;
