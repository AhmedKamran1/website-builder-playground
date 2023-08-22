import React, { useEffect, useState } from "react";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridCardColor from "../common-section-palletes/SectionGridCardColor";

const SectionPallete5 = ({ gridItem, gridIndex, dispatchGridImageActions }) => {
  return (
    <>
      <SectionGridTextArea
        gridItem={gridItem}
        gridIndex={gridIndex}
        dispatchGridImageActions={dispatchGridImageActions}
      />
      {/* <SectionGridCardColor /> */}
    </>
  );
};

export default SectionPallete5;
