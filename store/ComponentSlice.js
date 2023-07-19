import { createSlice } from "@reduxjs/toolkit";

const componentInitialState = {
  componentData: [],
  selectedComponentId: null,
  selectedComponentType: null,
  selectedComponentDetails: null,
  componentId: 1,
};

const componentSlice = createSlice({
  name: "Component",
  initialState: componentInitialState,
  reducers: {
    addComponent(state, action) {
      const replaceComponentIndex = state.componentData.findIndex(
        (component) => component.componentType === action.payload.componentType
      );
      if (replaceComponentIndex != -1) {
        state.componentData[replaceComponentIndex] = {
          id: state.componentData[replaceComponentIndex].id,
          ...action.payload,
        };
      } else {
        state.componentData.push({
          id: state.componentId++,
          ...action.payload,
        });
      }
    },

    selectedComponent(state, action) {
      state.selectedComponentDetails = action.payload.componentData;
      state.selectedComponentId = action.payload.componentId;
      state.selectedComponentType = action.payload.componentType;
    },
    updateComponent(state, action) {
      if (
        state.componentData.length != 0 &&
        state.selectedComponentId != null
      ) {
        const updateStyleIndex = state.componentData.findIndex(
          (component) => component.id === state.selectedComponentId
        );
        state.componentData[updateStyleIndex].styles = {
          ...state.componentData[updateStyleIndex].styles,
          ...action.payload.modifiedStyles,
        };
        state.componentData[updateStyleIndex].extraFunctionalities =
          action.payload.extraFunctionalities;
        state.selectedComponentDetails.styles =
          state.componentData[updateStyleIndex].styles;

        state.selectedComponentDetails.extraFunctionalities =
          state.componentData[updateStyleIndex].extraFunctionalities;
      }
    },
  },
});

export const componentData = (state) => state.component.componentData;
export const selectedComponentData = (state) =>
  state.component.selectedComponentDetails;
export const componentId = (state) => state.component.selectedComponentId;
export const componentType = (state) => state.component.selectedComponentType;

export default componentSlice;
