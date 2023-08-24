import React, { useEffect, useState } from "react";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridButton from "../common-section-palletes/SectionGridButton";
import { gridTextItem } from "@/helpers/pre-defined-components-styles/section-styles";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import DeleteItem from "../../../common-palletes/DeleteItem";
import { Divider } from "@mui/material";
import AddItem from "../../../common-palletes/AddItem";
import SectionCardStyles from "../common-section-palletes/SectionCardStyles";
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionTextArea from "../common-section-palletes/SectionTextArea";

const SectionPallete4 = ({
  textFunctionalities,
  dispatchTextActions,
  cardStyles,
  buttonStyles,
  debounceSectionCardStylesActions,
  debounceSectionButtonStylesActions,
}) => {
  return (
    <>
      <SectionCardStyles
        cardStyles={cardStyles}
        debounceSectionCardStylesActions={debounceSectionCardStylesActions}
      />
      <CommonButtonPallete
        state={buttonStyles}
        dispatch={debounceSectionButtonStylesActions}
      />
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
    </>
  );
};

export default SectionPallete4;
