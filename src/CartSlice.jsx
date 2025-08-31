import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.name === plant.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const plantName = action.payload;
      state.items = state.items.filter((item) => item.name !== plantName);
    },

    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find((item) => item.name === name);

      if (item && amount > 0) {
        item.quantity = amount;
      } else {
        // kalau amount <= 0, item otomatis dihapus
        state.items = state.items.filter((i) => i.name !== name);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
