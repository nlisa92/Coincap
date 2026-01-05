import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  diff: 0,
  diffPercent: 0,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolio(state, action) {
      state.items = action.payload;
    },
    updatePortfolioStats(state, action) {
      const { total, diff, diffPercent } = action.payload;
      state.total = total;
      state.diff = diff;
      state.diffPercent = diffPercent;
    },
  },
});

export const { setPortfolio, updatePortfolioStats } = portfolioSlice.actions;

export default portfolioSlice.reducer;
