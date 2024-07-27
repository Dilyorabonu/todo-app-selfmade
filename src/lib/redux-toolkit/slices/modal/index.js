import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoModalOpenState: false,
  deleteModalState: false,
  infoModalState: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    todoModalOpenStateManager(state) {
      state.todoModalOpenState = !state.todoModalOpenState;
    },
    deleteModalStateManager(state) {
      state.deleteModalState = !state.deleteModalState;
    },
    infoModalStateManager(state) {
      state.infoModalState = !state.infoModalState;
    },
  },
});

export const {
  todoModalOpenStateManager,
  deleteModalStateManager,
  infoModalStateManager,
} = modalSlice.actions;

export default modalSlice.reducer;
