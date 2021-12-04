import {
  ADD_ITEM,
  CLEAR_LIST,
  REMOVE_ITEM,
  SHUFFLE_ITEMS,
  SORT_ITEMS,
} from "../constants";

export const addItemAction = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItemAction = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

export const sortItemsAction = () => ({ type: SORT_ITEMS });

export const shuffleItemsAction = () => ({ type: SHUFFLE_ITEMS });

export const clearListAction = () => ({ type: CLEAR_LIST });
