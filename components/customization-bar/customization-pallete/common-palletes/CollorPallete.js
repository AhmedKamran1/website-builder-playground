import React from "react";

const CollorPallete = ({
  state,
  dispatch,
  changeColor,
  changeBackgroundColor,
}) => {
  return (
    <>
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
      {/* <div>
    <label htmlFor="height">height</label>
    <input
      type="text"
      id="height"
      value={state.height}
      onChange={(event) =>
        styleChangeHandler(event, eventType.CHANGEHEIGHT)
      }
    />
    <select
      value={state.heightUnit}
      onChange={(event) =>
        styleChangeHandler(event, eventType.CHANGEHEIGHTUNIT)
      }
    >
      {heightSpecificUnits.map((unit, index) => (
        <option key={index}>{unit}</option>
      ))}
    </select>
  </div> */}
    </>
  );
};

export default CollorPallete;
