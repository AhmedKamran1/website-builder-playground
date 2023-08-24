import React from "react";
import CollorPallete from "../../../common-palletes/CollorPallete";
import SectionTextAlignment from "./SectionTextAlignment";
import FontPallete from "../../../common-palletes/FontPallete";
import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";
import BgColorPallete from "../../../common-palletes/BgColorPallete";
import { Divider } from "@mui/material";

const SectionCommonStyles = ({
  blockStyles,
  headingStyles,
  paragraphStyles,
  debounceSectionBlockStylesActions,
  debounceSectionHeadingStylesActions,
  debounceSectionParagraphStylesActions,
}) => {
  return (
    <div>
      <p>BLOCK STYLES</p>
      <BgColorPallete
        state={blockStyles}
        dispatch={debounceSectionBlockStylesActions}
        changeBackgroundColor={CommonEventTypeEnum.CHANGEBGCOLOR}
      />
      <Divider />
      <strong>Section Content</strong>
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
      <p>Heading Font Type</p>
      <FontPallete
        state={headingStyles}
        dispatch={debounceSectionHeadingStylesActions}
        changeFontWeight={
          SectionEventTypesEnum.headingStyles.CHANGEHEADINGFONTWEIGHT
        }
        changeFontStyle={
          SectionEventTypesEnum.headingStyles.CHANGEHEADINGFONTSTYLE
        }
        fontPalleteName="headingStyles"
      />
      <p>Paragraph Font Type</p>
      <FontPallete
        state={paragraphStyles}
        dispatch={debounceSectionParagraphStylesActions}
        changeFontWeight={
          SectionEventTypesEnum.paragraphStyles.CHANGEPARAGRAPHFONTWEIGHT
        }
        changeFontStyle={
          SectionEventTypesEnum.paragraphStyles.CHANGEPARAGRAPHFONTSTYLE
        }
        fontPalleteName="paragraphStyles"
      />
    </div>
  );
};

export default SectionCommonStyles;
