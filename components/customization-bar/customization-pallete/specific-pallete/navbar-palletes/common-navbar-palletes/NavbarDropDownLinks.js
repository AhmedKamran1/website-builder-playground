import { navbar } from "@/helpers/constants/component-child-lengths/component-child-lengths";
import { navEventTypes } from "@/helpers/constants/event-types/event-types";
import { dropDownLink } from "@/helpers/pre-defined-components-styles/navbar-styles";
import React from "react";

const NavbarDropDownLinks = ({
  link,
  linkIndex,
  sublink,
  sublinkIndex,
  dispatch,
}) => {
  return (
    <>
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
    </>
  );
};

export default NavbarDropDownLinks;
