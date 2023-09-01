import React, { useEffect, useState } from "react";

const ChangeImage = ({ dispatchImageFunctionalities, changeImage }) => {
  //TITLE AND IMAGE
  const [imageFile, setImageFile] = useState(null);

  const temporaryNavLogoHandler = (event) => {
    setImageFile(event.target.files[0]);
  };

  useEffect(() => {
    if (imageFile) {
      dispatchImageFunctionalities({
        type: changeImage,
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
    dispatchImageFunctionalities({
      type: changeImage,
      payload: navbarLogo,
    });
  };
  return (
    <div>
      <span>Image</span>
      <input type="file" accept="image/*" onChange={temporaryNavLogoHandler} />
    </div>
  );
};

export default ChangeImage;
