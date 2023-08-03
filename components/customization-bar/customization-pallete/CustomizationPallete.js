import React, { useCallback, useEffect, useReducer } from "react";

import { component } from "@/helpers/constants/component-types/component-types";
import { commonEventType } from "@/helpers/constants/event-types/event-types";

import * as NavStyles from "../../../styles/customization-bar/BottomBar";

import { useDispatch, useSelector } from "react-redux";
import { componentType, selectedComponentData } from "@/store/ComponentSlice";
import { componentActions } from "@/store/store";

import ButtonPallete from "./specific-pallete/ButtonPallete";
import NavbarPallete from "./specific-pallete/navbar-palletes/NavbarPallete";

import {
  buttonInitialState,
  navbarInitialState,
} from "@/helpers/customization-pallete/initial-reducer-states";
import {
  buttonReducer,
  navReducer,
} from "@/helpers/customization-pallete/reducers";

const BottomBar = () => {
  const selectedComponentType = useSelector(componentType);
  const selectedComponent = useSelector(selectedComponentData);
  const dispatchStore = useDispatch();

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
        colorHex: buttonState.color,
        backgroundColor: buttonState.backgroundColor,
        fontWeight: buttonState.fontWeight,
        fontStyle: buttonState.fontStyle,
        fontFamily: buttonState.fontFamily,
        hoverColor: buttonState.hoverColor,
      };
      extraFunctionalities = {
        redirectLink: buttonState.redirectLink,
        innerText: buttonState.innerText,
      };
    }
    if (selectedComponentType === component.NAVBAR) {
      modifiedStyles = {
        navLinkStyles: navState.styles.navLinkStyles,
        loginButtonStyles: navState.styles.loginButtonStyles,
      };
      extraFunctionalities = {
        title: navState.title,
        logo: navState.logo,
        links: navState.links,
      };
    }
    dispatchStore(
      componentActions.updateComponent({
        modifiedStyles: structuredClone(modifiedStyles),
        extraFunctionalities: structuredClone(extraFunctionalities),
      })
    );
  }, [buttonState, navState]);

  useEffect(() => {
    if (selectedComponent?.id) {
      if (selectedComponentType === component.BUTTON) {
        dispatchButtonActions({
          type: commonEventType.SETINITIALSTATE,
          payload: {
            fontWeight: selectedComponent.styles.fontWeight,
            fontStyle: selectedComponent.styles.fontStyle,
            fontFamily: selectedComponent.styles.fontFamily,
            hoverColor: selectedComponent.styles.hoverColor,
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
            styles: selectedComponent.styles,
            links: selectedComponent.extraFunctionalities.links,
          },
        });
      }
    }
  }, [selectedComponent?.id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateStyleHandler();
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [navState, buttonState]);

  return (
    <NavStyles.BottomBarGridContainer sx={{ overflowY: "scroll" }} item xs={12}>
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
