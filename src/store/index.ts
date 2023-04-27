import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSercice } from "./api";

export const store = configureStore({
  reducer: {
    [apiSercice.reducerPath]: apiSercice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSercice.middleware),
});

setupListeners(store.dispatch);
