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
import BorderRadius from "./BorderRadius";

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
      <BorderRadius
        state={state}
        dispatch={dispatch}
        changeRadius={SectionEventTypesEnum.buttonStyles.CHANGEBORDERRADIUS}
      >
        Button Border Radius
      </BorderRadius>
    </>
  );
};

export default ButtonPallete;
