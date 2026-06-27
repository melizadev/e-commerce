import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToCartService,
  getCartService,
  removeFromCartService,
} from "../services/cartServices";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  loading: false,
  error: null,
};
//thunks
export const addToCart = createAsyncThunk(
  "/addToCart",
  async (productId, thunkAPI) => {
    try {
      const response = await addToCartService(productId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeFromCart = createAsyncThunk(
  "/removeFromCart",
  async (productId, thunkAPI) => {
    try {
      const response = await removeFromCartService(productId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCart = createAsyncThunk("/getCart", async (thunkAPI) => {
  try {
    const response = await getCartService();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCartState: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.cartItems;
        state.totalAmount = action.payload.totalAmount;
        state.totalQuantity = action.payload.totalQuantity;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.cartItems;
        state.totalAmount = action.payload.totalAmount;
        state.totalQuantity = action.payload.totalQuantity;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.cartItems;
        state.totalAmount = action.payload.totalAmount;
        state.totalQuantity = action.payload.totalQuantity;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { clearCartState } = cartSlice.actions;

export default cartSlice.reducer;
