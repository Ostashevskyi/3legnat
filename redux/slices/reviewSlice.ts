import { TReview } from "@/types/Review";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface FetchReviewFullfilledPayload {
  reviews: TReview[];
}

export const fetchReview = createAsyncThunk<
  FetchReviewFullfilledPayload,
  string
>("review/fetchReview", async (product_title: string, { rejectWithValue }) => {
  if (product_title) {
    try {
      const res = await fetch(`/api/reviews?title=${product_title}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!res.ok) {
        throw Error("Error during fetch reviews");
      }

      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  } else {
    return [];
  }
});

type TInitialState = {
  rating: number;
  reviews: TReview[];
};

const initialState = {
  rating: 1,
  reviews: [],
} as TInitialState;

export const review = createSlice({
  name: "review",
  initialState,
  reducers: {
    setRatingReview: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchReview.fulfilled,
      (state, action: PayloadAction<FetchReviewFullfilledPayload>) => {
        state.reviews = action.payload.reviews;
      }
    );
  },
});

export const { setRatingReview } = review.actions;
export default review.reducer;
