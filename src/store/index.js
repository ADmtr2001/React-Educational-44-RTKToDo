import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./reducers/listSlice";

const reducer = combineReducers({
  list: listReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
