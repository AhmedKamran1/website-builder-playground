import ComponentContext from "@/store/component-context";
import { Container } from "@/styles/BottomBar.styles";
import { eventType } from "@/util/event-types";
import {
  commonUnits,
  heightSpecificUnits,
  widthSpecificUnits,
} from "@/util/units";
import { useCallback, useContext, useEffect, useReducer } from "react";

const initialState = {
  color: "#FF0000",
  height: "",
  width: "",
  backgroundColor: "#FFFFFF",
  fontSize: "",
  heightUnit: "px",
  widthUnit: "px",
  fontSizeUnit: "px",
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
    case eventType.CHANGEHEIGHTUNIT:
      return { ...state, heightUnit: action.payload };
    case eventType.CHANGEWIDTHUNIT:
      return { ...state, widthUnit: action.payload };
    case eventType.CHANGEFONTSIZEUNIT:
      return { ...state, fontSizeUnit: action.payload };
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
        dispatch({ type: eventType.CHANGEWIDTH, payload: event.target.value });
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
      case eventType.CHANGEHEIGHTUNIT:
        dispatch({
          type: eventType.CHANGEHEIGHTUNIT,
          payload: event.target.value,
        });
        break;
      case eventType.CHANGEWIDTHUNIT:
        dispatch({
          type: eventType.CHANGEWIDTHUNIT,
          payload: event.target.value,
        });
        break;
      case eventType.CHANGEFONTSIZEUNIT:
        dispatch({
          type: eventType.CHANGEFONTSIZEUNIT,
          payload: event.target.value,
        });
        break;
      default:
        return null;
    }
  };

  const updateStyleHandler = useCallback(() => {
    const modifiedStyles = {
      color: state.color,
      height: state.height + state.heightUnit,
      width: state.width + state.widthUnit,
      backgroundColor: state.backgroundColor,
      fontSize: state.fontSize + state.fontSizeUnit,
    };
    componentCtx.updateComponent(modifiedStyles);
  }, [state]);

  useEffect(() => {
    updateStyleHandler();
  }, [state]);

  return (
    <Container>
      <div>
        <label htmlFor="color">color</label>
        <input
          type="color"
          id="color"
          value={state.color}
          onInput={(event) => styleChangeHandler(event, eventType.CHANGECOLOR)}
        />
      </div>
      <div>
        <label htmlFor="height">height</label>
        <input
          type="text"
          id="height"
          value={state.height}
          onChange={(event) =>
            styleChangeHandler(event, eventType.CHANGEHEIGHT)
          }
        />
        <select
          value={state.heightUnit}
          onChange={(event) =>
            styleChangeHandler(event, eventType.CHANGEHEIGHTUNIT)
          }
        >
          {heightSpecificUnits.map((unit, index) => (
            <option key={index}>{unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="width">width</label>
        <input
          type="text"
          id="width"
          value={state.width}
          onChange={(event) => styleChangeHandler(event, eventType.CHANGEWIDTH)}
        />
        <select
          value={state.widthUnit}
          onChange={(event) =>
            styleChangeHandler(event, eventType.CHANGEWIDTHUNIT)
          }
        >
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
          onInput={(event) =>
            styleChangeHandler(event, eventType.CHANGEBGCOLOR)
          }
        />
      </div>
      <div>
        <label htmlFor="fontSize">font size</label>
        <input
          type="text"
          id="fontSize"
          value={state.fontSize}
          onChange={(event) =>
            styleChangeHandler(event, eventType.CHANGEFONTSIZE)
          }
        />
        <select
          onChange={(event) =>
            styleChangeHandler(event, eventType.CHANGEFONTSIZEUNIT)
          }
        >
          {commonUnits.map((unit, index) => (
            <option key={index}>{unit}</option>
          ))}
        </select>
      </div>
    </Container>
  );
};

export default BottomBar;
