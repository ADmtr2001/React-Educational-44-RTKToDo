import { createAction, createReducer } from "@reduxjs/toolkit";
import { compareTextAZ, compareTextZA, shuffleArray } from "../../helpers";
import {
  ADD_ITEM,
  CLEAR_LIST,
  REMOVE_ITEM,
  SHUFFLE_ITEMS,
  SORT_ITEMS,
} from "../constants";

const initialState = {
  list: [],
  sort: "a-z",
};

export const addItem = createAction(ADD_ITEM);
export const removeItem = createAction(REMOVE_ITEM);
export const clearList = createAction(CLEAR_LIST);
export const shuffleItems = createAction(SHUFFLE_ITEMS);
export const sortItems = createAction(SORT_ITEMS);

export default createReducer(initialState, {
  [addItem]: function (state, action) {
    state.list.unshift(action.payload);
  },
  [removeItem]: function (state, action) {
    state.list = state.list.filter((item) => item.id !== action.payload);
  },
  [clearList]: function (state) {
    state.list = [];
  },
  [shuffleItems]: function (state) {
    state.list = shuffleArray(state.list);
  },
  [sortItems]: function (state) {
    console.log(state.sort);
    state.list =
      state.sort === "a-z"
        ? state.list.slice().sort(compareTextAZ)
        : state.list.slice().sort(compareTextZA);
    state.sort = state.sort === "a-z" ? "z-a" : "a-z";
  },
});
