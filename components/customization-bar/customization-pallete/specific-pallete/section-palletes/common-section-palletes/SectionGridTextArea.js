import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import React from "react";

const SectionGridTextArea = ({
  gridItem,
  gridIndex,
  dispatchGridImageActions,
}) => {
  const { textFunctionalities } = gridItem;

  return (
    <>
      {/* GRID TEXT */}
      <div>
        <p>Heading Text</p>
        <textarea
          value={textFunctionalities.headingText}
          onInput={(event) =>
            dispatchGridImageActions({
              type: SectionEventTypesEnum.sectionGridImageFunctionalities
                .CHANGEGRIDHEADINGTEXT,
              payload: {
                gridIndex: gridIndex,
                headingText: event.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <p>Paragraph Text</p>
        <textarea
          value={textFunctionalities.paragraphText}
          onInput={(event) =>
            dispatchGridImageActions({
              type: SectionEventTypesEnum.sectionGridImageFunctionalities
                .CHANGEGRIDPARAGRAPHTEXT,
              payload: {
                gridIndex: gridIndex,
                paragraphText: event.target.value,
              },
            })
          }
        />
      </div>
    </>
  );
};

export default SectionGridTextArea;
