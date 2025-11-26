import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-toastify";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginFailed: (state) => {
      state.loading = false;
    },
    getUserRequest: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    getUserFailed: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
    logoutFailed: (state) => {
      state.loading = false;
    },
    forgotPasswordRequest: (state) => {
      state.loading = true;
    },
    forgotPasswordSuccess: (state) => {
      state.loading = false;
    },
    forgotPasswordFailed: (state) => {
      state.loading = false;
    },
    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    resetPasswordFailed: (state) => {
      state.loading = false;
    },
    updateProfileRequest: (state) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    updateProfileFailed: (state) => {
      state.loading = false;
    },
    updatePasswordRequest: (state) => {
      state.loading = true;
    },
    updatePasswordSuccess: (state) => {
      state.loading = false;
    },
    updatePasswordFailed: (state) => {
      state.loading = false;
    },
    resetAuthSlice: (state) => {
      state.loading = false;
      // state.user = state.user;
      // state.isAuthenticated = state.isAuthenticated;
    },
  },
});

export const login = (data) => async (dispatch) => {
  dispatch(authSlice.actions.loginRequest());
  try {
    await axiosInstance.post("/auth/login", data).then((res) => {
      if (res.data.user.role === "Admin") {
        dispatch(authSlice.actions.loginSuccess(res.data.user));
        toast.success(res.data.message);
      } else {
        dispatch(authSlice.actions.loginFailed());
        toast.error(res.data.message);
      }
    });
  } catch (error) {
    dispatch(authSlice.actions.loginFailed());
    toast.error(error.response.data.message || "Login failed.");
  }
};
export const getUser = (data) => async (dispatch) => {};
export const logout = (data) => async (dispatch) => {};

export default authSlice.reducer;
