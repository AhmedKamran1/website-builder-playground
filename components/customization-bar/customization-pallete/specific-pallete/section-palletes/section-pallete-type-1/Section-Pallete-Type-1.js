import React from "react";
import ImagePallete from "../../../common-palletes/ImagePallete";
import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";

import SectionButton from "../common-section-palletes/SectionButton";
import { Checkbox } from "@mui/material";
import CollorPallete from "../../../common-palletes/CollorPallete";
import FontPallete from "../../../common-palletes/FontPallete";
import SectionTextAlignment from "../common-section-palletes/SectionTextAlignment";
import SectionTextContent from "../common-section-palletes/SectionTextContent";
import ButtonPallete from "../../../common-palletes/ButtonPallete";

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
      <SectionTextContent
        state={textFunctionalities.headingText}
        dispatch={dispatchText}
        changeTextContent={
          SectionEventTypesEnum.sectionTextFunctionalities.CHANGEHEADINGTEXT
        }
      >
        Heading Text
      </SectionTextContent>
      <SectionTextContent
        state={textFunctionalities.paragraphText}
        dispatch={dispatchText}
        changeTextContent={
          SectionEventTypesEnum.sectionTextFunctionalities.CHANGEPARAGRAPHTEXT
        }
      >
        Paragraph Text
      </SectionTextContent>
      <SectionTextContent
        state={textFunctionalities.subHeadingText}
        dispatch={dispatchText}
        changeTextContent={
          SectionEventTypesEnum.sectionTextFunctionalities.CHANGESUBHEADINGTEXT
        }
      >
        SubHeading Text
      </SectionTextContent>
      <SectionTextAlignment
        state={subHeadingStyles}
        dispatch={debounceSubHeadingStyles}
        changeTextAlignment={
          SectionEventTypesEnum.subHeadingStyles.CHANGESUBHEADINGTEXTALIGNMENT
        }
      >
        Sub Heading Alignment
      </SectionTextAlignment>
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
          <ButtonPallete state={buttonStyles} dispatch={debounceButtonStyles} />
          <SectionButton
            state={buttonFunctionalities}
            dispatch={dispatchButton}
          />
        </>
      )}
    </>
  );
};

export default SectionPallete1;
