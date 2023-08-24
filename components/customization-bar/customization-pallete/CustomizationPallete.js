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
import {
  updateComponent,
  updateNavbarComponent,
} from "@/store/ComponentActions";
import {
  sectionBlockStylesReducer,
  sectionButtonReducer,
  sectionButtonStylesReducer,
  sectionCardStylesReducer,
  sectionGridImageReducer,
  sectionHeadingStylesReducer,
  sectionImageReducer,
  sectionImageStylesReducer,
  sectionParagraphStylesReducer,
  sectionPricingStylesReducer,
  sectionSubHeadingStylesReducer,
  sectionTextReducer,
} from "@/helpers/customization-pallete/reducers/section-reducer";
import {
  sectionInitialBlockStylesState,
  sectionInitialButtonFunctionalitiesState,
  sectionInitialButtonStylesState,
  sectionInitialCardStylesState,
  sectionInitialGridImageFunctionalitiesState,
  sectionInitialHeadingStylesState,
  sectionInitialImageFunctionalitiesState,
  sectionInitialImageStylesState,
  sectionInitialParagraphStylesState,
  sectionInitialPricingStylesState,
  sectionInitialSubHeadingStylesState,
  sectionInitialTextFunctionalitiesState,
} from "@/helpers/customization-pallete/initial-reducer-states/initial-section-state";
import SectionPallete from "./specific-pallete/section-palletes/SectionPallete";

