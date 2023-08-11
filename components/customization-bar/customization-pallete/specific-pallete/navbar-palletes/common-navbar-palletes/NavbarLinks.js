import React from "react";

import { useSelector } from "react-redux";
import { selectedComponentData } from "@/store/ComponentSlice";

import { navEventTypes } from "@/helpers/constants/event-types/event-types";

const NavbarLinks = ({ link, linkIndex, dispatch }) => {
  const selectedComponent = useSelector(selectedComponentData);
  const { styles } = selectedComponent;
  return (
    <>
      <span
        style={{
          backgroundColor: styles.navLinkStyles.backgroundColor,
          color: styles.navLinkStyles.colorHex,
        }}
      >
        {link.innerText}
      </span>
      {linkIndex !== 0 && (
        <button
          onClick={() =>
            dispatch({
              type: navEventTypes.navbarFunctionalities.DELETENAVLINK,
              payload: {
                linkIndex: linkIndex,
              },
            })
          }
        >
          Remove page
        </button>
      )}
      <br />
      <label>Inner Text</label>
      <input
        type="text"
        id="innerText0"
        value={link.innerText}
        onChange={(event) =>
          dispatch({
            type: navEventTypes.navbarFunctionalities.CHANGENAVINNERTEXT,
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
            type: navEventTypes.navbarFunctionalities.CHANGENAVREDIRECTLINK,
            payload: {
              linkIndex: linkIndex,
              redirectLink: event.target.value,
            },
          })
        }
      />
    </>
  );
};

export default NavbarLinks;
