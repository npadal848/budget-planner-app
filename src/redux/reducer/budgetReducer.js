import React from "react";
import Actions from "../constant/actionTypes";

const initialState = {
  monthlySalary: 0,
  totalSavingAmount: 0,
  totalBudgetAmount: 0,
  allCategory: [],
};

export const budgetCategoryReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case Actions.ADD_BUDGET_CATEGORY:
      let budget1 = 0;
      state.allCategory.forEach((category, index) => {
        budget1 += parseInt(category.budgetAmount);
      });
      state.totalBudgetAmount = budget1 + parseInt(payload.budgetAmount);
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
    case Actions.UPDATE_BUDGET:
      let budget2 = 0;
      state.allCategory.forEach((category, index) => {
        budget2 += parseInt(category.budgetAmount);
      });
      return {
        ...state,
        totalBudgetAmount: parseInt(budget2),
        monthlySalary: parseInt(payload),
        totalSavingAmount: parseInt(payload) - parseInt(budget2),
      };
    case Actions.RESET_BUDGET:
      return {
        ...state,
        monthlySalary: 0,
        totalBudgetAmount: 0,
        totalSavingAmount: 0,
      };
    default:
      return { ...state };
  }
};
