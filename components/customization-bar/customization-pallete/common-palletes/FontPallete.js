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
        id="Normal"
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
      <label htmlFor="Normal">Normal</label>
      <input
        type="radio"
        id="Bold"
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
      <label htmlFor="Bold">Bold</label>
      <input
        type="radio"
        id="Italic"
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
      <label htmlFor="Italic">Italic</label>
    </div>
  );
};

export default FontPallete;
