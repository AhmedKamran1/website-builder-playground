import { useCallback, useEffect, useReducer, useState } from "react";

import { component } from "@/util/component-type";
import {
  buttonEventType,
  commonEventType,
  navEventTypes,
} from "@/util/event-types";

import * as NavStyles from "../../../styles/customization-bar/BottomBar";

import { useDispatch, useSelector } from "react-redux";
import { componentType, selectedComponentData } from "@/store/ComponentSlice";
import { componentActions } from "@/store/store";

import CommonPallete from "./common-pallete/CommonPallete";
import ButtonPallete from "./specific-pallete/ButtonPallete";

import GoogleFontLoader from "react-google-font-loader";
import NavbarPallete from "./specific-pallete/navbar-palletes/NavbarPallete";

const commonInitialState = {
  color: "#FFFFFF",
  backgroundColor: "#FFFFFF",
};

const buttonInitialState = {
  redirectLink: "",
  fontWeight: "",
  fontStyle: "",
  fontFamily: "",
  hoverColor: "#FFFFFF",
  innerText: "",
};

const navbarInitialState = {
  redirectLink1: "",
  redirectLink2: "",
  redirectLink3: "",
  redirectLink4: "",
  redirectLink5: "",
  innerText1: "",
  innerText2: "",
  innerText3: "",
  innerText4: "",
  innerText5: "",
};

const commonReducer = (state, action) => {
  switch (action.type) {
    case commonEventType.CHANGECOLOR:
      return { ...state, color: action.payload };
    case commonEventType.CHANGEBGCOLOR:
      return { ...state, backgroundColor: action.payload };
    case commonEventType.SETINITIALSTATE:
      return {
        ...state,
        color: action.payload.color,
        backgroundColor: action.payload.bgColor,
      };
  }
};

const buttonReducer = (state, action) => {
  switch (action.type) {
    case buttonEventType.CHANGEREDIRECTLINK:
      return { ...state, redirectLink: action.payload };
    case buttonEventType.CHANGEFONTWEIGHT:
      return {
        ...state,
        fontWeight: action.payload,
        fontStyle: buttonInitialState.fontStyle,
      };
    case buttonEventType.CHANGEFONTSTYLE:
      return {
        ...state,
        fontStyle: action.payload,
        fontWeight: buttonInitialState.fontWeight,
      };

    case buttonEventType.CHANGEFONTFAMILY:
      return {
        ...state,
        fontFamily: action.payload,
      };
    case buttonEventType.CHANGEHOVERCOLOR:
      return { ...state, hoverColor: action.payload };
    case buttonEventType.CHANGEINNERTEXT:
      return { ...state, innerText: action.payload };

    case buttonEventType.SETINITIALSTATE:
      return {
        ...state,
        fontWeight: action.payload.fontWeight,
        fontStyle: action.payload.fontStyle,
        fontFamily: action.payload.fontFamily,
        hoverColor: action.payload.hoverColor,
        redirectLink: action.payload.redirectLink,
        innerText: action.payload.innerText,
      };
    default:
      return state;
  }
};

const navReducer = (state, action) => {
  switch (action.type) {
    case navEventTypes.CHANGEREDIRECTLINK1:
      return { ...state, redirectLink1: action.payload };
    case navEventTypes.CHANGEREDIRECTLINK2:
      return { ...state, redirectLink2: action.payload };
    case navEventTypes.CHANGEREDIRECTLINK3:
      return { ...state, redirectLink3: action.payload };
    case navEventTypes.CHANGEREDIRECTLINK4:
      return { ...state, redirectLink4: action.payload };
    case navEventTypes.CHANGEREDIRECTLINK5:
      return { ...state, redirectLink5: action.payload };
    case navEventTypes.CHANGEINNERTEXT1:
      return { ...state, innerText1: action.payload };
    case navEventTypes.CHANGEINNERTEXT2:
      return { ...state, innerText2: action.payload };
    case navEventTypes.CHANGEINNERTEXT3:
      return { ...state, innerText3: action.payload };
    case navEventTypes.CHANGEINNERTEXT4:
      return { ...state, innerText4: action.payload };
    case navEventTypes.CHANGEINNERTEXT5:
      return { ...state, innerText5: action.payload };
    case navEventTypes.SETINITIALNAVSTATE:
      return {
        ...state,
        redirectLink1: action.payload.redirectLink1,
        redirectLink2: action.payload.redirectLink2,
        redirectLink3: action.payload.redirectLink3,
        redirectLink4: action.payload.redirectLink4,
        redirectLink5: action.payload.redirectLink5,
        innerText1: action.payload.innerText1,
        innerText2: action.payload.innerText2,
        innerText3: action.payload.innerText3,
        innerText4: action.payload.innerText4,
        innerText5: action.payload.innerText5,
      };
    default:
      return state;
  }
};

