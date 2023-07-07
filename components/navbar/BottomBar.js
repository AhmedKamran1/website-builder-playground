import ComponentContext from "@/store/component-context";
import { Container } from "@/styles/BottomBar.styles";
import { eventType } from "@/util/event-types";
import {
  commonUnits,
  heightSpecificUnits,
  widthSpecificUnits,
} from "@/util/units";
import { useContext, useReducer } from "react";

const initialState = {
  color: "blue",
  height: "30",
  width: "30",
  backgroundColor: "white",
  fontSize: "10",
};

const reducer = (state, action) => {
  switch (action.type) {
    case eventType.CHANGECOLOR:
      return { ...state, color: action.payload };
    case eventType.CHANGEHEIGHT:
      return { ...state, height: action.payload };
    case eventType.CHANGEWIDTH:
      return { ...state, width: action.payload };
    case eventType.CHANGEBGCOLOR:
      return { ...state, backgroundColor: action.payload };
    case eventType.CHANGEFONTSIZE:
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};

const BottomBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const componentCtx = useContext(ComponentContext);

  const styleChangeHandler = (event, changeType) => {
    switch (changeType) {
      case eventType.CHANGECOLOR:
        dispatch({ type: eventType.CHANGECOLOR, payload: event.target.value });
        break;
      case eventType.CHANGEHEIGHT:
        dispatch({ type: eventType.CHANGEHEIGHT, payload: event.target.value });
        break;
      case eventType.CHANGEWIDTH:
        dispatch({ type: eventType.CHANGEWIDTH });
      case eventType.CHANGEWIDTH:
        const input = document.getElementById("width");
        const select = input.nextElementSibling;

        if (event.target.value && select.value) {
          const width = event.target.value + select.value;
          dispatch({
            type: eventType.CHANGEWIDTH,
            payload: width,
          });
        }
        break;
      case eventType.CHANGEBGCOLOR:
        dispatch({
          type: eventType.CHANGEBGCOLOR,
          payload: event.target.value,
        });
        break;
      case eventType.CHANGEFONTSIZE:
        dispatch({
          type: eventType.CHANGEFONTSIZE,
          payload: event.target.value,
        });
        break;
      default:
        return null;
    }
  };

  const updateStyleHandler = () => {
    console.log(state);
    componentCtx.updateComponent(state);
  };

  return (
    <Container>
      <div>
        <label htmlFor="color">color</label>
        <input
          type="color"
          id="color"
          value={state.color}
          onChange={() => styleChangeHandler(event, eventType.CHANGECOLOR)}
          onBlur={updateStyleHandler}
        />
      </div>
      <div>
        <label htmlFor="height">height</label>
        <input
          type="text"
          id="height"
          value={state.height}
          onChange={() => styleChangeHandler(event, eventType.CHANGEHEIGHT)}
        />
        <select>
          {heightSpecificUnits.map((unit, index) => (
            <option key={index}>{unit}</option>
          ))}
        </select>
      </div>
      <div onChange={() => styleChangeHandler(event, eventType.CHANGEWIDTH)}>
        <label htmlFor="width">width</label>
        <input type="text" id="width" value={state.width} />
        <select>
          {widthSpecificUnits.map((unit, index) => (
            <option key={index}>{unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bgColor">background color</label>
        <input
          type="color"
          id="bgColor"
          value={state.backgroundColor}
          onChange={() => styleChangeHandler(event, eventType.CHANGEBGCOLOR)}
          onBlur={updateStyleHandler}
        />
      </div>
      <div>
        <label htmlFor="fontSize">font size</label>
        <input
          type="text"
          id="fontSize"
          value={state.fontSize}
          onChange={() => styleChangeHandler(event, eventType.CHANGEFONTSIZE)}
        />
        <select>
          {commonUnits.map((unit, index) => (
            <option key={index}>{unit}</option>
          ))}
        </select>
      </div>
    </Container>
  );
};

export default BottomBar;
