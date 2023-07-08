import React, { useState } from "react";
import ComponentContext from "./component-context";

const ComponentProvider = (props) => {
  const [componentData, setComponentData] = useState([]);
  const [componentId, setComponentId] = useState(null);

  const addComponent = (component) => {
    setComponentData((prevData) => [...prevData, component]);
  };

  const selectedComponent = (id) => {
    setComponentId(id);
  };

  const updateComponent = (styles) => {
    if (componentData.length != 0) {
      const clonedComponentData = structuredClone(componentData);
      const updateStyleIndex = clonedComponentData.findIndex(
        (component) => component.id === componentId
      );
      clonedComponentData[updateStyleIndex].styles = styles;
      setComponentData(clonedComponentData);
    }
  };

  return (
    <ComponentContext.Provider
      value={{
        componentData,
        addComponent,
        selectedComponent,
        updateComponent,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
};

export default ComponentProvider;
