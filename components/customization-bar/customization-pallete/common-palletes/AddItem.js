import React from "react";

const AddItem = ({ children, dispatch, itemType, addItem }) => {
  return (
    <button
      onClick={() =>
        dispatch({
          type: addItem,
          payload: itemType,
        })
      }
    >
      {children}
    </button>
  );
};

export default AddItem;
