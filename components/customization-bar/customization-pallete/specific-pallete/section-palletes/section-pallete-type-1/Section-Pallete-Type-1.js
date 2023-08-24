import React from "react";
import ImagePallete from "../../../common-palletes/ImagePallete";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import SectionTextArea from "../common-section-palletes/SectionTextArea";

const SectionPallete1 = ({
  textFunctionalities,
  dispatchTextActions,
  dispatchImageActions,
  debounceSectionBlockStylesActions,
  debounceSectionImageStylesActions,
  blockState,
  imageFunctionalitiesState,
  imageStylesState,
}) => {
  return (
    <>
      <div>
        <select
          value={blockState.flexDirection}
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
        imageFunctionalitiesState={imageFunctionalitiesState}
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

export default SectionPallete1;
