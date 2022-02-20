import React from "react";
import { addCategory, removeCategory } from "../action/budgetActions";

const initialState = {
  monthlySalary: 50000,
  allCategory: [
    {
      id: 1,
      name: "Grocery",
      budgetAmount: 5000,
      spends: 2000,
      remainingBalance: 3000,
    },
    {
      id: 2,
      name: "Rent",
      budgetAmount: 10000,
      spends: 10000,
      remainingBalance: 0,
    },
    {
      id: 3,
      name: "Bills",
      budgetAmount: 5000,
      spends: 3700,
      remainingBalance: 1300,
    },
  ],
};

export const budgetCategoryReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case addCategory:
      return {
        ...state,
        budgetCategories: [...state.budgetCategories, payload],
      };
    case removeCategory:
      state.budgetCategories.filter((category) => category.id != payload.id);
      return {
        ...state,
        // budgetCategories: [...state.budgetCategories, payload],
      };

    default:
      return { ...state };
  }
};
