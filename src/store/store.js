import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./slice/currenciesSlice"; 
import portfolioReducer from "./slice/portfolioSlice";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer, 
    portfolio: portfolioReducer,
  },
});
