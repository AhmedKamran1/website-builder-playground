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
      <Box sx={{ width: "200px" }}>
        <Slider
          value={cardStyles.borderRadius}
          marks={borderRadiusRange}
          max={borderRadiusMaxRange}
          onChange={(event) =>
            debounceSectionCardStylesActions({
              type: SectionEventTypesEnum.cardStyles.CHANGEBORDERRADIUS,
              payload: event.target.value,
            })
          }
        />
      </Box>
    </div>
  );
};

export default SectionCardStyles;
