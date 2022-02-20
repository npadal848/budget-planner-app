import ActionTypes from "../constant/actionTypes";

export const addCategory = (budgetCategory) => {
  return {
    type: ActionTypes.ADD_BUDGET_CATEGORY,
    payload: budgetCategory.payload,
  };
};

export const removeCategory = (budgetCategory) => {
  return {
    type: ActionTypes.REMOVE_BUDGET_CATEGORY,
    payload: budgetCategory.payload,
  };
};
