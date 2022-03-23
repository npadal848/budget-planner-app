import React from "react";
import { combineReducers } from "redux";
import { budgetCategoryReducer } from "./budgetReducer";
import {loginOrSignUpReducer} from './login/loginReducer';
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  category: budgetCategoryReducer,
  login : loginOrSignUpReducer,
  form: formReducer
  

});
