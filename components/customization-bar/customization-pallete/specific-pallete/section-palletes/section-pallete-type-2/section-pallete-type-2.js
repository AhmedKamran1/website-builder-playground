import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import SectionTextArea from "../common-section-palletes/SectionTextArea";

const SectionPallete2 = ({ textFunctionalities, dispatchTextActions }) => {
  return (
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
  );
};

export default SectionPallete2;
