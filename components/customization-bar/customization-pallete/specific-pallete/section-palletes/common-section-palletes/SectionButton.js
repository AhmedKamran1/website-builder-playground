import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import { Checkbox } from "@mui/material";
import React from "react";

const SectionButton = ({ state, dispatch }) => {
  return (
    <>
      <div>
        <p>Button Text</p>
        <textarea
          value={state.buttonText}
          onInput={(event) =>
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
        <textarea
          value={state.buttonRedirectLink}
          onInput={(event) =>
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
