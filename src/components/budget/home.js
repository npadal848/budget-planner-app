import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CategoryModel from "../common/CategoryModelPopup";
import DisplayBudgetPlans from "./DisplayBudgetPlans";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="div_gap">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Add Your Monthly Salary
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Add Your Monthly Salary"
                  />
                </div>
                <div className="col-sm-2">
                  <button
                    className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3"
                    onClick={this.openModal}
                  >
                    Add Category
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <DisplayBudgetPlans />
        </div>
        {this.state.modalIsOpen && (
          <CategoryModel
            showModal={this.state.modalIsOpen}
            onCloseModal={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default withRouter(connect(mapStateToProps)(Home));
