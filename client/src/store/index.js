import { configureStore } from "@reduxjs/toolkit";
import horses from "./horseReducer";

export const store = configureStore({
  reducer: {
    horses,
  },
});
