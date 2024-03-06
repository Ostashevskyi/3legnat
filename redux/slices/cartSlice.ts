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
  deliveryPrice: number;
  status: string;
  error: string;
  totalPriceWithDelivery: number;
  totalPriceWithDiscount: number;
  completedStages: string[];
};

const initialState = {
  color: "",
  cart: [],
  deliveryPrice: 0,
  totalPriceWithDelivery: 0,
  totalPriceWithDiscount: 0,
  status: "",
  error: "",
  completedStages: [],
} as TInitialState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setDeliveryPrice: (state, action: PayloadAction<number>) => {
      state.deliveryPrice = action.payload;
    },
    calculateTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPriceWithDelivery = state.deliveryPrice + action.payload;
    },
    calculateTotalPriceWithDiscount: (state, action: PayloadAction<number>) => {
      state.totalPriceWithDiscount =
        state.totalPriceWithDelivery - action.payload;
    },
    fillCompletedStages: (state, action: PayloadAction<string[]>) => {
      state.completedStages = action.payload;
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

export const {
  addColor,
  calculateTotalPrice,
  setDeliveryPrice,
  fillCompletedStages,
  calculateTotalPriceWithDiscount,
} = cart.actions;
export default cart.reducer;
