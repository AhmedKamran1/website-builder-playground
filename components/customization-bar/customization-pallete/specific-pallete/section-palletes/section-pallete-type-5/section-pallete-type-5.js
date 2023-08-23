import React, { useEffect, useState } from "react";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridButton from "../common-section-palletes/SectionGridButton";

const SectionPallete5 = ({ gridItem, gridIndex, dispatchGridImageActions }) => {
  return (
    <>
      <SectionGridTextArea
        gridItem={gridItem}
        gridIndex={gridIndex}
        dispatchGridImageActions={dispatchGridImageActions}
      />
      <SectionGridButton
        gridItem={gridItem}
        gridIndex={gridIndex}
        dispatchGridImageActions={dispatchGridImageActions}
      />
    </>
  );
};

export default SectionPallete5;
