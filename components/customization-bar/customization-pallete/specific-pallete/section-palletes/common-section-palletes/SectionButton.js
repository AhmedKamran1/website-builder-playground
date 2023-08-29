import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import { Checkbox } from "@mui/material";
import React from "react";

const SectionButton = ({ state, dispatch }) => {
  return (
    <>
      <div>
        <p>Button Text</p>
        <input
          type="text"
          value={state.buttonText}
          onChange={(event) =>
            dispatch({
              type: SectionEventTypesEnum.sectionButtonFunctionalities
                .CHANGEBUTTONTEXT,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <p>Button Redirect Link</p>
        <input
          type="text"
          value={state.buttonRedirectLink}
          onChange={(event) =>
            dispatch({
              type: SectionEventTypesEnum.sectionButtonFunctionalities
                .CHANGEBUTTONREDIRECTLINK,
              payload: event.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default SectionButton;
