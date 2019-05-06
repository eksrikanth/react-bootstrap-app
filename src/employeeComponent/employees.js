import React, { Component } from "react";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    this.setState({
      employees: [
        { Id: "1", Name: "Mary", Email: "mary@test.com", Department: "IT" },
        { Id: "2", Name: "John", Email: "john@test.com", Department: "HR" },
        { Id: "3", Name: "Peter", Email: "peter@test.com", Department: "IT" }
      ]
    });
  }
  render() {
    const { employees } = this.state;
    return (
      <div className="m-5">
        {employees.map(e => {
          return (
            <div className="border border-primary m-3">
              <div className="card-header bg-info">
                <h4 key={e.Id} className="card-title">
                  {e.Name}
                </h4>
              </div>

              <div className="card-body">
                <div className="col-xl-10">
                  <div className="row">
                    <div className="col-xl-4">{e.Email}</div>
                    <div className="col-xl-8">
                      <div className="row">
                        <div className="col-xl-6">Email</div>
                        <div className="col-xl-6">: {e.Email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Employees;
