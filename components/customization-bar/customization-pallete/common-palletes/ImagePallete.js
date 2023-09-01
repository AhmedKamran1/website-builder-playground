import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box, Slider } from "@mui/material";
import {
  borderRadiusMaxRange,
  borderRadiusRange,
} from "@/helpers/slider-values/slider-values";

const ImagePallete = ({
  imageFunctionalitiesState,
  dispatchImageFunctionalities,
  changeImageRedirectLink,
  changeImageAltText,
}) => {
  return (
    <>
      <br />
      <span>Image Redirect Link</span>
      <input
        type="text"
        value={imageFunctionalitiesState.imageRedirectLink}
        onChange={(event) =>
          dispatchImageFunctionalities({
            type: changeImageRedirectLink,
            payload: event.target.value,
          })
        }
      />
      <br />
      <span>Image Alt text</span>
      <input
        type="text"
        value={imageFunctionalitiesState.imageAltText}
        onChange={(event) =>
          dispatchImageFunctionalities({
            type: changeImageAltText,
            payload: event.target.value,
          })
        }
      />
    </>
  );
};

export default ImagePallete;
