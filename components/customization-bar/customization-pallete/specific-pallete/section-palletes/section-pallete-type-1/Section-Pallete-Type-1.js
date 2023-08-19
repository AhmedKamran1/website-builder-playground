import React from "react";
import ImagePallete from "../../../common-palletes/ImagePallete";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";

const SectionPallete1 = ({
  dispatchImageActions,
  debounceSectionBlockStylesActions,
  debounceSectionImageStylesActions,
  blockState,
  imageFunctionalitiesState,
  imageStylesState,
  changeFlexDirection,
}) => {
  return (
    <>
      <div>
        <select
          value={blockState.flexDirection}
          onChange={(event) =>
            debounceSectionBlockStylesActions({
              type: changeFlexDirection,
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
          SectionEventTypesEnum.imageStyles.CHANGEIMAGEBORDERADIUS
        }
      />
    </>
  );
};

export default SectionPallete1;
