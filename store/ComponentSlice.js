import { createSlice } from "@reduxjs/toolkit";

const componentInitialState = {
  componentData: [],
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
          ...action.payload,
          id: state.componentData[replaceComponentIndex].id,
          styles: state.componentData[replaceComponentIndex].styles,
          extraFunctionalities:
            state.componentData[replaceComponentIndex].extraFunctionalities,
        };
        state.selectedComponentDetails =
          state.componentData[replaceComponentIndex];
      } else {
        state.componentData.push({
          id: state.componentId++,
          ...action.payload,
        });
      }
    },

    selectedComponent(state, action) {
      state.selectedComponentDetails = action.payload.componentData;
    },
    updateComponent(state, action) {
      if (
        state.componentData.length != 0 &&
        state.selectedComponentDetails.id != null
      ) {
        const updateStyleIndex = state.componentData.findIndex(
          (component) => component.id === state.selectedComponentDetails.id
        );
        state.componentData[updateStyleIndex].styles = {
          ...state.componentData[updateStyleIndex].styles,
          ...action.payload.modifiedStyles,
        };
        state.componentData[updateStyleIndex].extraFunctionalities = {
          ...action.payload.extraFunctionalities,
        };
        state.selectedComponentDetails.styles = {
          ...state.componentData[updateStyleIndex].styles,
        };

        state.selectedComponentDetails.extraFunctionalities = {
          ...state.componentData[updateStyleIndex].extraFunctionalities,
        };
      }
    },
  },
});

export const componentData = (state) => state.component.componentData;
export const selectedComponentData = (state) =>
  state.component.selectedComponentDetails;
export const componentId = (state) =>
  state.component.selectedComponentDetails?.id;
export const componentType = (state) =>
  state.component.selectedComponentDetails?.componentType;

export default componentSlice;
