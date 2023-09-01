import React, { useEffect, useState } from "react";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridButton from "../common-section-palletes/SectionGridButton";
import { gridTextItem } from "@/helpers/pre-defined-components-styles/section-styles";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import DeleteItem from "../../../common-palletes/DeleteItem";
import { Checkbox, Divider } from "@mui/material";
import AddItem from "../../../common-palletes/AddItem";
import SectionCardStyles from "../common-section-palletes/SectionCardStyles";
import ButtonPallete from "../../../common-palletes/ButtonPallete";
import SectionButton from "../common-section-palletes/SectionButton";
import ImagePallete from "../../../common-palletes/ImagePallete";

import SectionTextContent from "../common-section-palletes/SectionTextContent";
import ChangeImage from "../../../common-palletes/ChangeImage";

const SectionPallete4 = ({
  textFunctionalities,
  buttonFunctionalities,
  imageFunctionalities,
  cardStyles,
  buttonStyles,
  dispatchText,
  dispatchButton,
  dispatchImage,
  debounceCardStyles,
  debounceButtonStyles,
}) => {
  return (
    <>
      <ChangeImage
        dispatchImageFunctionalities={dispatchImage}
        changeImage={
          SectionEventTypesEnum.sectionImageFunctionalities.CHANGEIMAGE
        }
      />
      <ImagePallete
        imageFunctionalitiesState={imageFunctionalities}
        dispatchImageFunctionalities={dispatchImage}
        changeImageRedirectLink={
          SectionEventTypesEnum.sectionImageFunctionalities
            .CHANGEIMAGEREDIRECTLINK
        }
        changeImageAltText={
          SectionEventTypesEnum.sectionImageFunctionalities.CHANGEIMAGEALTTEXT
        }
      />
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
          <ButtonPallete state={buttonStyles} dispatch={debounceButtonStyles} />
          <SectionButton
            state={buttonFunctionalities}
            dispatch={dispatchButton}
          />
        </>
      )}
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
    </>
  );
};

export default SectionPallete4;
