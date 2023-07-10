import ComponentContext from "@/store/component-context";
import * as NavStyles from "../../styles/navbar/TopBar";
import * as ComponentStyles from "../../styles/button/button";
import { component } from "@/util/component-type";
import { useContext } from "react";
import { initialButtonComponentStyles } from "@/styles/pre-defined-components-styles/button";

const TopBar = () => {
  const componentCtx = useContext(ComponentContext);

  const addComponentHandler = (event, styles) => {
    switch (event.target.textContent) {
      case component.div:
        componentCtx.addComponent({
          componentType: component.div,
          styles: { ...styles },
          extraFunctionalities: {},
        });
        break;
      case component.button:
        componentCtx.addComponent({
          componentType: component.button,
          styles: { ...styles },
          extraFunctionalities: {},
        });
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
