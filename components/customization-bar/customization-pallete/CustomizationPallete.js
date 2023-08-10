import React, { useCallback, useEffect, useReducer } from "react";

import { component } from "@/helpers/constants/component-types/component-types";
import { commonEventType } from "@/helpers/constants/event-types/event-types";

import * as NavStyles from "../../../styles/customization-bar/BottomBar";

import { useDispatch, useSelector } from "react-redux";
import {
  componentId,
  componentType,
  selectedComponentData,
} from "@/store/ComponentSlice";
import { componentActions } from "@/store/store";

import ButtonPallete from "./specific-pallete/ButtonPallete";
import NavbarPallete from "./specific-pallete/navbar-palletes/NavbarPallete";

import { buttonInitialState } from "@/helpers/customization-pallete/initial-reducer-states/initial-button-state";
import { navbarInitialState } from "@/helpers/customization-pallete/initial-reducer-states/initial-navbar-state";
import { buttonReducer } from "@/helpers/customization-pallete/reducers/button-reducer";
import { navReducer } from "@/helpers/customization-pallete/reducers/navbar-reducer";

const BottomBar = () => {
  const selectedComponent = useSelector(selectedComponentData);
  const selectedComponentType = useSelector(componentType);
  const selectedComponentId = useSelector(componentId);
  const dispatchStore = useDispatch();

  const [navState, dispatchNavActions] = useReducer(
    navReducer,
    navbarInitialState
  );
  const [buttonState, dispatchButtonActions] = useReducer(
    buttonReducer,
    buttonInitialState
  );

  const setStateHandler = useCallback(
    (dispatchStateAction) => {
      dispatchStateAction({
        type: commonEventType.SETINITIALSTATE,
        payload: selectedComponent,
      });
    },
    [selectedComponent]
  );

  const storeDispatchHandler = useCallback((stateType) => {
    dispatchStore(
      componentActions.updateComponent({
        modifiedStyles: structuredClone(stateType.styles),
        extraFunctionalities: structuredClone(stateType.extraFunctionalities),
      })
    );
  }, []);

  const updateStyleHandler = useCallback(() => {
    switch (selectedComponentType) {
      case component.BUTTON:
        storeDispatchHandler(buttonState);
        break;
      case component.NAVBAR:
        storeDispatchHandler(navState);
        break;
      default:
        break;
    }
  }, [selectedComponentType, buttonState, navState]);

  useEffect(() => {
    if (selectedComponentId) {
      switch (selectedComponentType) {
        case component.BUTTON:
          setStateHandler(dispatchButtonActions);
          break;
        case component.NAVBAR:
          setStateHandler(dispatchNavActions);
          break;
        default:
          break;
      }
    }
  }, [selectedComponentId, selectedComponentType]);

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
        <ButtonPallete
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
