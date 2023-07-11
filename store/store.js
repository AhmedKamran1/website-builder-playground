import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./ComponentSlice";
import { createWrapper } from "next-redux-wrapper";

const store = () =>
  configureStore({
    reducer: { component: componentSlice.reducer },
  });

export const wrapper = createWrapper(store);
export const componentActions = componentSlice.actions;
