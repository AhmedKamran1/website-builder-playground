import React, { useEffect, useState } from "react";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridImage from "../common-section-palletes/SectionGridImage";
import SectionGridButton from "../common-section-palletes/SectionGridButton";
import { Divider } from "@mui/material";
import DeleteItem from "../../../common-palletes/DeleteItem";
import AddItem from "../../../common-palletes/AddItem";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import { gridImageWithButtonItem } from "@/helpers/pre-defined-components-styles/section-styles";
import SectionCardStyles from "../common-section-palletes/SectionCardStyles";
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionGridPrice from "../common-section-palletes/SectionGridPrice";
import SectionPricingStyles from "../common-section-palletes/SectionPricingStyles";

const SectionPallete6 = ({
  cardStyles,
  buttonStyles,
  pricingStyles,
  debounceSectionCardStylesActions,
  debounceSectionButtonStylesActions,
  imageGridFunctionalities,
  dispatchGridImageActions,
  debounceSectionPricingStylesActions,
}) => {
  return (
    <>
      <SectionCardStyles
        cardStyles={cardStyles}
        debounceSectionCardStylesActions={debounceSectionCardStylesActions}
      />
      <SectionPricingStyles
        pricingStyles={pricingStyles}
        debounceSectionPricingStylesActions={
          debounceSectionPricingStylesActions
        }
      />
      <CommonButtonPallete
        state={buttonStyles}
        dispatch={debounceSectionButtonStylesActions}
      />
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
          <SectionGridPrice
            gridItem={gridItem}
            gridIndex={gridIndex}
            dispatchGridImageActions={dispatchGridImageActions}
          />
          <SectionGridImage
            gridItem={gridItem}
            gridIndex={gridIndex}
            dispatchGridImageActions={dispatchGridImageActions}
          />
          <SectionGridButton
            gridItem={gridItem}
            gridIndex={gridIndex}
            dispatchGridImageActions={dispatchGridImageActions}
          />
        </React.Fragment>
      ))}
      <Divider />
      <AddItem
        dispatch={dispatchGridImageActions}
        itemType={gridImageWithButtonItem}
        addItem={
          SectionEventTypesEnum.sectionGridImageFunctionalities.ADDGRIDITEM
        }
      >
        Add Item
      </AddItem>
    </>
  );
};

export default SectionPallete6;
