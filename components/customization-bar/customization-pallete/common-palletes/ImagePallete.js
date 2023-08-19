import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box, Slider } from "@mui/material";
import {
  borderRadiusMaxRange,
  borderRadiusRange,
} from "@/helpers/slider-values/slider-values";

const ImagePallete = ({
  imageFunctionalitiesState,
  imageStylesState,
  dispatchImageFunctionalities,
  dispatchImageStyles,
  changeImage,
  changeImageRedirectLink,
  changeImageAltText,
  changeImageBorderRadius,
}) => {
  //TITLE AND IMAGE
  const [imageFile, setImageFile] = useState(null);

  const temporaryNavLogoHandler = (event) => {
    setImageFile(event.target.files[0]);
  };

  useEffect(() => {
    if (imageFile) {
      dispatchImageFunctionalities({
        type: changeImage,
        payload: URL.createObjectURL(imageFile),
      });
    }
  }, [imageFile]);

  const uploadNavLogoHandler = async (event) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "zpzzsofa");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dhs1iquvc/image/upload",
      formData
    );
    const { url: navbarLogo } = response.data;
    dispatchImageFunctionalities({
      type: changeImage,
      payload: navbarLogo,
    });
  };

  return (
    <>
      <span>Image</span>
      <input type="file" accept="image/*" onChange={temporaryNavLogoHandler} />
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

      <Box sx={{ width: "200px" }}>
        <Slider
          value={imageStylesState.borderRadius}
          marks={borderRadiusRange}
          max={borderRadiusMaxRange}
          onChange={(event) =>
            dispatchImageStyles({
              type: changeImageBorderRadius,
              payload: event.target.value,
            })
          }
        />
      </Box>
    </>
  );
};

export default ImagePallete;
