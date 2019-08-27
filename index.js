import React, { Component } from "react";
import ReactDOM from "react-dom";
import todo from "./Todo";
import List from "./list";
import EditAction from "./Edit";
import AddEmployee from "./AddEmployee";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: todo,
      isEdit: false,
      editEmployee: {},
      employeeName: "",
      addEmployee: false
    };
  }

  removeAction = empId => {
    let afterRemove = this.state.list.filter(a => a.id !== empId);
    this.setState({ list: afterRemove });
  };

  updateAction = empId => {
    let editEmployee = this.state.list.filter(a => a.id === empId);

    this.setState({ isEdit: true, editEmployee, addEmployee: false });
  };

  captureEmployee = event => {
    let employeeName = event.target.value;
    this.setState({ employeeName });
    // this.setState({ employeeName: event.target.value });
    //console.log(this.state.employeeName);
  };

  //When edit>submit button will be pushed
  saveEmployee = empId => {
    this.setState({ isEdit: false });
    let list = this.state.list.map(eachEmployee => {
      if (eachEmployee.id === empId) {
        let EditedEmployee = {
          id: eachEmployee.id,
          name: this.state.employeeName
        };
        //console.log("Edited Employee:", EditedEmployee);
        return EditedEmployee;
      } else {
        return eachEmployee;
      }
    });

    return this.setState({ list });
  };

  cancelButton = event => {
    this.setState({ isEdit: false });
  };

  addEmployeeButton = () => {
    this.setState({ addEmployee: true, isEdit: false, employeeName: "" });
  };

  addEmployee = event => {
    let employeeName = event.target.value;

    this.setState({ employeeName });
  };

  saveAddmployee = event => {
    let newID = this.state.list.length + 1;
    //console.log(a);
    //console.log("Emp Name:", this.state.employeeName);
    if (this.state.employeeName) {
      let employee = {
        id: newID,
        name: this.state.employeeName
      };

      let list = [...this.state.list, employee];
      this.setState({ list });
      this.setState({ employeeName: "" });
    }

    //console.log(this.state.list);
  };

  cancelEmpButton = event => {
    this.setState({ addEmployee: false });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary">
          <span className="navbar-text">
            <h2 className="text-center">Employee Management System</h2>
          </span>
        </nav>
        <div className="mt-20">
          <List
            list={this.state.list}
            onDelete={this.removeAction}
            editAction={this.updateAction}
          />

          <button type="submit" onClick={this.addEmployeeButton}>
            Add Employee
          </button>

          {this.state.addEmployee ? (
            <AddEmployee
              addEmployee={this.addEmployee}
              saveAddmployee={this.saveAddmployee}
              employeeName={this.state.employeeName}
              cancelEmpButton={this.cancelEmpButton}
            />
          ) : (
            ""
          )}

          {this.state.isEdit ? (
            <EditAction
              empDetails={this.state.editEmployee}
              captureEmployee={this.captureEmployee}
              saveEmployee={this.saveEmployee}
              cancelButton={this.cancelButton}
              employeeName={this.state.employeeName}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
