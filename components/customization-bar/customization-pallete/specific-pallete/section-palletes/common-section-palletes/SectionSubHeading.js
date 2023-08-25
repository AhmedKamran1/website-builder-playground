import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import React from "react";

const SectionSubHeading = ({ state, dispatch }) => {
  return (
    <>
      <div>
        <p>Sub heading Text</p>
        <textarea
          value={state.subHeadingText}
          onInput={(event) =>
            dispatch({
              type: SectionEventTypesEnum.sectionTextFunctionalities
                .CHANGESUBHEADINGTEXT,
              payload: event.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default SectionSubHeading;
