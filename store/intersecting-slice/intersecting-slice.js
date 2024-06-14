import { createSlice } from "@reduxjs/toolkit";

const intersectingSlice = createSlice({
  name: "intersecting",
  initialState: {
    isInterSectingOnDark: false,
  },
  reducers: {
    setIntersectingOnDark(state, action) {
      const { payload } = action;

      state.isInterSectingOnDark = payload;

      return state;
    },
  },
});

export const intersectingSliceActions = intersectingSlice.actions;
export default intersectingSlice.reducer;
