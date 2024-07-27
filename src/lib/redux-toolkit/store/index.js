// src/lib/redux-toolkit/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../slices/modal";
import tasksSlice from "../slices/tasks";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    tasks: tasksSlice,
  },
});
