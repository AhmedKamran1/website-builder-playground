import React, { useContext } from "react";
import { Container } from "@/styles/EditArea.styles";
import ComponentContext from "@/store/component-context";
import { Button, Div } from "@/styles/Component.styles";
import { component } from "@/util/component-type";

const EditArea = () => {
  const componentCtx = useContext(ComponentContext);

  const componentSelectionHandler = (id) => {
    componentCtx.selectedComponent(id);
  };

  const renderComponent = (componentData, componentType, styles, id) => {
    componentData.id = id;
    switch (componentType) {
      case component.div:
        return (
          <Div
            {...styles}
            id={id}
            onClick={() => componentSelectionHandler(id)}
          >
            A div
          </Div>
        );
      case component.button:
        return (
          <Button
            {...styles}
            id={id}
            onClick={() => componentSelectionHandler(id)}
          >
            A button
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <button>Post</button>
      {componentCtx.componentData.map((data, index) => (
        <React.Fragment key={index}>
          {renderComponent(data, data.componentType, data.styles, index + 1)}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default EditArea;
