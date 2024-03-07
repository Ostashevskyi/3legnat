import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type OrderTotals = {
  max: number;
  min: number;
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    activeBlogPage: 1,
    totalBlogSkip: 0,

    activeOrderPage: 1,
    totalOrderMinEl: 0,
    totalOrderMaxEl: 4,
  },

  reducers: {
    onBlogPageSkip: (state, action: PayloadAction<number>) => {
      state.totalBlogSkip = action.payload;
    },

    setActiveBlogPage: (state, action: PayloadAction<number>) => {
      state.activeBlogPage = action.payload;
    },

    setTotalOrder: (state, action: PayloadAction<OrderTotals>) => {
      state.totalOrderMaxEl = action.payload.max;
      state.totalOrderMinEl = action.payload.min;
    },

    setActiveOrderPage: (state, action: PayloadAction<number>) => {
      state.activeOrderPage = action.payload;
    },
  },
});

export const {
  onBlogPageSkip,
  setActiveOrderPage,
  setActiveBlogPage,
  setTotalOrder,
} = paginationSlice.actions;

export default paginationSlice.reducer;
