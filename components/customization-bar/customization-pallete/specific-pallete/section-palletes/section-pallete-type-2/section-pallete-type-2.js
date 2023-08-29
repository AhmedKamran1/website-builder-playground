import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";
import { Checkbox } from "@mui/material";
import ButtonPallete from "../../../common-palletes/ButtonPallete";
import SectionButton from "../common-section-palletes/SectionButton";
import CollorPallete from "../../../common-palletes/CollorPallete";
import FontPallete from "../../../common-palletes/FontPallete";
import SectionTextAlignment from "../common-section-palletes/SectionTextAlignment";
import SectionTextContent from "../common-section-palletes/SectionTextContent";

const SectionPallete2 = ({
  buttonFunctionalities,
  textFunctionalities,
  subHeadingStyles,
  buttonStyles,
  dispatchText,
  dispatchButton,
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
          <ButtonPallete
            state={buttonStyles}
            dispatch={debounceButtonStyles}
          />
          <SectionButton
            state={buttonFunctionalities}
            dispatch={dispatchButton}
          />
        </>
      )}
    </>
  );
};

export default SectionPallete2;
