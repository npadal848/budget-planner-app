import React from "react";
import Actions from "../constant/actionTypes";

const initialState = {
  monthlySalary: 50000,
  totalSavingAmount: 0,
  totalBudgetAmount: 0,
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
    case Actions.ADD_BUDGET_CATEGORY:
      state.allCategory.forEach((category, index) => {
        state.totalBudgetAmount += parseInt(category.budgetAmount);
        console.log("totalSavingAmount: ", parseInt(category.budgetAmount));
      });
      state.totalBudgetAmount += parseInt(payload.budgetAmount);
      state.totalSavingAmount = state.monthlySalary - state.totalBudgetAmount;
      return {
        ...state,
        allCategory: [...state.allCategory, payload],
      };
    case Actions.REMOVE_BUDGET_CATEGORY:
      state.allCategory.filter((category) => category.id != payload.id);
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
