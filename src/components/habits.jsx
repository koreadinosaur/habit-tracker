import React, { Component } from "react";
import Habit from "./habit";
import Input from "./input";

class Habits extends Component {
  onAdd = (name) => {
    this.props.handleAdd(name);
  };
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    console.log("habits");
    return (
      <div>
        <Input onAdd={this.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habit--reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
