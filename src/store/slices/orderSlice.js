import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-toastify";

export const fetchAllOrders = createAsyncThunk(
  "orders/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/order/admin/getall");
      return data.orders;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch orders."
      );
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "orders/updateStatus",
  async ({ orderId, status }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.put(
        `/order/admin/update/${orderId}`,
        { status }
      );
      toast.success(data.message || "Order status updated successfully.");
      return data.updatedOrder;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update order status."
      );
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/delete",
  async (orderId, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(
        `/order/admin/delete/${orderId}`
      );
      toast.success(data.message || "Order delete successfully.");
      return orderId;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update order.");
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update order."
      );
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    orders: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchAllOrders.rejected, (state) => {
        state.loading = false;
        state.error = state.payload;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.loading = false;
        
      })
      .addCase(updateOrderStatus.rejected, (state) => {
        state.loading = false;
        state.error = state.payload;
      })
  },
});

export default orderSlice.reducer;
