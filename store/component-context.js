import React from "react";

const ComponentContext = React.createContext({
  componentData: [],
  addComponent: (component) => {},
  selectedComponent: (id) => {},
  updateComponent: () => {},
});

export default ComponentContext;
