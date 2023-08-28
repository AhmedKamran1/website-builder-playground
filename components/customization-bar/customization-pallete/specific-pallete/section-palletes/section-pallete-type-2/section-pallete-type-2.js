import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";
import SectionTextArea from "../common-section-palletes/SectionTextArea";
import { Checkbox } from "@mui/material";
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionButton from "../common-section-palletes/SectionButton";
import CollorPallete from "../../../common-palletes/CollorPallete";
import SectionSubHeading from "../common-section-palletes/SectionSubHeading";
import SectionSubHeadingAlignment from "../common-section-palletes/SectionSubHeadingAlignment";
import FontPallete from "../../../common-palletes/FontPallete";

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

export default SectionPallete2;
