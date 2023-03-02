import { configureStore, combineReducers } from "@reduxjs/toolkit";
import handling from "./handling";

const reducer = combineReducers({
  handling,
});
export const store = configureStore({
  reducer,
});
