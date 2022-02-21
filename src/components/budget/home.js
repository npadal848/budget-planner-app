import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CategoryModel from "../common/CategoryModelPopup";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen : false}
  }

   openModal = () => {
      this.setState({modalIsOpen : true});
  }
  
 


  render() {
    console.log('this.state.modalIsOpen', this.state.modalIsOpen)
    return (
      <div>
        <div className='div_gap'>
          <div className='container'>
            <form>

              <div className="form-group row">
                <label  className="col-sm-3 col-form-label">Add Your Monthly Salary</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id=""  placeholder="Add Your Monthly Salary" />

                </div>
                <div className="col-sm-2">
                  <button className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" onClick={this.openModal}>Add Category</button>
                </div>
              </div>
            </form>

          </div>
        </div>
       
          {this.state.modalIsOpen &&  <CategoryModel OpeneModal={this.state.modalIsOpen} />}
    
      </div>
    );
  }
}

export default Home;
