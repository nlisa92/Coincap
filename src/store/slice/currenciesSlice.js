import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchCurrencies",
  async () => {
    const res = await fetch("https://rest.coincap.io/v3/assets", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
      },
    });

    const data = await res.json();
    console.log("API response:", data);
    return data.data;
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        console.log("Payload:", action.payload);

        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
  selectors: {
    selectCurrenciesList: (state) => state.list,
    selectCurrenciesStatus: (state) => state.status,
    selectCurrenciesError: (state) => state.error,
    selectPopularCurrencies: (state) =>
      state.list.filter((item) =>
        ["bitcoin", "ethereum", "tether"].includes(item.id)
      ),
  },
});

export const {
  selectCurrenciesList,
  selectCurrenciesStatus,
  selectCurrenciesError,
  selectPopularCurrencies,
} = currenciesSlice.selectors;

export default currenciesSlice.reducer;
