import { CommonEventTypeEnum } from "@/helpers/constants/event-types/event-types";
import React from "react";
import CollorPallete from "../../../common-palletes/CollorPallete";

const SectionPricingStyles = ({
  pricingStyles,
  debounceSectionPricingStylesActions,
}) => {
  return (
    <div>
      <strong>Pricing Color</strong>
      <CollorPallete
        state={pricingStyles}
        dispatch={debounceSectionPricingStylesActions}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
      />
    </div>
  );
};

export default SectionPricingStyles;