const BottomBar = () => {
  const selectedComponent = useSelector(selectedComponentData);
  const selectedComponentType = useSelector(componentType);
  const selectedComponentId = useSelector(componentId);
  const dispatchStore = useDispatch();

  //NAVBAR STATES

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

  //SECTION STATES

  const [sectionTextFunctionalitiesState, dispatchSectionTextActions] =
    useReducer(sectionTextReducer, sectionInitialTextFunctionalitiesState);

  const [sectionImageFunctionalitiesState, dispatchSectionImageActions] =
    useReducer(sectionImageReducer, sectionInitialImageFunctionalitiesState);

  const [sectionButtonFunctionalitiesState, dispatchSectionButtonActions] =
    useReducer(sectionButtonReducer, sectionInitialButtonFunctionalitiesState);

  const [
    sectionGridImageFunctionalitiesState,
    dispatchSectionGridImageActions,
  ] = useReducer(
    sectionGridImageReducer,
    sectionInitialGridImageFunctionalitiesState
  );

  const [sectionHeadingStylesState, dispatchSectionHeadingStylesActions] =
    useReducer(sectionHeadingStylesReducer, sectionInitialHeadingStylesState);

  const [sectionParagraphStylesState, dispatchSectionParagraphStylesActions] =
    useReducer(
      sectionParagraphStylesReducer,
      sectionInitialParagraphStylesState
    );
  const [sectionSubHeadingStylesState, dispatchSectionSubHeadingStylesActions] =
    useReducer(
      sectionSubHeadingStylesReducer,
      sectionInitialSubHeadingStylesState
    );
  const [sectionCardStylesState, dispatchSectionCardStylesActions] = useReducer(
    sectionCardStylesReducer,
    sectionInitialCardStylesState
  );
  const [sectionPricingStylesState, dispatchSectionPricingStylesActions] =
    useReducer(sectionPricingStylesReducer, sectionInitialPricingStylesState);

  const [sectionButtonStylesState, dispatchSectionButtonStylesActions] =
    useReducer(sectionButtonStylesReducer, sectionInitialButtonStylesState);

  const [sectionImageStylesState, dispatchSectionImageStylesActions] =
    useReducer(sectionImageStylesReducer, sectionInitialImageStylesState);

  const [sectionBlockStylesState, dispatchSectionBlockStylesActions] =
    useReducer(sectionBlockStylesReducer, sectionInitialBlockStylesState);

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

  const storeDispatchHandler = useCallback((stateType, updateActionType) => {
    dispatchStore(
      updateActionType({
        modifiedStyles: structuredClone(stateType.styles),
        extraFunctionalities: structuredClone(stateType.extraFunctionalities),
      })
    );
  }, []);

  const updateStyleHandler = useCallback(() => {
    let navState;
    let sectionState;
    switch (selectedComponentType) {
      case ComponentEnum.BUTTON:
        storeDispatchHandler(buttonState, updateComponent);
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
        storeDispatchHandler(navState, updateNavbarComponent);
        break;
      case ComponentEnum.SECTION:
        sectionState = {
          styles: {
            headingStyles: sectionHeadingStylesState.styles.headingStyles,
            paragraphStyles: sectionParagraphStylesState.styles.paragraphStyles,
            imageStyles: sectionImageStylesState.styles.imageStyles,
            blockStyles: sectionBlockStylesState.styles.blockStyles,
            cardStyles: sectionCardStylesState.styles.cardStyles,
            buttonStyles: sectionButtonStylesState.styles.buttonStyles,
          },
          extraFunctionalities: {
            textFunctionalities:
              sectionTextFunctionalitiesState.extraFunctionalities
                .textFunctionalities,
            imageFunctionalities:
              sectionImageFunctionalitiesState.extraFunctionalities
                .imageFunctionalities,
            buttonFunctionalities:
              sectionButtonFunctionalitiesState.extraFunctionalities
                .buttonFunctionalities,
            imageGridFunctionalities:
              sectionGridImageFunctionalitiesState.extraFunctionalities
                .imageGridFunctionalities,
          },
        };
        storeDispatchHandler(sectionState, updateComponent);
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
    sectionTextFunctionalitiesState,
    sectionImageFunctionalitiesState,
    sectionButtonFunctionalitiesState,
    sectionGridImageFunctionalitiesState,
    sectionHeadingStylesState,
    sectionParagraphStylesState,
    sectionImageStylesState,
    sectionBlockStylesState,
    sectionCardStylesState,
    sectionButtonStylesState,
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
        case ComponentEnum.SECTION:
          setStateHandler(dispatchSectionTextActions);
          setStateHandler(dispatchSectionImageActions);
          setStateHandler(dispatchSectionButtonActions);
          setStateHandler(dispatchSectionGridImageActions);
          setStateHandler(dispatchSectionHeadingStylesActions);
          setStateHandler(dispatchSectionParagraphStylesActions);
          setStateHandler(dispatchSectionBlockStylesActions);
          setStateHandler(dispatchSectionImageStylesActions);
          setStateHandler(dispatchSectionCardStylesActions);
          setStateHandler(dispatchSectionButtonStylesActions);
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
    sectionTextFunctionalitiesState,
    sectionImageFunctionalitiesState,
    sectionButtonFunctionalitiesState,
    sectionGridImageFunctionalitiesState,
    sectionHeadingStylesState,
    sectionParagraphStylesState,
    sectionImageStylesState,
    sectionBlockStylesState,
    sectionCardStylesState,
    sectionButtonStylesState,
    buttonState,
  ]);

  return (
    <NavStyles.BottomBarGridContainer sx={{ overflowY: "auto" }} item xs={12}>
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
      {selectedComponentType === ComponentEnum.SECTION && (
        <SectionPallete
          sectionTextState={sectionTextFunctionalitiesState}
          sectionImageState={sectionImageFunctionalitiesState}
          sectionButtonState={sectionButtonFunctionalitiesState}
          sectionGridImageState={sectionGridImageFunctionalitiesState}
          sectionHeadingStylesState={sectionHeadingStylesState}
          sectionParagraphStylesState={sectionParagraphStylesState}
          sectionImageStylesState={sectionImageStylesState}
          sectionBlockStylesState={sectionBlockStylesState}
          sectionCardStylesState={sectionCardStylesState}
          sectionButtonStylesState={sectionButtonStylesState}
          dispatchTextActions={dispatchSectionTextActions}
          dispatchImageActions={dispatchSectionImageActions}
          dispatchButtonActions={dispatchSectionButtonActions}
          dispatchGridImageActions={dispatchSectionGridImageActions}
          dispatchSectionHeadingStylesActions={
            dispatchSectionHeadingStylesActions
          }
          dispatchSectionParagraphStylesActions={
            dispatchSectionParagraphStylesActions
          }
          dispatchSectionImageStylesActions={dispatchSectionImageStylesActions}
          dispatchSectionBlockStylesActions={dispatchSectionBlockStylesActions}
          dispatchSectionCardStylesActions={dispatchSectionCardStylesActions}
          dispatchSectionButtonStylesActions={
            dispatchSectionButtonStylesActions
          }
        />
      )}
    </NavStyles.BottomBarGridContainer>
  );
};

export default BottomBar;
