import {BudgetActionTypes} from "../constant/actionTypes";

export const addCategory = (category) => {
  return {
    type: BudgetActionTypes.ADD_BUDGET_CATEGORY,
    payload: category,
  };
};

export const removeCategory = (category) => {
  return {
    type: BudgetActionTypes.REMOVE_BUDGET_CATEGORY,
    payload: category,
  };
};

export const updateBudget = (salary) => {
  return {
    type: BudgetActionTypes.UPDATE_BUDGET,
    payload: salary,
  };
};

// export const resetBudget = () => {
//   return {
//     type: ActionTypes.RESET_BUDGET,
//     payload: {},
//   };
// };
