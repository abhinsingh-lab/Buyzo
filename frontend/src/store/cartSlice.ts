import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  name?: string;
  price?: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  lastUpdated?: number;
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
        // TODO : avoid exceeding inventory limit
      } else {
        state.items.push(action.payload);
      }
      state.lastUpdated = Date.now();
    },
    removeItem(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
      state.lastUpdated = Date.now();
      // TODO : trigger analytics event here
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        // TODO : prevent quantity < 1 (or remove)
      }
      state.lastUpdated = Date.now();
    },
    clearCart(state) {
      state.items = [];
      state.lastUpdated = Date.now();
    },
    // TODO: add optimistic update actions, merge server cart, etc.
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;