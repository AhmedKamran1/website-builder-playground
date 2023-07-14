import React from "react";

import { eventType } from "@/util/event-types";

const CommonPallete = ({ state, dispatch }) => {
  return (
    <>
      <div>
        <label htmlFor="color">color</label>
        <input
          type="color"
          id="color"
          value={state.color}
          onInput={(event) =>
            dispatch({
              type: eventType.CHANGECOLOR,
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
              type: eventType.CHANGEBGCOLOR,
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

export default CommonPallete;
