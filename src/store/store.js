import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./currenciesSlice.js";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});
