import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addCategory } from "../../redux/action/budgetActions";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

const CategoryModal = (props) => {
  const { showModal, onCloseModal, handleSubmit, dispatch } = props;

  const closeModal = () => {
    onCloseModal();
  };

  const addBudgetCategory = (values) => {
    values["id"] = props.category.allCategory.length + 1;
    values["remainingBalance"] = values.budgetAmount - values.spends;
    dispatch(addCategory(values));
    onCloseModal();
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="login-modal-div add-category">
          <div class="text-center">Add Budget Category</div>
          <form
            class="login-form"
            id="Login"
            onSubmit={handleSubmit(addBudgetCategory)}
          >
            <div class="modal-form-group">
              <Field
                name="name"
                id="name"
                required="required"
                type="text"
                class="modal-form-input"
                placeholder="Category Name"
                component="input"
              />
            </div>
            <div class="modal-form-group">
              <Field
                name="spends"
                id="spends"
                type="number"
                required="required"
                class="modal-form-input"
                placeholder="Initial Spend"
                component="input"
              />
            </div>
            <div class="modal-form-group">
              <Field
                name="budgetAmount"
                id="budgetAmount"
                type="number"
                required="required"
                class="modal-form-input"
                placeholder="Budget Amount"
                component="input"
              />
            </div>
            <button class="btn btn-success btn-modal" type="submit">
              Add
            </button>
            <button class="btn btn-modal btn-danger" onClick={closeModal}>
              close
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state, categories: state.category.allCategory };
};

export default reduxForm({
  form: "addCategoryForm",
})(connect(mapStateToProps)(CategoryModal));
