import React, { useEffect, useState } from "react";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridButton from "../common-section-palletes/SectionGridButton";
import { gridTextItem } from "@/helpers/pre-defined-components-styles/section-styles";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import DeleteItem from "../../../common-palletes/DeleteItem";
import { Checkbox, Divider } from "@mui/material";
import AddItem from "../../../common-palletes/AddItem";
import SectionCardStyles from "../common-section-palletes/SectionCardStyles";
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionTextArea from "../common-section-palletes/SectionTextArea";
import SectionButton from "../common-section-palletes/SectionButton";
import ImagePallete from "../../../common-palletes/ImagePallete";

const SectionPallete4 = ({
  textFunctionalities,
  buttonFunctionalities,
  cardStyles,
  buttonStyles,
  dispatchText,
  dispatchButton,
  debounceCardStyles,
  debounceButtonStyles,
}) => {
  return (
    <>
      {/* <ImagePallete
        imageFunctionalitiesState={imageFunctionalities}
        imageStylesState={imageStylesState}
        dispatchImageFunctionalities={dispatchImageActions}
        dispatchImageStyles={debounceSectionImageStylesActions}
        changeImage={
          SectionEventTypesEnum.sectionImageFunctionalities.CHANGEIMAGE
        }
        changeImageRedirectLink={
          SectionEventTypesEnum.sectionImageFunctionalities
            .CHANGEIMAGEREDIRECTLINK
        }
        changeImageAltText={
          SectionEventTypesEnum.sectionImageFunctionalities.CHANGEIMAGEALTTEXT
        }
        changeImageBorderRadius={
          SectionEventTypesEnum.imageStyles.CHANGEBORDERRADIUS
        }
      /> */}
      <SectionCardStyles
        cardStyles={cardStyles}
        debounceSectionCardStylesActions={debounceCardStyles}
      />
      <div>
        <strong>Show Button</strong>
        <Checkbox
          checked={buttonFunctionalities.showButton}
          onChange={() =>
            dispatchButton({
              type: SectionEventTypesEnum.sectionButtonFunctionalities
                .CHANGEBUTTONVISIBILITY,
            })
          }
        />
      </div>
      {buttonFunctionalities.showButton && (
        <>
          <CommonButtonPallete
            state={buttonStyles}
            dispatch={debounceButtonStyles}
          />
          <SectionButton
            state={buttonFunctionalities}
            dispatch={dispatchButton}
          />
        </>
      )}
      <SectionTextArea
        state={textFunctionalities}
        dispatch={dispatchText}
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
