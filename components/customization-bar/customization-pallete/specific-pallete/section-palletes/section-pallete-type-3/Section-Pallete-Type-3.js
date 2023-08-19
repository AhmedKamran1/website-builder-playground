import React, { useEffect, useState } from "react";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import { Box, Slider } from "@mui/material";

const SectionPallete3 = ({ gridItem, gridIndex, dispatchGridImageActions }) => {
  const { textFunctionalities, imageFunctionalities } = gridItem;

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
      {/* GRID TEXT */}
      <div>
        <p>Heading Text</p>
        <textarea
          value={textFunctionalities.headingText}
          onInput={(event) =>
            dispatchGridImageActions({
              type: SectionEventTypesEnum.sectionGridImageFunctionalities
                .CHANGEGRIDHEADINGTEXT,
              payload: {
                gridIndex: gridIndex,
                headingText: event.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <p>Paragraph Text</p>
        <textarea
          value={textFunctionalities.paragraphText}
          onInput={(event) =>
            dispatchGridImageActions({
              type: SectionEventTypesEnum.sectionGridImageFunctionalities
                .CHANGEGRIDPARAGRAPHTEXT,
              payload: {
                gridIndex: gridIndex,
                paragraphText: event.target.value,
              },
            })
          }
        />
      </div>
      {/* GRID IMAGE */}
      <span>Image</span>
      <input type="file" accept="image/*" onChange={imageHandler} />
      <br />
      <span>Image Redirect Link</span>
      <input
        type="text"
        value={imageFunctionalities.imageRedirectLink}
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
        value={imageFunctionalities.imageAltText}
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

export default SectionPallete3;
