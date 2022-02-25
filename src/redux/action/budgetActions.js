import ActionTypes from "../constant/actionTypes";

export const addCategory = (category) => {
  return {
    type: ActionTypes.ADD_BUDGET_CATEGORY,
    payload: category,
  };
};

export const removeCategory = (category) => {
  return {
    type: ActionTypes.REMOVE_BUDGET_CATEGORY,
    payload: category,
  };
};

export const updateBudget = (salary) => {
  return {
    type: ActionTypes.UPDATE_BUDGET,
    payload: salary,
  };
};

export const resetBudget = () => {
  return {
    type: ActionTypes.RESET_BUDGET,
    payload: {},
  };
};
