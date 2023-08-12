import React, { useCallback, useEffect, useReducer } from "react";

import { ComponentEnum } from "@/helpers/constants/component-types/component-types";
import { CommonEventTypeEnum } from "@/helpers/constants/event-types/event-types";

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
import {
  navbarInitialFunctionalitiesState,
  navbarInitialLinkStylesState,
  navbarInitialLoginButtonStylesState,
} from "@/helpers/customization-pallete/initial-reducer-states/initial-navbar-state";
import { buttonReducer } from "@/helpers/customization-pallete/reducers/button-reducer";
import {
  navFunctionalitiesReducer,
  navLoginButtonStylesReducer,
  navStylesReducer,
} from "@/helpers/customization-pallete/reducers/navbar-reducer";

const BottomBar = () => {
  const selectedComponent = useSelector(selectedComponentData);
  const selectedComponentType = useSelector(componentType);
  const selectedComponentId = useSelector(componentId);
  const dispatchStore = useDispatch();

  const [navFunctionalitiesState, dispatchNavFunctionalitiesActions] =
    useReducer(navFunctionalitiesReducer, navbarInitialFunctionalitiesState);
  const [navStylesState, dispatchNavStylesActions] = useReducer(
    navStylesReducer,
    navbarInitialLinkStylesState
  );
  const [navLoginButtonStylesState, dispatchNavLoginButtonStylesActions] =
    useReducer(
      navLoginButtonStylesReducer,
      navbarInitialLoginButtonStylesState
    );
  const [buttonState, dispatchButtonActions] = useReducer(
    buttonReducer,
    buttonInitialState
  );

  const setStateHandler = useCallback(
    (dispatchStateAction) => {
      dispatchStateAction({
        type: CommonEventTypeEnum.SETINITIALSTATE,
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
    let navState;
    switch (selectedComponentType) {
      case ComponentEnum.BUTTON:
        storeDispatchHandler(buttonState);
        break;
      case ComponentEnum.NAVBAR:
        navState = {
          styles: {
            navLinkStyles: navStylesState.styles.navLinkStyles,
            loginButtonStyles:
              navLoginButtonStylesState.styles.loginButtonStyles,
          },
          extraFunctionalities: navFunctionalitiesState.extraFunctionalities,
        };
        storeDispatchHandler(navState);
        break;
      default:
        break;
    }
  }, [
    selectedComponentType,
    buttonState,
    navStylesState,
    navLoginButtonStylesState,
    navFunctionalitiesState,
  ]);

  useEffect(() => {
    if (selectedComponentId) {
      switch (selectedComponentType) {
        case ComponentEnum.BUTTON:
          setStateHandler(dispatchButtonActions);
          break;
        case ComponentEnum.NAVBAR:
          setStateHandler(dispatchNavFunctionalitiesActions);
          setStateHandler(dispatchNavStylesActions);
          setStateHandler(dispatchNavLoginButtonStylesActions);
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
  }, [
    navStylesState,
    navLoginButtonStylesState,
    navFunctionalitiesState,
    buttonState,
  ]);

  return (
    <NavStyles.BottomBarGridContainer sx={{ overflowY: "scroll" }} item xs={12}>
      {selectedComponentType === ComponentEnum.BUTTON && (
        <ButtonPallete state={buttonState} dispatch={dispatchButtonActions} />
      )}
      {selectedComponentType === ComponentEnum.NAVBAR && (
        <NavbarPallete
          navFunctionalitiesState={navFunctionalitiesState}
          navStylesState={navStylesState}
          navLoginButtonStylesState={navLoginButtonStylesState}
          dispatchNavFunctionalitiesActions={dispatchNavFunctionalitiesActions}
          dispatchNavLoginButtonStylesActions={
            dispatchNavLoginButtonStylesActions
          }
          dispatchNavStylesActions={dispatchNavStylesActions}
        />
      )}
    </NavStyles.BottomBarGridContainer>
  );
};

export default BottomBar;
