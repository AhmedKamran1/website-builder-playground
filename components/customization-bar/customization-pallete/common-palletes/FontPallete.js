import React from "react";

const FontPallete = ({
  state,
  dispatch,
  changeFontWeight,
  changeFontStyle,
  fontPalleteName,
}) => {
  return (
    <div>
      <p>Font Type: </p>
      <input
        type="radio"
        checked={state.fontWeight === "normal"}
        value="normal"
        name={fontPalleteName}
        onChange={(event) =>
          dispatch({
            type: changeFontWeight,
            payload: event.target.value,
          })
        }
      />
      <label>Normal</label>
      <input
        type="radio"
        checked={state.fontWeight === "bold"}
        value="bold"
        name={fontPalleteName}
        onChange={(event) =>
          dispatch({
            type: changeFontWeight,
            payload: event.target.value,
          })
        }
      />
      <label>Bold</label>
      <input
        type="radio"
        checked={state.fontStyle === "italic"}
        value="italic"
        name={fontPalleteName}
        onChange={(event) =>
          dispatch({
            type: changeFontStyle,
            payload: event.target.value,
          })
        }
      />
      <label>Italic</label>
    </div>
  );
};

export default FontPallete;
