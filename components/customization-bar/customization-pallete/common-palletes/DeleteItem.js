import React from "react";

const DeleteItem = ({ children, dispatch, index, deleteItem }) => {
  return (
    <button
      onClick={() =>
        dispatch({
          type: deleteItem,
          payload: index,
        })
      }
    >
      {children}
    </button>
  );
};

export default DeleteItem;
