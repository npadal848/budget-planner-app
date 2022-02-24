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
  },
};

const CategoryModel = (props) => {
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
        <button onClick={closeModal}>close</button>
        <div>Add Category</div>
        <form onSubmit={handleSubmit(addBudgetCategory)}>
          <Field name="name" component="input" type="text" />
          <Field name="spends" component="input" type="number" />
          <Field name="budgetAmount" component="input" type="number" />
          {/* <Field name="remainingBalance" component="input" type="number" /> */}
          <button type="submit">Add</button>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state, categories: state.category.allCategory };
};

export default reduxForm({
  form: "addCategoryForm",
})(connect(mapStateToProps)(CategoryModel));
