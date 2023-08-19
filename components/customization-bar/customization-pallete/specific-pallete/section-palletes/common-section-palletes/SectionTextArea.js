import React from "react";

const SectionTextArea = ({
  state,
  dispatch,
  changeHeadingText,
  changeParagraphText,
}) => {
  return (
    <>
      <div>
        <p>Heading Text</p>
        <textarea
          value={state.headingText}
          onInput={(event) =>
            dispatch({
              type: changeHeadingText,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <p>Paragraph Text</p>
        <textarea
          value={state.paragraphText}
          onInput={(event) =>
            dispatch({
              type: changeParagraphText,
              payload: event.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default SectionTextArea;
