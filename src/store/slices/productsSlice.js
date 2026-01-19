import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-toastify";
import {
  toggleCreateProductModal,
  toggleUpdateProductModal,
} from "./extraSlice";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    fetchingProducts: false,
    products: [],
    totalProducts: 0,
    creating: false,
    updating: false,
    deleting: false,
  },
  reducers: {
    createProductRequest: (state) => {
      state.creating = true;
    },
    createProductSuccess: (state, action) => {
      state.creating = false;
      state.products = [action.payload, ...state.products];
    },
    createProductFailed: (state) => {
      state.creating = false;
    },
    getAllProductRequest: (state) => {
      state.fetchingProducts = true;
    },
    getAllProductSuccess: (state, action) => {
      state.fetchingProducts = false;
      state.products = action.payload.products;
      state.totalProducts = action.payload.totalProducts;
    },
    getAllProductFailed: (state) => {
      state.fetchingProducts = false;
    },
    updateProductRequest: (state) => {
      state.updating = true;
    },
    updateProductSuccess: (state, action) => {
      state.updating = false;
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
    updateProductFailed: (state) => {
      state.updating = false;
    },
    deleteProductRequest: (state) => {
      state.deleting = true;
    },
    deleteProductSuccess: (state, action) => {
      state.deleting = false;
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.totalProducts = Math.max(0, state.totalProducts - 1);
    },
    deleteProductFailed: (state) => {
      state.deleting = false;
    },
  },
});

export const createNewProduct = (data) => async (dispatch) => {
  dispatch(productSlice.actions.createProductRequest());
  await axiosInstance
    .post("/product/admin/create", data)
    .then((res) => {
      dispatch(productSlice.actions.createProductSuccess(res.data.product));
      toast.success(res.data.message || "Product created successfully.");
      dispatch(toggleCreateProductModal());
    })
    .catch((error) => {
      console.log("error :>> ", error);
      dispatch(productSlice.actions.createProductFailed());
      toast.error(
        error?.response?.data?.message || "Failed to create product."
      );
    });
};

export const fetchAllProducts = (page) => async (dispatch) => {
  dispatch(productSlice.actions.getAllProductRequest());
  await axiosInstance
    .get(`/product?page=${page || 1}`)
    .then((res) =>
      dispatch(productSlice.actions.getAllProductSuccess(res.data))
    )
    .catch(() => dispatch(productSlice.actions.getAllProductFailed()));
};

export const updateProduct = (data, id) => async (dispatch) => {
  dispatch(productSlice.actions.updateProductRequest());
  await axiosInstance
    .put(`/product/admin/update/${id}`, data)
    .then((res) => {
      dispatch(
        productSlice.actions.updateProductSuccess(res.data.updatedProduct)
      );
      toast.success(res.data.message || "Product updated successfully.");
      dispatch(toggleUpdateProductModal());
    })
    .catch((error) => {
      dispatch(productSlice.actions.updateProductFailed());
      toast.error(
        error?.response?.data?.message || "Failed to update product."
      );
    });
};

export const deleteProduct = (id, page) => async (dispatch, getState) => {
  dispatch(productSlice.actions.deleteProductRequest());
  await axiosInstance
    .delete(`/product/admin/delete/${id}`)
    .then((res) => {
      console.log("res :>> ", res);
      dispatch(productSlice.actions.deleteProductSuccess(id));
      toast.success(res.data.message || "Product deleted successfully.");

      const state = getState();
      const updatedTotal = state.product.totalProducts;
      const updatedMaxPage = Math.ceil(updatedTotal / 10) || 1;
      const validPage = Math.min(page, updatedMaxPage);
      dispatch(fetchAllProducts(validPage));
    })
    .catch((error) => {
      dispatch(productSlice.actions.deleteProductFailed());
      toast.error(error.response?.data?.message || "Failed to delete product.");
    });
};

export default productSlice.reducer;
