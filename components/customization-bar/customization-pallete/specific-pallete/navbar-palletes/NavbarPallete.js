import React from "react";

import { useSelector } from "react-redux";

import { navEventTypes } from "@/util/event-types";
import { Divider } from "@mui/material";

import { selectedComponentData } from "@/store/ComponentSlice";

const NavbarPallete = ({ state, dispatch }) => {
  const selectedComponent = useSelector(selectedComponentData);
  const { styles } = selectedComponent;

  return (
    <>
      {state.links.map((link, linkIndex) => (
        <React.Fragment key={linkIndex}>
          <div key={linkIndex}>
            <span
              style={{
                backgroundColor: styles.backgroundcolor,
                color: styles.colorhex,
              }}
            >
              {link.innerText}
            </span>
            <br />
            <label>Inner Text</label>
            <input
              type="text"
              id="innerText0"
              value={link.innerText}
              onChange={(event) =>
                dispatch({
                  type: navEventTypes.CHANGENAVINNERTEXT,
                  payload: {
                    linkIndex: linkIndex,
                    innerText: event.target.value,
                  },
                })
              }
            />
            <br />
            <label>Redirect Link</label>
            <input
              type="text"
              id="redirectLink0"
              value={link.redirectLink}
              onChange={(event) =>
                dispatch({
                  type: navEventTypes.CHANGENAVLINK,
                  payload: {
                    linkIndex: linkIndex,
                    redirectLink: event.target.value,
                  },
                })
              }
            />
            <p style={{ fontWeight: "bold" }}>Drop Down Menu</p>
            {link.dropDown.map((sublink, sublinkIndex) => (
              <React.Fragment key={sublinkIndex}>
                <label>Inner Text {sublinkIndex + 1}</label>
                <input
                  type="text"
                  value={sublink.dropDownInnerText}
                  onChange={(event) =>
                    dispatch({
                      type: navEventTypes.CHANGENAVDROPDOWNINNERTEXT,
                      payload: {
                        linkIndex: linkIndex,
                        dropDownIndex: sublinkIndex,
                        dropDownInnerText: event.target.value,
                      },
                    })
                  }
                />
                <br />
                <label>Redirect Link {sublinkIndex + 1}</label>
                <input
                  type="text"
                  value={sublink.dropDownRedirectLink}
                  onChange={(event) =>
                    dispatch({
                      type: navEventTypes.CHANGENAVDROPDOWNLINK,
                      payload: {
                        linkIndex: linkIndex,
                        dropDownIndex: sublinkIndex,
                        dropDownRedirectLink: event.target.value,
                      },
                    })
                  }
                />
                <br />
              </React.Fragment>
            ))}
          </div>
          <Divider />
        </React.Fragment>
      ))}
      {/* <Divider />
      <div>
        <p>BRAND</p>
        <label>Inner Text</label>
        <input
          type="text"
          id="innerText0"
          value={state.links[0].innerText}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVINNERTEXT,
              payload: {
                linkIndex: 0,
                innerText: event.target.value,
              },
            })
          }
        />
        <br />
        <label>Redirect Link</label>
        <input
          type="text"
          id="redirectLink0"
          value={state.links[0].redirectLink}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVLINK,
              payload: {
                linkIndex: 0,
                redirectLink: event.target.value,
              },
            })
          }
        />
        <p style={{ fontWeight: "bold" }}>Drop Down Menu</p>
        <label>Inner Text 1</label>
        <input
          type="text"
          value={state.links[0].dropDown[0].dropDownInnerText}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVDROPDOWNINNERTEXT,
              payload: {
                linkIndex: 0,
                dropDownIndex: 0,
                dropDownInnerText: event.target.value,
              },
            })
          }
        />
        <br />
        <label>Redirect Link 1</label>
        <input
          type="text"
          value={state.links[0].dropDown[0].dropDownRedirectLink}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVDROPDOWNLINK,
              payload: {
                linkIndex: 0,
                dropDownIndex: 0,
                dropDownRedirectLink: event.target.value,
              },
            })
          }
        />
        <br />

        <label>Inner Text 2</label>
        <input
          type="text"
          value={state.links[0].dropDown[1].dropDownInnerText}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVDROPDOWNINNERTEXT,
              payload: {
                linkIndex: 0,
                dropDownIndex: 1,
                dropDownInnerText: event.target.value,
              },
            })
          }
        />
        <br />

        <label>Redirect Link 2</label>
        <input
          type="text"
          value={state.links[0].dropDown[1].dropDownRedirectLink}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVDROPDOWNLINK,
              payload: {
                linkIndex: 0,
                dropDownIndex: 1,
                dropDownRedirectLink: event.target.value,
              },
            })
          }
        />
        <br />

        <label>Inner Text 3</label>
        <input
          type="text"
          value={state.links[0].dropDown[2].dropDownInnerText}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVDROPDOWNINNERTEXT,
              payload: {
                linkIndex: 0,
                dropDownIndex: 2,
                dropDownInnerText: event.target.value,
              },
            })
          }
        />
        <br />

        <label>Redirect Link 3</label>
        <input
          type="text"
          value={state.links[0].dropDown[2].dropDownRedirectLink}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVDROPDOWNLINK,
              payload: {
                linkIndex: 0,
                dropDownIndex: 2,
                dropDownRedirectLink: event.target.value,
              },
            })
          }
        />
      </div>
      <Divider />
      <div>
        <p>Home</p>
        <label>Inner Text</label>
        <input
          type="text"
          id="innerText1"
          value={state.links[1].innerText}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVINNERTEXT,
              payload: {
                linkIndex: 1,
                innerText: event.target.value,
              },
            })
          }
        />
        <br />

        <label>Redirect Link</label>
        <input
          type="text"
          id="redirectLink1"
          value={state.links[1].redirectLink}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVLINK,
              payload: {
                linkIndex: 1,
                redirectLink: event.target.value,
              },
            })
          }
        />
        <p style={{ fontWeight: "bold" }}>Drop Down Menu</p>
        <label>Inner Text 1</label>
        <input type="text" />
        <br />
        <label>Redirect Link</label>
        <input type="text" />
        <br />

        <label>Inner Text 2</label>
        <input type="text" />
        <br />

        <label>Redirect Link</label>
        <input type="text" />
        <br />

        <label>Inner Text 3</label>
        <input type="text" />
        <br />

        <label>Redirect Link</label>
        <input type="text" />
      </div>
      <Divider />
      <div>
        <p>Contact</p>
        <label>Inner Text</label>
        <input
          type="text"
          id="innerText2"
          value={state.links[2].innerText}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVINNERTEXT,
              payload: {
                linkIndex: 2,
                innerText: event.target.value,
              },
            })
          }
        />
        <br />
        <label>Redirect Link</label>
        <input
          type="text"
          id="redirectLink2"
          value={state.links[2].redirectLink}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVLINK,
              payload: {
                linkIndex: 2,
                redirectLink: event.target.value,
              },
            })
          }
        />
        <p style={{ fontWeight: "bold" }}>Drop Down Menu</p>
        <label>Inner Text 1</label>
        <input type="text" />
        <br />
        <label>Redirect Link</label>
        <input type="text" />
        <br />

        <label>Inner Text 2</label>
        <input type="text" />
        <br />

        <label>Redirect Link</label>
        <input type="text" />
        <br />

        <label>Inner Text 3</label>
        <input type="text" />
        <br />

        <label>Redirect Link</label>
        <input type="text" />
      </div>
      <Divider />
      <div>
        <p>About Us</p>
        <label>Inner Text</label>
        <input
          type="text"
          id="innerText3"
          value={state.links[3].innerText}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVINNERTEXT,
              payload: {
                linkIndex: 3,
                innerText: event.target.value,
              },
            })
          }
        />
        <br />
        <label>Redirect Link</label>
        <input
          type="text"
          id="redirectLink3"
          value={state.links[3].redirectLink}
          onChange={(event) =>
            dispatch({
              type: navEventTypes.CHANGENAVLINK,
              payload: {
                linkIndex: 3,
                redirectLink: event.target.value,
              },
            })
          }
        />
        <p style={{ fontWeight: "bold" }}>Drop Down Menu</p>
        <label>Inner Text 1</label>
        <input type="text" />
        <br />
        <label>Redirect Link</label>
        <input type="text" />
        <br />

        <label>Inner Text 2</label>
        <input type="text" />
        <br />

        <label>Redirect Link</label>
        <input type="text" />
        <br />

        <label>Inner Text 3</label>
        <input type="text" />
        <br />

        <label>Redirect Link</label>
        <input type="text" />
      </div> */}
    </>
  );
};

export default NavbarPallete;
