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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "component",
  storage,
};

const persistedReducer = persistReducer(persistConfig, componentSlice.reducer);

const makeStore = () => {
  const store = configureStore({
    reducer: { component: persistedReducer },
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
