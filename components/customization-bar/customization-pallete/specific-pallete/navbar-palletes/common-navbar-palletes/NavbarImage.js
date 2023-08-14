import React, { useEffect, useState } from "react";

import axios from "axios";
import { NavEventTypesEnum } from "@/helpers/constants/event-types/event-types";

const NavbarLogo = ({ dispatch }) => {
  //TITLE AND IMAGE
  const [imageFile, setImageFile] = useState(null);

  const temporaryNavLogoHandler = (event) => {
    setImageFile(event.target.files[0]);
  };

  useEffect(() => {
    if (imageFile) {
      dispatch({
        type: NavEventTypesEnum.navbarFunctionalities.CHANGENAVLOGO,
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
      type: NavEventTypesEnum.navbarFunctionalities.CHANGENAVLOGO,
      payload: navbarLogo,
    });
  };

  return (
    <>
      <span>Logo</span>
      <input type="file" accept="image/*" onChange={temporaryNavLogoHandler} />
    </>
  );
};

export default NavbarLogo;
