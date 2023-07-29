import React from "react";

import { useSelector } from "react-redux";

import { navEventTypes } from "@/helpers/constants/event-types/event-types";
import { Checkbox, Divider } from "@mui/material";

import { selectedComponentData } from "@/store/ComponentSlice";
import {
  dropDownLink,
  initialNavbarComponentStyles,
  navLink,
} from "@/helpers/pre-defined-components-styles/navbar-styles";
import NavbarPallete1 from "./navbar-pallete-type-1/Navbar-Pallete-Type-1";
import NavbarPallete2 from "./navbar-pallete-type-2/Navbar-Pallete-Type-2";
import { navbar } from "@/helpers/constants/component-child-lengths/component-child-lengths";

const NavbarPallete = ({ state, dispatch }) => {
  const selectedComponent = useSelector(selectedComponentData);
  const navLinksLength = state.links.length;
  const { styles } = selectedComponent;
  let addPageButtonRendered = false;

  return (
    <>
      {selectedComponent.navId === initialNavbarComponentStyles[0].navId && (
        <NavbarPallete1 state={state} dispatch={dispatch} />
      )}
      <Divider />
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
            <button
              onClick={() =>
                dispatch({
                  type: navEventTypes.DELETENAVLINK,
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
                  type: navEventTypes.CHANGENAVREDIRECTLINK,
                  payload: {
                    linkIndex: linkIndex,
                    redirectLink: event.target.value,
                  },
                })
              }
            />
            {/* {selectedComponent.navId ===
                  initialNavbarComponentStyles[1].navId &&
                  !link.showDropDown && (
                    <NavbarPallete2
                      link={link}
                      linkIndex={linkIndex}
                      dispatch={dispatch}
                    />
                  )} */}
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
              link.dropDown.map((sublink, sublinkIndex) => (
                <React.Fragment key={sublinkIndex}>
                  {sublinkIndex !== 0 && (
                    <button
                      onClick={() =>
                        dispatch({
                          type: navEventTypes.DELETEDROPDOWNLINK,
                          payload: {
                            dropDownIndex: sublinkIndex,
                            linkIndex: linkIndex,
                          },
                        })
                      }
                    >
                      Remove Link
                    </button>
                  )}
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
                  {sublinkIndex + 1 !== navbar.dropDownLinkLimit &&
                    sublinkIndex === link.dropDown.length - 1 && (
                      <button
                        onClick={() =>
                          dispatch({
                            type: navEventTypes.ADDROPDOWNLINK,
                            payload: {
                              dropDownLink: dropDownLink,
                              linkIndex: linkIndex,
                            },
                          })
                        }
                      >
                        Add Link
                      </button>
                    )}
                  <br />
                </React.Fragment>
              ))}
          </div>
          <Divider />
        </React.Fragment>
      ))}
      {navLinksLength !== navbar.navLinkLimit && (
        <button
          onClick={() =>
            dispatch({
              type: navEventTypes.ADDNAVLINK,
              payload: {
                navLink: navLink,
              },
            })
          }
        >
          Add Page
        </button>
      )}
    </>
  );
};

export default NavbarPallete;
