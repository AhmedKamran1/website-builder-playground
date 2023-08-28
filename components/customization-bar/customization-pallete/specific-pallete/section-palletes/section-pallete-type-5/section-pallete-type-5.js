import React, { useEffect, useState } from "react";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridButton from "../common-section-palletes/SectionGridButton";
import { gridTextItem } from "@/helpers/pre-defined-components-styles/section-styles";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import DeleteItem from "../../../common-palletes/DeleteItem";
import { Divider } from "@mui/material";
import AddItem from "../../../common-palletes/AddItem";
import SectionCardStyles from "../common-section-palletes/SectionCardStyles";
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionGridPrice from "../common-section-palletes/SectionGridPrice";
import SectionPricingStyles from "../common-section-palletes/SectionPricingStyles";

const SectionPallete5 = ({
  cardStyles,
  buttonStyles,
  pricingStyles,
  debounceSectionCardStylesActions,
  debounceSectionButtonStylesActions,
  debounceSectionPricingStylesActions,
  imageGridFunctionalities,
  dispatchGridImageActions,
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
        itemType={gridTextItem}
        addItem={
          SectionEventTypesEnum.sectionGridImageFunctionalities.ADDGRIDITEM
        }
      >
        Add Item
      </AddItem>
    </>
  );
};

export default SectionPallete5;
