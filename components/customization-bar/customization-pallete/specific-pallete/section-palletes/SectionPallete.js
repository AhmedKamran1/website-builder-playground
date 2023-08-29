import React from "react";

import { useSelector } from "react-redux";

import useDebouncedDispatch from "@/hooks/use-debounce";

import SectionPallete1 from "./section-pallete-type-1/Section-Pallete-Type-1";
import SectionPallete2 from "./section-pallete-type-2/Section-Pallete-Type-2";
import SectionPallete3 from "./section-pallete-type-3/Section-Pallete-Type-3";
import SectionPallete4 from "./section-pallete-type-4/Section-Pallete-Type-4";
import SectionPallete5 from "./section-pallete-type-5/Section-Pallete-Type-5";
import SectionPallete6 from "./section-pallete-type-6/Section-Pallete-Type-6";

import { selectedComponentData } from "@/store/ComponentSlice";

import SectionCommonStyles from "./common-section-palletes/SectionCommonStyles";

const SectionPallete = ({
  textFunctionalities,
  imageFunctionalities,
  buttonFunctionalities,
  gridItemsFunctionalities,
  headingStyles,
  paragraphStyles,
  subHeadingStyles,
  pricingStyles,
  imageStyles,
  blockStyles,
  cardStyles,
  buttonStyles,
  dispatchText,
  dispatchImage,
  dispatchButton,
  dispatchGridItems,
  dispatchHeadingStyles,
  dispatchParagraphStyles,
  dispatchSubHeadingStyles,
  dispatchPricingStyles,
  dispatchImageStyles,
  dispatchBlockStyles,
  dispatchCardStyles,
  dispatchButtonStyles,
}) => {
  const selectedComponent = useSelector(selectedComponentData);

  const debounceHeadingStyles = useDebouncedDispatch(
    dispatchHeadingStyles,
    200
  );
  const debounceParagraphStyles = useDebouncedDispatch(
    dispatchParagraphStyles,
    200
  );

  const debounceSubHeadingStyles = useDebouncedDispatch(
    dispatchSubHeadingStyles,
    200
  );

  const debounceImageStyles = useDebouncedDispatch(dispatchImageStyles, 200);
  const debounceBlockStyles = useDebouncedDispatch(dispatchBlockStyles, 200);

  const debounceCardStyles = useDebouncedDispatch(dispatchCardStyles, 200);

  const debounceButtonStyles = useDebouncedDispatch(dispatchButtonStyles, 200);

  const debouncePricingStyles = useDebouncedDispatch(
    dispatchPricingStyles,
    200
  );

  return (
    <>
      <SectionCommonStyles
        blockStyles={blockStyles}
        headingStyles={headingStyles}
        paragraphStyles={paragraphStyles}
        debounceBlockStyles={debounceBlockStyles}
        debounceHeadingStyles={debounceHeadingStyles}
        debounceParagraphStyles={debounceParagraphStyles}
      />
      {selectedComponent.secId === "1" && (
        <SectionPallete1
          textFunctionalities={textFunctionalities}
          buttonFunctionalities={buttonFunctionalities}
          imageFunctionalities={imageFunctionalities}
          blockStyles={blockStyles}
          imageStyles={imageStyles}
          buttonStyles={buttonStyles}
          subHeadingStyles={subHeadingStyles}
          dispatchText={dispatchText}
          dispatchButton={dispatchButton}
          dispatchImage={dispatchImage}
          debounceBlockStyles={debounceBlockStyles}
          debounceImageStyles={debounceImageStyles}
          debounceButtonStyles={debounceButtonStyles}
          debounceSubHeadingStyles={debounceSubHeadingStyles}
        />
      )}
      {selectedComponent.secId === "2" && (
        <SectionPallete2
          buttonFunctionalities={buttonFunctionalities}
          textFunctionalities={textFunctionalities}
          subHeadingStyles={subHeadingStyles}
          buttonStyles={buttonStyles}
          dispatchText={dispatchText}
          dispatchButton={dispatchButton}
          debounceButtonStyles={debounceButtonStyles}
          debounceSubHeadingStyles={debounceSubHeadingStyles}
        />
      )}
      {selectedComponent.secId === "3" && (
        <SectionPallete3
          gridItemsFunctionalities={gridItemsFunctionalities}
          buttonFunctionalities={buttonFunctionalities}
          buttonStyles={buttonStyles}
          imageStyles={imageStyles}
          dispatchButton={dispatchButton}
          dispatchGridItems={dispatchGridItems}
          dispatchImageStyles={dispatchImageStyles}
          debounceButtonStyles={debounceButtonStyles}
        />
      )}
      {selectedComponent.secId === "4" && (
        <SectionPallete4
          textFunctionalities={textFunctionalities}
          buttonFunctionalities={buttonFunctionalities}
          cardStyles={cardStyles}
          buttonStyles={buttonStyles}
          dispatchText={dispatchText}
          dispatchButton={dispatchButton}
          debounceCardStyles={debounceCardStyles}
          debounceButtonStyles={debounceButtonStyles}
        />
      )}
      {selectedComponent.secId === "5" && (
        <SectionPallete5
          cardStyles={cardStyles}
          buttonStyles={buttonStyles}
          pricingStyles={pricingStyles}
          gridItemsFunctionalities={gridItemsFunctionalities}
          dispatchGridItems={dispatchGridItems}
          debounceCardStyles={debounceCardStyles}
          debounceButtonStyles={debounceButtonStyles}
          debouncePricingStyles={debouncePricingStyles}
        />
      )}
      {selectedComponent.secId === "6" && (
        <SectionPallete6
          cardStyles={cardStyles}
          buttonStyles={buttonStyles}
          pricingStyles={pricingStyles}
          gridItemsFunctionalities={gridItemsFunctionalities}
          dispatchGridItems={dispatchGridItems}
          debounceCardStyles={debounceCardStyles}
          debounceButtonStyles={debounceButtonStyles}
          debouncePricingStyles={debouncePricingStyles}
        />
      )}
    </>
  );
};

export default SectionPallete;
