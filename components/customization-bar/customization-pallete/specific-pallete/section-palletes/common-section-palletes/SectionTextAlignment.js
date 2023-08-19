import React from "react";

const SectionTextAlignment = ({
  headingState,
  paragraphState,
  dispatchHeadingStyles,
  dispatchParagraphStyles,
  changeHeadingAlignment,
  changeParagraphAlignment,
}) => {
  return (
    <div>
      {/* heading alignment */}
      <p>Heading Alignment</p>
      <select
        value={headingState.textAlign}
        onChange={(event) =>
          dispatchHeadingStyles({
            type: changeHeadingAlignment,
            payload: event.target.value,
          })
        }
      >
        <option value="center">Center</option>
        <option value="right">Right</option>
        <option value="left">Left</option>
      </select>
      {/* paragraph alignment */}
      <p>Paragraph Alignment</p>
      <select
        value={paragraphState.textAlign}
        onChange={(event) =>
          dispatchParagraphStyles({
            type: changeParagraphAlignment,
            payload: event.target.value,
          })
        }
      >
        <option value="center">Center</option>
        <option value="right">Right</option>
        <option value="left">Left</option>
      </select>
    </div>
  );
};

export default SectionTextAlignment;
