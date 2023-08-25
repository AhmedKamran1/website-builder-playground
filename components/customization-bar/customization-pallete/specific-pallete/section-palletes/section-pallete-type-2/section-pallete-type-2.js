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
  buttonStyles,
  subHeadingStyles,
  buttonFunctionalities,
  textFunctionalities,
  dispatchTextActions,
  dispatchButtonFunctionalities,
  debounceSectionButtonStylesActions,
  debounceSectionSubHeadingStylesActions,
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

export default SectionPallete2;
