"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "./Slice";
import { AppSlice } from "../foodapp/slice";

const store = configureStore({
  reducer: {
    formData: Slice.reducer,
    products: AppSlice.reducer,
  },
});

export default store;
