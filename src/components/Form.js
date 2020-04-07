import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.newItem}
          />
        </form>
      </div>
    );
  }
}

export default Form;
