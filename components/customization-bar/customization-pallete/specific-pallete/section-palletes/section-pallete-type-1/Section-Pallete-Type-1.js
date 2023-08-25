import React from "react";
import ImagePallete from "../../../common-palletes/ImagePallete";
import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";
import SectionTextArea from "../common-section-palletes/SectionTextArea";
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionButton from "../common-section-palletes/SectionButton";
import { Checkbox } from "@mui/material";
import SectionSubHeading from "../common-section-palletes/SectionSubHeading";
import SectionSubHeadingAlignment from "../common-section-palletes/SectionSubHeadingAlignment";
import CollorPallete from "../../../common-palletes/CollorPallete";
import FontPallete from "../../../common-palletes/FontPallete";

const SectionPallete1 = ({
  textFunctionalities,
  buttonFunctionalities,
  dispatchTextActions,
  dispatchImageActions,
  debounceSectionBlockStylesActions,
  debounceSectionImageStylesActions,
  debounceSectionButtonStylesActions,
  debounceSectionSubHeadingStylesActions,
  dispatchButtonFunctionalities,
  imageFunctionalities,
  blockStyles,
  imageStyles,
  buttonStyles,
  subHeadingStyles,
}) => {
  return (
    <>
      <strong>Sub Heading Content</strong>
      <CollorPallete
        state={subHeadingStyles}
        dispatch={debounceSectionSubHeadingStylesActions}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
      />
      <SectionSubHeading
        state={textFunctionalities}
        dispatch={dispatchTextActions}
      />
      <SectionSubHeadingAlignment
        state={subHeadingStyles}
        dispatch={debounceSectionSubHeadingStylesActions}
      />
      <FontPallete
        state={subHeadingStyles}
        dispatch={debounceSectionSubHeadingStylesActions}
        changeFontWeight={
          SectionEventTypesEnum.subHeadingStyles.CHANGESUBHEADINGFONTWEIGHT
        }
        changeFontStyle={
          SectionEventTypesEnum.subHeadingStyles.CHANGESUBHEADINGFONTSTYLE
        }
        fontPalleteName="subHeadingStyles"
      />
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
