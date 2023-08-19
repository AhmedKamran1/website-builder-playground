import React from "react";

const CollorPallete = ({ state, dispatch, changeColor }) => {
  return (
    <div>
      <label htmlFor="color">color</label>
      <input
        type="color"
        id="color"
        value={state.colorHex}
        onInput={(event) =>
          dispatch({
            type: changeColor,
            payload: event.target.value,
          })
        }
      />
    </div>
  );
};

export default CollorPallete;
