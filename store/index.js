import { configureStore } from "@reduxjs/toolkit";
import intersectingSlice from "./intersecting-slice/intersecting-slice";
import themeSlice from "./theme-slice/theme-slice";

const store = configureStore({
  reducer: { theme: themeSlice },
});

export default store;
