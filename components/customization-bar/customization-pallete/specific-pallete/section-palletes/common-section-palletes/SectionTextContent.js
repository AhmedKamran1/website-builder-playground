import React from "react";

const SectionTextContent = ({
  state,
  dispatch,
  changeTextContent,
  children,
}) => {
  return (
    <div>
      <p>{children}</p>
      <textarea
        value={state}
        onInput={(event) =>
          dispatch({
            type: changeTextContent,
            payload: event.target.value,
          })
        }
      />
    </div>
  );
};

export default SectionTextContent;
