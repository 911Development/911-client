import { configureStore } from "@reduxjs/toolkit";
import intersectingSlice from "./intersecting-slice/intersecting-slice";

const store = configureStore({
  reducer: { intersectingSlice },
});

export default store;
