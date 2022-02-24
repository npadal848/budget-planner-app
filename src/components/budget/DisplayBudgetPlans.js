import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class DisplayBudgetPlans extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categories = this.props.category.allCategory;
    const renderData = categories.map((category) => {
      const { id, name, spends, budgetAmount, remainingBalance } = category;
      return (
        <tr key={id}>
          <td>
            <input name="name" value={name} />
          </td>
          <td>
            <input name="spends" value={spends} />
          </td>
          <td>
            <input name="budgetAmount" value={budgetAmount} />
          </td>
          <td>
            <input name="remainingBalance" value={remainingBalance} />
          </td>
          <td>
            <div className="row">
              <button
                className="btn btn-primary btn-sm active"
                role="button"
                aria-pressed="true"
              >
                Add Expense
              </button>
              <button
                className="btn btn-danger btn-sm active"
                role="button"
                aria-pressed="true"
              >
                View All Expenses
              </button>
            </div>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Expense Type</th>
              <th scope="col">Total Expense</th>
              <th scope="col">Total Budget</th>
              <th scope="col">Remain Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {renderData}
            <tr>
              <td colSpan="3">Total Saving Amount: </td>
              <td>{this.props.category.totalSavingAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default withRouter(connect(mapStateToProps)(DisplayBudgetPlans));
