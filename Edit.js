import React, { Component } from "react";

class EditAction extends Component {
  render() {
    return (
      <div className="card float-left m-5" style={{ maxWidth: "50%" }}>
        <div className="card-header">Edit Employee</div>
        <div className="card-body">
          <h5 className="card-title">You may change your name:</h5>
          <div className="card-text">
            <input
              type="text"
              onChange={this.props.captureEmployee}
              defaultValue={this.props.empDetails[0].name}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary m-3"
              onClick={() =>
                this.props.saveEmployee(this.props.empDetails[0].id)
              }
            >
              Save
            </button>

            <button
              type="button"
              className="btn btn-info  ml-1"
              onClick={this.props.cancelButton}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditAction;
