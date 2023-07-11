import { createSlice } from "@reduxjs/toolkit";

const componentInitialState = {
  componentData: [],
  selectedComponentId: null,
  selectedComponentType: null,
};

let counter = 1;

const componentSlice = createSlice({
  name: "Component",
  initialState: componentInitialState,
  reducers: {
    addComponent(state, action) {
      state.componentData.push({ id: counter++, ...action.payload });
    },

    selectedComponent(state, action) {
      state.selectedComponentId = action.payload.componentId;
      state.selectedComponentType = action.payload.componentType;
    },
    updateComponent(state, action) {
      if (state.componentData.length != 0) {
        const updateStyleIndex = state.componentData.findIndex(
          (component) => component.id === state.selectedComponentId
        );
        state.componentData[updateStyleIndex].styles =
          action.payload.modifiedStyles;
        state.componentData[updateStyleIndex].extraFunctionalities =
          action.payload.extraFunctionalities;
      }
    },
  },
});

export const componentData = (state) => state.component.componentData;
export const componentId = (state) => state.component.selectedComponentId;
export const componentType = (state) => state.component.selectedComponentType;

export default componentSlice;
