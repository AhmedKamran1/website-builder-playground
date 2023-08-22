import React, { useEffect, useState } from "react";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridImage from "../common-section-palletes/SectionGridImage";

const SectionPallete6 = ({ gridItem, gridIndex, dispatchGridImageActions }) => {
  return (
    <>
      <SectionGridTextArea
        gridItem={gridItem}
        gridIndex={gridIndex}
        dispatchGridImageActions={dispatchGridImageActions}
      />
      <SectionGridImage
        gridItem={gridItem}
        gridIndex={gridIndex}
        dispatchGridImageActions={dispatchGridImageActions}
      />
    </>
  );
};

export default SectionPallete6;
