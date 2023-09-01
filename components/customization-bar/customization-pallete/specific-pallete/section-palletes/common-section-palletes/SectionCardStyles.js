import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";
import React from "react";
import BgColorPallete from "../../../common-palletes/BgColorPallete";
import { Box, Slider } from "@mui/material";
import {
  borderRadiusMaxRange,
  borderRadiusRange,
} from "@/helpers/slider-values/slider-values";
import BorderRadius from "../../../common-palletes/BorderRadius";

const SectionCardStyles = ({
  cardStyles,
  debounceSectionCardStylesActions,
}) => {
  return (
    <div>
      <strong>Card Color</strong>
      <BgColorPallete
        state={cardStyles}
        dispatch={debounceSectionCardStylesActions}
        changeBackgroundColor={CommonEventTypeEnum.CHANGEBGCOLOR}
      />
      <BorderRadius
        state={cardStyles}
        dispatch={debounceSectionCardStylesActions}
        changeRadius={SectionEventTypesEnum.cardStyles.CHANGEBORDERRADIUS}
      >
        Card Border Radius
      </BorderRadius>
    </div>
  );
};

export default SectionCardStyles;
