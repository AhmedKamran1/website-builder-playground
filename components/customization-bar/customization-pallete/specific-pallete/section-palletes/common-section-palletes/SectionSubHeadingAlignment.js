import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import React from "react";

const SectionSubHeadingAlignment = ({ state, dispatch }) => {
  return (
    <>
      <p>Sub heading Alignment</p>
      <select
        value={state.textAlign}
        onChange={(event) =>
          dispatch({
            type: SectionEventTypesEnum.subHeadingStyles
              .CHANGESUBHEADINGTEXTALIGNMENT,
            payload: event.target.value,
          })
        }
      >
        <option value="center">Center</option>
        <option value="right">Right</option>
        <option value="left">Left</option>
      </select>
    </>
  );
};

export default SectionSubHeadingAlignment;
