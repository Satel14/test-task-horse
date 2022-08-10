import { configureStore } from "@reduxjs/toolkit";
import horses from "./horseSlice";

export const store = configureStore({
  reducer: {
    horses,
  },
});
