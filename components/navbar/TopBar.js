import ComponentContext from "@/store/component-context";
import { Container } from "@/styles/TopBar.styles";
import { component } from "@/util/component-type";
import { initialComponentStyles } from "@/util/initialStyles";
import { useContext } from "react";

const TopBar = () => {
  const componentCtx = useContext(ComponentContext);

  const addComponentHandler = (event) => {
    switch (event.target.textContent) {
      case component.div:
        componentCtx.addComponent({
          componentType: component.div,
          styles: { ...initialComponentStyles },
        });
        break;
      case component.button:
        componentCtx.addComponent({
          componentType: component.button,
          styles: { ...initialComponentStyles },
        });
        break;
    }
  };

  return (
    <Container>
      <button onClick={addComponentHandler}>div</button>
      <br />
      <button onClick={addComponentHandler}>button</button>
    </Container>
  );
};

export default TopBar;
