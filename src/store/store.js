import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./slice/currenciesSlice";
import portfolioReducer from "./slice/portfolioSlice";
import chartReducer from "./slice/chartSlice";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    portfolio: portfolioReducer,
    chart: chartReducer,
  },
});
