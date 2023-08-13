import { ComponentEnum } from "@/helpers/constants/component-types/component-types";
import { createSlice } from "@reduxjs/toolkit";
import {
  addComponent,
  addNavbarComponent,
  getComponents,
  updateComponent,
  updateNavbarComponent,
} from "./ComponentActions";

const initialComponentData = {
  websiteId: 1,
  navbarComponent: {},
  pageName: null,
  components: [],
};

const componentInitialState = {
  componentData: initialComponentData,
  selectedComponentDetails: null,
  componentId: 1,
};

const componentSlice = createSlice({
  name: "Component",
  initialState: componentInitialState,
  reducers: {
    // addNavbarComponent(state, action) {
    //   if (Object.keys(state.componentData.navbarComponent).length) {
    //     state.componentData.navbarComponent = {
    //       ...action.payload,
    //       id: state.componentData.navbarComponent.id,
    //       styles: state.componentData.navbarComponent.styles,
    //       extraFunctionalities:
    //         state.componentData.navbarComponent.extraFunctionalities,
    //     };
    //   } else {
    //     state.componentData.navbarComponent = {
    //       id: state.componentId++,
    //       ...action.payload,
    //     };
    //   }
    //   state.selectedComponentDetails = state.componentData.navbarComponent;
    // },
    // addComponent(state, action) {
    //   state.componentData.components.push({
    //     id: state.componentId++,
    //     ...action.payload,
    //   });
    // },
    selectedComponent(state, action) {
      state.selectedComponentDetails = action.payload.componentData;
    },
    // updateNavbarComponent(state, action) {
    //   if (
    //     Object.keys(state.componentData.navbarComponent).length &&
    //     state.selectedComponentDetails.id != null
    //   ) {
    //     state.componentData.navbarComponent.styles = {
    //       ...state.componentData.navbarComponent.styles,
    //       ...action.payload.modifiedStyles,
    //     };
    //     state.componentData.navbarComponent.extraFunctionalities = {
    //       ...action.payload.extraFunctionalities,
    //     };
    //   }
    //   state.selectedComponentDetails = state.componentData.navbarComponent;
    // },
    // updateComponent(state, action) {
    //   if (
    //     state.componentData.length != 0 &&
    //     state.selectedComponentDetails.id != null
    //   ) {
    //     const updateStyleIndex = state.componentData.components.findIndex(
    //       (component) => component.id === state.selectedComponentDetails.id
    //     );
    //     state.componentData.components[updateStyleIndex].styles = {
    //       ...action.payload.modifiedStyles,
    //     };
    //     state.componentData.components[updateStyleIndex].extraFunctionalities =
    //       {
    //         ...action.payload.extraFunctionalities,
    //       };
    //     state.selectedComponentDetails.styles =
    //       state.componentData.components[updateStyleIndex];
    //   }
    // },
    resetComponents(state, action) {
      state.componentData.components = initialComponentData.components;
      state.selectedComponentDetails =
        componentInitialState.selectedComponentDetails;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComponents.pending, (state, action) => {
        state.componentData.components = initialComponentData.components;
      })
      .addCase(getComponents.rejected, (state, action) => {
        state.componentData.components = initialComponentData.components;
      })
      .addCase(getComponents.fulfilled, (state, action) => {
        state.componentData.pageName = action.payload.pageName;
        state.componentData.components = action.payload.components;
      })
      .addCase(addComponent.pending, (state, action) => {})
      .addCase(addComponent.rejected, (state, action) => {})
      .addCase(addComponent.fulfilled, (state, action) => {
        state.componentData.components.push({
          id: state.componentId++,
          ...action.payload,
        });
      })
      .addCase(addNavbarComponent.pending, (state, action) => {})
      .addCase(addNavbarComponent.rejected, (state, action) => {})
      .addCase(addNavbarComponent.fulfilled, (state, action) => {
        if (Object.keys(state.componentData.navbarComponent).length) {
          state.componentData.navbarComponent = {
            ...action.payload,
            id: state.componentData.navbarComponent.id,
            styles: state.componentData.navbarComponent.styles,
            extraFunctionalities:
              state.componentData.navbarComponent.extraFunctionalities,
          };
        } else {
          state.componentData.navbarComponent = {
            id: state.componentId++,
            ...action.payload,
          };
        }
        state.selectedComponentDetails = state.componentData.navbarComponent;
      })
      .addCase(updateNavbarComponent.pending, (state, action) => {})
      .addCase(updateNavbarComponent.rejected, (state, action) => {})
      .addCase(updateNavbarComponent.fulfilled, (state, action) => {
        if (
          Object.keys(state.componentData.navbarComponent).length &&
          state.selectedComponentDetails.id != null
        ) {
          state.componentData.navbarComponent.styles = {
            ...state.componentData.navbarComponent.styles,
            ...action.payload.modifiedStyles,
          };
          state.componentData.navbarComponent.extraFunctionalities = {
            ...action.payload.extraFunctionalities,
          };
        }
        state.selectedComponentDetails = state.componentData.navbarComponent;
      })
      .addCase(updateComponent.pending, (state, action) => {})
      .addCase(updateComponent.rejected, (state, action) => {})
      .addCase(updateComponent.fulfilled, (state, action) => {
        if (
          state.componentData.components.length != 0 &&
          state.selectedComponentDetails.id != null
        ) {
          const updateStyleIndex = state.componentData.components.findIndex(
            (component) => component.id === state.selectedComponentDetails.id
          );
          state.componentData.components[updateStyleIndex].styles = {
            ...action.payload.modifiedStyles,
          };
          state.componentData.components[
            updateStyleIndex
          ].extraFunctionalities = {
            ...action.payload.extraFunctionalities,
          };
          state.selectedComponentDetails =
            state.componentData.components[updateStyleIndex];
        }
      });
  },
});

export const componentData = (state) => state.component.componentData;
export const selectedComponentData = (state) =>
  state.component.selectedComponentDetails;
export const componentId = (state) =>
  state.component.selectedComponentDetails?.id;
export const componentType = (state) =>
  state.component.selectedComponentDetails?.componentType;
export const pageComponents = (state) =>
  state.component.componentData.components;

export default componentSlice;
