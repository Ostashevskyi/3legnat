import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  color: string;
  quantity: number;
};

const initialState = {
  color: "",
  quantity: 1,
} as TInitialState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    increaseQuantity: (state) => {
      state.quantity += 1;
    },
    decreaseQuantity: (state) => {
      state.quantity -= 1;
    },
  },
});

export const { addColor, increaseQuantity, decreaseQuantity } = cart.actions;
export default cart.reducer;
