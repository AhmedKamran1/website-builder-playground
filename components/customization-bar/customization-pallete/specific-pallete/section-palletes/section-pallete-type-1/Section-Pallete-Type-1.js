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
  imageFunctionalities,
  blockStyles,
  imageStyles,
  buttonStyles,
  subHeadingStyles,
  dispatchText,
  dispatchButton,
  dispatchImage,
  debounceBlockStyles,
  debounceImageStyles,
  debounceButtonStyles,
  debounceSubHeadingStyles,
}) => {
  return (
    <>
      <strong>Sub Heading Content</strong>
      <CollorPallete
        state={subHeadingStyles}
        dispatch={debounceSubHeadingStyles}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
      />
      <SectionSubHeading state={textFunctionalities} dispatch={dispatchText} />
      <SectionSubHeadingAlignment
        state={subHeadingStyles}
        dispatch={debounceSubHeadingStyles}
      />
      <FontPallete
        state={subHeadingStyles}
        dispatch={debounceSubHeadingStyles}
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
            debounceBlockStyles({
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
        dispatchImageFunctionalities={dispatchImage}
        dispatchImageStyles={debounceImageStyles}
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

export default SectionPallete1;
