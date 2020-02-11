import React, { Component } from "react";
import { connect } from "react-redux";
//import { todoConstants } from "../constants";
import { todoActions } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: " "
    };
  }

  componentDidMount() {
    //check if localstorage exist
    const items = JSON.parse(localStorage.getItem("todo-app"));
    console.log(items);
    if (items.length > 0) this.props.retrieveTodos(items);
  }

  componentDidUpdate() {
    const items = this.props.items;
    localStorage.setItem("todo-app", JSON.stringify(items));
  }

  handleChange = event => {
    //save to the state -> newItem
    this.setState({ newItem: event.target.value });
  };

  handleDelete = id => {
    const items = this.props.items.filter(item => item.id !== id);
    this.setState({ items });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      id: Date.now(), //time stamp
      text: this.state.newItem.trim(),
      status: false
    };
    if (newItem.text !== "") {
      this.setState({
        newItem: ""
      });
      this.props.addTodo(newItem);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control mb-4"
            placeholder="Add a new task"
            onChange={this.handleChange}
            type="text"
            id="todo-item"
            value={this.state.newItem}
          ></input>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}

const MapDispatchToProps = {
  retrieveTodos: todoActions.retrieveTodos,
  addTodo: todoActions.addTodo
};

const MapStateToProps = state => {
  return {
    items: state.todos
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(TodoList);
