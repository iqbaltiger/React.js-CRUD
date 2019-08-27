import React, { Component } from "react";

class AddEmployee extends Component {
  render() {
    return (
      <div>
        <div
          className="card float-left m-5 bg-danger"
          style={{ maxWidth: "50%" }}
        >
          <div className="card-header">Add Employee</div>
          <div className="card-body">
            <h5 className="card-title">You may add your name:</h5>
            <div className="card-text"></div>
            <div>
              <input
                type="text"
                onChange={this.props.addEmployee}
                value={this.props.employeeName}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary m-3"
                onClick={this.props.saveAddmployee}
              >
                Save
              </button>

              <button
                type="button"
                className="btn btn-info  ml-1"
                onClick={this.props.cancelEmpButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
