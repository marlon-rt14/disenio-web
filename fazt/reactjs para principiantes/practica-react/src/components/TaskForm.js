import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  //lo podemos nombrar de otra manera
	onSubmit = (e) => {
		this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
  };

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
  };

	render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
					type="text"
					name='title'
          placeholder="Write a task"
          onChange={this.onChange}
          value={this.state.title}
        ></input>
        <br />
        <br />
				<textarea
					name="description"
          placeholder="Write a description"
          onChange={this.onChange}
          value={this.state.desription}
        ></textarea>
        <input type="submit"></input>
      </form>
    );
  }
}