const BottomBar = () => {
  const selectedComponentType = useSelector(componentType);
  const selectedComponent = useSelector(selectedComponentData);
  const dispatchStore = useDispatch();

  const [isUpdating, setIsUpdating] = useState(false);
  const [fontTypes, setFontTypes] = useState([]);
  const [commonState, dispatchCommonActions] = useReducer(
    commonReducer,
    commonInitialState
  );
  const [navState, dispatchNavActions] = useReducer(
    navReducer,
    navbarInitialState
  );
  const [buttonState, dispatchButtonActions] = useReducer(
    buttonReducer,
    buttonInitialState
  );

  const updateStyleHandler = useCallback(() => {
    let modifiedStyles;
    let extraFunctionalities;
    if (selectedComponentType === component.BUTTON) {
      modifiedStyles = {
        colorhex: commonState.color,
        backgroundcolor: commonState.backgroundColor,
        fontweight: buttonState.fontWeight,
        fontstyle: buttonState.fontStyle,
        fontfamily: buttonState.fontFamily,
        hovercolor: buttonState.hoverColor,
      };
      extraFunctionalities = {
        redirectLink: buttonState.redirectLink,
        innerText: buttonState.innerText,
      };
    }
    if (selectedComponentType === component.NAVBAR) {
      modifiedStyles = {
        colorhex: commonState.color,
        backgroundcolor: commonState.backgroundColor,
      };
      extraFunctionalities = {
        redirectLink1: navState.redirectLink1,
        redirectLink2: navState.redirectLink2,
        redirectLink3: navState.redirectLink3,
        redirectLink4: navState.redirectLink4,
        redirectLink5: navState.redirectLink5,
        innerText1: navState.innerText1,
        innerText2: navState.innerText2,
        innerText3: navState.innerText3,
        innerText4: navState.innerText4,
        innerText5: navState.innerText5,
      };
    }
    dispatchStore(
      componentActions.updateComponent({ modifiedStyles, extraFunctionalities })
    );
  }, [commonState, buttonState, navState]);

  useEffect(() => {
    const fetchFontsData = async () => {
      const response = await fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAsxy6OklUuxBjHnNlcdkhfvDEBsm3IEes"
      );
      const data = await response.json();
      setFontTypes(data.items.slice(0, 30));
    };
    fetchFontsData();
  }, []);

  const fonts = fontTypes.map((font) => ({ font: font.family }));

  useEffect(() => {
    if (selectedComponent?.id) {
      dispatchCommonActions({
        type: commonEventType.SETINITIALSTATE,
        payload: {
          color: selectedComponent.styles.colorhex,
          bgColor: selectedComponent.styles.backgroundcolor,
        },
      });
      if (selectedComponentType === component.BUTTON) {
        dispatchButtonActions({
          type: buttonEventType.SETINITIALSTATE,
          payload: {
            fontWeight: selectedComponent.styles.fontweight,
            fontStyle: selectedComponent.styles.fontstyle,
            fontFamily: selectedComponent.styles.fontfamily,
            hoverColor: selectedComponent.styles.hovercolor,
            redirectLink: selectedComponent.extraFunctionalities.redirectLink,
            innerText: selectedComponent.extraFunctionalities.innerText,
          },
        });
      } else if (selectedComponentType === component.NAVBAR) {
        dispatchNavActions({
          type: navEventTypes.SETINITIALNAVSTATE,
          payload: {
            redirectLink1: selectedComponent.extraFunctionalities.redirectLink1,
            redirectLink2: selectedComponent.extraFunctionalities.redirectLink2,
            redirectLink3: selectedComponent.extraFunctionalities.redirectLink3,
            redirectLink4: selectedComponent.extraFunctionalities.redirectLink4,
            redirectLink5: selectedComponent.extraFunctionalities.redirectLink5,
            innerText1: selectedComponent.extraFunctionalities.innerText1,
            innerText2: selectedComponent.extraFunctionalities.innerText2,
            innerText3: selectedComponent.extraFunctionalities.innerText3,
            innerText4: selectedComponent.extraFunctionalities.innerText4,
            innerText5: selectedComponent.extraFunctionalities.innerText5,
          },
        });
      }
    }
  }, [selectedComponent?.id, selectedComponent?.navId]);

  console.log(selectedComponent?.navId)

  useEffect(() => {
    if (isUpdating) {
      const timeout = setTimeout(() => {
        updateStyleHandler();
      }, 200);

      setIsUpdating(false);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [commonState, navState, buttonState]);

  return (
    <NavStyles.BottomBarGridContainer
      item
      xs={12}
      onChange={() => setIsUpdating(true)}
    >
      {fonts.length && <GoogleFontLoader fonts={fonts} />}
      {selectedComponent?.id && (
        <CommonPallete state={commonState} dispatch={dispatchCommonActions} />
      )}
      {selectedComponentType === component.BUTTON && (
        <ButtonPallete
          fonts={fonts}
          state={buttonState}
          dispatch={dispatchButtonActions}
        />
      )}
      {selectedComponentType === component.NAVBAR && (
        <NavbarPallete state={navState} dispatch={dispatchNavActions} />
      )}
    </NavStyles.BottomBarGridContainer>
  );
};

export default BottomBar;
