import { createSlice } from "@reduxjs/toolkit";

const intersectingSlice = createSlice({
  name: "isIntersecting",
  initialState: {
    isHeaderIntersecting: null,
  },
  reducers: {
    setisHeaderIntersecting(state, action) {
      const { payload } = action;

      state.isHeaderIntersecting = payload;

      return state;
    },
  },
});

export const intersectingSliceActions = intersectingSlice.actions;
export default intersectingSlice.reducer;
