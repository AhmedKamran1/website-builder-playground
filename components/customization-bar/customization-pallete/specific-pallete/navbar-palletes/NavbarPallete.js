import React from "react";

import { useSelector } from "react-redux";

import { navEventTypes } from "@/util/event-types";
import { Checkbox, Divider } from "@mui/material";

import { selectedComponentData } from "@/store/ComponentSlice";
import { initialNavbarComponentStyles } from "@/styles/pre-defined-components-styles/navbar-styles";
import NavbarPallete1 from "./navbar-pallete-type-1/Navbar-Pallete-Type-1";
import NavbarPallete2 from "./navbar-pallete-type-2/Navbar-Pallete-Type-2";

const NavbarPallete = ({ state, dispatch }) => {
  const selectedComponent = useSelector(selectedComponentData);
  const { styles } = selectedComponent;

  return (
    <>
      {selectedComponent.navId === initialNavbarComponentStyles[0].navId && (
        <NavbarPallete1 state={state} dispatch={dispatch} />
      )}
      <Divider />
      {state.links.map(
        (link, linkIndex) =>
          link?.showLink && (
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
                <button
                  onClick={() =>
                    dispatch({
                      type: navEventTypes.CHANGENAVLINKVISIBILITY,
                      payload: {
                        linkIndex: linkIndex,
                      },
                    })
                  }
                >
                  Remove page
                </button>
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
                {selectedComponent.navId ===
                  initialNavbarComponentStyles[1].navId && !link.showDropDown && (
                  <NavbarPallete2 link={link} linkIndex={linkIndex} dispatch={dispatch} />
                )}
                <p style={{ fontWeight: "bold" }}>
                  Drop Down Menu
                  <Checkbox
                    checked={link.showDropDown}
                    onChange={() =>
                      dispatch({
                        type: navEventTypes.CHANGEDROPDOWNVISIBILITY,
                        payload: {
                          linkIndex: linkIndex,
                        },
                      })
                    }
                  />
                </p>
                {link.showDropDown &&
                  link.dropDown.map(
                    (sublink, sublinkIndex) =>
                      sublink.showDropDownLink && (
                        <React.Fragment key={sublinkIndex}>
                          {/* <button>Remove Link</button> */}
                          <br />
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
                          {sublink.showDropDownLink && (
                            <button
                              onClick={() =>
                                dispatch({
                                  type: navEventTypes.CHANGEDROPDOWNLINKVISIBILITY,
                                  payload: {
                                    linkIndex: linkIndex,
                                    dropDownIndex: sublinkIndex + 1,
                                  },
                                })
                              }
                            >
                              Add Link
                            </button>
                          )}
                          <br />
                        </React.Fragment>
                      )
                  )}
              </div>
              <Divider />
            </React.Fragment>
          )
      )}
      {state.links.map(
        (link, linkIndex) =>
          !link.showLink && (
            <button
              key={linkIndex}
              onClick={() =>
                dispatch({
                  type: navEventTypes.CHANGENAVLINKVISIBILITY,
                  payload: {
                    linkIndex: linkIndex,
                  },
                })
              }
            >
              Add Page
            </button>
          )
      )}
    </>
  );
};

export default NavbarPallete;
