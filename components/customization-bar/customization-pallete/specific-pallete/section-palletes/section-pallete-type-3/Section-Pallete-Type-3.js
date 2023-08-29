import React, { useEffect, useState } from "react";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import { Box, Checkbox, Divider, Slider } from "@mui/material";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridImage from "../common-section-palletes/SectionGridImage";
import DeleteItem from "../../../common-palletes/DeleteItem";
import { gridImageItem } from "@/helpers/pre-defined-components-styles/section-styles";
import {
  borderRadiusMaxRange,
  borderRadiusRange,
} from "@/helpers/slider-values/slider-values";
import AddItem from "../../../common-palletes/AddItem";
import ButtonPallete from "../../../common-palletes/ButtonPallete";
import SectionButton from "../common-section-palletes/SectionButton";

const SectionPallete3 = ({
  gridItemsFunctionalities,
  buttonFunctionalities,
  buttonStyles,
  imageStyles,
  dispatchButton,
  dispatchGridItems,
  dispatchImageStyles,
  debounceButtonStyles,
}) => {
  return (
    <>
      <div>
        <strong>Show Button</strong>
        <Checkbox
          checked={buttonFunctionalities.showButton}
          onChange={() =>
            dispatchButton({
              type: SectionEventTypesEnum.sectionButtonFunctionalities
                .CHANGEBUTTONVISIBILITY,
            })
          }
        />
      </div>
      {buttonFunctionalities.showButton && (
        <>
          <ButtonPallete
            state={buttonStyles}
            dispatch={debounceButtonStyles}
          />
          <SectionButton
            state={buttonFunctionalities}
            dispatch={dispatchButton}
          />
        </>
      )}
      <Box sx={{ width: "200px" }}>
        <Slider
          value={imageStyles.borderRadius}
          marks={borderRadiusRange}
          max={borderRadiusMaxRange}
          onChange={(event) =>
            dispatchImageStyles({
              type: SectionEventTypesEnum.imageStyles.CHANGEBORDERRADIUS,
              payload: event.target.value,
            })
          }
        />
      </Box>
      {gridItemsFunctionalities.map((gridItem, gridIndex) => (
        <React.Fragment key={gridIndex}>
          <Divider />
          <strong>Grid Number {gridIndex + 1}</strong>
          <DeleteItem
            dispatch={dispatchGridItems}
            index={gridIndex}
            deleteItem={
              SectionEventTypesEnum.sectionGridImageFunctionalities
                .DELETEGRIDITEM
            }
          >
            Delete Item
          </DeleteItem>
          <SectionGridTextArea
            gridItem={gridItem}
            gridIndex={gridIndex}
            dispatchGridImageActions={dispatchGridItems}
          />
          <SectionGridImage
            gridItem={gridItem}
            gridIndex={gridIndex}
            dispatchGridImageActions={dispatchGridItems}
          />
        </React.Fragment>
      ))}
      <Divider />
      <AddItem
        dispatch={dispatchGridItems}
        itemType={gridImageItem}
        addItem={
          SectionEventTypesEnum.sectionGridImageFunctionalities.ADDGRIDITEM
        }
      >
        Add Item
      </AddItem>
    </>
  );
};

export default SectionPallete3;
