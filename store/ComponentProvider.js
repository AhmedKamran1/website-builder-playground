import React, { useEffect, useState } from "react";
import ComponentContext from "./component-context";

const ComponentProvider = (props) => {
  const [componentData, setComponentData] = useState([]);
  const [componentId, setComponentId] = useState(null);
  const [componentType, setComponentType] = useState(null);

  const selectedComponentType = () => {
    if (componentData.length != 0) {
      const component = componentData.find(
        (component) => component.id === componentId
      );
      setComponentType(component.componentType);
    }
  };

  const addComponent = (component) => {
    setComponentData((prevData) => [...prevData, component]);
  };

  const selectedComponent = (id) => {
    setComponentId(id);
  };

  const updateComponent = (styles, extraFunctionalities) => {
    if (componentData.length != 0) {
      const clonedComponentData = structuredClone(componentData);
      const updateStyleIndex = clonedComponentData.findIndex(
        (component) => component.id === componentId
      );
      clonedComponentData[updateStyleIndex].styles = styles;
      clonedComponentData[updateStyleIndex].extraFunctionalities =
        extraFunctionalities;
      setComponentData(clonedComponentData);
    }
  };

  useEffect(() => {
    selectedComponentType();
  }, [componentId]);

  return (
    <ComponentContext.Provider
      value={{
        componentType,
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
