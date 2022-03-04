import React from "react";
import { combineReducers } from "redux";
import { budgetCategoryReducer } from "./budgetReducer";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  category: budgetCategoryReducer,
  form: formReducer,
});
