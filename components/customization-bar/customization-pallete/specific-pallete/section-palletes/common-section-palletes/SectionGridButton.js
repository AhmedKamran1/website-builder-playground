import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import React from "react";

const SectionGridButton = ({
  gridItem,
  dispatchGridImageActions,
  gridIndex,
}) => {
  const { buttonFunctionalities } = gridItem;

  return (
    <>
      <p>Button Text</p>
      <input
        type="text"
        value={buttonFunctionalities?.buttonText ?? ""}
        onChange={(event) =>
          dispatchGridImageActions({
            type: SectionEventTypesEnum.sectionGridImageFunctionalities
              .CHANGEGRIDBUTTONTEXT,
            payload: {
              gridIndex: gridIndex,
              buttonText: event.target.value,
            },
          })
        }
      />

      <p>Button Redirect Link</p>
      <input
        type="text"
        value={buttonFunctionalities?.buttonRedirectLink ?? ""}
        onChange={(event) =>
          dispatchGridImageActions({
            type: SectionEventTypesEnum.sectionGridImageFunctionalities
              .CHANGEGRIDBUTTONREDIRECTLINK,
            payload: {
              gridIndex: gridIndex,
              buttonRedirectLink: event.target.value,
            },
          })
        }
      />
    </>
  );
};

export default SectionGridButton;
