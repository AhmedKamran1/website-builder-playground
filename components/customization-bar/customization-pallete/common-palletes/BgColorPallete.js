import React from "react";

const BgColorPallete = ({
  state,
  dispatch,
  changeBackgroundColor,
}) => {
  return (
    <div>
      <label htmlFor="bgColor">background color</label>
      <input
        type="color"
        id="bgColor"
        value={state.backgroundColor}
        onInput={(event) =>
          dispatch({
            type: changeBackgroundColor,
            payload: event.target.value,
          })
        }
      />
    </div>
  );
};

export default BgColorPallete;
