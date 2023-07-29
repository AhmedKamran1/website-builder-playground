import { useCallback, useEffect, useReducer, useState } from "react";

import { component } from "@/helpers/constants/component-types/component-types";
import {
  buttonEventType,
  commonEventType,
  navEventTypes,
} from "@/helpers/constants/event-types/event-types";

import * as NavStyles from "../../../styles/customization-bar/BottomBar";

import { useDispatch, useSelector } from "react-redux";
import { componentType, selectedComponentData } from "@/store/ComponentSlice";
import { componentActions } from "@/store/store";

import CommonPallete from "./common-pallete/CommonPallete";
import ButtonPallete from "./specific-pallete/ButtonPallete";

import NavbarPallete from "./specific-pallete/navbar-palletes/NavbarPallete";

import {
  buttonInitialState,
  commonInitialState,
  navbarInitialState,
} from "@/helpers/customization-pallete/initial-reducer-states";

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

    case commonEventType.SETINITIALSTATE:
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
  let linkIndex,
    navLink,
    dropDownIndex,
    dropDownInnerText,
    dropDownRedirectLink,
    dropDownLink,
    innerText,
    redirectLink,
    updatedLinks;

  updatedLinks = structuredClone(state.links);

  switch (action.type) {
    case navEventTypes.ADDNAVLINK:
      ({ navLink } = action.payload);

      updatedLinks.push(navLink);
      return {
        ...state,
        links: updatedLinks,
      };

    case navEventTypes.DELETENAVLINK:
      ({ linkIndex } = action.payload);
      updatedLinks.splice(linkIndex, 1);
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVTITLE:
      return { ...state, title: action.payload };

    case navEventTypes.CHANGENAVLOGO:
      return { ...state, logo: action.payload };

    case navEventTypes.CHANGENAVINNERTEXT:
      ({ linkIndex, innerText } = action.payload);
      updatedLinks[linkIndex].innerText = innerText;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVREDIRECTLINK:
      ({ linkIndex, redirectLink } = action.payload);
      updatedLinks[linkIndex].redirectLink = redirectLink;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGEDROPDOWNVISIBILITY:
      ({ linkIndex } = action.payload);
      updatedLinks[linkIndex].showDropDown =
        !updatedLinks[linkIndex].showDropDown;
      return { ...state, links: updatedLinks };

    case navEventTypes.ADDROPDOWNLINK:
      ({ linkIndex, dropDownLink } = action.payload);
      updatedLinks[linkIndex].dropDown.push(dropDownLink);
      return { ...state, links: updatedLinks };

    case navEventTypes.DELETEDROPDOWNLINK:
      ({ linkIndex, dropDownIndex } = action.payload);
      updatedLinks[linkIndex].dropDown.splice(dropDownIndex, 1);
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVDROPDOWNINNERTEXT:
      ({ linkIndex, dropDownIndex, dropDownInnerText } = action.payload);
      updatedLinks[linkIndex].dropDown[dropDownIndex].dropDownInnerText =
        dropDownInnerText;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVDROPDOWNLINK:
      ({ linkIndex, dropDownIndex, dropDownRedirectLink } = action.payload);
      updatedLinks[linkIndex].dropDown[dropDownIndex].dropDownRedirectLink =
        dropDownRedirectLink;
      return { ...state, links: updatedLinks };

    case commonEventType.SETINITIALSTATE:
      return {
        ...state,
        title: action.payload.title,
        logo: action.payload.logo,
        links: action.payload.links,
      };

    default:
      return state;
  }
};

const BottomBar = () => {
  const selectedComponentType = useSelector(componentType);
  const selectedComponent = useSelector(selectedComponentData);
  const dispatchStore = useDispatch();

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
        title: navState.title,
        logo: navState.logo,
        links: navState.links,
      };
    }
    dispatchStore(
      componentActions.updateComponent({
        modifiedStyles,
        extraFunctionalities: structuredClone(extraFunctionalities),
      })
    );
  }, [commonState, buttonState, navState]);

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
          type: commonEventType.SETINITIALSTATE,
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
          type: commonEventType.SETINITIALSTATE,
          payload: {
            title: selectedComponent.extraFunctionalities.title,
            logo: selectedComponent.extraFunctionalities.logo,
            links: selectedComponent.extraFunctionalities.links,
          },
        });
      }
    }
  }, [selectedComponent?.id, selectedComponent?.navId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateStyleHandler();
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [commonState, navState, buttonState]);

  return (
    <NavStyles.BottomBarGridContainer sx={{ overflowY: "scroll" }} item xs={12}>
      {selectedComponent?.id && (
        <CommonPallete state={commonState} dispatch={dispatchCommonActions} />
      )}
      {selectedComponentType === component.BUTTON && (
        <ButtonPallete state={buttonState} dispatch={dispatchButtonActions} />
      )}
      {selectedComponentType === component.NAVBAR && (
        <NavbarPallete state={navState} dispatch={dispatchNavActions} />
      )}
    </NavStyles.BottomBarGridContainer>
  );
};

export default BottomBar;
