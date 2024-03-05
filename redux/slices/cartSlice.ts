import { TCartProduct } from "@/types/CartProduct";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface FetchShoppingCartFulfilledPayload {
  cart: TCartProduct[];
}

export const fetchShoppingCart = createAsyncThunk<
  FetchShoppingCartFulfilledPayload,
  string | undefined
>(
  "cart/fetchShoppingCart",
  async (user_id: string | undefined, { rejectWithValue }) => {
    if (user_id) {
      try {
        const res = await fetch(`/api/cart?user_id=${user_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw Error("Error during fetch cart products");
        }

        const data = await res.json();
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      return [];
    }
  }
);

type TInitialState = {
  color: string;
  cart: TCartProduct[];
  status: string;
  error: string;
};

const initialState = {
  color: "",
  cart: [],
  status: "",
  error: "",
} as TInitialState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchShoppingCart.fulfilled,
      (state, action: PayloadAction<FetchShoppingCartFulfilledPayload>) => {
        if (action.payload.cart) {
          state.cart = action.payload.cart;
          state.status = "fulfilled";
        }
      }
    );
    builder.addCase(fetchShoppingCart.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchShoppingCart.rejected, (state) => {
      state.error = "Error";
    });
  },
});

export const { addColor } = cart.actions;
export default cart.reducer;
