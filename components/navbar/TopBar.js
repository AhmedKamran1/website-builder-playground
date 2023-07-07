import ComponentContext from "@/store/component-context";
import { Container } from "@/styles/TopBar.styles";
import { component } from "@/util/component-type";
import { useContext } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case component.div:
//       return { ...state, backgroundColor: action.payload };
//     case component.button:
//       return { ...state, color: action.payload };
//     default:
//       return state;
//   }
// };

const initialState = {
  color: "blue",
  height: "30px",
  width: "30px",
  backgroundColor: "white",
  fontSize: "10px",
};

const TopBar = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const componentCtx = useContext(ComponentContext);

  const addComponentHandler = (event) => {
    switch (event.target.textContent) {
      case component.div:
        componentCtx.addComponent({
          componentType: component.div,
          styles: { ...initialState },
        });
        break;
      case component.button:
        componentCtx.addComponent({
          componentType: component.button,
          styles: { ...initialState },
        });
        break;
    }
  };

  // const addComponentHandler = (event) => {
  //   dispatch({ type: event.target.value });
  // };

  return (
    <Container>
      <button onClick={addComponentHandler}>div</button>
      <br />
      <button onClick={addComponentHandler}>button</button>
    </Container>
  );
};

export default TopBar;
