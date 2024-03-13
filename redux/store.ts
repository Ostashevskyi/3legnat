import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import reviewReducer from "./slices/reviewSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cartReducer,
    reviewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
