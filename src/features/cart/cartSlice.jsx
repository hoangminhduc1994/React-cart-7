

import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./cartAPI";


const initialState = {
  products: [],
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    // Bắt các trạng thái khác của `fetchProducts` nếu cần thiết
    builder.addCase(fetchProducts.pending, (state, action) => {
      // Xử lý khi fetch bắt đầu, ví dụ, hiển thị một loader
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      // Xử lý khi fetch thất bại, ví dụ, hiển thị thông báo lỗi
    });
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
