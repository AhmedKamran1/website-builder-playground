import React from "react";

import { navEventTypes } from "@/util/event-types";

import axios from "axios";

const NavbarPallete1 = ({ state, dispatch }) => {
  //TITLE AND IMAGE

  const changeNavLogoHandler = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "zpzzsofa");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dhs1iquvc/image/upload",
      formData
    );
    const { url: navbarLogo } = response.data;
    dispatch({
      type: navEventTypes.CHANGENAVLOGO,
      payload: navbarLogo,
    });
  };

  return (
    <div>
      <span>Title</span>
      <input
        type="text"
        value={state.title}
        onChange={(event) =>
          dispatch({
            type: navEventTypes.CHANGENAVTITLE,
            payload: event.target.value,
          })
        }
      />
      <br />
      <span>Logo</span>
      <input type="file" onChange={changeNavLogoHandler} />
      {/* <input
        type="text"
        value={state.logo}
        onChange={(event) =>
          dispatch({
            type: navEventTypes.CHANGENAVLOGO,
            payload: event.target.value,
          })
        }
      /> */}
    </div>
  );
};

export default NavbarPallete1;
