import React from "react";
import ImagePallete from "../../../common-palletes/ImagePallete";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import SectionTextArea from "../common-section-palletes/SectionTextArea";
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionButton from "../common-section-palletes/SectionButton";
import { Checkbox } from "@mui/material";

const SectionPallete1 = ({
  textFunctionalities,
  buttonFunctionalities,
  dispatchTextActions,
  dispatchImageActions,
  debounceSectionBlockStylesActions,
  debounceSectionImageStylesActions,
  debounceSectionButtonStylesActions,
  dispatchButtonFunctionalities,
  imageFunctionalities,
  blockStyles,
  imageStyles,
  buttonStyles,
}) => {
  return (
    <>
      <div>
        <select
          value={blockStyles.flexDirection}
          onChange={(event) =>
            debounceSectionBlockStylesActions({
              type: SectionEventTypesEnum.blockStyles.CHANGEFLEXDIRECTION,
              payload: event.target.value,
            })
          }
        >
          <option value="row">Image at right</option>
          <option value="row-reverse">Image at left</option>
        </select>
      </div>
      <ImagePallete
        imageFunctionalitiesState={imageFunctionalities}
        imageStylesState={imageStyles}
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
      />
      <div>
        <strong>Show Button</strong>
        <Checkbox
          checked={buttonFunctionalities.showButton}
          onChange={() =>
            dispatchButtonFunctionalities({
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
            dispatch={debounceSectionButtonStylesActions}
          />
          <SectionButton
            state={buttonFunctionalities}
            dispatch={dispatchButtonFunctionalities}
          />
        </>
      )}
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

export default SectionPallete1;
