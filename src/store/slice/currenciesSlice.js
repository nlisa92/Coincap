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
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default currenciesSlice.reducer;
