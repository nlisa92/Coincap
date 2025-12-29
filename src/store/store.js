import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./slice/currenciesSlice";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});
