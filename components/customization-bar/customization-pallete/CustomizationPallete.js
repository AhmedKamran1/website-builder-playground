import { useCallback, useEffect, useReducer, useState } from "react";

import { component } from "@/util/component-type";
import { eventType } from "@/util/event-types";

import * as NavStyles from "../../../styles/navbar/BottomBar";

import { useDispatch, useSelector } from "react-redux";
import { componentType, selectedComponentData } from "@/store/ComponentSlice";
import { componentActions } from "@/store/store";

import CommonPallete from "./common-pallete/CommonPallete";
import ButtonPallete from "./specific-pallete/ButtonPallete";

const initialState = {
  color: "#FFFFFF",
  // height: "",
  backgroundColor: "#FFFFFF",
  // heightUnit: "px",
  redirectLink: "",
  fontWeight: "",
  fontStyle: "",
  fontFamily: "",
  hoverColor: "#FFFFFF",
  innerText: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case eventType.CHANGECOLOR:
      return { ...state, color: action.payload };
    // case eventType.CHANGEHEIGHT:
    //   return { ...state, height: action.payload };
    case eventType.CHANGEBGCOLOR:
      return { ...state, backgroundColor: action.payload };
    // case eventType.CHANGEHEIGHTUNIT:
    //   return { ...state, heightUnit: action.payload };
    case eventType.CHANGEREDIRECTLINK:
      return { ...state, redirectLink: action.payload };
    case eventType.CHANGEFONTWEIGHT:
      return {
        ...state,
        fontWeight: action.payload,
        fontStyle: initialState.fontStyle,
      };
    case eventType.CHANGEFONTSTYLE:
      return {
        ...state,
        fontStyle: action.payload,
        fontWeight: initialState.fontWeight,
      };

    case eventType.CHANGEFONTFAMILY:
      return {
        ...state,
        fontFamily: action.payload,
      };
    case eventType.CHANGEHOVERCOLOR:
      return { ...state, hoverColor: action.payload };
    case eventType.CHANGEINNERTEXT:
      return { ...state, innerText: action.payload };

    case eventType.SETINITIALSTATE:
      return {
        ...state,
        color: action.payload.color,
        backgroundColor: action.payload.bgColor,
        fontWeight: action.payload.fontWeight,
        fontStyle: action.payload.fontStyle,
        fontFamily: action.payload.fontFamily,
        hoverColor: action.payload.hoverColor,
        redirectLink: action.payload.redirectLink,
        innerText: action.payload.innerText,
        disableButton: action.payload.disableButton,
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateStyleHandler = useCallback(() => {
    const modifiedStyles = {
      colorhex: state.color,
      backgroundcolor: state.backgroundColor,
      fontweight: state.fontWeight,
      fontstyle: state.fontStyle,
      fontfamily: state.fontFamily,
      hovercolor: state.hoverColor,
    };
    const extraFunctionalities = {
      redirectLink: state.redirectLink,
      innerText: state.innerText,
    };
    dispatchStore(
      componentActions.updateComponent({ modifiedStyles, extraFunctionalities })
    );
  }, [state]);

  useEffect(() => {
    const fetchFontsData = async () => {
      const response = await fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAsxy6OklUuxBjHnNlcdkhfvDEBsm3IEes"
      );
      const data = await response.json();
      setFontTypes(data.items.slice(0, 300));
    };
    fetchFontsData();
  }, []);

  const fonts = fontTypes.map((font) => ({ font: font.family }));

  useEffect(() => {
    if (selectedComponent?.id) {
      dispatch({
        type: eventType.SETINITIALSTATE,
        payload: {
          color: selectedComponent.styles.colorhex,
          bgColor: selectedComponent.styles.backgroundcolor,
          fontWeight: selectedComponent.styles.fontweight,
          fontStyle: selectedComponent.styles.fontstyle,
          fontFamily: selectedComponent.styles.fontfamily,
          hoverColor: selectedComponent.styles.hovercolor,
          redirectLink:
            selectedComponent.extraFunctionalities.redirectLink ?? "",
          innerText:
            selectedComponent.extraFunctionalities.innerText ?? "Button",
        },
      });
    }
  }, [selectedComponent?.id]);

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
  }, [state]);

  return (
    <NavStyles.BottomBarGridContainer
      item
      xs={12}
      onChange={() => setIsUpdating(true)}
    >
      {selectedComponent?.id && (
        <CommonPallete state={state} dispatch={dispatch} />
      )}
      {selectedComponentType === component.button && (
        <ButtonPallete fonts={fonts} state={state} dispatch={dispatch} />
      )}
    </NavStyles.BottomBarGridContainer>
  );
};

export default BottomBar;
