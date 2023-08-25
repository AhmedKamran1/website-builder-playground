import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import SectionTextArea from "../common-section-palletes/SectionTextArea";
import { Checkbox } from "@mui/material";
import CommonButtonPallete from "../../../common-palletes/CommonButtonPallete";
import SectionButton from "../common-section-palletes/SectionButton";

const SectionPallete2 = ({
  buttonStyles,
  buttonFunctionalities,
  textFunctionalities,
  dispatchTextActions,
  dispatchButtonFunctionalities,
  debounceSectionButtonStylesActions,
}) => {
  return (
    <>
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
