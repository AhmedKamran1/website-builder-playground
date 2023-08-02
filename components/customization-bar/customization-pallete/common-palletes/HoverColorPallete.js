import React from "react";

const HoverColorPallete = ({ state, dispatch, changeHoverColor }) => {
  return (
    <div>
      <label htmlFor="hoverColor">Hover Color</label>
      <input
        type="color"
        id="hoverColor"
        value={state.hoverColor}
        onInput={(event) =>
          dispatch({
            type: changeHoverColor,
            payload: event.target.value,
          })
        }
      />
    </div>
  );
};

export default HoverColorPallete;
