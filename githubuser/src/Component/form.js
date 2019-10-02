import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
           
        });
        console.log(e.target.value)
    }





  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            name="search"
            onChange={this.handleChanges}
          />
          <button type="submit">Github User</button>
        </form>
      </div>
    );
  }
}

export default Form;