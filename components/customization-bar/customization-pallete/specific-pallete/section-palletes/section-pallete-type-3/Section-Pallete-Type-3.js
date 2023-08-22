import React, { useEffect, useState } from "react";
import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import { Box, Slider } from "@mui/material";
import SectionGridTextArea from "../common-section-palletes/SectionGridTextArea";
import SectionGridImage from "../common-section-palletes/SectionGridImage";

const SectionPallete3 = ({ gridItem, gridIndex, dispatchGridImageActions }) => {
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

export default SectionPallete3;
