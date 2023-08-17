import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const itemId = Number(action.payload);
      console.log("itemId" + typeof itemId);
      state.items = state.items.filter(
        (item) => Number(item?.card?.info?.id) !== itemId
      );
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
