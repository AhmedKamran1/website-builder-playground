import * as TempStyles from "../../../styles/customization-bar/TopBar";
import * as ButtonStyles from "../../../styles/pre-defined-components/button/button";

import { component } from "@/helpers/constants/component-types/component-types";

import { initialButtonComponentStyles } from "@/helpers/pre-defined-components-styles/button-styles";
import { initialNavbarComponentStyles } from "@/helpers/pre-defined-components-styles/navbar-styles";

import { useDispatch } from "react-redux";
import { componentActions } from "@/store/store";

const TopBar = () => {
  const dispatch = useDispatch();

  const addComponentHandler = (event, styles, componentType) => {
    switch (componentType) {
      case component.BUTTON:
        dispatch(
          componentActions.addComponent({
            componentType: component.BUTTON,
            styles: { ...styles },
            extraFunctionalities: {},
          })
        );
        break;
      case component.NAVBAR:
        dispatch(
          componentActions.addComponent({
            componentType: component.NAVBAR,
            navId: initialNavbarComponentStyles[event.target.value - 1].navId,
            styles: {
              ...initialNavbarComponentStyles[event.target.value - 1].styles,
            },
            extraFunctionalities: {
              ...initialNavbarComponentStyles[event.target.value - 1]
                .extraFunctionalities,
            },
          })
        );
        break;
    }
  };

  return (
    <TempStyles.TopBarGridContainer item xs={12}>
      {/* <button onClick={()=>addComponentHandler}>div</button> */}
      {/* <br /> */}
      {initialButtonComponentStyles.map((styles, index) => (
        <ButtonStyles.StyledButton
          variant="contained"
          key={index}
          {...styles}
          onClick={(event) =>
            addComponentHandler(event, styles, component.BUTTON)
          }
        >
          button
        </ButtonStyles.StyledButton>
      ))}
      <div>
        <span>Navbar Types:</span>
        <select
          defaultValue="none"
          onChange={(event) =>
            addComponentHandler(event, null, component.NAVBAR)
          }
        >
          <option value="none" disabled hidden>
            Select an Option
          </option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </TempStyles.TopBarGridContainer>
  );
};

export default TopBar;
