import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskButtonSituation: [],
  typedtask: "",
};

export const counterSlice = createSlice({
  name: "handling",
  initialState,
  reducers: {
    getTaskButtonSituation: (state, action) => {
      state.taskButtonSituation = action.payload;
    },
    getTypedTask: (state, action) => {
      state.typedtask = action.payload;
    },
  },
});

export const { getTaskButtonSituation, getTypedTask } = counterSlice.actions;

export default counterSlice.reducer;
