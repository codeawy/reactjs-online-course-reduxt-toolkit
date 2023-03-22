import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/products";

export const store = configureStore({
  reducer: {
    productsApi: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([productsApi.middleware]),
});
