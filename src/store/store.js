import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import popSlice from "./slices/popup";

export const store = configureStore({
  reducer: {
    popSlice: popSlice,
  },
});

setupListeners(store.dispatch);
