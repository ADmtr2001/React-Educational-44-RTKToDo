import { createSlice } from "@reduxjs/toolkit";
import { compareTextAZ, compareTextZA, shuffleArray } from "../../helpers";

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
    sort: "a-z",
  },
  reducers: {
    addItem(state, action) {
      state.list.unshift(action.payload);
    },
    removeItem(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    clearList(state) {
      state.list = [];
    },
    shuffleItems(state) {
      state.list = shuffleArray(state.list);
    },
    sortItems(state) {
      state.list =
        state.sort === "a-z"
          ? state.list.slice().sort(compareTextAZ)
          : state.list.slice().sort(compareTextZA);
      state.sort = state.sort === "a-z" ? "z-a" : "a-z";
    },
  },
});

export default listSlice.reducer;
export const { addItem, removeItem, clearList, shuffleItems, sortItems } =
  listSlice.actions;
