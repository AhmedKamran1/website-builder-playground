import React from "react";

const SectionTextAlignment = ({
  state,
  dispatch,
  changeTextAlignment,
  children,
}) => {
  return (
    <div>
      <p>{children}</p>
      <select
        value={state.textAlign}
        onChange={(event) =>
          dispatch({
            type: changeTextAlignment,
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
