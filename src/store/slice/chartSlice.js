import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChartData = createAsyncThunk(
  "chart/fetchData",
  async (slug) => {
    const res = await fetch(
      `https://rest.coincap.io/v3/assets/${slug}/history?interval=d1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
        },
      }
    );

    const json = await res.json();

    return json.data.map((item) => ({
      date: new Date(item.date).getTime(),
      value: Number(item.priceUsd),
    }));
  }
);

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchChartData.rejected, (state) => {
        state.status = "failed";
      });
  },
  selectors: {
    selectData: (state) => state.data,
    selectStatus: (state) => state.status,
  },
});

export const { selectData, selectStatus } = chartSlice.selectors;

export default chartSlice.reducer;
