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

import NavbarPallete from "./specific-pallete/navbar-palletes/NavbarPallete";

import {
  navbarInitialFunctionalitiesState,
  navbarInitialLinkStylesState,
  navbarInitialLoginButtonStylesState,
} from "@/helpers/customization-pallete/initial-reducer-states/initial-navbar-state";

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
  gridItemsReducer,
  sectionBlockStylesReducer,
  sectionButtonReducer,
  sectionButtonStylesReducer,
  sectionCardStylesReducer,
  sectionGridImageReducer,
  sectionGridItemsReducer,
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
  sectionInitialGridItemsFunctionalitiesState,
  sectionInitialHeadingStylesState,
  sectionInitialImageFunctionalitiesState,
  sectionInitialImageStylesState,
  sectionInitialParagraphStylesState,
  sectionInitialPricingFunctionalitiesState,
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

  const [textFunctionalities, dispatchText] = useReducer(
    sectionTextReducer,
    sectionInitialTextFunctionalitiesState
  );

  const [imageFunctionalities, dispatchImage] = useReducer(
    sectionImageReducer,
    sectionInitialImageFunctionalitiesState
  );

  const [buttonFunctionalities, dispatchButton] = useReducer(
    sectionButtonReducer,
    sectionInitialButtonFunctionalitiesState
  );

  const [gridItemsFunctionalities, dispatchGridItems] = useReducer(
    sectionGridItemsReducer,
    sectionInitialGridItemsFunctionalitiesState
  );

  const [headingStyles, dispatchHeadingStyles] = useReducer(
    sectionHeadingStylesReducer,
    sectionInitialHeadingStylesState
  );

  const [paragraphStyles, dispatchParagraphStyles] = useReducer(
    sectionParagraphStylesReducer,
    sectionInitialParagraphStylesState
  );
  const [subHeadingStyles, dispatchSubHeadingStyles] = useReducer(
    sectionSubHeadingStylesReducer,
    sectionInitialSubHeadingStylesState
  );
  const [cardStyles, dispatchCardStyles] = useReducer(
    sectionCardStylesReducer,
    sectionInitialCardStylesState
  );
  const [pricingStyles, dispatchPricingStyles] = useReducer(
    sectionPricingStylesReducer,
    sectionInitialPricingStylesState
  );

  const [buttonStyles, dispatchButtonStyles] = useReducer(
    sectionButtonStylesReducer,
    sectionInitialButtonStylesState
  );

  const [imageStyles, dispatchImageStyles] = useReducer(
    sectionImageStylesReducer,
    sectionInitialImageStylesState
  );

  const [blockStyles, dispatchBlockStyles] = useReducer(
    sectionBlockStylesReducer,
    sectionInitialBlockStylesState
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
            headingStyles: headingStyles.styles.headingStyles,
            paragraphStyles: paragraphStyles.styles.paragraphStyles,
            imageStyles: imageStyles.styles.imageStyles,
            blockStyles: blockStyles.styles.blockStyles,
            cardStyles: cardStyles.styles.cardStyles,
            buttonStyles: buttonStyles.styles.buttonStyles,
            subHeadingStyles: subHeadingStyles.styles.subHeadingStyles,
            pricingStyles: pricingStyles.styles.pricingStyles,
          },
          extraFunctionalities: {
            textFunctionalities:
              textFunctionalities.extraFunctionalities.textFunctionalities,
            imageFunctionalities:
              imageFunctionalities.extraFunctionalities.imageFunctionalities,
            buttonFunctionalities:
              buttonFunctionalities.extraFunctionalities.buttonFunctionalities,
            gridItemsFunctionalities:
              gridItemsFunctionalities.extraFunctionalities
                .gridItemsFunctionalities,
          },
        };
        storeDispatchHandler(sectionState, updateComponent);
        break;
      default:
        break;
    }
  }, [
    selectedComponentType,
    navStylesState,
    navLoginButtonStylesState,
    navFunctionalitiesState,
    textFunctionalities,
    imageFunctionalities,
    buttonFunctionalities,
    gridItemsFunctionalities,
    headingStyles,
    paragraphStyles,
    subHeadingStyles,
    pricingStyles,
    imageStyles,
    blockStyles,
    cardStyles,
    buttonStyles,
  ]);

  useEffect(() => {
    if (selectedComponentId) {
      switch (selectedComponentType) {
        case ComponentEnum.NAVBAR:
          setStateHandler(dispatchNavFunctionalitiesActions);
          setStateHandler(dispatchNavStylesActions);
          setStateHandler(dispatchNavLoginButtonStylesActions);
          break;
        case ComponentEnum.SECTION:
          setStateHandler(dispatchText);
          setStateHandler(dispatchImage);
          setStateHandler(dispatchButton);
          setStateHandler(dispatchGridItems);
          setStateHandler(dispatchHeadingStyles);
          setStateHandler(dispatchParagraphStyles);
          setStateHandler(dispatchSubHeadingStyles);
          setStateHandler(dispatchPricingStyles);
          setStateHandler(dispatchBlockStyles);
          setStateHandler(dispatchImageStyles);
          setStateHandler(dispatchCardStyles);
          setStateHandler(dispatchButtonStyles);
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
    textFunctionalities,
    imageFunctionalities,
    buttonFunctionalities,
    gridItemsFunctionalities,
    headingStyles,
    paragraphStyles,
    subHeadingStyles,
    pricingStyles,
    imageStyles,
    blockStyles,
    cardStyles,
    buttonStyles,
  ]);

  return (
    <NavStyles.BottomBarGridContainer sx={{ overflowY: "auto" }} item xs={12}>
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
          textFunctionalities={
            textFunctionalities.extraFunctionalities.textFunctionalities
          }
          imageFunctionalities={
            imageFunctionalities.extraFunctionalities.imageFunctionalities
          }
          buttonFunctionalities={
            buttonFunctionalities.extraFunctionalities.buttonFunctionalities
          }
          gridItemsFunctionalities={
            gridItemsFunctionalities.extraFunctionalities
              .gridItemsFunctionalities
          }
          headingStyles={headingStyles.styles.headingStyles}
          paragraphStyles={paragraphStyles.styles.paragraphStyles}
          subHeadingStyles={subHeadingStyles.styles.subHeadingStyles}
          pricingStyles={pricingStyles.styles.pricingStyles}
          imageStyles={imageStyles.styles.imageStyles}
          blockStyles={blockStyles.styles.blockStyles}
          cardStyles={cardStyles.styles.cardStyles}
          buttonStyles={buttonStyles.styles.buttonStyles}
          dispatchText={dispatchText}
          dispatchImage={dispatchImage}
          dispatchButton={dispatchButton}
          dispatchGridItems={dispatchGridItems}
          dispatchHeadingStyles={dispatchHeadingStyles}
          dispatchParagraphStyles={dispatchParagraphStyles}
          dispatchSubHeadingStyles={dispatchSubHeadingStyles}
          dispatchPricingStyles={dispatchPricingStyles}
          dispatchImageStyles={dispatchImageStyles}
          dispatchBlockStyles={dispatchBlockStyles}
          dispatchCardStyles={dispatchCardStyles}
          dispatchButtonStyles={dispatchButtonStyles}
        />
      )}
    </NavStyles.BottomBarGridContainer>
  );
};

export default BottomBar;
