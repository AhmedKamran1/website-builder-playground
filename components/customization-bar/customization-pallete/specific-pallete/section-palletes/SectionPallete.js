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
import { gridImageItem } from "@/helpers/pre-defined-components-styles/section-styles";
import {
  borderRadiusMaxRange,
  borderRadiusRange,
} from "@/helpers/slider-values/slider-values";

const SectionPallete = ({
  sectionTextState,
  sectionImageState,
  sectionGridImageState,
  sectionHeadingStylesState,
  sectionParagraphStylesState,
  sectionImageStylesState,
  sectionBlockStylesState,
  dispatchTextActions,
  dispatchImageActions,
  dispatchGridImageActions,
  dispatchSectionHeadingStylesActions,
  dispatchSectionParagraphStylesActions,
  dispatchSectionImageStylesActions,
  dispatchSectionBlockStylesActions,
}) => {
  const selectedComponent = useSelector(selectedComponentData);

  const { textFunctionalities } = sectionTextState.extraFunctionalities;
  const { imageFunctionalities } = sectionImageState.extraFunctionalities;
  const { imageGridFunctionalities } =
    sectionGridImageState.extraFunctionalities;

  const { headingStyles } = sectionHeadingStylesState.styles;
  const { paragraphStyles } = sectionParagraphStylesState.styles;
  const { imageStyles } = sectionImageStylesState.styles;
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

  return (
    <>
      <p>BLOCK STYLES</p>
      <BgColorPallete
        state={blockStyles}
        dispatch={debounceSectionBlockStylesActions}
        changeBackgroundColor={CommonEventTypeEnum.CHANGEBGCOLOR}
      />
      <Divider />
      <strong>Section Content</strong>
      {selectedComponent.secId === "1" && (
        <SectionPallete1
          blockState={blockStyles}
          imageFunctionalitiesState={imageFunctionalities}
          imageStylesState={imageStyles}
          debounceSectionBlockStylesActions={debounceSectionBlockStylesActions}
          debounceSectionImageStylesActions={debounceSectionImageStylesActions}
          dispatchImageActions={dispatchImageActions}
          changeFlexDirection={
            SectionEventTypesEnum.blockStyles.CHANGEFLEXDIRECTION
          }
        />
      )}
      <p>Heading Color</p>
      <CollorPallete
        state={headingStyles}
        dispatch={debounceSectionHeadingStylesActions}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
      />
      <p>Paragraph Color</p>
      <CollorPallete
        state={paragraphStyles}
        dispatch={debounceSectionParagraphStylesActions}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
      />
      <SectionTextAlignment
        headingState={headingStyles}
        paragraphState={paragraphStyles}
        dispatchHeadingStyles={debounceSectionHeadingStylesActions}
        dispatchParagraphStyles={debounceSectionParagraphStylesActions}
        changeHeadingAlignment={
          SectionEventTypesEnum.headingStyles.CHANGEHEADINGTEXTALIGNMENT
        }
        changeParagraphAlignment={
          SectionEventTypesEnum.paragraphStyles.CHANGEPARAGRAPHTEXTALIGNMENT
        }
      />
      {(selectedComponent.secId === "1" || selectedComponent.secId === "2") && (
        <SectionTextArea
          state={textFunctionalities}
          dispatch={dispatchTextActions}
          changeHeadingText={
            SectionEventTypesEnum.sectionTextFunctionalities.CHANGEHEADINGTEXT
          }
          changeParagraphText={
            SectionEventTypesEnum.sectionTextFunctionalities.CHANGEPARAGRAPHTEXT
          }
        />
      )}
      {selectedComponent.secId === "3" && (
        <Box sx={{ width: "200px" }}>
          <Slider
            value={imageStyles.borderRadius}
            marks={borderRadiusRange}
            max={borderRadiusMaxRange}
            onChange={(event) =>
              dispatchSectionImageStylesActions({
                type: SectionEventTypesEnum.imageStyles.CHANGEIMAGEBORDERADIUS,
                payload: event.target.value,
              })
            }
          />
        </Box>
      )}
      {selectedComponent.secId === "3" &&
        imageGridFunctionalities.map((gridItem, gridIndex) => (
          <React.Fragment key={gridIndex}>
            <br />
            <strong>Grid Number {gridIndex + 1}</strong>
            <button
              onClick={() =>
                dispatchGridImageActions({
                  type: SectionEventTypesEnum.sectionGridImageFunctionalities
                    .DELETEGRIDIMAGE,
                  payload: gridIndex,
                })
              }
            >
              Remove Grid
            </button>
            <SectionPallete3
              gridItem={gridItem}
              gridIndex={gridIndex}
              dispatchGridImageActions={dispatchGridImageActions}
            />
            <Divider />
          </React.Fragment>
        ))}
      {selectedComponent.secId === "3" && (
        <button
          onClick={() =>
            dispatchGridImageActions({
              type: SectionEventTypesEnum.sectionGridImageFunctionalities
                .ADDGRIDIMAGE,
              payload: gridImageItem,
            })
          }
        >
          Add Image
        </button>
      )}
    </>
  );
};

export default SectionPallete;
