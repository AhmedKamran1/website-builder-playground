import { configureStore } from "@reduxjs/toolkit";

import componentSlice from "./ComponentSlice";

import { createWrapper } from "next-redux-wrapper";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import authSlice from "./authSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "component",
  storage,
};

const persistedReducer = persistReducer(persistConfig, componentSlice.reducer);

const makeStore = () => {
  const store = configureStore({
    reducer: { component: persistedReducer, auth: authSlice.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  store.__persistor = persistStore(store);
  return store;
};

export const wrapper = createWrapper(makeStore);
export const componentActions = componentSlice.actions;
export const authActions = authSlice.actions;
