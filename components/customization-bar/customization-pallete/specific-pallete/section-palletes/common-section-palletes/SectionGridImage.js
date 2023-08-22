import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import React, { useEffect, useState } from "react";

const SectionGridImage = ({
  gridItem,
  dispatchGridImageActions,
  gridIndex,
}) => {
  const { imageFunctionalities } = gridItem;

  const [imageFile, setImageFile] = useState(null);

  const imageHandler = (event) => {
    setImageFile(event.target.files[0]);
  };

  useEffect(() => {
    if (imageFile) {
      dispatchGridImageActions({
        type: SectionEventTypesEnum.sectionGridImageFunctionalities
          .CHANGEGRIDIMAGE,
        payload: {
          gridIndex: gridIndex,
          image: URL.createObjectURL(imageFile),
        },
      });
    }
  }, [imageFile]);
  return (
    <>
      {/* GRID IMAGE */}
      <span>Image</span>
      <input type="file" accept="image/*" onChange={imageHandler} />
      <br />
      <span>Image Redirect Link</span>
      <input
        type="text"
        value={imageFunctionalities?.imageRedirectLink ?? ""}
        onChange={(event) =>
          dispatchGridImageActions({
            type: SectionEventTypesEnum.sectionGridImageFunctionalities
              .CHANGEGRIDIMAGEREDIRECTLINK,
            payload: {
              gridIndex: gridIndex,
              imageRedirectLink: event.target.value,
            },
          })
        }
      />
      <br />
      <span>Image Alt text</span>
      <input
        type="text"
        value={imageFunctionalities?.imageAltText ?? ""}
        onChange={(event) =>
          dispatchGridImageActions({
            type: SectionEventTypesEnum.sectionGridImageFunctionalities
              .CHANGEGRIDIMAGEALTTEXT,
            payload: {
              gridIndex: gridIndex,
              imageAltText: event.target.value,
            },
          })
        }
      />
    </>
  );
};

export default SectionGridImage;
