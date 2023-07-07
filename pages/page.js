import React, { useReducer } from "react";

const initialState = {
  backgroundColor: "#ffffff",
  color: "#000000",
  fontSize: 16,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BACKGROUND_COLOR":
      return { ...state, backgroundColor: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_FONT_SIZE":
      return { ...state, fontSize: parseInt(action.payload) };
    default:
      return state;
  }
};

const MainDiv = ({ backgroundColor, color, fontSize }) => {
  const divStyle = {
    backgroundColor,
    color,
    fontSize: `${fontSize}px`,
    padding: "20px",
  };

  return (
    <div style={divStyle}>
      <h1>Main Div</h1>
      <p>This is the main div with custom styling properties.</p>
    </div>
  );
};

const StylingPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBackgroundColorChange = (e) => {
    dispatch({ type: "SET_BACKGROUND_COLOR", payload: e.target.value });
  };

  const handleColorChange = (e) => {
    dispatch({ type: "SET_COLOR", payload: e.target.value });
  };

  const handleFontSizeChange = (e) => {
    dispatch({ type: "SET_FONT_SIZE", payload: e.target.value });
  };

  return (
    <div>
      <h1>Styling Options</h1>
      <label>
        Background Color:
        <input
          type="color"
          value={state.backgroundColor}
          onChange={handleBackgroundColorChange}
        />
      </label>
      <br />
      <label>
        Text Color:
        <input type="color" value={state.color} onChange={handleColorChange} />
      </label>
      <br />
      <label>
        Font Size:
        <input
          type="number"
          value={state.fontSize}
          onChange={handleFontSizeChange}
        />
      </label>
      <br />
      <MainDiv
        backgroundColor={state.backgroundColor}
        color={state.color}
        fontSize={state.fontSize}
      />
    </div>
  );
};

export default StylingPage;
