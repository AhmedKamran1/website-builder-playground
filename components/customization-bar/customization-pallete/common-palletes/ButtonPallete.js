import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";
import React from "react";
import HoverColorPallete from "./HoverColorPallete";
import BgColorPallete from "./BgColorPallete";
import CollorPallete from "./CollorPallete";
import { Box, Slider } from "@mui/material";
import {
  borderRadiusMaxRange,
  borderRadiusRange,
} from "@/helpers/slider-values/slider-values";

const ButtonPallete = ({ state, dispatch }) => {
  return (
    <>
      <strong>Button Properties</strong>
      <CollorPallete
        state={state}
        dispatch={dispatch}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
      />
      <BgColorPallete
        state={state}
        dispatch={dispatch}
        changeBackgroundColor={CommonEventTypeEnum.CHANGEBGCOLOR}
      />
      {/* <FontPallete
        state={state.extraFunctionalities}
        dispatch={debounceDispatchButtonActions}
        changeFontWeight={
          SectionEventTypesEnum.buttonStyles.CHANGEBUTTONFONTWEIGHT
        }
        changeFontStyle={
          SectionEventTypesEnum.buttonStyles.CHANGEBUTTONFONTSTYLE
        }
        fontPalleteName="buttonStyles"
      /> */}
      <HoverColorPallete
        state={state}
        dispatch={dispatch}
        changeHoverColor={
          SectionEventTypesEnum.buttonStyles.CHANGEBUTTONHOVERCOLOR
        }
      />
      <Box sx={{ width: "200px" }}>
        <Slider
          value={state.borderRadius}
          marks={borderRadiusRange}
          max={borderRadiusMaxRange}
          onChange={(event) =>
            dispatch({
              type: SectionEventTypesEnum.buttonStyles.CHANGEBORDERRADIUS,
              payload: event.target.value,
            })
          }
        />
      </Box>
    </>
  );
};

export default ButtonPallete;
