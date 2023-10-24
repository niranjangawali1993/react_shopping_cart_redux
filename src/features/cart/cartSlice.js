import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      state.cartList.push(payload);
      state.total = state.total + payload.price;
    },
    removeFromCart: (state, action) => {
      const { payload } = action;
      state.cartList = state.cartList.filter(
        (product) => product.id !== payload
      );
      state.total = calculateTotalCost(state.cartList);
    },
  },
});

const calculateTotalCost = (cartList) => {
  let total = 0;
  cartList.forEach((product) => (total = total + product.price));
  return total;
};

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
