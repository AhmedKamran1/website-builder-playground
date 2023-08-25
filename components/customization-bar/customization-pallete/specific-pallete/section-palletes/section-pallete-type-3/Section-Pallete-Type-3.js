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
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionButton from "../common-section-palletes/SectionButton";

const SectionPallete3 = ({
  buttonStyles,
  imageStyles,
  buttonFunctionalities,
  imageGridFunctionalities,
  dispatchGridImageActions,
  dispatchButtonFunctionalities,
  dispatchSectionImageStylesActions,
  debounceSectionButtonStylesActions,
}) => {
  return (
    <>
      <div>
        <strong>Show Button</strong>
        <Checkbox
          checked={buttonFunctionalities.showButton}
          onChange={() =>
            dispatchButtonFunctionalities({
              type: SectionEventTypesEnum.sectionButtonFunctionalities
                .CHANGEBUTTONVISIBILITY,
            })
          }
        />
      </div>
      {buttonFunctionalities.showButton && (
        <>
          <CommonButtonPallete
            state={buttonStyles}
            dispatch={debounceSectionButtonStylesActions}
          />
          <SectionButton
            state={buttonFunctionalities}
            dispatch={dispatchButtonFunctionalities}
          />
        </>
      )}
      <Box sx={{ width: "200px" }}>
        <Slider
          value={imageStyles.borderRadius}
          marks={borderRadiusRange}
          max={borderRadiusMaxRange}
          onChange={(event) =>
            dispatchSectionImageStylesActions({
              type: SectionEventTypesEnum.imageStyles.CHANGEBORDERRADIUS,
              payload: event.target.value,
            })
          }
        />
      </Box>
      {imageGridFunctionalities.map((gridItem, gridIndex) => (
        <React.Fragment key={gridIndex}>
          <Divider />
          <strong>Grid Number {gridIndex + 1}</strong>
          <DeleteItem
            dispatch={dispatchGridImageActions}
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
            dispatchGridImageActions={dispatchGridImageActions}
          />
          <SectionGridImage
            gridItem={gridItem}
            gridIndex={gridIndex}
            dispatchGridImageActions={dispatchGridImageActions}
          />
        </React.Fragment>
      ))}
      <Divider />
      <AddItem
        dispatch={dispatchGridImageActions}
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
