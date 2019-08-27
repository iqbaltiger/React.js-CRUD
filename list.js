import React, { Component } from "react";
class List extends Component {
  render() {
    return (
      <div
        className="card bg-light mb-3 m-5 float-left"
        style={{ maxWidth: "40%" }}
      >
        <div className="card-header">
          <div className="card-heder">Employee List</div>
        </div>

        <div className="card-body">
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>

                <th scope="col" className="text-uppercase">
                  Name
                </th>
                <th scope="col" className="text-uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {console.log("Employee List:", this.props.list)}
              {this.props.list.map(singleEmployee => (
                <tr key={singleEmployee.id}>
                  <th scope="row">{singleEmployee.id}</th>
                  <td>{singleEmployee.name}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn-success"
                      onClick={() => this.props.editAction(singleEmployee.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="submit"
                      className="btn-danger"
                      onClick={() => this.props.onDelete(singleEmployee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default List;
