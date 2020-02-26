import React, { Component } from 'react';

class ProjectAssumption extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {   
          
        };
        value1: Number
        value2: Number
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('JR ' + value1 + 
        'MID ' + this.state.value2
        );
        event.preventDefault();
      }


    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <label>Jr Developer</label>
                        <select className="custom-select" value={value1} onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                    <label>Mid Developer</label>
                        <select className="custom-select" value={this.state.value2} onChange={this.handleChange}>
                            <option  value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Submit" />
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProjectAssumption;