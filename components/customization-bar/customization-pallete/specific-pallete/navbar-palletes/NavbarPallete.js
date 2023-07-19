import { selectedComponentData } from "@/store/ComponentSlice";
import { navEventTypes } from "@/util/event-types";
import React from "react";
import { useSelector } from "react-redux";

const NavbarPallete = ({ state, dispatch }) => {
  const selectedComponent = useSelector(selectedComponentData);

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
              type: navEventTypes.CHANGECOLOR,
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
              type: navEventTypes.CHANGEBGCOLOR,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <p>BRAND</p>
        <label>Inner Text</label>
        <input
          type="text"
          id="innerText1"
          value={state.innerText1}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGEINNERTEXT1,
              payload: event.target.value,
            })
          }
        />
        <label>Redirect Link</label>
        <input
          type="text"
          id="redirectLink1"
          value={state.redirectLink1}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGEREDIRECTLINK1,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <p>Home</p>
        <label>Inner Text</label>
        <input
          type="text"
          id="innerText2"
          value={state.innerText2}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGEINNERTEXT2,
              payload: event.target.value,
            })
          }
        />
        <label>Redirect Link</label>
        <input
          type="text"
          id="redirectLink2"
          value={state.redirectLink2}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGEREDIRECTLINK2,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <p>Contact</p>
        <label>Inner Text</label>
        <input
          type="text"
          id="innerText3"
          value={state.innerText3}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGEINNERTEXT3,
              payload: event.target.value,
            })
          }
        />
        <label>Redirect Link</label>
        <input
          type="text"
          id="redirectLink3"
          value={state.redirectLink3}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGEREDIRECTLINK3,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div>
        <p>About Us</p>
        <label>Inner Text</label>
        <input
          type="text"
          id="innerText4"
          value={state.innerText4}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGEINNERTEXT4,
              payload: event.target.value,
            })
          }
        />
        <label>Redirect Link</label>
        <input
          type="text"
          id="redirectLink4"
          value={state.redirectLink4}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGEREDIRECTLINK4,
              payload: event.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default NavbarPallete;
