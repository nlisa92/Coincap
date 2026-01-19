import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./slice/currenciesSlice";
import portfolioReducer from "./slice/portfolioSlice";
import chartReducer from "./slice/chartSlice";

const loadPortfolio = () => {
  try {
    const saved = localStorage.getItem("portfolio");
    return saved ? JSON.parse(saved) : undefined;
  } catch {
    return undefined;
  }
};

const savePortfolioMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState();
  localStorage.setItem("portfolio", JSON.stringify(state.portfolio));
  return result;
};

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    portfolio: portfolioReducer,
    chart: chartReducer,
  },
  preloadedState: {
    portfolio: loadPortfolio(),
  },
  middleware: (getDefault) => getDefault().concat(savePortfolioMiddleware),
});
