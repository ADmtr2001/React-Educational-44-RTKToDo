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

const listReducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    const newList = [action.payload, ...state.list];
    return { ...state, list: newList };
  }
  if (action.type === REMOVE_ITEM) {
    const newList = state.list.filter((elem) => elem.id !== action.payload);
    return { ...state, list: newList };
  }
  if (action.type === SORT_ITEMS) {
    const sortedList =
      state.sort === "a-z"
        ? state.list.slice().sort(compareTextAZ)
        : state.list.slice().sort(compareTextZA);
    console.log(sortedList);
    return {
      ...state,
      list: sortedList,
      sort: state.sort === "a-z" ? "z-a" : "a-z",
    };
  }
  if (action.type === SHUFFLE_ITEMS) {
    return { ...state, list: shuffleArray(state.list) };
  }
  if (action.type === CLEAR_LIST) {
    return { ...state, list: [] };
  }
  return state;
};

export default listReducer;
