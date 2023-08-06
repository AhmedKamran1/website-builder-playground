import React from "react";

import {
  buttonEventType,
  commonEventType,
} from "@/helpers/constants/event-types/event-types";
import CollorPallete from "../common-palletes/CollorPallete";
import FontPallete from "../common-palletes/FontPallete";
import HoverColorPallete from "../common-palletes/HoverColorPallete";

import useDebouncedDispatch from "@/hooks/use-debounce";

const ButtonPallete = ({ state, dispatch }) => {
  const debounceDispatchButtonActions = useDebouncedDispatch(
    dispatch,
    200
  );
  return (
    <>
      <CollorPallete
        state={state.styles}
        dispatch={debounceDispatchButtonActions}
        changeColor={commonEventType.CHANGECOLOR}
        changeBackgroundColor={commonEventType.CHANGEBGCOLOR}
      />
      <FontPallete
        state={state.extraFunctionalities}
        dispatch={debounceDispatchButtonActions}
        changeFontWeight={buttonEventType.CHANGEFONTWEIGHT}
        changeFontStyle={buttonEventType.CHANGEFONTSTYLE}
        fontPalleteName="buttonStyles"
      />
      <HoverColorPallete
        state={state.styles}
        dispatch={debounceDispatchButtonActions}
        changeHoverColor={buttonEventType.CHANGEHOVERCOLOR}
      />
      <div>
        <label htmlFor="innerText">Change Text: </label>
        <input
          type="text"
          id="innerText"
          value={state.extraFunctionalities.innerText}
          onChange={(event) =>
            dispatch({
              type: buttonEventType.CHANGEINNERTEXT,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="redirectLink">Redirect Link</label>
        <input
          type="text"
          id="redirectLink"
          value={state.extraFunctionalities.redirectLink}
          onChange={(event) =>
            dispatch({
              type: buttonEventType.CHANGEREDIRECTLINK,
              payload: event.target.value,
            })
          }
        />
      </div>
      {/* <div>
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
      </div> */}
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
