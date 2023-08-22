import React from "react";

const SectionGridCardColor = ({ cardStyles, dispatchGridImageActions }) => {
  return (
    <div>
      <label>card color</label>
      <input
        type="color"
        id="color"
        value={cardStyles.colorHex}
        onInput={(event) =>
          dispatchGridImageActions({
            type: changeColor,
            payload: {
              gridIndex: gridIndex,
              colorHex: event.target.value,
            },
          })
        }
      />
    </div>
  );
};

export default SectionGridCardColor;
