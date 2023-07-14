import * as NavStyles from "../../../styles/navbar/TopBar";
import * as ComponentStyles from "../../../styles/button/button";

import { component } from "@/util/component-type";

import { initialButtonComponentStyles } from "@/styles/pre-defined-components-styles/button";

import { useDispatch } from "react-redux";
import { componentActions } from "@/store/store";

const TopBar = () => {
  const dispatch = useDispatch();

  const addComponentHandler = (event, styles) => {
    switch (event.target.textContent) {
      case component.div:
        dispatch(
          componentActions.addComponent({
            componentType: component.div,
            styles: { ...styles },
            extraFunctionalities: {},
          })
        );
        break;
      case component.button:
        dispatch(
          componentActions.addComponent({
            componentType: component.button,
            styles: { ...styles },
            extraFunctionalities: {},
          })
        );
        break;
    }
  };

  return (
    <NavStyles.TopBarGridContainer item xs={12}>
      {/* <button onClick={()=>addComponentHandler}>div</button> */}
      {/* <br /> */}
      {initialButtonComponentStyles.map((styles, index) => (
        <ComponentStyles.StyledButton
          variant="contained"
          key={index}
          {...styles}
          onClick={(event) => addComponentHandler(event, styles)}
        >
          button
        </ComponentStyles.StyledButton>
      ))}
    </NavStyles.TopBarGridContainer>
  );
};

export default TopBar;
