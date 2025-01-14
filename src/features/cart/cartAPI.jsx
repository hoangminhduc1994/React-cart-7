
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'cart/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  }
);

