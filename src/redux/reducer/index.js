import React from "react";
import { combineReducers } from "redux";
import { budgetCategoryReducer } from "./budgetReducer";

export const rootReducer = combineReducers({
  category: budgetCategoryReducer,
});
