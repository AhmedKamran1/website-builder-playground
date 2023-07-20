import React from "react";

import { buttonEventType } from "@/util/event-types";

const ButtonPallete = ({ fonts, state, dispatch }) => {
  return (
    <>
      <div>
        <label htmlFor="redirectLink">Redirect Link</label>
        <input
          type="text"
          id="redirectLink"
          value={state.redirectLink}
          onChange={(event) =>
            dispatch({
              type: buttonEventType.CHANGEREDIRECTLINK,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <p>Font Type: </p>

        <input
          type="radio"
          id="Normal"
          checked={state.fontWeight === "normal"}
          value="normal"
          name="font-type"
          onChange={(event) =>
            dispatch({
              type: buttonEventType.CHANGEFONTWEIGHT,
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
          name="font-type"
          onChange={(event) =>
            dispatch({
              type: buttonEventType.CHANGEFONTWEIGHT,
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
          name="font-type"
          onChange={(event) =>
            dispatch({
              type: buttonEventType.CHANGEFONTSTYLE,
              payload: event.target.value,
            })
          }
        />
        <label htmlFor="Italic">Italic</label>
      </div>
      <div>
        <label htmlFor="hoverColor">Hover Color</label>
        <input
          type="color"
          id="hoverColor"
          value={state.hoverColor}
          onInput={(event) =>
            dispatch({
              type: buttonEventType.CHANGEHOVERCOLOR,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="innerText">Change Text: </label>
        <input
          type="text"
          id="innerText"
          value={state.innerText}
          onChange={(event) =>
            dispatch({
              type: buttonEventType.CHANGEINNERTEXT,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="fontType">Font Type: </label>
        <select
          value={state.fontFamily}
          onChange={(event) =>
            dispatch({
              type: buttonEventType.CHANGEFONTFAMILY,
              payload: event.target.value,
            })
          }
        >
          {fonts.map((font, index) => (
            <option style={{ fontFamily: font.font }} key={index}>
              {font.font}
            </option>
          ))}
        </select>
      </div>
      {/* <div>
            <input
              type="radio"
              id="Enable"
              checked={state.disableButton === "enable"}
              value="enable"
              name="button-availability"
              onChange={(event) =>
                styleChangeHandler(event, eventType.CHANGEdisableButton)
              }
            />
            <label htmlFor="Enable">Enable</label>
            <input
              type="radio"
              id="Disable"
              checked={state.disableButton === "disable"}
              value="disable"
              name="button-availability"
              onChange={(event) =>
                styleChangeHandler(event, eventType.CHANGEdisableButton)
              }
            />
            <label htmlFor="Disable">Disable</label>
          </div> */}
    </>
  );
};

export default ButtonPallete;
