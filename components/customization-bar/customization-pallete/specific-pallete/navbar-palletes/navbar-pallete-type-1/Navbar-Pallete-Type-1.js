import React, { useEffect, useState } from "react";

import { navEventTypes } from "@/helpers/constants/event-types/event-types";

import axios from "axios";

const NavbarPallete1 = ({ state, dispatch }) => {
  //TITLE AND IMAGE
  const [imageFile, setImageFile] = useState(null);

  const temporaryNavLogoHandler = (event) => {
    setImageFile(event.target.files[0]);
  };

  useEffect(() => {
    if (imageFile) {
      dispatch({
        type: navEventTypes.CHANGENAVLOGO,
        payload: URL.createObjectURL(imageFile),
      });
    }
  }, [imageFile]);

  const uploadNavLogoHandler = async (event) => {
    const formData = new FormData();
    formData.append("file", imageFile);
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
      <input type="file" accept="image/*" onChange={temporaryNavLogoHandler} />

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
