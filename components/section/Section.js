import React from "react";

import { initialSectionComponentStyles } from "@/helpers/pre-defined-components-styles/section-styles";

import SectionType1 from "./section-types/Section-Type-1";
import SectionType2 from "./section-types/Section-Type-2";
import SectionType3 from "./section-types/Section-Type-3";
import SectionType4 from "./section-types/Section-Type-4";
import SectionType5 from "./section-types/Section-Type-5";
import SectionType6 from "./section-types/Section-Type-6";

const Section = ({
  sectionId,
  styles,
  extraFunctionalities,
  componentSelectionHandler,
  isfocused,
}) => {
  return (
    <>
      {sectionId === initialSectionComponentStyles[0].secId && (
        <SectionType1
          extraFunctionalities={extraFunctionalities}
          isfocused={isfocused}
          componentSelectionHandler={componentSelectionHandler}
          styles={styles}
        />
      )}
      {sectionId === initialSectionComponentStyles[1].secId && (
        <SectionType2
          extraFunctionalities={extraFunctionalities}
          isfocused={isfocused}
          componentSelectionHandler={componentSelectionHandler}
          styles={styles}
        />
      )}
      {sectionId === initialSectionComponentStyles[2].secId && (
        <SectionType3
          extraFunctionalities={extraFunctionalities}
          isfocused={isfocused}
          componentSelectionHandler={componentSelectionHandler}
          styles={styles}
        />
      )}
      {sectionId === initialSectionComponentStyles[3].secId && (
        <SectionType4
          extraFunctionalities={extraFunctionalities}
          isfocused={isfocused}
          componentSelectionHandler={componentSelectionHandler}
          styles={styles}
        />
      )}
      {sectionId === initialSectionComponentStyles[4].secId && (
        <SectionType5
          extraFunctionalities={extraFunctionalities}
          isfocused={isfocused}
          componentSelectionHandler={componentSelectionHandler}
          styles={styles}
        />
      )}
      {sectionId === initialSectionComponentStyles[5].secId && (
        <SectionType6
          extraFunctionalities={extraFunctionalities}
          isfocused={isfocused}
          componentSelectionHandler={componentSelectionHandler}
          styles={styles}
        />
      )}
    </>
  );
};

export default Section;
