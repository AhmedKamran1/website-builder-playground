import React from "react";
import SectionTextArea from "./common-section-palletes/SectionTextArea";
import CollorPallete from "../../common-palletes/CollorPallete";
import BgColorPallete from "../../common-palletes/BgColorPallete";
import { Box, Divider, Slider } from "@mui/material";
import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";
import useDebouncedDispatch from "@/hooks/use-debounce";
import SectionTextAlignment from "./common-section-palletes/SectionTextAlignment";
import SectionPallete1 from "./section-pallete-type-1/Section-Pallete-Type-1";
import { useSelector } from "react-redux";
import { selectedComponentData } from "@/store/ComponentSlice";
import SectionPallete3 from "./section-pallete-type-3/Section-Pallete-Type-3";
import {
  gridImageItem,
  gridImageWithButtonItem,
  gridTextItem,
} from "@/helpers/pre-defined-components-styles/section-styles";
import {
  borderRadiusMaxRange,
  borderRadiusRange,
} from "@/helpers/slider-values/slider-values";
import AddItem from "../../common-palletes/AddItem";
import DeleteItem from "../../common-palletes/DeleteItem";
import SectionPallete6 from "./section-pallete-type-6/section-pallete-type-6";
import SectionPallete5 from "./section-pallete-type-5/section-pallete-type-5";
import CommonButtonPallete from "../../common-palletes/CommonButtonPallete";
import FontPallete from "../../common-palletes/FontPallete";
import SectionCardStyles from "./common-section-palletes/SectionCardStyles";
import SectionCommonStyles from "./common-section-palletes/SectionCommonStyles";
import SectionPallete4 from "./section-pallete-type-4/section-pallete-type-4";
import SectionPallete2 from "./section-pallete-type-2/section-pallete-type-2";

const SectionPallete = ({
  sectionTextState,
  sectionImageState,
  sectionButtonState,
  sectionGridImageState,
  sectionHeadingStylesState,
  sectionParagraphStylesState,
  sectionImageStylesState,
  sectionBlockStylesState,
  sectionCardStylesState,
  sectionButtonStylesState,
  dispatchTextActions,
  dispatchImageActions,
  dispatchButtonActions,
  dispatchGridImageActions,
  dispatchSectionHeadingStylesActions,
  dispatchSectionParagraphStylesActions,
  dispatchSectionImageStylesActions,
  dispatchSectionBlockStylesActions,
  dispatchSectionCardStylesActions,
  dispatchSectionButtonStylesActions,
}) => {
  const selectedComponent = useSelector(selectedComponentData);

  const { textFunctionalities } = sectionTextState.extraFunctionalities;
  const { imageFunctionalities } = sectionImageState.extraFunctionalities;
  const { buttonFunctionalities } = sectionButtonState.extraFunctionalities;
  const { imageGridFunctionalities } =
    sectionGridImageState.extraFunctionalities;

  const { headingStyles } = sectionHeadingStylesState.styles;
  const { paragraphStyles } = sectionParagraphStylesState.styles;
  // const { subHeadingStyles } = sectionCardStylesState.styles;
  const { imageStyles } = sectionImageStylesState.styles;
  const { cardStyles } = sectionCardStylesState.styles;
  // const { pricingStyles } = sectionPricingStylesState.styles;
  const { buttonStyles } = sectionButtonStylesState.styles;
  const { blockStyles } = sectionBlockStylesState.styles;

  const debounceSectionHeadingStylesActions = useDebouncedDispatch(
    dispatchSectionHeadingStylesActions,
    200
  );
  const debounceSectionParagraphStylesActions = useDebouncedDispatch(
    dispatchSectionParagraphStylesActions,
    200
  );

  const debounceSectionImageStylesActions = useDebouncedDispatch(
    dispatchSectionImageStylesActions,
    200
  );
  const debounceSectionBlockStylesActions = useDebouncedDispatch(
    dispatchSectionBlockStylesActions,
    200
  );

  const debounceSectionCardStylesActions = useDebouncedDispatch(
    dispatchSectionCardStylesActions,
    200
  );

  const debounceSectionButtonStylesActions = useDebouncedDispatch(
    dispatchSectionButtonStylesActions,
    200
  );

  return (
    <>
      <SectionCommonStyles
        blockStyles={blockStyles}
        headingStyles={headingStyles}
        paragraphStyles={paragraphStyles}
        debounceSectionBlockStylesActions={debounceSectionBlockStylesActions}
        debounceSectionHeadingStylesActions={
          debounceSectionHeadingStylesActions
        }
        debounceSectionParagraphStylesActions={
          debounceSectionParagraphStylesActions
        }
      />
      {selectedComponent.secId === "1" && (
        <SectionPallete1
          textFunctionalities={textFunctionalities}
          dispatchTextActions={dispatchTextActions}
          blockState={blockStyles}
          imageFunctionalitiesState={imageFunctionalities}
          imageStylesState={imageStyles}
          debounceSectionBlockStylesActions={debounceSectionBlockStylesActions}
          debounceSectionImageStylesActions={debounceSectionImageStylesActions}
          dispatchImageActions={dispatchImageActions}
        />
      )}
      {selectedComponent.secId === "2" && (
        <SectionPallete2
          textFunctionalities={textFunctionalities}
          dispatchTextActions={dispatchTextActions}
        />
      )}
      {selectedComponent.secId === "3" && (
        <SectionPallete3
          imageStyles={imageStyles}
          imageGridFunctionalities={imageGridFunctionalities}
          dispatchGridImageActions={dispatchGridImageActions}
        />
      )}
      {selectedComponent.secId === "4" && (
        <SectionPallete4
          buttonFunctionalities={buttonFunctionalities}
          textFunctionalities={textFunctionalities}
          dispatchTextActions={dispatchTextActions}
          cardStyles={cardStyles}
          buttonStyles={buttonStyles}
          dispatchButtonFunctionalities={dispatchButtonActions}
          debounceSectionCardStylesActions={debounceSectionCardStylesActions}
          debounceSectionButtonStylesActions={
            debounceSectionButtonStylesActions
          }
        />
      )}
      {selectedComponent.secId === "5" && (
        <SectionPallete5
          cardStyles={cardStyles}
          buttonStyles={buttonStyles}
          debounceSectionCardStylesActions={debounceSectionCardStylesActions}
          debounceSectionButtonStylesActions={
            debounceSectionButtonStylesActions
          }
          imageGridFunctionalities={imageGridFunctionalities}
          dispatchGridImageActions={dispatchGridImageActions}
        />
      )}
      {selectedComponent.secId === "6" && (
        <SectionPallete6
          cardStyles={cardStyles}
          buttonStyles={buttonStyles}
          debounceSectionCardStylesActions={debounceSectionCardStylesActions}
          debounceSectionButtonStylesActions={
            debounceSectionButtonStylesActions
          }
          imageGridFunctionalities={imageGridFunctionalities}
          dispatchGridImageActions={dispatchGridImageActions}
        />
      )}
    </>
  );
};

export default SectionPallete;
