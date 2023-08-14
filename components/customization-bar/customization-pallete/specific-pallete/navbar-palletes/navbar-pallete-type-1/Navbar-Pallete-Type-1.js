import React from "react";

import { NavEventTypesEnum } from "@/helpers/constants/event-types/event-types";

const NavbarPallete1 = ({ state, dispatch }) => {
  return (
    <div>
      <span>Title</span>
      <input
        type="text"
        value={state.title}
        onChange={(event) =>
          dispatch({
            type: NavEventTypesEnum.navbarFunctionalities.CHANGENAVTITLE,
            payload: event.target.value,
          })
        }
      />
    </div>
  );
};

export default NavbarPallete1;
