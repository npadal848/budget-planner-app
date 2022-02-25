import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CategoryModel from "../common/CategoryModelPopup";
import DisplayBudgetPlans from "./DisplayBudgetPlans";
import { updateBudget, resetBudget } from "../../redux/action/budgetActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, monthlySalary: 0 };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      monthlySalary: this.props.category.monthlySalary,
    });
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

  onChangeSalary = (e) => {
    const { dispatch } = this.props;
    const salary = e.target.value;
    this.setState({ ...this.state, monthlySalary: salary });
    console.log(salary);
    if (!isNaN(salary) && salary > 0) {
      dispatch(updateBudget(salary));
    } else {
      dispatch(resetBudget());
    }
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
                    type="number"
                    className="form-control"
                    value={this.state.monthlySalary}
                    placeholder="Add Your Monthly Salary"
                    onChange={(e) => this.onChangeSalary(e)}
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
