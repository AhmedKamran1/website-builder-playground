import React from "react";

import { initialSectionComponentStyles } from "@/helpers/pre-defined-components-styles/section-styles";

import SectionType1 from "./section-types/Section-Type-1";
import SectionType2 from "./section-types/Section-Type-2";
import SectionType3 from "./section-types/Section-Type-3";

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
    </>
  );
};

export default Section;
